"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Archive,
  CheckCircle2,
  Inbox,
  LogOut,
  Mail,
  Phone,
  RefreshCw,
  Search,
  Building2,
} from "lucide-react";
import BrandLogo from "@/components/brand/BrandLogo";
import { cn } from "@/lib/utils";
import type { SubmissionStatus } from "@/lib/contact-schema";

type Submission = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: string;
  createdAt: string;
};

type Stats = {
  total: number;
  new: number;
  reviewed: number;
  archived: number;
};

const FILTERS: { id: "all" | SubmissionStatus; label: string }[] = [
  { id: "all", label: "All" },
  { id: "new", label: "New" },
  { id: "reviewed", label: "Reviewed" },
  { id: "archived", label: "Archived" },
];

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function statusBadge(status: string) {
  if (status === "new") return "border-agency-yellow/40 bg-agency-yellow/15 text-agency-yellow";
  if (status === "reviewed") return "border-emerald-500/40 bg-emerald-500/10 text-emerald-300";
  return "border-agency-white/20 bg-agency-white/5 text-agency-white/55";
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, new: 0, reviewed: 0, archived: 0 });
  const [filter, setFilter] = useState<"all" | SubmissionStatus>("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (filter !== "all") params.set("status", filter);
      if (query.trim()) params.set("q", query.trim());
      const res = await fetch(`/api/admin/submissions?${params.toString()}`);
      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }
      const data = await res.json();
      if (!data.ok) {
        setError(data.message || "Failed to load submissions.");
        return;
      }
      setStats(data.stats);
      setSubmissions(data.submissions);
      setSelectedId((current) => {
        if (current && data.submissions.some((s: Submission) => s.id === current)) {
          return current;
        }
        return data.submissions[0]?.id ?? null;
      });
    } catch {
      setError("Unable to load dashboard data.");
    } finally {
      setLoading(false);
    }
  }, [filter, query, router]);

  useEffect(() => {
    const handle = window.setTimeout(() => {
      void load();
    }, query ? 250 : 0);
    return () => window.clearTimeout(handle);
  }, [load, query]);

  const selected = useMemo(
    () => submissions.find((item) => item.id === selectedId) ?? null,
    [submissions, selectedId]
  );

  const updateStatus = async (id: string, status: SubmissionStatus) => {
    setUpdating(true);
    try {
      const res = await fetch("/api/admin/submissions", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (res.status === 401) {
        router.replace("/admin/login");
        return;
      }
      if (!res.ok) {
        setError("Could not update status.");
        return;
      }
      await load();
    } finally {
      setUpdating(false);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-agency-black">
      <header className="sticky top-0 z-40 border-b border-agency-border bg-agency-black/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/">
              <BrandLogo />
            </Link>
            <div className="hidden border-l border-agency-border pl-4 sm:block">
              <p className="font-mono text-[10px] uppercase tracking-wider text-agency-yellow">
                Admin
              </p>
              <p className="font-display text-sm font-semibold uppercase text-agency-white">
                Enquiries dashboard
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => void load()}
              className="inline-flex items-center gap-2 rounded-full border border-agency-border px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-agency-white/70 hover:border-agency-yellow/50 hover:text-agency-yellow"
            >
              <RefreshCw className={cn("h-3.5 w-3.5", loading && "animate-spin")} />
              Refresh
            </button>
            <button
              type="button"
              onClick={() => void logout()}
              className="inline-flex items-center gap-2 rounded-full border border-agency-border px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-agency-white/70 hover:border-red-400/50 hover:text-red-300"
            >
              <LogOut className="h-3.5 w-3.5" />
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { label: "Total", value: stats.total, icon: Inbox },
            { label: "New", value: stats.new, icon: Mail },
            { label: "Reviewed", value: stats.reviewed, icon: CheckCircle2 },
            { label: "Archived", value: stats.archived, icon: Archive },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-2xl border border-agency-border bg-agency-white/[0.03] p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-wider text-agency-white/45">
                  {card.label}
                </p>
                <card.icon className="h-4 w-4 text-agency-yellow" />
              </div>
              <p className="font-display text-3xl font-bold text-agency-white">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={cn(
                  "rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition",
                  filter === item.id
                    ? "bg-agency-yellow font-bold text-agency-ink"
                    : "border border-agency-border text-agency-white/65 hover:border-agency-yellow/40 hover:text-agency-yellow"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
          <label className="relative block w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-agency-white/35" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, email, service…"
              className="w-full rounded-full border border-agency-border bg-agency-white/[0.04] py-2.5 pl-10 pr-4 text-sm text-agency-white placeholder:text-agency-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow"
            />
          </label>
        </div>

        {error ? (
          <p className="mb-4 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        ) : null}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <section className="overflow-hidden rounded-3xl border border-agency-border lg:col-span-5">
            <div className="border-b border-agency-border px-5 py-4">
              <h2 className="font-display text-lg font-semibold uppercase text-agency-white">
                Inbox
              </h2>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-agency-white/40">
                {submissions.length} shown
              </p>
            </div>
            <div className="max-h-[38rem] overflow-y-auto">
              {loading && submissions.length === 0 ? (
                <p className="p-6 text-sm text-agency-white/50">Loading submissions…</p>
              ) : submissions.length === 0 ? (
                <p className="p-6 text-sm text-agency-white/50">No submissions match this filter.</p>
              ) : (
                <ul className="divide-y divide-agency-border">
                  {submissions.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedId(item.id)}
                        className={cn(
                          "w-full px-5 py-4 text-left transition hover:bg-agency-white/[0.03]",
                          selectedId === item.id && "bg-agency-yellow/10"
                        )}
                      >
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <p className="font-display text-sm font-semibold uppercase text-agency-white">
                            {item.name}
                          </p>
                          <span
                            className={cn(
                              "shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider",
                              statusBadge(item.status)
                            )}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="truncate text-xs text-agency-white/55">{item.service}</p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-agency-white/35">
                          {formatDate(item.createdAt)}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          <section className="rounded-3xl border border-agency-border bg-agency-white/[0.02] p-6 sm:p-8 lg:col-span-7">
            {!selected ? (
              <div className="flex h-full min-h-[20rem] items-center justify-center text-sm text-agency-white/45">
                Select a submission to view details.
              </div>
            ) : (
              <div>
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-editorial-wide text-agency-yellow">
                      Enquiry detail
                    </p>
                    <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-agency-white">
                      {selected.name}
                    </h2>
                    <p className="mt-1 text-sm text-agency-white/50">
                      {formatDate(selected.createdAt)}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider",
                      statusBadge(selected.status)
                    )}
                  >
                    {selected.status}
                  </span>
                </div>

                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <DetailRow icon={Mail} label="Email" value={selected.email} href={`mailto:${selected.email}`} />
                  <DetailRow icon={Phone} label="Phone" value={selected.phone} href={`tel:${selected.phone}`} />
                  <DetailRow icon={Building2} label="Company" value={selected.company || "—"} />
                  <DetailRow icon={Inbox} label="Service" value={selected.service} />
                </div>

                <div className="mb-8 rounded-2xl border border-agency-border bg-agency-black/40 p-5">
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-agency-yellow">
                    Project brief
                  </p>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-agency-white/80">
                    {selected.message}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <ActionButton
                    disabled={updating || selected.status === "reviewed"}
                    onClick={() => void updateStatus(selected.id, "reviewed")}
                    label="Mark reviewed"
                  />
                  <ActionButton
                    disabled={updating || selected.status === "new"}
                    onClick={() => void updateStatus(selected.id, "new")}
                    label="Mark new"
                    tone="muted"
                  />
                  <ActionButton
                    disabled={updating || selected.status === "archived"}
                    onClick={() => void updateStatus(selected.id, "archived")}
                    label="Archive"
                    tone="muted"
                  />
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <p className="mb-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-agency-white/40">
        <Icon className="h-3.5 w-3.5 text-agency-yellow" />
        {label}
      </p>
      <p className="break-all text-sm text-agency-white">{value}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="rounded-2xl border border-agency-border bg-agency-black/30 p-4 transition hover:border-agency-yellow/40"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-agency-border bg-agency-black/30 p-4">{content}</div>
  );
}

function ActionButton({
  label,
  onClick,
  disabled,
  tone = "primary",
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  tone?: "primary" | "muted";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-full px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider transition disabled:opacity-40",
        tone === "primary"
          ? "bg-agency-yellow font-bold text-agency-ink hover:brightness-95"
          : "border border-agency-border text-agency-white/70 hover:border-agency-yellow/40 hover:text-agency-yellow"
      )}
    >
      {label}
    </button>
  );
}

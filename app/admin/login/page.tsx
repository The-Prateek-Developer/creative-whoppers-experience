"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, LogIn } from "lucide-react";
import BrandLogo from "@/components/brand/BrandLogo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };
      if (!res.ok || !data.ok) {
        setError(data.message || "Login failed.");
        return;
      }
      router.replace("/admin");
      router.refresh();
    } catch {
      setError("Unable to reach the server. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-agency-yellow/15 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <Link href="/" className="mb-6">
            <BrandLogo size="nav" />
          </Link>
          <p className="mb-2 font-mono text-[11px] uppercase tracking-editorial-wide text-agency-yellow">
            Admin access
          </p>
          <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-agency-white">
            Sign in
          </h1>
          <p className="mt-3 text-sm text-agency-white/55">
            View and manage contact form submissions.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-agency-border bg-agency-white/[0.03] p-7 sm:p-8"
        >
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-wider text-agency-white/50">
              Username
            </span>
            <input
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full rounded-xl border border-agency-border bg-agency-white/[0.05] px-4 py-3 text-sm text-agency-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow"
              required
            />
          </label>
          <label className="mt-5 block">
            <span className="font-mono text-[11px] uppercase tracking-wider text-agency-white/50">
              Password
            </span>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-xl border border-agency-border bg-agency-white/[0.05] px-4 py-3 text-sm text-agency-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow"
              required
            />
          </label>

          {error ? (
            <p className="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-agency-yellow px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-agency-ink transition hover:brightness-95 disabled:opacity-60"
          >
            {loading ? (
              "Signing in…"
            ) : (
              <>
                <LogIn className="h-4 w-4" />
                Sign in to dashboard
              </>
            )}
          </button>
          <p className="mt-5 flex items-center justify-center gap-2 text-center font-mono text-[10px] uppercase tracking-wider text-agency-white/35">
            <Lock className="h-3 w-3" />
            Secure session · 12 hour expiry
          </p>
        </form>
      </div>
    </div>
  );
}

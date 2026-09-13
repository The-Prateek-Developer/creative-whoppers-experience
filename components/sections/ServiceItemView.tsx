import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import ServiceImagePayout from "@/components/sections/ServiceImagePayout";
import type { ServiceGroup, ServiceItem, ServicePage } from "@/lib/services-tree";
import type { ServiceItemDetail } from "@/lib/service-item-pages";
import { itemSlugForName } from "@/lib/service-item-pages";
import { altCardBg } from "@/lib/card-styles";

type Props = {
  page: ServicePage;
  group: ServiceGroup;
  item: ServiceItem;
  detail: ServiceItemDetail;
};

export default function ServiceItemView({ page, group, item, detail }: Props) {
  const currentIndex = group.items.findIndex((entry) => entry.name === item.name);
  const previous = currentIndex > 0 ? group.items[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < group.items.length - 1
      ? group.items[currentIndex + 1]
      : null;
  const moreItems = group.items.filter((entry) => entry.name !== item.name).slice(0, 4);
  const previousSlug = previous ? itemSlugForName(previous.name) : undefined;
  const nextSlug = next ? itemSlugForName(next.name) : undefined;

  return (
    <div className="relative w-full overflow-hidden pb-24 pt-8">
      <div
        className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-agency-yellow/15 blur-3xl"
        aria-hidden
      />

      <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-agency-white/45"
        >
          <Link href="/services" className="transition-colors hover:text-agency-yellow">
            Services
          </Link>
          <span aria-hidden>/</span>
          <Link
            href={`/services/${page.slug}`}
            className="transition-colors hover:text-agency-yellow"
          >
            {page.title}
          </Link>
          <span aria-hidden>/</span>
          <span className="text-agency-white" aria-current="page">
            {item.name}
          </span>
        </nav>

        <p className="mb-4 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow">
          {group.subtitle ? `${group.title}: ${group.subtitle}` : group.title}
        </p>

        {detail.capabilities?.length ? (
          <div className="mb-10 grid grid-cols-1 gap-10 border-b border-agency-border pb-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7 lg:pr-6">
              <h1 className="mb-6 max-w-full font-display text-[clamp(1.7rem,3.1vw,2.75rem)] font-bold uppercase leading-[1.08] tracking-tight text-agency-white">
                {item.name}
              </h1>
              <p className="max-w-xl font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
                {item.description}
              </p>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-agency-border lg:pl-10">
              <h2 className="mb-5 font-display text-lg font-semibold uppercase tracking-tight text-agency-yellow">
                Our capabilities
              </h2>
              <ul className="space-y-3">
                {detail.capabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-agency-yellow" aria-hidden />
                    <span className="font-sans text-sm leading-relaxed text-agency-white/80">
                      {capability}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <>
            <h1 className="mb-6 whitespace-nowrap font-display text-[clamp(1.85rem,4vw,3.35rem)] font-bold uppercase leading-none tracking-tight text-agency-white">
              {item.name}
            </h1>
            <p className="page-heading-lead mb-10 font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
              {item.description}
            </p>
          </>
        )}

        <ServiceImagePayout
          images={detail.images}
          videos={detail.videos}
          alt={item.name}
          variant="page"
          priority
        />
      </section>

      {moreItems.length > 0 ? (
        <section className="relative z-10 mx-auto mb-16 mt-16 max-w-7xl px-6 lg:px-12">
          <h2 className="mb-8 font-display text-2xl font-bold uppercase tracking-tight text-agency-white sm:text-3xl">
            More in {group.title}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {moreItems.map((entry, index) => {
              const slug = itemSlugForName(entry.name);
              if (!slug) return null;
              return (
                <Link
                  key={entry.name}
                  href={`/services/${page.slug}/${slug}`}
                  className={`group block rounded-2xl border border-agency-border p-6 transition-colors hover:border-agency-yellow/50 ${altCardBg(index)}`}
                >
                  <h3 className="mb-2 font-display text-2xl font-semibold uppercase tracking-tight text-agency-white transition-colors group-hover:text-agency-yellow">
                    {entry.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-agency-white/60">{entry.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-agency-yellow">
                    View service <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}

      <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-4 border-t border-agency-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          {previous && previousSlug ? (
            <Link
              href={`/services/${page.slug}/${previousSlug}`}
              className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-agency-white/60 hover:text-agency-yellow"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>
                Previous
                <span className="mt-1 block font-display text-sm font-semibold normal-case tracking-tight text-agency-white group-hover:text-agency-yellow">
                  {previous.name}
                </span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && nextSlug ? (
            <Link
              href={`/services/${page.slug}/${nextSlug}`}
              className="group inline-flex items-center justify-end gap-3 text-right font-mono text-[11px] uppercase tracking-wider text-agency-white/60 hover:text-agency-yellow"
            >
              <span>
                Next
                <span className="mt-1 block font-display text-sm font-semibold normal-case tracking-tight text-agency-white group-hover:text-agency-yellow">
                  {next.name}
                </span>
              </span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}
        </div>
        <Link
          href={`/services/${page.slug}`}
          className="mt-8 inline-flex font-mono text-xs uppercase tracking-wider text-agency-yellow hover:underline"
        >
          Back to {page.title}
        </Link>
      </section>
    </div>
  );
}

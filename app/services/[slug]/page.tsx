import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeImage from "@/components/media/FadeImage";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { getServicePage, SERVICE_PAGES } from "@/lib/services-tree";
import { itemSlugForName } from "@/lib/service-item-pages";
import { SITE_OG_IMAGE } from "@/lib/site";
import { altCardBg } from "@/lib/card-styles";
import { ArrowUpRight, Check } from "lucide-react";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = getServicePage(params.slug);
  if (!page) return {};
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/services/${page.slug}`,
      images: [SITE_OG_IMAGE],
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const page = getServicePage(params.slug);
  if (!page) notFound();

  const showCapabilitySections = Boolean(page.capabilitySections?.length);
  const showGroups = Boolean(page.groups?.length) && !showCapabilitySections;

  return (
    <div className="relative w-full overflow-hidden pb-24 pt-8">
      <div
        className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-agency-yellow/15 blur-3xl"
        aria-hidden
      />
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: page.title, path: `/services/${page.slug}` },
          ]),
          serviceJsonLd({
            name: page.title,
            description: page.metaDescription,
            path: `/services/${page.slug}`,
          }),
        ]}
      />

      <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow">
          {page.kind === "pillar" ? `Pillar ${page.number}` : "Flagship service"}
        </p>
        <h1 className="page-heading mb-6 font-display text-display-xl font-bold uppercase tracking-tight text-agency-white">
          {page.h1}
        </h1>
        <p className="page-heading-lead mb-10 font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
          {page.intro}
        </p>
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-agency-border bg-agency-black">
          <FadeImage
            src={page.image}
            alt={page.imageAlt}
            width={0}
            height={0}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="relative mx-auto h-auto w-full object-contain"
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </section>

      {showCapabilitySections ? (
        <section className="relative z-10 mx-auto max-w-7xl space-y-10 px-6 lg:px-12">
          {page.capabilitySections!.map((section, index) => (
            <article
              key={section.number}
              className={`overflow-hidden rounded-3xl border border-agency-border ${altCardBg(index)}`}
            >
              <div className="grid grid-cols-1 gap-8 p-7 sm:p-9 lg:grid-cols-12 lg:gap-12 lg:p-10">
                <div className="min-w-0 lg:col-span-7">
                  <p className="mb-3 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow">
                    {section.number}
                  </p>
                  <h2 className="mb-4 font-display text-2xl font-bold uppercase tracking-tight text-agency-white sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="max-w-xl font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
                    {section.description}
                  </p>
                </div>
                <div className="lg:col-span-5 lg:border-l lg:border-agency-border lg:pl-10">
                  <h3 className="mb-5 font-display text-lg font-semibold uppercase tracking-tight text-agency-yellow">
                    Our capabilities
                  </h3>
                  <ul className="space-y-3">
                    {section.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-3">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-agency-yellow"
                          aria-hidden
                        />
                        <span className="font-sans text-sm leading-relaxed text-agency-white/80">
                          {capability}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : null}

      {showGroups ? (
        <section className="relative z-10 mx-auto max-w-7xl space-y-16 px-6 lg:px-12">
          {page.groups!.map((group) => (
            <div key={group.title}>
              <div className="mb-8 border-b border-agency-border pb-4">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-agency-yellow sm:text-3xl">
                  {group.title}
                </h2>
                {group.subtitle ? (
                  <p className="mt-2 font-display text-lg font-semibold uppercase tracking-tight text-agency-white/80 sm:text-xl">
                    {group.subtitle}
                  </p>
                ) : null}
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {group.items.map((item, index) => {
                  const itemSlug = itemSlugForName(item.name);
                  const href = itemSlug ? `/services/${page.slug}/${itemSlug}` : null;
                  const cardClass = `overflow-hidden rounded-2xl border border-agency-border transition-colors hover:border-agency-yellow/50 ${altCardBg(index)}`;

                  const body = (
                    <div className="p-6">
                      <h3 className="mb-2 font-display text-2xl font-semibold uppercase tracking-tight text-agency-white transition-colors group-hover:text-agency-yellow">
                        {item.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-agency-white/60">{item.description}</p>
                      {href ? (
                        <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-agency-yellow">
                          View service <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      ) : null}
                    </div>
                  );

                  if (href) {
                    return (
                      <Link key={item.name} href={href} className={`group block ${cardClass}`}>
                        {body}
                      </Link>
                    );
                  }

                  return (
                    <article key={item.name} className={`group ${cardClass}`}>
                      {body}
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      ) : null}

      {page.kind === "flagship" && page.pillarSlug && (
        <section className="relative z-10 mx-auto mt-16 max-w-7xl px-6 lg:px-12">
          <Link
            href={`/services/${page.pillarSlug}`}
            className="font-mono text-xs uppercase tracking-wider text-agency-yellow hover:underline"
          >
            View the full {page.pillarSlug.replace(/-/g, " ")} pillar
          </Link>
        </section>
      )}
    </div>
  );
}

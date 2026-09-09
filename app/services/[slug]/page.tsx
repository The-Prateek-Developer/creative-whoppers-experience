import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeImage from "@/components/media/FadeImage";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { getServicePage, SERVICE_PAGES } from "@/lib/services-tree";
import { SITE_OG_IMAGE } from "@/lib/site";
import CTA from "@/components/sections/CTA";

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

  return (
    <div className="pb-16 pt-8">
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

      <section className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="mb-3 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow">
          {page.kind === "pillar" ? `Pillar ${page.number}` : "Flagship service"}
        </p>
        <h1 className="mb-6 max-w-4xl font-display text-display-xl font-extrabold uppercase tracking-editorial-tight text-agency-white">
          {page.h1}
        </h1>
        <p className="mb-10 max-w-3xl font-sans text-base leading-relaxed text-agency-white/65">
          {page.intro}
        </p>
        <div className="relative mb-16 aspect-[21/9] overflow-hidden rounded-3xl border border-agency-border">
          <FadeImage
            src={page.image}
            alt={page.imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {page.groups && (
        <section className="mx-auto max-w-7xl space-y-16 px-6 lg:px-12">
          {page.groups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-8 border-b border-agency-border pb-4 font-display text-2xl font-extrabold uppercase text-agency-white">
                {group.title}
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {group.items.map((item) => (
                  <article key={item.name} className="rounded-2xl border border-agency-border p-6">
                    <h3 className="mb-2 font-display text-lg font-bold uppercase text-agency-white">
                      {item.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-agency-white/60">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {page.kind === "flagship" && page.pillarSlug && (
        <section className="mx-auto mt-16 max-w-7xl px-6 lg:px-12">
          <Link
            href={`/services/${page.pillarSlug}`}
            className="font-mono text-xs uppercase tracking-wider text-agency-yellow hover:underline"
          >
            View the full {page.pillarSlug.replace(/-/g, " ")} pillar
          </Link>
        </section>
      )}

      <CTA />
    </div>
  );
}

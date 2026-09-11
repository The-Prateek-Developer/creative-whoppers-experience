import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import FadeImage from "@/components/media/FadeImage";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { FLAGSHIPS, PILLARS } from "@/lib/services-tree";
import { PAGE_SEO, SITE_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: PAGE_SEO.services.title },
  description: PAGE_SEO.services.description,
  keywords: [...PAGE_SEO.services.keywords],
  alternates: { canonical: "/services" },
  openGraph: {
    title: PAGE_SEO.services.title,
    description: PAGE_SEO.services.description,
    url: "/services",
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.services.title,
    description: PAGE_SEO.services.description,
    images: [SITE_OG_IMAGE],
  },
};

export default function ServicesPage() {
  return (
    <div className="pb-28 pt-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <section className="mx-auto mb-20 max-w-7xl px-6 lg:px-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow">
          Creative agency services
        </p>
        <h1 className="page-heading mb-6 font-display text-display-xl font-extrabold uppercase tracking-editorial-tight text-agency-white">
          Our Services
        </h1>
        <p className="page-heading-lead font-sans text-base leading-relaxed text-agency-white/65">
          Creative Whoppers offers four integrated service pillars — Experience Design, Creative
          Production, Digital Experiences and Brand & Marketing — covering everything a brand
          needs to plan, produce and promote memorable experiences.
        </p>
      </section>

      <section className="mx-auto mb-24 max-w-7xl px-6 lg:px-12">
        <h2 className="mb-8 font-display text-xl font-semibold uppercase text-agency-white">
          Capability pillars
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/services/${pillar.slug}`}
              className="group overflow-hidden rounded-3xl border border-agency-border hover:border-agency-yellow/50"
            >
              <div className="relative aspect-[16/9]">
                <FadeImage
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  sizes="50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <span className="font-mono text-xs text-agency-yellow">{pillar.number}</span>
                <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-tight text-agency-white group-hover:text-agency-yellow">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-agency-white/60">{pillar.intro}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase text-agency-yellow">
                  View pillar <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="mb-8 font-display text-xl font-semibold uppercase text-agency-white">
          Flagship services
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {FLAGSHIPS.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-2xl border border-agency-border p-7 transition-colors hover:border-agency-yellow/50"
            >
              <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-agency-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-agency-white/60">{service.intro}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

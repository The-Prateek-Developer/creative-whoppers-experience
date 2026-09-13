"use client";

import React, { useRef } from "react";
import Link from "next/link";
import FadeImage from "@/components/media/FadeImage";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { FLAGSHIPS } from "@/lib/services-tree";
import { altCardBg } from "@/lib/utils";

export default function FlagshipServices() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-7xl border-t border-agency-border px-6 py-16 lg:px-12 lg:py-20"
    >
      <div data-reveal="heading" className="mb-10 max-w-4xl">
        <p
          data-reveal-item
          className="mb-4 font-sans text-xs font-medium uppercase tracking-editorial-wide text-agency-yellow"
        >
          What we do
        </p>
        <h2
          data-reveal-item
          className="section-heading mb-4 text-agency-white"
        >
          Creative excellence
        </h2>
        <p data-reveal-item className="font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
          Our core areas of expertise, combining creative thinking, technology and seamless
          execution to help organisations build brands, create experiences and tell stories that
          make an impact.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {FLAGSHIPS.map((service, index) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className={`group overflow-hidden rounded-3xl border border-agency-border transition-colors hover:border-agency-yellow/50 ${altCardBg(index)}`}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <FadeImage
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <h3 className="mb-3 font-display text-xl font-semibold uppercase tracking-tight text-agency-white group-hover:text-agency-yellow">
                {service.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-agency-white/60">{service.intro}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-agency-yellow">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 border-t border-agency-border pt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-agency-border-strong px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-agency-yellow transition-colors hover:bg-agency-yellow hover:text-agency-ink"
        >
          Explore all services
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { PILLARS } from "@/lib/services-tree";
import { altCardBg } from "@/lib/utils";

export default function ExpertisePillars() {
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
          Creative expertise
        </p>
        <h2
          data-reveal-item
          className="section-heading mb-4 text-agency-white"
        >
          Four capability pillars
        </h2>
        <p data-reveal-item className="font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
          Four ways we create memorable experiences: Experience Design, Creative Production,
          Digital Experiences and Brand Marketing.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {PILLARS.map((pillar, index) => (
          <Link
            key={pillar.slug}
            href={`/services/${pillar.slug}`}
            className={`group flex items-start justify-between gap-6 rounded-2xl border border-agency-border p-8 transition-colors hover:border-agency-yellow/50 ${altCardBg(index)}`}
          >
            <div>
              <span className="mb-4 block font-mono text-xs text-agency-yellow">{pillar.number}</span>
              <h3 className="mb-2 font-display text-xl font-semibold uppercase tracking-tight text-agency-white group-hover:text-agency-yellow">
                {pillar.title}
              </h3>
              <p className="max-w-md font-sans text-sm leading-relaxed text-agency-white/60">
                {pillar.intro}
              </p>
            </div>
            <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-agency-white/40 transition-colors group-hover:text-agency-yellow" />
          </Link>
        ))}
      </div>
    </section>
  );
}

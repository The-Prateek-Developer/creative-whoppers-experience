"use client";

import React, { useRef } from "react";
import Link from "next/link";
import FadeImage from "@/components/media/FadeImage";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { STATS } from "@/lib/site";
import { altCardBg } from "@/lib/utils";

export default function AboutSnapshot() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="about-snapshot"
      ref={sectionRef}
      className="relative mx-auto max-w-7xl border-t border-agency-border px-6 py-16 lg:px-12 lg:py-20"
    >
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-agency-border bg-agency-white/[0.03] lg:col-span-5 lg:aspect-auto lg:h-full">
          <FadeImage
            src="/images/site/who-we-are.png"
            alt="Looking ahead — Creative Whoppers experience design"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-contain object-center"
          />
        </div>

        <div data-reveal="heading" className="lg:col-span-7">
          <p
            data-reveal-item
            className="mb-4 font-sans text-xs font-medium uppercase tracking-editorial-wide text-agency-yellow"
          >
            Who we are
          </p>
          <h2
            data-reveal-item
            className="section-heading mb-5 text-agency-white"
          >
            We design experiences that people remember
          </h2>
          <p
            data-reveal-item
            className="max-w-xl font-sans text-sm leading-relaxed text-agency-white/65"
          >
            Every memorable experience starts with an idea, but it takes strategy, creativity,
            technology and flawless execution to bring that idea to life.
          </p>

          <div
            data-reveal-item
            className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`rounded-xl border border-agency-border px-3 py-3.5 ${altCardBg(index)}`}
              >
                <p className="font-display text-lg font-extrabold tracking-tight text-agency-yellow">
                  {stat.value}
                </p>
                <p className="mt-1 font-sans text-[10px] font-medium uppercase leading-snug tracking-wider text-agency-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            data-reveal-item
            href="/about-us"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-agency-border px-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-wider text-agency-white transition-colors hover:border-agency-yellow hover:text-agency-yellow"
          >
            Know more about us
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

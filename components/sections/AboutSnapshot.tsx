"use client";

import React, { useRef } from "react";
import Link from "next/link";
import FadeImage from "@/components/media/FadeImage";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { STATS } from "@/lib/site";

export default function AboutSnapshot() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      id="about-snapshot"
      ref={sectionRef}
      className="relative mx-auto max-w-7xl border-t border-agency-border px-6 py-16 lg:px-12 lg:py-20"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-agency-border lg:col-span-5">
          <FadeImage
            src="/images/site/studio-collab.jpg"
            alt="Creative team collaborating in a video editing studio"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div data-reveal="heading" className="lg:col-span-7">
          <p
            data-reveal-item
            className="mb-3 font-mono text-[11px] uppercase tracking-editorial-wide text-agency-yellow"
          >
            Who we are
          </p>
          <h2
            data-reveal-item
            className="mb-4 max-w-lg font-display text-xl font-semibold tracking-tight text-agency-white"
          >
            A trusted creative agency partner
          </h2>
          <p
            data-reveal-item
            className="max-w-xl font-sans text-sm leading-relaxed text-agency-white/65"
          >
            Creative Whoppers blends strategy, design and production to bring ideas to life
            across every touchpoint — for corporate, government and institutional clients.
          </p>

          <div
            data-reveal-item
            className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-agency-border bg-agency-white/[0.03] px-3 py-3.5"
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

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
      className="relative mx-auto max-w-7xl border-t border-agency-border px-6 py-28 lg:px-12"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-agency-border lg:col-span-5">
          <FadeImage
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop"
            alt="Creative team collaborating on an experience design brief"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div data-reveal="heading" className="lg:col-span-7">
          <p
            data-reveal-item
            className="mb-4 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow"
          >
            Who we are
          </p>
          <h2
            data-reveal-item
            className="mb-6 font-display text-display-xl font-extrabold uppercase tracking-editorial-tight text-agency-white"
          >
            A trusted creative agency partner
          </h2>
          <p
            data-reveal-item
            className="max-w-2xl font-sans text-base leading-relaxed text-agency-white/65"
          >
            Creative Whoppers blends strategy, design and production to bring ideas to life
            across every touchpoint — for corporate, government and institutional clients.
          </p>

          <div
            data-reveal-item
            className="mt-10 grid grid-cols-2 gap-6 border-t border-agency-border pt-8 sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-extrabold text-agency-yellow sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-agency-white/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            data-reveal-item
            href="/about-us"
            className="mt-10 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-agency-yellow hover:underline"
          >
            Know more about us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

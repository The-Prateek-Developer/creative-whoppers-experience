"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div
        data-parallax-root
        className="relative rounded-2xl bg-agency-surface border border-agency-border overflow-hidden p-10 lg:p-16"
      >
        <div
          data-parallax="-40"
          className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-agency-yellow/20 via-agency-coral/15 to-transparent rounded-full blur-3xl pointer-events-none"
        />
        <div
          data-parallax="28"
          className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tr from-agency-cyan/15 via-agency-violet/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div data-reveal="heading" className="relative z-10 max-w-3xl">
          <div
            data-reveal-item
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agency-yellow/10 border border-agency-yellow/30 text-agency-yellow text-xs font-mono mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET’S MAKE SOMETHING GROUNDBREAKING</span>
          </div>

          <h2
            data-reveal-item
            className="font-display font-extrabold text-display-xl text-agency-white uppercase tracking-tight mb-6"
          >
            Ready to ignite your <span className="bg-gradient-to-r from-agency-yellow via-agency-coral-light to-agency-cyan bg-clip-text text-transparent italic">next campaign?</span>
          </h2>

          <p
            data-reveal-item
            className="text-agency-muted text-base lg:text-lg mb-10 max-w-xl font-sans"
          >
            Whether it’s an immersive digital world, a viral commercial film, or an
            unprecedented live spectacle, we bring daring visions to life.
          </p>

          <div data-reveal-item className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-agency-yellow text-agency-black font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-agency-yellow-hover hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Initiate Collaboration</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-agency-border text-agency-white font-medium text-sm hover:border-agency-yellow hover:text-agency-yellow transition-colors"
            >
              <span>Explore Selected Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

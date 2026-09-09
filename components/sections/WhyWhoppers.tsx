"use client";

import React, { useRef } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { DIFFERENTIATORS, HOME_PROCESS } from "@/lib/process";

export default function WhyWhoppers() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-7xl border-t border-agency-border px-6 py-28 lg:px-12"
    >
      <div data-reveal="heading" className="mb-14 max-w-3xl">
        <p
          data-reveal-item
          className="mb-4 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow"
        >
          Why Creative Whoppers
        </p>
        <h2
          data-reveal-item
          className="mb-4 font-display text-display-xl font-extrabold uppercase tracking-editorial-tight text-agency-white"
        >
          Preferred for a reason
        </h2>
        <p data-reveal-item className="font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
          What makes Creative Whoppers a preferred creative and event management agency — an
          integrated team, proven process and a track record of memorable experiences.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {DIFFERENTIATORS.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-agency-border bg-agency-white/[0.04] p-7"
          >
            <h3 className="mb-3 font-display text-lg font-bold uppercase tracking-tight text-agency-white">
              {item.title}
            </h3>
            <p className="font-sans text-sm leading-relaxed text-agency-white/60">{item.description}</p>
          </div>
        ))}
      </div>

      <p className="mb-8 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow">
        Process snapshot
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {HOME_PROCESS.map((stage) => (
          <div key={stage.id} className="border-t border-agency-yellow/40 pt-6">
            <span className="font-mono text-[11px] text-agency-yellow">{stage.number}</span>
            <h3 className="mt-2 font-display text-xl font-extrabold uppercase text-agency-white">
              {stage.title}
            </h3>
            <p className="mt-1 text-xs font-mono uppercase tracking-wider text-agency-white/50">
              {stage.subtitle}
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-agency-white/60">
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

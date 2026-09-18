"use client";

import React, { useRef } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { DIFFERENTIATORS, PROCESS_STAGES } from "@/lib/process";
import { altCardBg } from "@/lib/utils";

export default function WhyWhoppers() {
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
          Why Creative Whoppers
        </p>
        <h2
          data-reveal-item
          className="section-heading mb-4 text-agency-white"
        >
          Preferred for a reason
        </h2>
        <p data-reveal-item className="font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
          With 16+ years of experience, an integrated in-house team, and a track record of
          memorable experiences across corporate, government, and institutional stages, Creative
          Whoppers is built to deliver, not just conceptualise.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {DIFFERENTIATORS.map((item, index) => (
          <div
            key={item.title}
            className={`rounded-2xl border border-agency-border p-7 ${altCardBg(index)}`}
          >
            <h3 className="mb-3 font-display text-xl font-semibold uppercase tracking-tight text-agency-white">
              {item.title}
            </h3>
            <p className="font-sans text-sm leading-relaxed text-agency-white/60">{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="section-heading mb-12 text-agency-white">Our approach</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROCESS_STAGES.map((stage, index) => (
          <div
            key={stage.id}
            className={`rounded-2xl border border-agency-border p-8 ${altCardBg(index)}`}
          >
            <span className="font-mono text-xs text-agency-yellow">{stage.number}</span>
            <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-tight text-agency-white">
              {stage.title}
            </h3>
            <p className="mt-2 font-display text-base font-semibold tracking-tight text-agency-white">
              {stage.subtitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-agency-white/60">{stage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

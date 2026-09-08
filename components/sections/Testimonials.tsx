"use client";

import React, { useRef } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const ENDORSEMENTS = [
  {
    quote:
      "Creative Whoppers produced an experiential pop-up that generated over 40M impressions in 72 hours. Their attention to detail and craft is unmatched.",
    author: "Elena Rostova",
    role: "VP Brand Experience, Hyperion Collective",
  },
  {
    quote:
      "They treat every campaign like an avant-garde art installation that actually drives revenue. The results shattered our Q4 metrics.",
    author: "Marcus Chen",
    role: "Global Creative Director, Apex Sound",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-agency-border"
    >
      {/* Header */}
      <div data-reveal="heading" className="mb-16">
        <span
          data-reveal-item
          className="text-xs font-mono uppercase tracking-editorial-wide text-agency-cyan block mb-3"
        >
          [ VERIFIED VOICES ]
        </span>
        <h2
          data-reveal-item
          className="font-display font-extrabold text-display-xl text-agency-white uppercase"
        >
          Client <span className="text-agency-cyan italic">Endorsements</span>.
        </h2>
      </div>

      {/* Asymmetric Quotes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {ENDORSEMENTS.map((item, i) => (
          <div
            key={i}
            data-reveal="card"
            className="p-8 lg:p-12 rounded-xl bg-agency-surface/30 border border-agency-border flex flex-col justify-between"
          >
            <p className="text-agency-white/90 text-lg lg:text-xl font-sans leading-relaxed mb-8 italic">
              “{item.quote}”
            </p>
            <div className="pt-6 border-t border-agency-border">
              <h4 className="font-display font-bold text-base text-agency-white">
                {item.author}
              </h4>
              <p className="text-xs font-mono text-agency-muted mt-1">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

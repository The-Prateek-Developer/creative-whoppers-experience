"use client";

import React, { useRef } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { CLIENT_NAMES, CLIENT_SECTORS } from "@/lib/services-tree";

const ENDORSEMENTS = [
  {
    quote:
      "Creative Whoppers produced a campaign film and on-ground programme that reached the right audiences without losing the seriousness of the brief.",
    author: "Communications lead",
    role: "Diplomatic & sustainability programme",
  },
  {
    quote:
      "From stage design to live uplink, the team treated a government-scale event with the craft of a brand film — and the discipline of protocol.",
    author: "Event director",
    role: "Institutional summit, New Delhi",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl border-t border-agency-border px-6 py-28 lg:px-12"
    >
      <div data-reveal="heading" className="mb-16">
        <span
          data-reveal-item
          className="mb-3 block font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow"
        >
          Clients & testimonials
        </span>
        <h2
          data-reveal-item
          className="font-display text-display-xl font-extrabold uppercase text-agency-white"
        >
          Trusted across <span className="italic text-agency-yellow">sectors</span>
        </h2>
        <p
          data-reveal-item
          className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-agency-white/65"
        >
          Trusted by corporate brands, government bodies, NGOs and institutions — hear what our
          clients say about working with Creative Whoppers.
        </p>
      </div>

      <div className="mb-12 flex flex-wrap gap-2">
        {CLIENT_SECTORS.map((sector) => (
          <span
            key={sector}
            className="rounded-full border border-agency-border px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-agency-white/70"
          >
            {sector}
          </span>
        ))}
      </div>

      <div className="mb-16 grid grid-cols-2 gap-4 border-y border-agency-border py-8 sm:grid-cols-4">
        {CLIENT_NAMES.map((name) => (
          <p key={name} className="font-mono text-[11px] uppercase tracking-wider text-agency-white/55">
            {name}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {ENDORSEMENTS.map((item) => (
          <div
            key={item.role}
            className="flex flex-col justify-between rounded-xl border border-agency-border bg-agency-white/[0.04] p-8 lg:p-12"
          >
            <p className="mb-8 font-sans text-lg italic leading-relaxed text-agency-white/90 lg:text-xl">
              “{item.quote}”
            </p>
            <div className="border-t border-agency-border pt-6">
              <h3 className="font-display text-base font-bold text-agency-white">{item.author}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-agency-yellow">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

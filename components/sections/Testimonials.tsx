"use client";

import React, { useRef } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { CLIENT_SECTORS } from "@/lib/services-tree";

const ENDORSEMENTS = [
  {
    quote:
      "Creative Whoppers produced a campaign film and on-ground programme that reached the right audiences without losing the seriousness of the brief.",
    author: "Communications lead",
    role: "Diplomatic & sustainability programme",
    featured: true,
  },
  {
    quote:
      "From stage design to live uplink, the team treated a government-scale event with the craft of a brand film — and the discipline of protocol.",
    author: "Event director",
    role: "Institutional summit, New Delhi",
    featured: false,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);
  const featured = ENDORSEMENTS[0];
  const secondary = ENDORSEMENTS[1];

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl border-t border-agency-border px-6 py-16 lg:px-12 lg:py-20"
    >
      <div
        data-reveal="heading"
        className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-xl">
          <p
            data-reveal-item
            className="mb-3 font-sans text-[11px] font-medium uppercase tracking-editorial-wide text-agency-yellow"
          >
            Clients & testimonials
          </p>
          <h2
            data-reveal-item
            className="font-display text-xl font-semibold tracking-tight text-agency-white"
          >
            Trusted across <span className="italic text-agency-yellow">sectors</span>
          </h2>
          <p
            data-reveal-item
            className="mt-3 font-sans text-sm leading-relaxed text-agency-white/60"
          >
            Corporate, government, NGO and institutional partners — voices from briefs we&apos;ve
            delivered.
          </p>
        </div>
        <div data-reveal-item className="flex flex-wrap gap-2">
          {CLIENT_SECTORS.map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-agency-yellow/25 bg-agency-yellow/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-agency-yellow"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <blockquote className="relative overflow-hidden rounded-2xl border border-agency-border bg-agency-white/[0.04] p-7 lg:col-span-7 lg:p-9">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-4 right-6 font-display text-[7.5rem] font-extrabold leading-none text-agency-yellow/15"
          >
            ”
          </span>
          <div className="relative">
            <span className="mb-5 block h-8 w-8 rounded-full bg-agency-yellow text-center font-display text-2xl font-bold leading-8 text-agency-ink">
              ”
            </span>
            <p className="font-sans text-base leading-relaxed text-agency-white sm:text-lg">
              {featured.quote}
            </p>
            <footer className="mt-8 flex items-center gap-3 border-t border-agency-white/10 pt-5">
              <span className="h-8 w-0.5 shrink-0 bg-agency-yellow" />
              <div>
                <cite className="not-italic font-display text-sm font-semibold text-agency-white">
                  {featured.author}
                </cite>
                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-agency-white/50">
                  {featured.role}
                </p>
              </div>
            </footer>
          </div>
        </blockquote>

        <blockquote className="flex flex-col justify-between rounded-2xl border border-agency-border border-l-agency-yellow bg-agency-black p-7 lg:col-span-5 lg:p-8">
          <p className="font-sans text-sm leading-relaxed text-agency-white/80 sm:text-base">
            {secondary.quote}
          </p>
          <footer className="mt-8">
            <cite className="not-italic font-display text-sm font-semibold text-agency-white">
              {secondary.author}
            </cite>
            <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-agency-yellow">
              {secondary.role}
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

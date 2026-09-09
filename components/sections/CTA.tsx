"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
      <div
        data-parallax-root
        className="relative overflow-hidden rounded-2xl border border-agency-border bg-agency-white/[0.04] p-10 lg:p-16"
      >
        <div
          data-parallax="-40"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-agency-yellow/15 blur-3xl"
        />

        <div data-reveal="heading" className="relative z-10 max-w-3xl">
          <p
            data-reveal-item
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-agency-yellow/30 bg-agency-yellow/10 px-3 py-1 font-mono text-xs text-agency-yellow"
          >
            Get in touch
          </p>
          <h2
            data-reveal-item
            className="mb-6 font-display text-display-xl font-extrabold uppercase tracking-tight text-agency-white"
          >
            Ready to create your next{" "}
            <span className="italic text-agency-yellow">brand experience?</span>
          </h2>
          <p
            data-reveal-item
            className="mb-10 max-w-xl font-sans text-base text-agency-white/65 lg:text-lg"
          >
            Get in touch with the Creative Whoppers team to start your project — events, films,
            digital platforms or marketing campaigns.
          </p>
          <Link
            data-reveal-item
            href="/contact-us"
            className="inline-flex items-center gap-3 rounded-full bg-agency-yellow px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-agency-black transition-transform hover:scale-[1.03]"
          >
            Contact / Enquiry
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

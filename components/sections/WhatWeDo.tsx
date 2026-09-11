"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap, gsapEase, prefersReducedMotion, refreshScrollTrigger } from "@/lib/gsap";

const LINES = [
  { text: "We architect experiences", accent: false },
  { text: "that stop culture mid-scroll —", accent: false },
  { text: "across space, film, and the physical world.", accent: true },
];

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const lines = section.querySelectorAll(".what-line");
      const rule = section.querySelector(".what-rule");
      const meta = section.querySelectorAll(".what-meta");
      const pinTarget = section.querySelector(".what-pin");
      if (!pinTarget || !rule) return;

      gsap.set(lines, { y: 72, opacity: 0 });
      gsap.set(rule, { scaleX: 0, transformOrigin: "0% 50%" });
      gsap.set(meta, { y: 16, opacity: 0 });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: pinTarget,
            start: "top top",
            end: "+=140%",
            pin: true,
            pinSpacing: true,
            scrub: 0.55,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(rule, { scaleX: 1, duration: 0.18 }, 0)
          .to(meta, { y: 0, opacity: 1, duration: 0.12, stagger: 0.04 }, 0.02)
          .to(
            lines,
            { y: 0, opacity: 1, duration: 0.28, stagger: 0.1 },
            0.08
          );
      });

      mm.add("(max-width: 767px)", () => {
        gsap.to(meta, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: gsapEase.outPremium,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
        gsap.to(rule, {
          scaleX: 1,
          duration: 0.7,
          ease: gsapEase.outPremium,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
        gsap.to(lines, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: gsapEase.outPremium,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, section);

    refreshScrollTrigger(180);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full border-t border-agency-border bg-agency-black"
    >
      <div className="what-pin relative flex min-h-[100svh] items-center overflow-hidden px-6 py-24 lg:px-12">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden
        >
          <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-agency-yellow/10 blur-3xl" />
          <div className="absolute -right-16 bottom-10 h-96 w-96 rounded-full bg-agency-yellow/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <span className="what-meta block font-sans text-xs font-medium uppercase tracking-editorial-wide text-agency-yellow">
              What we do
            </span>
            <span className="what-meta font-mono text-[11px] uppercase tracking-wider text-agency-white/55">
              Experiential / Film / Spatial
            </span>
          </div>

          <div className="what-rule mb-10 h-px origin-left bg-gradient-to-r from-agency-yellow via-agency-yellow to-transparent" />

          <h2 className="page-heading font-display text-display-xl font-extrabold uppercase tracking-editorial-tight text-agency-white">
            {LINES.map((line) => (
              <span
                key={line.text}
                className={`what-line block overflow-hidden ${
                  line.accent ? "text-agency-yellow" : ""
                }`}
              >
                {line.text}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}

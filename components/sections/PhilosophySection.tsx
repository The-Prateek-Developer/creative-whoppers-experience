"use client";

import React, { useRef } from "react";
import Link from "next/link";
import FadeImage from "@/components/media/FadeImage";
import dynamic from "next/dynamic";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const ParticleField = dynamic(() => import("@/components/canvas/ParticleField"), {
  ssr: false,
});

const PILLARS = [
  {
    num: "01",
    title: "Uncompromising Craft",
    desc: "Every frame, pixel, and architectural detail is engineered with cinema-grade precision and unyielding creative intent.",
  },
  {
    num: "02",
    title: "Earned Resonance",
    desc: "We don’t make advertisements people skip. We architect cultural moments that audiences photograph, debate, and remember.",
  },
  {
    num: "03",
    title: "Spatial Transcendence",
    desc: "Merging real-world physical spectacles with real-time 3D spatial computing to redefine how humans experience brands.",
  },
];

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      data-parallax-root
      className="relative w-full py-32 lg:py-44 px-6 lg:px-12 bg-agency-black border-y border-agency-border overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          data-parallax="-52"
          className="absolute left-0 right-0 -top-[18%] h-[136%] w-full"
        >
          <div className="absolute inset-0 opacity-[0.18]">
            <FadeImage
              src="/images/site/paint-yellow-black.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover saturate-50"
              skeletonClassName="bg-agency-black"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-agency-black via-agency-black/70 to-agency-black" />
        </div>
      </div>

      <ParticleField lazy count={32} className="z-[2] !inset-x-0 !top-0 !bottom-auto h-[100svh]" />

      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-agency-yellow/15 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div data-reveal="heading">
          <div
            data-reveal-item
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agency-yellow/10 border border-agency-yellow/30 text-agency-yellow text-xs font-mono mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio ethos & philosophy</span>
          </div>

          <div className="page-heading mb-16 lg:mb-24">
            <h2
              data-reveal-item
              className="section-heading mb-6 leading-none text-agency-white"
            >
              We Don’t Compete For Attention.
              <br />
              <span className="text-agency-yellow">We Command It.</span>
            </h2>
            <p
              data-reveal-item
              className="page-heading-lead font-sans text-editorial-sub leading-relaxed text-agency-white/55"
            >
              In an era of fleeting feeds and generic templates, Creative Whoppers engineers
              unapologetic visual spectacles that pierce through the noise and establish brand dominance.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-agency-white/10">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              data-reveal="card"
              className="p-8 rounded-xl bg-agency-white/[0.08] border border-agency-border hover:border-agency-yellow/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-agency-yellow block mb-6">
                  {pillar.num} · Philosophy
                </span>
                <h3 className="mb-4 font-display text-xl font-semibold uppercase tracking-tight text-agency-white">
                  {pillar.title}
                </h3>
                <p className="text-agency-white/55 text-sm leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-agency-white/[0.06]">
                <span className="text-[11px] font-mono text-agency-white/55 uppercase">
                  Active principle
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-agency-border text-xs font-mono text-agency-white/55">
          <div>
            <span>Bespoke creative production</span>
          </div>
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 text-agency-yellow hover:text-agency-yellow hover:underline tracking-wider uppercase font-semibold transition-colors"
          >
            <span>Explore our story</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import FadeImage from "@/components/media/FadeImage";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Award,
  Users,
  Layers,
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/services-data";
import CTA from "@/components/sections/CTA";
import { useInViewGate } from "@/hooks/useInViewGate";
import {
  cardLiftHover,
  cardLiftTap,
  galleryEnterTransition,
} from "@/lib/animations";

export default function ServicesPage() {
  const { ref: listRef, ready } = useInViewGate();
  const reduceMotion = useReducedMotion();

  return (
    <div className="pt-8 pb-24">
      {/* 1. ENHANCED EDITORIAL HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-12 mb-24 overflow-hidden">
        {/* Subtle Ambient Lighting Glow */}
        <div
          className="pointer-events-none absolute -top-20 right-1/4 w-96 h-96 bg-agency-coral/15 rounded-full blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-1/2 -left-20 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl"
          aria-hidden
        />

        <div className="relative z-10">
          {/* Top Metadata Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agency-surface border border-agency-coral/30 text-agency-coral-light font-mono text-xs uppercase tracking-editorial-wide mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-SPECTRUM PRODUCTION CATALOG {"//"} 06 DISCIPLINES</span>
          </div>

          {/* Sculptural Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-agency-white uppercase tracking-editorial-tight leading-[0.96] mb-12">
            Production <span className="text-agency-coral italic">Disciplines</span>.
          </h1>

          {/* Asymmetric Editorial Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Manifesto & Value Proposition */}
            <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 lg:p-12 rounded-3xl bg-agency-surface/70 border border-agency-border backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-agency-coral/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="h-1 w-12 bg-agency-coral mb-6" />
                <blockquote className="text-xl sm:text-2xl font-display text-agency-white uppercase tracking-tight mb-5 leading-snug">
                  “We Believe Great Experiences Don’t Just Happen. They’re Designed.”
                </blockquote>
                <p className="text-agency-muted font-sans text-sm sm:text-base leading-relaxed mb-6">
                  From corporate conferences and public spectacles to extreme-altitude museum
                  digitization, immersive digital worlds, and integrated commercial campaigns —
                  we bring together strategy, creativity, technology, and execution under one roof.
                </p>
                <p className="text-agency-muted font-sans text-sm sm:text-base leading-relaxed">
                  We reject fragmented agency handoffs. Every stage from initial treatment,
                  cinematic cameras, 3D CGI simulation, and live multi-cam broadcasting is
                  engineered in-house to create experiences that connect people, communicate
                  ideas, and leave a permanent cultural impact.
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap items-center gap-4 pt-8 mt-8 border-t border-agency-border/60">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-agency-coral text-agency-black font-display font-bold text-xs uppercase tracking-wider hover:bg-agency-coral-hover hover:scale-[1.03] active:scale-[0.98] transition-all shadow-md shadow-agency-coral/10"
                >
                  <span>Initiate Collaboration</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-agency-border text-agency-white font-mono text-xs uppercase tracking-wider hover:border-agency-coral hover:text-agency-coral transition-colors"
                >
                  <span>Selected Work Archives</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Quick Navigation Directory */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-agency-surface/40 border border-agency-border">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-agency-border">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-agency-coral" />
                    <span className="font-mono text-xs uppercase tracking-editorial-wide text-agency-coral-light">
                      [ CAPABILITIES DIRECTORY ]
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-agency-muted">
                    06 SPECIALIZATIONS
                  </span>
                </div>

                <nav aria-label="Capabilities Navigation" className="space-y-2">
                  {SERVICES_DATA.map((service) => (
                    <a
                      key={service.id}
                      href={`#${service.id}`}
                      className="group flex items-center justify-between p-3.5 rounded-xl border border-transparent hover:border-agency-border hover:bg-agency-black/70 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-agency-coral font-bold">
                          {service.number}
                        </span>
                        <span className="font-display font-bold text-sm text-agency-white group-hover:text-agency-coral transition-colors">
                          {service.title}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-agency-muted group-hover:text-agency-coral group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 mt-6 border-t border-agency-border/60 flex items-center justify-between text-[11px] font-mono text-agency-muted">
                <span>IN-HOUSE TURNKEY DISPATCH</span>
                <span className="text-agency-coral-light">ACTIVE PIPELINE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ALTERNATING ASYMMETRIC SERVICES SHOWCASE */}
      <section className="mx-auto max-w-7xl space-y-16 px-6 lg:px-12">
        <div ref={listRef} className="space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={service.id}
                id={service.id}
                layout={!reduceMotion}
                initial={{ opacity: 0, y: 32, scale: 0.98 }}
                animate={
                  ready
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 32, scale: 0.98 }
                }
                transition={galleryEnterTransition(index)}
                whileHover={reduceMotion ? undefined : { ...cardLiftHover, y: -8 }}
                whileTap={reduceMotion ? undefined : cardLiftTap}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-agency-border bg-agency-surface/40 p-8 will-change-transform lg:p-12"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Visual Side */}
                  <div
                    className={`lg:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-agency-border ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <FadeImage
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-agency-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded bg-agency-black/80 backdrop-blur-md border border-agency-border text-xs font-mono text-agency-coral-light">
                        {service.number} {"//"} {service.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-between ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <div className="inline-block px-3 py-1 rounded-md bg-agency-coral/10 border border-agency-coral/30 text-agency-coral-light text-[11px] font-mono mb-4">
                        {service.differentiator}
                      </div>

                      <h2 className="font-display font-black text-3xl sm:text-4xl text-agency-white uppercase tracking-tight mb-4">
                        {service.title}
                      </h2>

                      <p className="text-agency-muted text-base font-sans leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Deliverables Grid */}
                      <div className="mb-6">
                        <h4 className="text-xs font-mono text-agency-muted uppercase tracking-wider mb-3">
                          [ SCOPE OF WORK & DELIVERABLES ]
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1.5 rounded-lg text-xs font-mono bg-agency-black border border-agency-border text-agency-white/90"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Verified PDF Client Campaigns */}
                      <div className="p-5 rounded-2xl bg-agency-black/70 border border-agency-border mb-8">
                        <span className="text-[11px] font-mono text-agency-coral-light uppercase tracking-wider block mb-3">
                          [ CREDITED CLIENT CAMPAIGNS FROM BRIEF ]
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-agency-white/80 font-sans">
                          {service.clientWorks.map((client, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-agency-coral flex-shrink-0" />
                              <span className="truncate">{client}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-6 border-t border-agency-border flex flex-wrap items-center justify-between gap-4">
                      <span className="text-xs font-mono text-agency-muted">
                        PRODUCTION AVAILABILITY: IMMEDIATE
                      </span>
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-agency-coral text-agency-black font-display font-bold text-xs uppercase tracking-wider hover:bg-agency-coral-hover transition-all duration-300 hover:scale-[1.03]"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* 3. LEADERSHIP & CREDENTIALS BANNER FROM PDF PAGE 5 */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 my-28">
        <div className="rounded-3xl bg-agency-surface border border-agency-border-coral p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-agency-coral/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agency-coral/10 border border-agency-coral/30 text-agency-coral-light text-xs font-mono mb-6">
              <Users className="w-3.5 h-3.5" />
              <span>MULTIDISCIPLINARY LEADERSHIP (FROM OFFICIAL BRIEF)</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-agency-white uppercase tracking-tight mb-8 max-w-3xl">
              16+ Years Of High-Stakes Creative Execution.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-agency-border">
              {/* Leader 1 */}
              <div className="p-8 rounded-2xl bg-agency-black/60 border border-agency-border">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-5 h-5 text-agency-coral" />
                  <h3 className="font-display font-bold text-xl text-agency-white">
                    Mr. Dilip Katariya
                  </h3>
                </div>
                <p className="text-agency-coral-light text-xs font-mono uppercase mb-4">
                  Founder & Creative Entrepreneur {"//"} 16+ Years Experience
                </p>
                <p className="text-agency-muted text-sm font-sans leading-relaxed">
                  Passionate about building impactful brands through strategic thinking,
                  innovation, and human-centered design. Contributed to global creative
                  projects including the Hollywood film <em className="text-agency-white">‘The Time is... Now!’</em>.
                </p>
              </div>

              {/* Leader 2 */}
              <div className="p-8 rounded-2xl bg-agency-black/60 border border-agency-border">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-5 h-5 text-agency-coral" />
                  <h3 className="font-display font-bold text-xl text-agency-white">
                    Mr. Khaalid Naik
                  </h3>
                </div>
                <p className="text-agency-coral-light text-xs font-mono uppercase mb-4">
                  Co-Founder & Media Producer {"//"} 10+ Years Experience
                </p>
                <p className="text-agency-muted text-sm font-sans leading-relaxed">
                  Multidisciplinary entrepreneur combining creative direction with strategic
                  execution across events, media production, filmmaking, and integrated marketing
                  campaigns for global institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA */}
      <CTA />
    </div>
  );
}

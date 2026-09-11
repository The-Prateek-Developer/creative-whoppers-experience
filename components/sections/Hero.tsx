"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  ctaHover,
  ctaRest,
  ctaTap,
  ctaTransition,
  fadeInUp,
  reducedStagger,
  staggerContainer,
} from "@/lib/animations";
import HeroVideo from "@/components/media/HeroVideo";
import BrandLogo from "@/components/brand/BrandLogo";
import { PILLARS } from "@/lib/services-tree";
import { WHATSAPP_LINK } from "@/lib/site";

const MotionLink = motion.create(Link);

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden px-4 pb-8 pt-6 sm:px-6 sm:pt-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 z-0">
        <HeroVideo />
        <div className="absolute inset-0 bg-agency-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-agency-black/75 via-agency-black/35 to-agency-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-agency-black via-agency-black/20 to-agency-black/40" />
      </div>

      <motion.div
        variants={reduceMotion ? reducedStagger : staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-start gap-8 lg:justify-center lg:gap-10"
      >
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <motion.p
              variants={fadeInUp}
              className="mb-5 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow"
            >
              Full-service creative agency
            </motion.p>

            <motion.h1 variants={fadeInUp} className="text-agency-white">
              <span className="sr-only">Creative Whoppers</span>
              <BrandLogo size="hero" priority />
              <span className="hero-tagline mt-4 block font-display font-semibold tracking-tight text-agency-yellow">
                Crafting memorable brand experiences
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl font-sans text-base leading-relaxed text-agency-white/75 sm:text-lg"
            >
              Events, exhibitions, films, digital platforms and marketing campaigns — designed and
              delivered under one roof for brands, institutions and governments.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center gap-4">
              <MotionLink
                {...WHATSAPP_LINK}
                className="inline-flex items-center gap-3 rounded-full bg-agency-yellow px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-agency-ink"
                initial="rest"
                whileHover={reduceMotion ? undefined : "hover"}
                whileTap={reduceMotion ? undefined : "tap"}
                variants={{ rest: ctaRest, hover: ctaHover, tap: ctaTap }}
                transition={ctaTransition}
              >
                Let&apos;s Create Together
                <ArrowUpRight className="h-4 w-4" />
              </MotionLink>
              <a
                {...WHATSAPP_LINK}
                className="inline-flex items-center gap-2 rounded-full border border-agency-border px-7 py-4 text-sm font-medium text-agency-white transition-colors hover:border-agency-yellow hover:text-agency-yellow"
              >
                Start a Project
              </a>
            </motion.div>
          </div>

          <motion.aside variants={fadeInUp} className="lg:col-span-5">
            <div className="rounded-3xl border border-agency-border bg-agency-black/45 p-6 backdrop-blur-sm sm:p-7">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-editorial-wide text-agency-white/50">
                Four capability pillars
              </p>
              <ul className="divide-y divide-agency-white/10">
                {PILLARS.map((pillar) => (
                  <li key={pillar.slug}>
                    <Link
                      href={`/services/${pillar.slug}`}
                      className="group flex items-center justify-between gap-4 py-3.5"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[11px] text-agency-yellow">{pillar.number}</span>
                        <span className="font-display text-sm font-bold uppercase tracking-tight text-agency-white transition-colors group-hover:text-agency-yellow sm:text-base">
                          {pillar.title}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-agency-white/35 transition-colors group-hover:text-agency-yellow" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-agency-yellow hover:underline"
              >
                View all services
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}

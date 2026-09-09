"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
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
import { PILLARS } from "@/lib/services-tree";
import { STATS } from "@/lib/site";

const MotionLink = motion.create(Link);

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden px-4 pb-8 pt-24 sm:px-6 lg:px-12">
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
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-10 lg:gap-12"
      >
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <motion.p
              variants={fadeInUp}
              className="mb-5 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow"
            >
              Full-service creative agency
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display font-extrabold uppercase tracking-editorial-tight text-agency-white"
            >
              <span className="hero-lockup block">Creative Whoppers</span>
              <span className="hero-tagline mt-3 block font-semibold normal-case tracking-tight text-agency-yellow">
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
                href="/contact-us"
                className="inline-flex items-center gap-3 rounded-full bg-agency-yellow px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-agency-black"
                initial="rest"
                whileHover={reduceMotion ? undefined : "hover"}
                whileTap={reduceMotion ? undefined : "tap"}
                variants={{ rest: ctaRest, hover: ctaHover, tap: ctaTap }}
                transition={ctaTransition}
              >
                Let&apos;s Create Together
                <ArrowUpRight className="h-4 w-4" />
              </MotionLink>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-agency-border px-7 py-4 text-sm font-medium text-agency-white transition-colors hover:border-agency-yellow hover:text-agency-yellow"
              >
                Start a Project
              </Link>
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

        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-6 border-t border-agency-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="grid flex-1 grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-xl font-extrabold uppercase tracking-tight text-agency-white sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-agency-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <a
            href="#about-snapshot"
            className="inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-agency-white/55 hover:text-agency-yellow"
          >
            <ArrowDown className="h-4 w-4" />
            Scroll
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

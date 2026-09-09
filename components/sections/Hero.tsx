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

const MotionLink = motion.create(Link);

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-svh flex flex-col justify-end pt-24 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <HeroVideo />
        <div className="absolute inset-0 bg-agency-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-agency-black via-agency-black/55 to-agency-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-agency-black/40 via-transparent to-agency-black/35" />
      </div>

      <motion.div
        variants={reduceMotion ? reducedStagger : staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 mx-auto w-full max-w-7xl drop-shadow-[0_8px_24px_rgba(20,20,20,0.65)]"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-6 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow"
        >
          Full-service creative agency
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="hero-headline max-w-5xl font-display font-extrabold uppercase tracking-editorial-tight text-agency-white"
        >
          Creative Whoppers —{" "}
          <span className="text-agency-yellow italic">Crafting Memorable Brand Experiences</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-8 max-w-2xl font-sans text-editorial-sub leading-relaxed text-agency-white/70"
        >
          Creative Whoppers is a full-service creative agency helping brands, institutions and
          governments design memorable experiences — from live events and exhibitions to films,
          digital platforms and marketing campaigns.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-4">
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

        <motion.a
          variants={fadeInUp}
          href="#about-snapshot"
          className="mt-16 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-agency-white/55 hover:text-agency-yellow"
        >
          <ArrowDown className="h-4 w-4" />
          Scroll
        </motion.a>
      </motion.div>
    </section>
  );
}

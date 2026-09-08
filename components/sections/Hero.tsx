"use client";

import React from "react";
import Link from "next/link";
import FadeImage from "@/components/media/FadeImage";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import {
  ctaHover,
  ctaRest,
  ctaTap,
  ctaTransition,
  easings,
  fadeInUp,
  headlineBlock,
  headlineLine,
  headlineWord,
  reducedStagger,
  reducedWord,
  staggerContainer,
} from "@/lib/animations";

const Scene3D = dynamic(() => import("@/components/canvas/Scene3D"), {
  ssr: false,
});

const ParticleField = dynamic(() => import("@/components/canvas/ParticleField"), {
  ssr: false,
});

const MotionLink = motion.create(Link);

const HEADLINE_LINES: { text: string; accent?: boolean }[][] = [
  [
    { text: "We" },
    { text: "Architect" },
    { text: "Experiences", accent: true },
  ],
  [{ text: "That" }, { text: "Defy" }, { text: "The" }, { text: "Ordinary." }],
];

const COLLAGE_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    alt: "Experiential Pop-up Light Installation",
    tag: "01 // EXPERIENTIAL INSTALLATIONS",
    category: "Spatial Pop-Ups & Brand Stunts",
    span: "lg:col-span-6",
    aspect: "aspect-[16/10]",
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    alt: "Commercial Film & Cinematic Production",
    tag: "02 // CINEMA PRODUCTION",
    category: "Commercial Film & 3D VFX",
    span: "lg:col-span-3",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
    alt: "Dynamic Advertising Campaign Visuals",
    tag: "03 // SPATIAL COMPUTING",
    category: "Interactive WebGL & Spatial Media",
    span: "lg:col-span-3",
    aspect: "aspect-[4/5]",
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const wordVariants = reduceMotion ? reducedWord : headlineWord;

  return (
    <section className="relative min-h-svh flex flex-col justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-x-clip">
      {/* Editorial Ambient Signature Yellow & Warm Depth Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-agency-yellow/15 via-agency-coral/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 3D React Three Fiber Background Scene */}
      <Scene3D variant="hero" density="home" className="!inset-x-0 !top-0 !bottom-auto h-[100svh]" />
      <ParticleField count={36} className="z-0 !inset-x-0 !top-0 !bottom-auto h-[100svh]" />

      <motion.div
        variants={reduceMotion ? reducedStagger : staggerContainer}
        initial="initial"
        animate="animate"
        className="hero-copy w-full relative z-10"
      >
        {/* Top Editorial Metadata Banner */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-agency-border mb-8 text-xs font-mono text-agency-muted"
        >
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-agency-yellow inline-block animate-pulse" />
            <span className="text-agency-white font-medium">CREATIVE WHOPPERS</span>
            <span className="text-agency-border-strong">/</span>
            <span>EXPERIENTIAL ADVERTISING STUDIO</span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span className="text-agency-yellow">[ 2026 ROSTER ACTIVE ]</span>
            <span>NEW DELHI // LONDON // NEW YORK</span>
          </div>
        </motion.div>

        {/* Oversized High-Impact Headline — word / line stagger */}
        <motion.h1
          variants={headlineBlock}
          className="hero-headline font-display font-extrabold text-agency-white uppercase tracking-editorial-tight mb-8"
        >
          {HEADLINE_LINES.map((line, lineIndex) => (
            <motion.span
              key={lineIndex}
              variants={headlineLine}
              className="block"
            >
              {line.map((word) => (
                <span
                  key={`${lineIndex}-${word.text}`}
                  className="hero-word-mask"
                >
                  <motion.span
                    variants={wordVariants}
                    className={`inline-block ${
                      word.accent ? "text-agency-yellow italic pr-[0.18em]" : ""
                    }`}
                  >
                    {word.text}
                  </motion.span>
                </span>
              ))}
            </motion.span>
          ))}
        </motion.h1>

        {/* One-Line Value Proposition Subheadline & CTA Actions */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-2 pb-12"
        >
          <div className="lg:col-span-7">
            <p className="text-agency-muted text-editorial-sub max-w-2xl font-sans leading-relaxed">
              High-velocity creative production, spatial computing, and bold experiential
              advertising engineered to stop audiences in their tracks.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:justify-end">
            <MotionLink
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-agency-yellow text-agency-black font-display font-bold text-sm tracking-wider uppercase transition-colors duration-300 hover:bg-agency-yellow-hover"
              initial="rest"
              animate="rest"
              whileHover={reduceMotion ? undefined : "hover"}
              whileTap={reduceMotion ? undefined : "tap"}
              variants={{
                rest: ctaRest,
                hover: ctaHover,
                tap: ctaTap,
              }}
              transition={ctaTransition}
            >
              <span>View Our Work</span>
              <motion.span
                variants={{
                  rest: { rotate: 0 },
                  hover: { rotate: 45 },
                  tap: { rotate: 45 },
                }}
                transition={{ duration: 0.32, ease: easings.outSoft }}
                className="inline-flex"
              >
                <ArrowDownRight className="w-4 h-4" />
              </motion.span>
            </MotionLink>

            <MotionLink
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-agency-border bg-agency-surface/60 text-agency-white font-medium text-sm tracking-wide hover:text-agency-yellow hover:bg-agency-surface"
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.02, borderColor: "rgba(248, 214, 37, 0.85)" }
              }
              whileTap={reduceMotion ? undefined : { scale: 0.975 }}
              transition={{ duration: 0.28, ease: easings.outSoft }}
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </MotionLink>
          </div>
        </motion.div>

        {/* Asymmetric Editorial Hero Image Collage */}
        <motion.div
          variants={fadeInUp}
          className="pt-4 border-t border-agency-border grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          {COLLAGE_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`${img.span} group relative rounded-2xl overflow-hidden bg-agency-surface/40 border border-agency-border hover:border-agency-yellow/50 transition-all duration-500`}
            >
              {/* Image Container with Dark Vignette */}
              <div className={`relative w-full ${img.aspect} overflow-hidden`}>
                <FadeImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-[transform,filter,opacity] duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agency-black/80 via-agency-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Editorial Card Metadata */}
              <div className="p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-editorial-wide text-agency-yellow">
                    {img.tag}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-agency-muted group-hover:text-agency-yellow transition-colors" />
                </div>
                <h3 className="font-display font-bold text-sm text-agency-white group-hover:text-agency-yellow transition-colors">
                  {img.category}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Editorial Baseline Metrics */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-agency-border grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono text-agency-muted"
        >
          <div>
            <span className="block text-agency-white font-semibold mb-1">01 / DISCIPLINE</span>
            Experiential & Guerrilla Stunts
          </div>
          <div>
            <span className="block text-agency-white font-semibold mb-1">02 / INTERACTION</span>
            Spatial Computing & WebGL
          </div>
          <div>
            <span className="block text-agency-white font-semibold mb-1">03 / PERFORMANCE</span>
            Viral Cultural Reach
          </div>
          <div>
            <span className="block text-agency-white font-semibold mb-1">04 / PRODUCTION</span>
            Cinema-Grade Delivery
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

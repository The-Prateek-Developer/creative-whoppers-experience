"use client";

import React from "react";
import Link from "next/link";
import FadeImage from "@/components/media/FadeImage";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { easings } from "@/lib/animations";
import { PROCESS_STAGES } from "@/lib/process";
import { CLIENT_SECTORS } from "@/lib/services-tree";

const MILESTONES = [
  { year: "2014+", title: "Studio founded", detail: "A creative studio built around branding, events and production." },
  { year: "2018+", title: "National campaigns", detail: "Film and communications work for government and institutional briefs." },
  { year: "2022+", title: "Heritage & museums", detail: "Digitization and visitor experiences for cultural and defence institutions." },
  { year: "Today", title: "Four pillars, one roof", detail: "Experience design, production, digital and marketing as a full-service agency." },
];

const VALUES = [
  { title: "Purpose", detail: "Work that connects people, communicates ideas and leaves a lasting impact." },
  { title: "Craft", detail: "Cinema-grade production, spatial detail and brand systems that hold together." },
  { title: "Precision", detail: "Protocol, logistics and delivery that organisations can trust." },
];

const LEADERSHIP = [
  {
    name: "Mr. Dilip Katariya",
    role: "Co-Founder & Creative Director",
    experience: "16+ Years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "A creative entrepreneur with 16+ years of mastery in branding, design, and visual communication. Passionate about building impactful brands through strategic thinking, innovation, and human-centered design, including contribution to the Hollywood feature film 'The Time is... Now!'.",
  },
  {
    name: "Mr. Khaalid Naik",
    role: "Co-Founder & Executive Director",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    bio: "A multidisciplinary entrepreneur with 10+ years across live events, media production, filmmaking and marketing. He combines creative thinking with strategic execution for businesses, institutions and state governments.",
  },
];

export default function AboutClient() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full overflow-hidden">
      <section className="relative flex min-h-[70vh] items-center border-b border-agency-border px-6 pb-20 pt-24 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-agency-yellow/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easings.outPremium }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-agency-yellow/30 bg-agency-white/[0.06] px-3.5 py-1.5 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Our story, mission and team
          </motion.p>
          <motion.h1
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: easings.outPremium, delay: 0.05 }}
            className="font-display text-display-xl font-extrabold uppercase tracking-editorial-tight text-agency-white"
          >
            About Creative Whoppers
          </motion.h1>
          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: easings.outPremium, delay: 0.1 }}
            className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-agency-white/65"
          >
            How Creative Whoppers grew from a creative studio into a full-service agency
            delivering experience design, production and marketing under one roof.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:px-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-agency-border lg:col-span-6">
          <FadeImage
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1400&auto=format&fit=crop"
            alt="Live event production and stage design"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-6">
          <h2 className="mb-4 font-display text-3xl font-extrabold uppercase text-agency-white">Our story</h2>
          <p className="mb-4 font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
            We design experiences that people remember. For over a decade we have partnered with
            brands, government organisations, educational institutions and cultural organisations
            to turn ideas into events, films, digital platforms and campaigns.
          </p>
          <p className="font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
            Great experiences don&apos;t just happen — they&apos;re designed. Strategy, creativity,
            technology and execution sit together so briefs survive from first conversation to
            final delivery.
          </p>
          <div className="mt-10 space-y-6 border-t border-agency-border pt-8">
            {MILESTONES.map((item) => (
              <div key={item.year} className="grid grid-cols-[5rem_1fr] gap-4">
                <span className="font-mono text-xs text-agency-yellow">{item.year}</span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-agency-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-agency-white/55">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-agency-border bg-agency-white/[0.03] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 font-display text-display-xl font-extrabold uppercase text-agency-white">
            Mission & vision
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-agency-border p-8">
              <h3 className="mb-4 font-display text-xl font-bold uppercase text-agency-yellow">Our mission</h3>
              <p className="font-sans text-sm leading-relaxed text-agency-white/70">
                To design, create and amplify meaningful experiences that connect people, communicate
                ideas and create lasting impact — from physical spaces and live events to multimedia,
                digital experiences and marketing.
              </p>
            </div>
            <div className="rounded-2xl border border-agency-border p-8">
              <h3 className="mb-4 font-display text-xl font-bold uppercase text-agency-yellow">Our vision</h3>
              <p className="font-sans text-sm leading-relaxed text-agency-white/70">
                To become a leading creative experience company, shaping how organisations connect
                with people through ideas, stories, technology and experiences that are not only
                memorable, but meaningful.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-xl border border-agency-border p-6">
                <h3 className="mb-2 font-display text-sm font-bold uppercase text-agency-white">{value.title}</h3>
                <p className="text-sm text-agency-white/55">{value.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <h2 className="mb-4 font-display text-display-xl font-extrabold uppercase text-agency-white">Our approach</h2>
        <p className="mb-12 max-w-2xl font-sans text-sm text-agency-white/60">
          A four-stage approach — Discover, Design, Deliver, Sustain — that takes every project
          from strategy through to long-term growth.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROCESS_STAGES.map((stage) => (
            <div key={stage.id} className="rounded-2xl border border-agency-border p-8">
              <span className="font-mono text-xs text-agency-yellow">{stage.number}</span>
              <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-agency-white">
                {stage.title}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-agency-white/50">
                {stage.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-agency-white/60">{stage.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-agency-border px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 font-display text-3xl font-extrabold uppercase text-agency-white">
            What sets us apart
          </h2>
          <p className="mb-8 max-w-2xl text-sm text-agency-white/60">
            An end-to-end creative agency spanning experience design, production, digital and
            marketing — trusted by corporate, government, NGO and institutional clients.
          </p>
          <div className="flex flex-wrap gap-2">
            {CLIENT_SECTORS.map((sector) => (
              <span
                key={sector}
                className="inline-flex items-center gap-2 rounded-full border border-agency-border px-4 py-2 font-mono text-xs uppercase text-agency-white/70"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-agency-yellow" />
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <h2 className="mb-12 font-display text-display-xl font-extrabold uppercase text-agency-white">
          Meet the team
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {LEADERSHIP.map((person) => (
            <article key={person.name} className="overflow-hidden rounded-3xl border border-agency-border">
              <div className="relative aspect-[16/10]">
                <FadeImage src={person.image} alt={person.name} fill sizes="50vw" className="object-cover grayscale" />
              </div>
              <div className="p-8">
                <p className="font-mono text-[11px] uppercase text-agency-yellow">{person.experience}</p>
                <h3 className="mt-2 font-display text-2xl font-extrabold uppercase text-agency-white">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm text-agency-white/55">{person.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-agency-white/65">{person.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-agency-border px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 font-display text-3xl font-extrabold uppercase text-agency-white">Recognition</h2>
          <p className="mb-8 max-w-xl text-sm text-agency-white/60">
            Awards, certifications and press coverage recognising Creative Whoppers&apos; work in
            experience design and brand marketing.
          </p>
          <ul className="space-y-3 font-sans text-sm text-agency-white/70">
            <li>Hollywood feature contribution — The Time is... Now!</li>
            <li>National broadcast campaigns for government skill and public programmes</li>
            <li>Museum digitization for defence heritage sites in Leh and beyond</li>
          </ul>
          <Link
            href="/contact-us"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-agency-yellow px-8 py-4 font-display text-xs font-bold uppercase tracking-wider text-agency-black"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

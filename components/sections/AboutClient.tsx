"use client";

import React from "react";
import FadeImage from "@/components/media/FadeImage";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { easings } from "@/lib/animations";
import { PROCESS_STAGES } from "@/lib/process";
import TeamGrid from "@/components/sections/TeamGrid";

const VALUES = [
  { title: "Purpose", detail: "Work that connects people, communicates ideas and leaves a lasting impact." },
  { title: "Craft", detail: "Cinema-grade production, spatial detail and brand systems that hold together." },
  { title: "Precision", detail: "Protocol, logistics and delivery that organisations can trust." },
];

const TEAM = [
  {
    name: "Khaalid Naik",
    role: "Co-Founder & Executive Director",
    experience: "Leadership",
    image: "/images/team/khaalid-naik.png",
    bio: "A multidisciplinary entrepreneur across live events, media production, filmmaking and marketing for businesses, institutions and governments.",
  },
  {
    name: "Dilip Katariya",
    role: "Co-Founder & Creative Director",
    experience: "Leadership",
    image: "/images/team/dilip-katariya.png",
    bio: "Leads branding, design and visual communication — including contribution to the Hollywood feature film 'The Time is... Now!'.",
  },
  {
    name: "Imran Haider",
    role: "Production Designer",
    experience: "Experience Design",
    image: "/images/team/imran-haider.png",
    bio: "Shapes stage, spatial and production design so live experiences feel intentional and on-brand.",
  },
  {
    name: "Ashima Kumar",
    role: "Brand Marketing Manager",
    experience: "Brand Marketing",
    image: "/images/team/ashima-kumar.png",
    bio: "Builds brand presence, campaigns and audience engagement across digital and social channels.",
  },
  {
    name: "Umar Bin Ahad",
    role: "Cinematographer",
    experience: "Creative Production",
    image: "/images/team/umar-bin-ahad.png",
    bio: "Captures films, events and brand stories with cinema-grade cinematography.",
  },
  {
    name: "Ruchika Khatri",
    role: "Graphic and UI Designer",
    experience: "Design",
    image: "/images/team/ruchika-khatri.png",
    bio: "Designs brand systems, graphic identities and digital interfaces that stay consistent across touchpoints.",
  },
  {
    name: "Shoaib Zaidi",
    role: "Content Writer",
    experience: "Content",
    image: "/images/team/shoaib-zaidi.png",
    bio: "Writes narratives, scripts and campaign copy that carry the brief from strategy to screen.",
  },
  {
    name: "Anand Mohan Gupta",
    role: "Video Editor",
    experience: "Post-Production",
    image: "/images/team/anand-mohan-gupta.png",
    bio: "Edits films, event films and digital cutdowns into polished, platform-ready stories.",
  },
  {
    name: "Hilal Bhat",
    role: "Photographer",
    experience: "Photography",
    image: "/images/team/hilal-bhat.png",
    bio: "Documents events, people and places with photography built for campaigns and archives.",
  },
  {
    name: "Rohan Sonker",
    role: "Creative Designer",
    experience: "Design",
    image: "/images/team/rohan-sonker.png",
    bio: "Creates campaign visuals, collateral and brand applications for live and digital work.",
  },
  {
    name: "Jitendra Singh",
    role: "Drone Pilot",
    experience: "Aerial",
    image: "/images/team/jitendra-singh.png",
    bio: "Captures aerial photography and videography that add scale to events, venues and heritage sites.",
  },
];

export default function AboutClient() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full overflow-x-hidden">
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
            Who we are
          </motion.p>
          <motion.h1
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: easings.outPremium, delay: 0.05 }}
            className="page-heading mx-auto font-display text-display-xl font-extrabold uppercase tracking-editorial-tight text-agency-white"
          >
            About <span className="text-agency-yellow">Creative</span> Whoppers
          </motion.h1>
          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: easings.outPremium, delay: 0.1 }}
            className="page-heading-lead mx-auto mt-8 font-sans text-base leading-relaxed text-agency-white/65"
          >
            We believe great experiences don&apos;t just happen. They&apos;re designed.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:px-12">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-agency-border lg:col-span-6">
          <FadeImage
            src="/images/site/conference.jpg"
            alt="Live event production and stage design"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-6">
          <h2 className="section-heading mb-5 text-agency-white">Who we are</h2>
          <p className="mb-4 font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
            We believe great experiences don&apos;t just happen. They&apos;re designed. Every
            memorable experience starts with an idea, but it takes strategy, creativity, technology
            and flawless execution to bring that idea to life. That&apos;s where we come in.
          </p>
          <p className="font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
            From a stage and a screen to an interactive space, we bring together creative thinking
            and execution under one roof to create experiences that connect with people, communicate
            ideas and create lasting impact.
          </p>
        </div>
      </section>

      <section className="border-y border-agency-border bg-agency-white/[0.03] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-heading mb-12 text-agency-white">
            Mission & vision
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-agency-border p-8">
              <h3 className="mb-4 font-display text-xl font-semibold uppercase text-agency-yellow">Our mission</h3>
              <p className="font-sans text-sm leading-relaxed text-agency-white/70">
                To design, create and amplify meaningful experiences that connect people, communicate
                ideas and create lasting impact.
              </p>
            </div>
            <div className="rounded-2xl border border-agency-border p-8">
              <h3 className="mb-4 font-display text-xl font-semibold uppercase text-agency-yellow">Our vision</h3>
              <p className="font-sans text-sm leading-relaxed text-agency-white/70">
                To become a leading creative experience company, shaping how organisations connect
                with people through ideas, stories, technology and experiences.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-xl border border-agency-border p-6">
                <h3 className="mb-2 font-display text-xl font-semibold uppercase text-agency-white">{value.title}</h3>
                <p className="text-sm text-agency-white/55">{value.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <h2 className="section-heading mb-5 text-agency-white">Our approach</h2>
        <p className="mb-12 max-w-2xl font-sans text-sm text-agency-white/60">
          Discover → Design → Deliver → Amplify. Understand before we create, turn ideas into
          experiences, create with precision, and make the experience go further.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROCESS_STAGES.map((stage) => (
            <div key={stage.id} className="rounded-2xl border border-agency-border p-8">
              <span className="font-mono text-xs text-agency-yellow">{stage.number}</span>
              <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-tight text-agency-white">
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

      <section className="border-t border-agency-border py-24">
        <div className="mx-auto mb-10 max-w-5xl px-6 lg:px-12">
          <h2 className="section-heading text-agency-white">
            Meet the team
          </h2>
        </div>
        <TeamGrid people={TEAM} />
      </section>
    </div>
  );
}

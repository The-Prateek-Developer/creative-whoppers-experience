"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Sparkles,
  Compass,
  Film,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { easings } from "@/lib/animations";

const Scene3D = dynamic(() => import("@/components/canvas/Scene3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />,
});

const PILLARS = [
  {
    number: "01",
    title: "Strategy & Purpose",
    subtitle: "Meaning Over Noise",
    icon: Compass,
    description:
      "We begin every campaign by identifying the undeniable cultural truth. We reject superficial vanity metrics in favor of work that earns organic loyalty and permanent recall.",
  },
  {
    number: "02",
    title: "Cinematic & Spatial Craft",
    subtitle: "Beyond the Flat Screen",
    icon: Film,
    description:
      "From national television commercial cinematography and 3D fluid simulations to extreme-altitude museum installations, we treat every touchpoint as a museum-grade visual spectacle.",
  },
  {
    number: "03",
    title: "Turnkey Execution Agility",
    subtitle: "Flawless Production Velocity",
    icon: Zap,
    description:
      "Strategy, scripting, staging, 3D CGI, live broadcast uplinks, and post-production live under one unified roof. We eliminate bureaucratic handoffs so bold ideas survive to final delivery.",
  },
];

const LEADERSHIP = [
  {
    name: "Mr. Dilip Katariya",
    role: "Co-Founder & Creative Director",
    experience: "16+ Years Experience",
    bio: "A creative entrepreneur with 16+ years of mastery in branding, design, and visual communication. Passionate about building impactful brands through strategic thinking, innovation, and human-centered design, with experience contributing to global creative projects, including the acclaimed Hollywood feature film 'The Time is... Now!'.",
    badge: "Hollywood Feature VFX & Design Credit",
    stats: "16+ Years / Global Brand Systems",
  },
  {
    name: "Mr. Khaalid Naik",
    role: "Co-Founder & Executive Director",
    experience: "10+ Years Experience",
    bio: "A multidisciplinary entrepreneur and creative professional with 10+ years of experience across high-profile live events, media production, filmmaking, and marketing. He combines creative thinking with strategic execution to develop meaningful experiences, engaging media, and impactful solutions for businesses, institutions, and state governments.",
    badge: "National Broadcast & Diplomatic Director",
    stats: "10+ Years / State & Diplomatic Summits",
  },
];

const CLIENT_CREDENTIALS = [
  {
    name: "European Union in India",
    category: "Diplomatic & Sustainability",
    detail: "Cycling4Life Sustainability Campaign & Film",
  },
  {
    name: "Ministry of Skill Development (Govt of India)",
    category: "Public Advocacy & Television",
    detail: "National Commercial Broadcast across 28 States",
  },
  {
    name: "Indian Armed Forces / THE ANTS",
    category: "Defence & Spatial Museums",
    detail: "Hall of Fame Leh, Ladakh Museum Digitization",
  },
  {
    name: "Russian House / BRICS Youth Forum",
    category: "Diplomatic Summits & Live Events",
    detail: "International Education & Youth Summit",
  },
  {
    name: "Rus Education",
    category: "Higher Education & Global Outreach",
    detail: "International Brand & Documentary Production",
  },
  {
    name: "Clarion Appliances & Coolers",
    category: "Consumer Tech & Product VFX",
    detail: "Flagship AURA 21 Commercial & CGI Fluid Simulation",
  },
  {
    name: "The Sufi Kathak Foundation",
    category: "Arts, Heritage & Classical Stage",
    detail: "The Rumi Project & Kabir Kalaam Stage Broadcast",
  },
  {
    name: "Lincoln American University",
    category: "Global Healthcare & Academia",
    detail: "Public Health Awareness & Motion Design Series",
  },
];

export default function AboutClient() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative w-full overflow-hidden">
      {/* 1. HERO SECTION WITH EMBEDDED 3D SCENE */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-20 px-6 lg:px-12 border-b border-agency-border overflow-hidden">
        {/* Dynamic 3D Canvas Background */}
        <Scene3D variant="philosophy" className="!z-0 opacity-80" />

        {/* Subtle radial lighting overlay */}
        <div
          className="pointer-events-none absolute inset-0 bg-radial-gradient"
          aria-hidden
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, ease: easings.outPremium }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agency-surface border border-agency-violet/30 text-agency-violet-light font-mono text-xs uppercase tracking-editorial-wide mb-8 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>AGENCY GENESIS & PHILOSOPHY</span>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08, ease: easings.outPremium }}
            className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-agency-white uppercase tracking-editorial-tight leading-tight mb-8 max-w-4xl mx-auto"
          >
            We Design Experiences That{" "}
            <span className="text-agency-violet italic">People Remember.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.16, ease: easings.outPremium }}
            className="text-agency-white/85 text-lg lg:text-xl font-sans max-w-3xl mx-auto leading-relaxed mb-12"
          >
            We are a creative experience company helping forward-thinking organisations
            design, produce, and amplify memorable moments through high-craft events,
            cinematic video, spatial environments, and integrated marketing campaigns.
          </motion.p>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.24, ease: easings.outPremium }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-agency-violet text-agency-black font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-agency-violet-hover hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-agency-border text-agency-white font-medium text-sm hover:border-agency-violet hover:text-agency-violet-light transition-colors"
            >
              <span>Initiate Collaboration</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. MANIFESTO & BELIEF STATEMENT */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-editorial-wide text-agency-violet-light block mb-4">
              [ THE CORE CREED ]
            </span>
            <h2 className="font-display font-extrabold text-display-lg text-agency-white uppercase tracking-editorial-tight leading-tight mb-6">
              Great Experiences Don&apos;t Just Happen.{" "}
              <span className="text-agency-violet">They&apos;re Designed.</span>
            </h2>
            <div className="h-1 w-20 bg-agency-violet mb-8" />
            <p className="text-agency-muted font-sans text-base leading-relaxed mb-6">
              Every memorable experience starts with an idea, but it takes strategy,
              creativity, technology, and flawless execution to bring that idea to life.
            </p>
            <p className="text-agency-muted font-sans text-base leading-relaxed">
              From a stage and a screen to an interactive physical space, we bring
              together creative thinking and end-to-end execution under one roof to
              create work that connects with people, communicates ideas, and creates
              lasting impact.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl bg-agency-surface/60 border border-agency-border flex flex-col justify-between hover:border-agency-violet/40 transition-colors">
              <div>
                <span className="text-4xl font-display font-extrabold text-agency-violet-light block mb-2">
                  16+
                </span>
                <h4 className="font-display font-bold text-lg text-agency-white uppercase mb-2">
                  Years of Creative Mastery
                </h4>
                <p className="text-agency-muted text-xs font-sans leading-relaxed">
                  Decades of leadership across brand architecture, Hollywood title VFX, and
                  multidisciplinary media production.
                </p>
              </div>
              <span className="text-[10px] font-mono text-agency-muted/60 uppercase mt-6 pt-4 border-t border-agency-border block">
                [ VERIFIED TRACK RECORD ]
              </span>
            </div>

            <div className="p-8 rounded-xl bg-agency-surface/60 border border-agency-border flex flex-col justify-between hover:border-agency-violet/40 transition-colors">
              <div>
                <span className="text-4xl font-display font-extrabold text-agency-violet-light block mb-2">
                  100+
                </span>
                <h4 className="font-display font-bold text-lg text-agency-white uppercase mb-2">
                  Major Campaigns Executed
                </h4>
                <p className="text-agency-muted text-xs font-sans leading-relaxed">
                  Delivered for sovereign ministries, diplomatic missions, Fortune
                  enterprises, and global cultural foundations.
                </p>
              </div>
              <span className="text-[10px] font-mono text-agency-muted/60 uppercase mt-6 pt-4 border-t border-agency-border block">
                [ STATE & COMMERCIAL SCALE ]
              </span>
            </div>

            <div className="p-8 rounded-xl bg-agency-surface/60 border border-agency-border flex flex-col justify-between hover:border-agency-violet/40 transition-colors">
              <div>
                <span className="text-4xl font-display font-extrabold text-agency-violet-light block mb-2">
                  40M+
                </span>
                <h4 className="font-display font-bold text-lg text-agency-white uppercase mb-2">
                  Audience Impressions
                </h4>
                <p className="text-agency-muted text-xs font-sans leading-relaxed">
                  Direct engagement generated across television broadcasts, live stage
                  events, and high-velocity digital campaigns.
                </p>
              </div>
              <span className="text-[10px] font-mono text-agency-muted/60 uppercase mt-6 pt-4 border-t border-agency-border block">
                [ ORGANIC CULTURAL REACH ]
              </span>
            </div>

            <div className="p-8 rounded-xl bg-agency-surface/60 border border-agency-border flex flex-col justify-between hover:border-agency-violet/40 transition-colors">
              <div>
                <span className="text-4xl font-display font-extrabold text-agency-violet-light block mb-2">
                  24/7
                </span>
                <h4 className="font-display font-bold text-lg text-agency-white uppercase mb-2">
                  Production Agility
                </h4>
                <p className="text-agency-muted text-xs font-sans leading-relaxed">
                  Full in-house pipeline: multi-cam studio cinematography, 3D CGI
                  rendering, live satellite uplink, and spatial staging.
                </p>
              </div>
              <span className="text-[10px] font-mono text-agency-muted/60 uppercase mt-6 pt-4 border-t border-agency-border block">
                [ IN-HOUSE INFRASTRUCTURE ]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PRODUCTION PILLARS */}
      <section className="py-24 px-6 lg:px-12 bg-agency-surface/30 border-y border-agency-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-editorial-wide text-agency-violet-light block mb-3">
                [ HOW WE OPERATE ]
              </span>
              <h2 className="font-display font-extrabold text-display-xl text-agency-white uppercase tracking-tight">
                Our Three Core Pillars.
              </h2>
            </div>
            <p className="text-agency-muted font-sans text-sm max-w-md">
              A unified methodology engineered over a decade of high-stakes creative
              production for discerning global clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="p-8 lg:p-10 rounded-xl bg-agency-black border border-agency-border hover:border-agency-violet/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-xs text-agency-violet-light border border-agency-violet/30 px-2.5 py-1 rounded bg-agency-violet/10">
                        {pillar.number}
                      </span>
                      <Icon className="w-6 h-6 text-agency-muted group-hover:text-agency-violet transition-colors" />
                    </div>
                    <span className="text-xs font-mono text-agency-violet-light uppercase tracking-wider block mb-2">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-agency-white uppercase mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-agency-muted text-sm font-sans leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-agency-border/60 flex items-center justify-between text-xs font-mono text-agency-muted">
                    <span>CREATIVE WHOPPERS STD</span>
                    <span className="text-agency-violet-light">0{pillar.number} {"//"} P</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. THE LEADERSHIP TEAM */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-editorial-wide text-agency-violet-light block mb-3">
            [ THE ARCHITECTS ]
          </span>
          <h2 className="font-display font-extrabold text-display-xl text-agency-white uppercase tracking-tight mb-4">
            The Leadership.
          </h2>
          <p className="text-agency-muted text-base max-w-2xl font-sans">
            Founded and directed by veteran creative entrepreneurs uniting Hollywood-caliber
            visual effects, brand identity design, state broadcast, and experiential production.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {LEADERSHIP.map((leader, i) => (
            <div
              key={i}
              className="p-8 lg:p-12 rounded-2xl bg-agency-surface/40 border border-agency-border hover:border-agency-violet/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display font-black text-2xl lg:text-3xl text-agency-white uppercase group-hover:text-agency-violet transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-mono text-agency-violet-light tracking-wider uppercase mt-1">
                      {leader.role}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-agency-violet/10 border border-agency-violet/30 text-agency-violet-light text-xs font-mono">
                    {leader.experience}
                  </span>
                </div>

                <div className="h-px w-full bg-agency-border mb-6" />

                <p className="text-agency-white/85 text-sm lg:text-base font-sans leading-relaxed mb-8">
                  {leader.bio}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-agency-black/60 border border-agency-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-agency-yellow flex-shrink-0" />
                  <span className="text-xs font-mono text-agency-white uppercase">
                    {leader.badge}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-agency-muted hidden sm:inline-block">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CLIENT & DIPLOMATIC CREDENTIALS MARQUEE */}
      <section className="py-24 px-6 lg:px-12 bg-agency-surface/20 border-t border-agency-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-editorial-wide text-agency-violet-light block mb-3">
              [ TRUSTED CITATIONS ]
            </span>
            <h2 className="font-display font-extrabold text-display-xl text-agency-white uppercase tracking-tight mb-4">
              Trusted by Leading Organizations.
            </h2>
            <p className="text-agency-muted font-sans text-sm">
              From global diplomatic delegations and Union Ministries to commercial
              enterprises and higher education institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_CREDENTIALS.map((cred, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-agency-black border border-agency-border hover:border-agency-violet/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-agency-violet-light uppercase tracking-wider block mb-2">
                    {cred.category}
                  </span>
                  <h4 className="font-display font-bold text-base text-agency-white uppercase mb-2">
                    {cred.name}
                  </h4>
                  <p className="text-xs text-agency-muted font-sans leading-relaxed">
                    {cred.detail}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-agency-border/60 flex items-center justify-between text-[10px] font-mono text-agency-muted">
                  <span>REF / 0{idx + 1}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-agency-violet" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

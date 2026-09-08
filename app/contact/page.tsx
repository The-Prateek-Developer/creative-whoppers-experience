"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { easings } from "@/lib/animations";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Sparkles,
  Clock,
  ShieldCheck,
  Send,
  Building2,
} from "lucide-react";

const DISCIPLINES: { name: string; color: "coral" | "cyan" | "violet" | "yellow" }[] = [
  { name: "Film & Commercial Production", color: "coral" },
  { name: "Experiential & Spatial Environments", color: "cyan" },
  { name: "3D CGI, VFX & Motion Design", color: "coral" },
  { name: "Brand Strategy & Visual Identity", color: "yellow" },
  { name: "Social Media & Performance", color: "violet" },
  { name: "Technology & Creative Code", color: "cyan" },
];

const BUDGET_RANGES = [
  "< $25,000",
  "$25,000 – $75,000",
  "$75,000 – $150,000",
  "$150,000+",
];

const TIMELINES = [
  "Immediate (< 30 Days)",
  "Q4 2026 / Q1 2027",
  "Flexible / Planning Phase",
];

export default function ContactPage() {
  const reduceMotion = useReducedMotion();
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    "Experiential & Spatial Environments",
  ]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$25,000 – $75,000");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("Q4 2026 / Q1 2027");
  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const toggleDiscipline = (item: string) => {
    if (selectedDisciplines.includes(item)) {
      if (selectedDisciplines.length > 1) {
        setSelectedDisciplines(selectedDisciplines.filter((d) => d !== item));
      }
    } else {
      setSelectedDisciplines([...selectedDisciplines, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-8 pb-28 max-w-7xl mx-auto px-6 lg:px-12 relative overflow-hidden">
      {/* Subtle Ambient Depth Glows */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 bg-agency-coral/10 rounded-full blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-24 w-96 h-96 bg-agency-cyan/10 rounded-full blur-3xl"
        aria-hidden
      />

      {/* Header Statement */}
      <div className="mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agency-surface border border-agency-yellow/30 text-agency-yellow font-mono text-xs uppercase tracking-editorial-wide mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PRODUCTION INTAKE & COLLABORATION</span>
        </div>
        <h1 className="font-display font-extrabold text-display-xl lg:text-display-2xl text-agency-white uppercase tracking-editorial-tight mb-6 leading-none">
          Start A <span className="bg-gradient-to-r from-agency-yellow via-agency-coral-light to-agency-cyan bg-clip-text text-transparent italic">Project.</span>
        </h1>
        <p className="text-agency-white/80 text-base lg:text-lg max-w-2xl font-sans leading-relaxed">
          Tell us about your upcoming brief, timeline, and campaign objectives.
          Our executive production team in New Delhi responds within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
        {/* Left Column: Interactive Intake Form */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  transition: { duration: 0.22, ease: easings.exitFast },
                }}
                transition={{ duration: 0.48, ease: easings.outPremium }}
                className="p-10 lg:p-14 rounded-2xl bg-agency-surface/60 border border-agency-yellow/40 flex flex-col items-center text-center shadow-2xl"
              >
                <div className="w-20 h-20 rounded-full bg-agency-yellow/10 border border-agency-yellow/30 flex items-center justify-center mb-6 text-agency-yellow">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <span className="text-xs font-mono uppercase tracking-editorial-wide text-agency-yellow mb-2">
                  [ TRANSMISSION RECEIVED ]
                </span>
                <h3 className="font-display font-black text-3xl text-agency-white uppercase mb-4">
                  Brief Logged in Studio Dispatch.
                </h3>
                <p className="text-agency-muted text-sm font-sans max-w-md leading-relaxed mb-8">
                  Thank you for reaching out. A lead creative producer will contact you
                  shortly with technical feasibility, initial timeline projections, and a
                  custom production roadmap.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 rounded-full border border-agency-border hover:border-agency-yellow text-agency-white font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  Submit Another Brief ↺
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* 1. Core Disciplines */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-editorial-wide text-agency-yellow mb-4">
                    01 {"//"} Select Core Disciplines *
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {DISCIPLINES.map((d) => {
                      const isSelected = selectedDisciplines.includes(d.name);
                      const activeCls =
                        d.color === "coral"
                          ? "bg-agency-coral text-agency-black font-bold border-agency-coral shadow-[0_0_15px_rgba(255,107,53,0.3)]"
                          : d.color === "cyan"
                          ? "bg-agency-cyan text-agency-black font-bold border-agency-cyan shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                          : d.color === "violet"
                          ? "bg-agency-violet text-agency-black font-bold border-agency-violet shadow-[0_0_15px_rgba(179,102,255,0.3)]"
                          : "bg-agency-yellow text-agency-black font-bold border-agency-yellow shadow-[0_0_15px_rgba(248,214,37,0.3)]";

                      return (
                        <button
                          key={d.name}
                          type="button"
                          onClick={() => toggleDiscipline(d.name)}
                          className={`px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                            isSelected
                              ? activeCls
                              : "bg-agency-surface/70 text-agency-white/80 border-agency-border hover:border-agency-border-strong hover:text-agency-white"
                          }`}
                        >
                          {isSelected ? "✓ " : "+ "}
                          {d.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Client Details (Animated Focus Fields) */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-editorial-wide text-agency-yellow mb-4">
                    02 {"//"} Organization & Contact Details *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="relative">
                      <label
                        htmlFor="contact-name"
                        className={`block text-[11px] font-mono uppercase mb-1.5 transition-colors ${
                          activeField === "name"
                            ? "text-agency-yellow"
                            : "text-agency-muted"
                        }`}
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        required
                        type="text"
                        onFocus={() => setActiveField("name")}
                        onBlur={() => setActiveField(null)}
                        placeholder="e.g. Maya Lin"
                        className={`w-full px-4 py-3.5 rounded-lg bg-agency-surface/80 border text-agency-white placeholder-agency-muted/40 font-sans text-sm focus:outline-none transition-all duration-300 ${
                          activeField === "name"
                            ? "border-agency-yellow ring-1 ring-agency-yellow/40 bg-agency-surface"
                            : "border-agency-border hover:border-agency-border-strong"
                        }`}
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label
                        htmlFor="contact-email"
                        className={`block text-[11px] font-mono uppercase mb-1.5 transition-colors ${
                          activeField === "email"
                            ? "text-agency-yellow"
                            : "text-agency-muted"
                        }`}
                      >
                        Business Email *
                      </label>
                      <input
                        id="contact-email"
                        required
                        type="email"
                        onFocus={() => setActiveField("email")}
                        onBlur={() => setActiveField(null)}
                        placeholder="maya@brand.com"
                        className={`w-full px-4 py-3.5 rounded-lg bg-agency-surface/80 border text-agency-white placeholder-agency-muted/40 font-sans text-sm focus:outline-none transition-all duration-300 ${
                          activeField === "email"
                            ? "border-agency-yellow ring-1 ring-agency-yellow/40 bg-agency-surface"
                            : "border-agency-border hover:border-agency-border-strong"
                        }`}
                      />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label
                        htmlFor="contact-phone"
                        className={`block text-[11px] font-mono uppercase mb-1.5 transition-colors ${
                          activeField === "phone"
                            ? "text-agency-yellow"
                            : "text-agency-muted"
                        }`}
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        onFocus={() => setActiveField("phone")}
                        onBlur={() => setActiveField(null)}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3.5 rounded-lg bg-agency-surface/80 border text-agency-white placeholder-agency-muted/40 font-sans text-sm focus:outline-none transition-all duration-300 ${
                          activeField === "phone"
                            ? "border-agency-yellow ring-1 ring-agency-yellow/40 bg-agency-surface"
                            : "border-agency-border hover:border-agency-border-strong"
                        }`}
                      />
                    </div>

                    {/* Organization */}
                    <div className="relative">
                      <label
                        htmlFor="contact-org"
                        className={`block text-[11px] font-mono uppercase mb-1.5 transition-colors ${
                          activeField === "org"
                            ? "text-agency-yellow"
                            : "text-agency-muted"
                        }`}
                      >
                        Company / Agency / Brand *
                      </label>
                      <input
                        id="contact-org"
                        required
                        type="text"
                        onFocus={() => setActiveField("org")}
                        onBlur={() => setActiveField(null)}
                        placeholder="e.g. EU Delegation / Acme Corp"
                        className={`w-full px-4 py-3.5 rounded-lg bg-agency-surface/80 border text-agency-white placeholder-agency-muted/40 font-sans text-sm focus:outline-none transition-all duration-300 ${
                          activeField === "org"
                            ? "border-agency-yellow ring-1 ring-agency-yellow/40 bg-agency-surface"
                            : "border-agency-border hover:border-agency-border-strong"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Budget & Timeline */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-editorial-wide text-agency-yellow mb-4">
                    03 {"//"} Budget Allocation & Expected Timeline
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Budget */}
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-agency-muted mb-2">
                        Estimated Budget Tier
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {BUDGET_RANGES.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBudget(b)}
                            className={`px-3 py-2 rounded text-xs font-mono transition-all border ${
                              selectedBudget === b
                                ? "bg-agency-yellow text-agency-black font-bold border-agency-yellow"
                                : "bg-agency-surface/60 text-agency-white/80 border-agency-border hover:border-agency-yellow/40"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-agency-muted mb-2">
                        Target Launch Date
                      </span>
                      <div className="flex flex-col gap-2">
                        {TIMELINES.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTimeline(t)}
                            className={`px-3 py-2 rounded text-xs font-mono text-left transition-all border ${
                              selectedTimeline === t
                                ? "bg-agency-yellow text-agency-black font-bold border-agency-yellow"
                                : "bg-agency-surface/60 text-agency-white/80 border-agency-border hover:border-agency-yellow/40"
                            }`}
                          >
                            {selectedTimeline === t ? "● " : "○ "}
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Brief Overview */}
                <div className="relative">
                  <label
                    htmlFor="contact-message"
                    className={`block text-xs font-mono uppercase tracking-editorial-wide mb-2 transition-colors ${
                      activeField === "message"
                        ? "text-agency-yellow"
                        : "text-agency-yellow"
                    }`}
                  >
                    04 {"//"} Campaign Brief & Objectives *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                    placeholder="Describe the campaign objectives, scale, target audience, and any visual references..."
                    className={`w-full px-4 py-3.5 rounded-lg bg-agency-surface/80 border text-agency-white placeholder-agency-muted/40 font-sans text-sm focus:outline-none transition-all duration-300 resize-none ${
                      activeField === "message"
                        ? "border-agency-yellow ring-1 ring-agency-yellow/40 bg-agency-surface"
                        : "border-agency-border hover:border-agency-border-strong"
                    }`}
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-agency-yellow text-agency-black font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-agency-yellow-hover hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-agency-yellow/10"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Production Brief</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Verified Studio Details & Availability */}
        <div className="lg:col-span-5 space-y-8">
          {/* Production Availability Banner */}
          <div className="p-8 rounded-2xl border border-agency-cyan/30 bg-agency-cyan/5 relative overflow-hidden">
            <div className="flex items-center gap-2 text-agency-cyan font-mono text-xs uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4" />
              <span>Q2 / Q3 PRODUCTION DISPATCH</span>
            </div>
            <h4 className="font-display font-bold text-lg text-agency-white uppercase mb-2">
              Currently Accepting Select Briefs
            </h4>
            <p className="text-xs text-agency-white/80 font-sans leading-relaxed">
              Our studio pipeline is actively booking experiential productions, national
              commercial broadcasts, and immersive spatial installs for the upcoming quarter.
            </p>
          </div>

          {/* Official Studio HQ Details (From PDF Brief Page 42) */}
          <div className="p-8 rounded-2xl bg-agency-surface/50 border border-agency-border space-y-6">
            <div className="flex items-center justify-between border-b border-agency-border pb-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-agency-yellow" />
                <h3 className="font-display font-bold text-sm text-agency-white uppercase">
                  Studio Headquarters
                </h3>
              </div>
              <span className="text-[10px] font-mono text-agency-muted">NEW DELHI</span>
            </div>

            <div className="flex items-start gap-3.5">
              <MapPin className="w-4 h-4 text-agency-coral mt-1 flex-shrink-0" />
              <div className="text-xs text-agency-white/85 font-sans leading-relaxed">
                <p className="font-semibold text-agency-white mb-0.5">
                  Creative Whoppers Studio
                </p>
                <p className="text-agency-muted">
                  3rd Floor, 211, Okhla Industrial Estate Phase 3 Rd,
                  <br />
                  Okhla Phase III, Okhla Industrial Estate,
                  <br />
                  New Delhi, Delhi 110020
                </p>
              </div>
            </div>

            <div className="h-px bg-agency-border" />

            {/* Direct Phone Lines */}
            <div className="flex items-start gap-3.5">
              <Phone className="w-4 h-4 text-agency-cyan mt-1 flex-shrink-0" />
              <div className="text-xs font-mono">
                <p className="text-agency-muted text-[10px] uppercase mb-1">
                  Direct Producer Lines
                </p>
                <div className="space-y-1">
                  <a
                    href="tel:+919667563175"
                    className="block text-agency-white hover:text-agency-cyan transition-colors"
                  >
                    +91 96675 63175
                  </a>
                  <a
                    href="tel:+919354484098"
                    className="block text-agency-white hover:text-agency-cyan transition-colors"
                  >
                    +91 93544 84098
                  </a>
                </div>
              </div>
            </div>

            <div className="h-px bg-agency-border" />

            {/* Direct Email Lines */}
            <div className="flex items-start gap-3.5">
              <Mail className="w-4 h-4 text-agency-violet mt-1 flex-shrink-0" />
              <div className="text-xs font-mono">
                <p className="text-agency-muted text-[10px] uppercase mb-1">
                  Direct Inquiries
                </p>
                <div className="space-y-1">
                  <a
                    href="mailto:contact@creativewhoppers.com"
                    className="block text-agency-white hover:text-agency-violet-light transition-colors"
                  >
                    contact@creativewhoppers.com
                  </a>
                  <a
                    href="mailto:hello@creativewhoppers.com"
                    className="block text-agency-white hover:text-agency-violet-light transition-colors"
                  >
                    hello@creativewhoppers.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Turnkey Assurance Badge */}
          <div className="p-6 rounded-2xl bg-agency-black border border-agency-border flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-agency-yellow/10 flex items-center justify-center text-agency-yellow flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <h5 className="font-display font-bold text-agency-white uppercase">
                End-to-End NDA Security
              </h5>
              <p className="text-agency-muted mt-0.5">
                All pre-production briefs and unreleased brand assets are protected under standard non-disclosure protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

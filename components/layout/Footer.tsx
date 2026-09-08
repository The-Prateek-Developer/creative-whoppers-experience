"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Mail, MapPin } from "lucide-react";

const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://instagram.com", handle: "@creativewhoppers" },
  { name: "LinkedIn", href: "https://linkedin.com", handle: "creative-whoppers" },
  { name: "Twitter / X", href: "https://twitter.com", handle: "@creativewhoppers" },
  { name: "Behance", href: "https://behance.net", handle: "creativewhoppers" },
  { name: "Vimeo", href: "https://vimeo.com", handle: "creativewhoppers" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-agency-surface border-t border-agency-border mt-32 relative overflow-hidden">
      {/* Decorative Radial Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-agency-yellow/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-agency-coral/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-agency-cyan/5 rounded-full blur-3xl pointer-events-none" />

      {/* Integrated Closing CTA Banner */}
      <div className="border-b border-agency-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="relative rounded-2xl bg-agency-black border border-agency-border-strong p-8 sm:p-12 lg:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-agency-coral/15 via-agency-yellow/10 to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-agency-cyan/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agency-yellow/10 border border-agency-yellow/30 text-agency-yellow text-xs font-mono mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>HAVE A BRIEF IN MIND?</span>
                </div>
                <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-agency-white uppercase tracking-tight mb-4">
                  Let’s Talk Production.
                </h2>
                <p className="text-agency-muted text-sm sm:text-base font-sans leading-relaxed">
                  Whether launching a groundbreaking brand spectacle, commercial film, or interactive spatial experience, we turn ambitious concepts into cultural events.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-agency-yellow text-agency-black font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-agency-yellow-hover hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(248,214,37,0.35)]"
                >
                  <span>Start A Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:hello@creativewhoppers.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-agency-border bg-agency-surface text-agency-white text-xs font-mono uppercase tracking-wider hover:border-agency-coral hover:text-agency-coral transition-colors"
                >
                  <Mail className="w-4 h-4 text-agency-coral" />
                  <span>Email Direct</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-agency-border">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-sm bg-agency-yellow flex items-center justify-center font-display font-black text-agency-black text-lg">
                CW
              </div>
              <span className="font-display font-bold text-xl text-agency-white tracking-tight">
                CREATIVE WHOPPERS
              </span>
            </div>
            <p className="text-agency-muted text-sm leading-relaxed mb-6 font-sans max-w-sm">
              Creative production studio and experiential advertising agency. We engineer category-defining brand phenomena, film spectacles, and spatial computing campaigns.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-agency-black border border-agency-border text-xs font-mono text-agency-yellow">
              <span className="w-2 h-2 rounded-full bg-agency-yellow animate-pulse" />
              ACCEPTING SELECT PRODUCTION BRIEFS
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-editorial-wide text-agency-muted font-mono mb-6">
              [ SITE INDEX ]
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              {[
                { name: "Services & Capabilities", href: "/services", hoverClass: "hover:text-agency-coral" },
                { name: "Selected Portfolio Archives", href: "/portfolio", hoverClass: "hover:text-agency-cyan" },
                { name: "Studio Ethos & Philosophy", href: "/about", hoverClass: "hover:text-agency-violet" },
                { name: "Initiate A Brief", href: "/contact", hoverClass: "hover:text-agency-yellow" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`group inline-flex items-center gap-1.5 text-agency-white/80 ${item.hoverClass} transition-colors`}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-editorial-wide text-agency-muted font-mono mb-6">
              [ SOCIAL CHANNELS ]
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {SOCIAL_LINKS.map((item, idx) => {
                const hoverBorder =
                  idx % 4 === 0
                    ? "hover:border-agency-yellow/50 group-hover:text-agency-yellow"
                    : idx % 4 === 1
                    ? "hover:border-agency-coral/50 group-hover:text-agency-coral"
                    : idx % 4 === 2
                    ? "hover:border-agency-cyan/50 group-hover:text-agency-cyan"
                    : "hover:border-agency-violet/50 group-hover:text-agency-violet";

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-lg bg-agency-black/50 border border-agency-border ${hoverBorder.split(" ")[0]} transition-all flex items-center justify-between`}
                  >
                    <span className={`text-xs font-mono text-agency-white/90 ${hoverBorder.split(" ")[1]} transition-colors`}>
                      {item.name}
                    </span>
                    <ArrowUpRight className={`w-3.5 h-3.5 text-agency-muted ${hoverBorder.split(" ")[1]} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`} />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 pt-6 border-t border-agency-border/60 text-xs font-mono text-agency-muted flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-agency-yellow" />
              <span>NEW DELHI / LONDON / NEW YORK</span>
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-agency-muted font-mono">
          <p>© {new Date().getFullYear()} Creative Whoppers. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="text-agency-muted/60">COLOR SYSTEM:</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-agency-yellow">
              <span className="w-2 h-2 rounded-full bg-agency-yellow inline-block" /> YELLOW
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-agency-coral">
              <span className="w-2 h-2 rounded-full bg-agency-coral inline-block" /> CORAL
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-agency-cyan">
              <span className="w-2 h-2 rounded-full bg-agency-cyan inline-block" /> CYAN
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-agency-violet">
              <span className="w-2 h-2 rounded-full bg-agency-violet inline-block" /> VIOLET
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-agency-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-agency-white transition-colors">
              Inquire
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

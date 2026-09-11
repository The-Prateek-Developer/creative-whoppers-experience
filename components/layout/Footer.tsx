"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Mail, MapPin } from "lucide-react";
import { NAP, NAV_LINKS, SITE_DESCRIPTION, WHATSAPP_LINK } from "@/lib/site";
import SocialIcon from "@/components/icons/SocialIcon";
import BrandLogo from "@/components/brand/BrandLogo";

export default function Footer() {
  return (
    <footer className="relative mt-32 w-full overflow-hidden border-t border-agency-border bg-agency-black">
      {/* Integrated Closing CTA Banner */}
      <div className="border-b border-agency-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
          <div className="relative overflow-hidden rounded-2xl border border-agency-border bg-agency-black p-8 sm:p-12 lg:p-16">

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agency-yellow/10 border border-agency-yellow/30 text-agency-yellow text-xs font-mono mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>HAVE A BRIEF IN MIND?</span>
                </div>
                <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-agency-white uppercase tracking-tight mb-4">
                  Let’s Create Together.
                </h2>
                <p className="text-agency-white/55 text-sm sm:text-base font-sans leading-relaxed">
                  Events, film, digital experiences and brand marketing — under one creative agency roof.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  {...WHATSAPP_LINK}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-agency-yellow text-agency-ink font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-agency-yellow hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(248,214,37,0.35)]"
                >
                  <span>Start A Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${NAP.emails[0]}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-agency-border bg-agency-black text-agency-white text-xs font-mono uppercase tracking-wider hover:border-agency-yellow hover:text-agency-yellow transition-colors"
                >
                  <Mail className="w-4 h-4 text-agency-yellow" />
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
            <Link href="/" aria-label="Creative Whoppers home" className="mb-6 inline-flex">
              <BrandLogo size="footer" />
            </Link>
            <p className="text-agency-white/55 text-sm leading-relaxed mb-6 font-sans max-w-sm">
              {SITE_DESCRIPTION}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-agency-black border border-agency-border text-xs font-mono text-agency-yellow">
              <span className="w-2 h-2 rounded-full bg-agency-yellow animate-pulse" />
              ACCEPTING SELECT BRIEFS
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-editorial-wide text-agency-white/55 font-mono mb-6">
              [ SITE INDEX ]
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank" as const, rel: "noopener noreferrer" }
                      : {})}
                    className="group inline-flex items-center gap-1.5 text-agency-white/80 hover:text-agency-yellow transition-colors"
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
            <h4 className="text-xs uppercase tracking-editorial-wide text-agency-white/55 font-mono mb-6">
              [ SOCIAL CHANNELS ]
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {NAP.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-lg border border-agency-border bg-agency-black p-3 transition-all hover:border-agency-yellow/50"
                  >
                    <span className="flex items-center gap-2.5 text-xs font-sans font-medium text-agency-white/90 group-hover:text-agency-yellow transition-colors">
                      <SocialIcon name={item.name} />
                      {item.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-agency-white/55 group-hover:text-agency-yellow group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-agency-white/10 text-xs font-mono text-agency-white/55 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-agency-yellow" />
              <span>
                {NAP.addressLocality.toUpperCase()} / {NAP.addressRegion.toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-agency-white/55 font-mono">
          <p>© {new Date().getFullYear()} Creative Whoppers. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/about-us" className="hover:text-agency-white transition-colors">
              About Us
            </Link>
            <Link href="/contact-us" className="hover:text-agency-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import PortfolioCard from "@/components/sections/PortfolioCard";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { useInViewGate } from "@/hooks/useInViewGate";

export default function PortfolioGrid() {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 4);
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);
  const { ref: gridRef, ready } = useInViewGate();

  return (
    <LayoutGroup id="portfolio-home">
      <section
        ref={sectionRef}
        className="relative mx-auto max-w-7xl border-t border-agency-border px-6 py-16 lg:px-12 lg:py-20"
      >
        <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-agency-yellow/10 blur-3xl" />

        <div
          data-reveal="heading"
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div
              data-reveal-item
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-agency-yellow/30 bg-agency-yellow/10 px-3 py-1 font-mono text-xs text-agency-yellow"
            >
              <Sparkles className="h-3 w-3" />
              <span>Featured work</span>
            </div>
            <h2
              data-reveal-item
              className="font-display text-xl font-semibold tracking-tight text-agency-white"
            >
              Recent <span className="italic text-agency-yellow">Updates</span>
            </h2>
            <p className="mt-3 max-w-xl font-sans text-sm text-agency-white/60">
              A glimpse of recent updates across events, films, branding and digital
              experiences for corporate, government and institutional clients.
            </p>
          </div>
          <Link
            data-reveal-item
            href="/portfolio"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-agency-yellow hover:underline"
          >
            <span>View full portfolio</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {featuredProjects.map((project, index) => {
              const isLarge = index === 0 || index === 3;
              return (
                <PortfolioCard
                  key={project.id}
                  project={project}
                  index={index}
                  ready={ready}
                  imageAspect="aspect-[16/10]"
                  className={isLarge ? "md:col-span-7" : "md:col-span-5"}
                />
              );
            })}
          </AnimatePresence>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-agency-border pt-8 font-mono text-xs text-agency-white/55 sm:flex-row sm:items-center">
          <span>Projects across events, films, branding and digital</span>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-agency-border-strong bg-agency-white/[0.06] px-6 py-3 font-semibold text-agency-yellow transition-all hover:bg-agency-yellow hover:text-agency-ink"
          >
            <span>View full portfolio</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </LayoutGroup>
  );
}

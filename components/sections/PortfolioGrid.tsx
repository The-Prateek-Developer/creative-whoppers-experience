"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "@/lib/portfolio-data";
import PortfolioDetailModal from "@/components/sections/PortfolioDetailModal";
import PortfolioCard from "@/components/sections/PortfolioCard";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { useInViewGate } from "@/hooks/useInViewGate";

export default function PortfolioGrid() {
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 4);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);
  const { ref: gridRef, ready } = useInViewGate();

  return (
    <LayoutGroup id="portfolio-home">
      <section
        ref={sectionRef}
        className="relative mx-auto max-w-7xl border-t border-agency-border px-6 py-28 lg:px-12"
      >
        <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-agency-cyan/10 blur-3xl" />

        <div
          data-reveal="heading"
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div
              data-reveal-item
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-agency-cyan/30 bg-agency-cyan/10 px-3 py-1 font-mono text-xs text-agency-cyan"
            >
              <Sparkles className="h-3 w-3" />
              <span>SELECTED ARCHIVES FROM OFFICIAL BRIEF</span>
            </div>
            <h2
              data-reveal-item
              className="font-display text-display-xl font-extrabold uppercase tracking-editorial-tight text-agency-white"
            >
              Selected <span className="text-agency-cyan italic">Work</span>.
            </h2>
          </div>
          <Link
            data-reveal-item
            href="/portfolio"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-agency-cyan hover:underline"
          >
            <span>View Full Archive [08]</span>
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
                  onSelect={setSelectedProject}
                  imageAspect="aspect-[16/10]"
                  className={isLarge ? "md:col-span-7" : "md:col-span-5"}
                />
              );
            })}
          </AnimatePresence>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-agency-border pt-8 font-mono text-xs text-agency-muted sm:flex-row sm:items-center">
          <span>CURATION: GOVERNMENT, DIPLOMATIC & COMMERCIAL CAMPAIGNS</span>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-agency-border-cyan bg-agency-surface px-6 py-3 font-semibold text-agency-cyan transition-all hover:bg-agency-cyan hover:text-agency-black"
          >
            <span>Explore Full Archive [08 Case Studies]</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <PortfolioDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </LayoutGroup>
  );
}

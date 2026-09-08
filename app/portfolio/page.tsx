"use client";

import React, { useState, useEffect } from "react";
import { LayoutGroup, AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sparkles, Filter } from "lucide-react";
import { PORTFOLIO_PROJECTS, PortfolioProject } from "@/lib/portfolio-data";
import PortfolioDetailModal from "@/components/sections/PortfolioDetailModal";
import PortfolioCard from "@/components/sections/PortfolioCard";
import CTA from "@/components/sections/CTA";
import { useInViewGate } from "@/hooks/useInViewGate";
import { layoutSpring } from "@/lib/animations";
import { refreshScrollTrigger } from "@/lib/gsap";

const CATEGORIES = [
  "All",
  "Film & Commercial",
  "Experiential & Spaces",
  "Motion & Animation",
  "Cultural & Live",
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const { ref: gridRef, ready } = useInViewGate();
  const reduceMotion = useReducedMotion();

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    refreshScrollTrigger(400);
  }, [selectedCategory]);

  return (
    <LayoutGroup id="portfolio-archive">
      <div className="pb-24 pt-8 relative overflow-hidden">
        {/* Subtle Ambient Digital Cyan Glow */}
        <div
          className="pointer-events-none absolute -top-20 right-1/4 w-96 h-96 bg-agency-cyan/15 rounded-full blur-3xl"
          aria-hidden
        />

        <section className="mx-auto mb-16 max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-agency-cyan/30 bg-agency-cyan/10 px-3 py-1 font-mono text-xs text-agency-cyan">
            <Sparkles className="h-3.5 w-3.5" />
            <span>OFFICIAL CAMPAIGN ARCHIVES // EXTRACTED FROM BRIEF</span>
          </div>

          <h1 className="mb-8 font-display text-display-2xl font-extrabold uppercase tracking-editorial-tight text-agency-white">
            Selected <span className="italic text-agency-cyan">Works</span>.
          </h1>

          <div className="max-w-3xl rounded-2xl border border-agency-border bg-agency-surface/60 p-8">
            <p className="font-sans text-sm leading-relaxed text-agency-muted sm:text-base">
              A curated anthology of high-impact commercial films, museum digitization
              initiatives, broadcast advertising, and live cultural spectacles engineered
              for governments, international embassies, and forward-thinking brands.
            </p>
          </div>
        </section>

        <section className="mx-auto mb-16 max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="flex items-center justify-between gap-4 border-b border-agency-border pb-4">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors ${
                      isActive
                        ? "font-bold text-agency-black"
                        : "border border-agency-border bg-agency-surface text-agency-white/70 hover:border-agency-cyan/50 hover:text-agency-cyan"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId={reduceMotion ? undefined : "portfolio-filter-pill"}
                        className="absolute inset-0 rounded-full bg-agency-cyan shadow-[0_0_15px_rgba(0,229,255,0.35)]"
                        transition={layoutSpring}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden items-center gap-2 font-mono text-xs text-agency-muted sm:flex">
              <Filter className="h-3.5 w-3.5 text-agency-cyan" />
              <span>SHOWING: {filteredProjects.length} CASE STUDIES</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-12">
          <div ref={gridRef}>
            <motion.div
              layout
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <PortfolioCard
                    key={project.id}
                    project={project}
                    index={index}
                    ready={ready}
                    onSelect={setActiveProject}
                    compact
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <PortfolioDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

        <div className="mt-28">
          <CTA />
        </div>
      </div>
    </LayoutGroup>
  );
}

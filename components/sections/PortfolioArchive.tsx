"use client";

import React, { useState, useEffect } from "react";
import { LayoutGroup, AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Filter } from "lucide-react";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import PortfolioCard from "@/components/sections/PortfolioCard";
import { useInViewGate } from "@/hooks/useInViewGate";
import { layoutSpring } from "@/lib/animations";
import { refreshScrollTrigger } from "@/lib/gsap";

const FILTERS = ["All", ...PORTFOLIO_CATEGORIES] as const;

export default function PortfolioArchive() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof FILTERS)[number]>("All");
  const { ref: gridRef, ready } = useInViewGate();
  const reduceMotion = useReducedMotion();

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    refreshScrollTrigger(400);
  }, [selectedCategory]);

  return (
    <LayoutGroup id="portfolio-archive">
      <div className="relative overflow-hidden pb-24 pt-8">
        <div
          className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-agency-yellow/15 blur-3xl"
          aria-hidden
        />

        <section className="relative z-10 mx-auto mb-16 max-w-7xl px-6 lg:px-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow">
            Portfolio
          </p>
          <h1 className="mb-6 font-display text-display-2xl font-extrabold uppercase tracking-editorial-tight text-agency-white">
            Our Work
          </h1>
          <p className="max-w-3xl font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
            Events, films, branding and digital projects for corporate, government and institutional
            clients — from diplomatic campaigns and national broadcasts to museums and live culture.
          </p>
        </section>

        <section className="relative z-10 mx-auto mb-16 max-w-7xl px-6 lg:px-12">
          <div className="flex items-center justify-between gap-4 border-b border-agency-border pb-4">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
              {FILTERS.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative whitespace-nowrap rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                      isActive
                        ? "font-bold text-agency-ink"
                        : "border border-agency-border bg-agency-surface text-agency-white/70 hover:border-agency-yellow/50 hover:text-agency-yellow"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId={reduceMotion ? undefined : "portfolio-filter-pill"}
                        className="absolute inset-0 rounded-full bg-agency-yellow shadow-[0_0_15px_rgba(248,214,37,0.35)]"
                        transition={layoutSpring}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
            <div className="hidden items-center gap-2 font-mono text-xs text-agency-white/55 sm:flex">
              <Filter className="h-3.5 w-3.5 text-agency-yellow" />
              <span>SHOWING: {filteredProjects.length}</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 lg:px-12">
          <div ref={gridRef}>
            <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <PortfolioCard
                    key={project.id}
                    project={project}
                    index={index}
                    ready={ready}
                    compact
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </div>
    </LayoutGroup>
  );
}

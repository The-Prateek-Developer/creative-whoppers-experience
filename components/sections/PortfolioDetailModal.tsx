"use client";

import React, { useEffect } from "react";
import FadeImage from "@/components/media/FadeImage";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ArrowUpRight, CheckCircle2, Calendar, Building, Sparkles } from "lucide-react";
import { PortfolioProject } from "@/lib/portfolio-data";
import { easings } from "@/lib/animations";
import { WHATSAPP_LINK } from "@/lib/site";

interface PortfolioDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export default function PortfolioDetailModal({ project, onClose }: PortfolioDetailModalProps) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {project && (
        <div
          key={project.id}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.22, ease: easings.exitFast } }}
            transition={{ duration: 0.32, ease: easings.outSnappy }}
            onClick={onClose}
            className="fixed inset-0 bg-agency-black/90 backdrop-blur-md"
          />

          <motion.div
            data-lenis-prevent
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 12,
              transition: { duration: 0.24, ease: easings.exitFast },
            }}
            transition={{ duration: 0.42, ease: easings.outPremium }}
            className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-agency-border-strong bg-agency-surface shadow-2xl"
          >
            <motion.button
              type="button"
              onClick={onClose}
              whileTap={reduceMotion ? undefined : { scale: 0.92 }}
              className="absolute right-6 top-6 z-20 rounded-full border border-agency-border bg-agency-black/80 p-2.5 text-agency-white transition-all hover:border-agency-yellow hover:text-agency-yellow"
              aria-label="Close Case Study"
            >
              <X className="h-5 w-5" />
            </motion.button>

            <motion.div
              layoutId={reduceMotion ? undefined : `portfolio-cover-${project.id}`}
              className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]"
              transition={{ duration: 0.52, ease: easings.outSnappy }}
            >
              <FadeImage
                src={project.coverImage}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-agency-black via-agency-black/70 to-transparent" />
              <div className="absolute left-6 top-6">
                <span className="rounded-full border border-agency-border bg-agency-black/80 px-3.5 py-1.5 font-mono text-xs text-agency-yellow backdrop-blur-md">
                  {project.number} · {project.category}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.12, ease: easings.outPremium }}
              className="space-y-10 p-8 sm:p-12"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-agency-border pb-6 font-mono text-xs text-agency-white/55">
                <div className="flex items-center gap-2">
                  <Building className="h-3.5 w-3.5 text-agency-yellow" />
                  <span className="font-semibold text-agency-white">Client</span>
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-agency-yellow" />
                  <span className="font-semibold text-agency-white">Year</span>
                  <span>{project.year}</span>
                </div>
              </div>

              <div>
                <motion.h2
                  id="case-study-title"
                  layoutId={reduceMotion ? undefined : `portfolio-title-${project.id}`}
                  className="mb-4 font-display text-xl font-semibold uppercase tracking-tight text-agency-white"
                >
                  {project.title}
                </motion.h2>
                <p className="font-sans text-base font-medium text-agency-yellow sm:text-lg">
                  {project.tagline}
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-sans text-xs font-medium uppercase tracking-wider text-agency-white/55">
                  Overview
                </h4>
                <p className="font-sans text-sm leading-relaxed text-agency-white/55 sm:text-base">
                  {project.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-agency-border bg-agency-black/60 p-6">
                  <h4 className="mb-3 font-sans text-xs font-medium uppercase tracking-wider text-agency-white/55">
                    The challenge
                  </h4>
                  <p className="font-sans text-sm leading-relaxed text-agency-white/80">
                    {project.challenge}
                  </p>
                </div>

                <div className="rounded-2xl border border-agency-border bg-agency-black/60 p-6">
                  <h4 className="mb-3 font-sans text-xs font-medium uppercase tracking-wider text-agency-yellow">
                    The solution
                  </h4>
                  <p className="font-sans text-sm leading-relaxed text-agency-white/80">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-agency-border-strong bg-agency-yellow/10 p-6">
                <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-agency-yellow" />
                <div>
                  <span className="mb-1 block font-sans text-xs font-medium uppercase tracking-wider text-agency-yellow">
                    Impact
                  </span>
                  <p className="font-sans text-sm font-medium text-agency-white">{project.impact}</p>
                </div>
              </div>

              <div>
                <h4 className="mb-3 font-sans text-xs font-medium uppercase tracking-wider text-agency-white/55">
                  Deliverables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 rounded-lg border border-agency-border bg-agency-black px-3.5 py-1.5 font-mono text-xs text-agency-white/90"
                    >
                      <CheckCircle2 className="h-3 w-3 text-agency-yellow" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-stretch justify-between gap-4 border-t border-agency-border pt-8 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-agency-border px-6 py-3 font-mono text-xs uppercase tracking-wider text-agency-white/55 transition-colors hover:text-agency-white"
                >
                  Back To Gallery
                </button>

                <a
                  {...WHATSAPP_LINK}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-agency-yellow px-8 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-agency-ink transition-all duration-300 hover:scale-[1.02] hover:bg-agency-yellow"
                >
                  <span>Ask about a similar project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

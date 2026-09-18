"use client";

import React, { useEffect } from "react";
import FadeImage from "@/components/media/FadeImage";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import ProjectFacts from "@/components/sections/ProjectFacts";
import ProjectImageGallery from "@/components/sections/ProjectImageGallery";
import ProjectTestimonial from "@/components/sections/ProjectTestimonial";
import { PortfolioProject } from "@/lib/portfolio-data";
import { easings } from "@/lib/animations";
import { testimonialForKey } from "@/lib/testimonials";

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
              <div className="group/heading">
                <motion.h2
                  id="case-study-title"
                  layoutId={reduceMotion ? undefined : `portfolio-title-${project.id}`}
                  className="mb-3 font-mono text-[11px] font-normal uppercase tracking-wider text-agency-white sm:text-xs"
                >
                  {project.title}
                </motion.h2>
                <p className="mb-3 font-display text-[1.25rem] font-bold uppercase leading-[1.05] tracking-[-0.015em] text-agency-white transition-colors group-hover/heading:text-agency-yellow">
                  {project.tagline}
                </p>
                <p className="font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
                  {project.summary}
                </p>
              </div>

              <ProjectFacts facts={project.facts} />

              <div className="rounded-2xl border border-agency-border bg-agency-white/[0.03] p-6 sm:p-8">
                <h4 className="mb-3 font-sans text-xs font-medium uppercase tracking-wider text-agency-yellow">
                  Overview
                </h4>
                <p className="font-sans text-sm leading-relaxed text-agency-white/75 sm:text-base">
                  {project.overview}
                </p>
              </div>

              <ProjectImageGallery images={project.galleryImages} alt={project.title} />

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

              <div className="rounded-2xl border border-agency-border-strong bg-agency-yellow/10 p-6">
                <div>
                  <span className="mb-1 block font-sans text-xs font-medium uppercase tracking-wider text-agency-yellow">
                    Impact
                  </span>
                  <p className="font-sans text-sm font-medium text-agency-white">{project.impact}</p>
                </div>
              </div>

              <ProjectTestimonial {...testimonialForKey(project.id)} />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

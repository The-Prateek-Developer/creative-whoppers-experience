"use client";

import React from "react";
import Link from "next/link";
import FadeImage from "@/components/media/FadeImage";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { PortfolioProject } from "@/lib/portfolio-data";
import {
  cardLiftHover,
  cardLiftTap,
  easings,
  galleryEnterTransition,
  filterExit,
} from "@/lib/animations";
import { altCardBg, cn } from "@/lib/utils";

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
  ready: boolean;
  className?: string;
  imageAspect?: string;
  compact?: boolean;
}

const PortfolioCard = React.forwardRef<HTMLAnchorElement, PortfolioCardProps>(
  function PortfolioCard(
    {
      project,
      index,
      ready,
      className,
      imageAspect = "aspect-[4/3]",
      compact = false,
    },
    ref
  ) {
  const reduceMotion = useReducedMotion();

  return (
    <Link ref={ref} href={`/portfolio/${project.id}`} className={cn("block h-full", className)}>
      <motion.article
        layout={reduceMotion ? false : "position"}
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={ready ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.97 }}
        exit={filterExit}
        transition={galleryEnterTransition(index)}
        whileHover={reduceMotion ? undefined : cardLiftHover}
        whileTap={reduceMotion ? undefined : cardLiftTap}
        className={cn(
          "group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-agency-border will-change-transform hover:border-agency-yellow/50",
          altCardBg(index)
        )}
      >
        <motion.div
          layoutId={reduceMotion ? undefined : `portfolio-cover-${project.id}`}
          className={cn("relative w-full overflow-hidden", imageAspect)}
          transition={{ layout: { duration: 0.48, ease: easings.outSnappy } }}
        >
          <FadeImage
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            className="object-cover brightness-90 transition-[transform,filter,opacity] duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105 group-hover:brightness-100"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-agency-black via-agency-black/20 to-transparent" />

          <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
            <span className="rounded-full border border-agency-border bg-agency-black/90 px-3 py-1 font-mono text-[10px] text-agency-yellow sm:text-[11px]">
              {project.number} · {project.category}
            </span>
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex scale-90 items-center gap-2 rounded-full bg-agency-yellow px-4 py-2 font-mono text-xs font-bold uppercase text-agency-ink shadow-[0_0_20px_rgba(248,214,37,0.4)] transition-transform duration-300 group-hover:scale-100">
              <Eye className="h-3.5 w-3.5" />
              <span>{compact ? "Case Details" : "View Case Study"}</span>
            </div>
          </div>
        </motion.div>

        <div className={cn("flex flex-1 flex-col", compact ? "p-5 sm:p-6" : "p-6 sm:p-8")}>
          <motion.h3
            layoutId={reduceMotion ? undefined : `portfolio-title-${project.id}`}
            className="font-mono text-[11px] font-normal uppercase tracking-wider text-agency-white sm:text-xs"
          >
            {project.title}
          </motion.h3>
          <p
            className="mt-2 font-display text-[1.25rem] font-bold uppercase leading-[1.05] tracking-[-0.015em] text-agency-white transition-colors group-hover:text-agency-yellow"
          >
            {project.tagline}
          </p>
          <p
            className={cn(
              "mt-2 font-sans leading-relaxed text-agency-white/65",
              compact ? "line-clamp-2 text-xs" : "line-clamp-2 text-sm"
            )}
          >
            {project.summary}
          </p>
          <div className="mt-auto flex items-center justify-end pt-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-agency-border text-agency-white transition-all group-hover:border-agency-yellow group-hover:bg-agency-yellow group-hover:text-agency-ink">
              <ArrowUpRight className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
  }
);

export default PortfolioCard;

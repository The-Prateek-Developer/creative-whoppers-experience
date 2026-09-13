"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { CLIENT_SECTORS } from "@/lib/services-tree";
import { easings } from "@/lib/animations";
import ClientLogos from "@/components/sections/ClientLogos";

const ENDORSEMENTS = [
  {
    quote:
      "Delivered outstanding multimedia coverage for the Cycling4Life event in New Delhi. From capturing powerful visuals of over 500 cyclists to producing high-quality content that reflected our message of a greener future, their work was seamless, creative, and impactful. A valuable partner in bringing our vision to life.",
    author: "Hema Singh Rance",
    role: "Marketing & Communications Expert (Team Lead), European Union Policy & Outreach Partnerships (EUPOP)",
  },
  {
    quote:
      "Selecting Creative Whoppers for our Erasmus event in 2023 was a fantastic choice. They managed everything with ease and creativity, leaving our guests impressed. Thank you, Creative Whoppers for putting together a memorable and smooth process that went beyond what we expected!",
    author: "Sanjeev Roy",
    role: "Expert in Higher Education Policy, International Partnership & Outreach — EU, UK & India",
  },
  {
    quote:
      "Working with Creative Whoppers on the Chambal Literary Festival was a great experience. Their professionalism and attention to detail made the entire event run smoothly from start to finish. Truly appreciate their effort and expertise!",
    author: "Dr. Shah Alam Rana",
    role: "Founder, Chambal Foundation & Chambal Museum",
  },
];

const AUTO_MS = 7000;
const SWIPE_PX = 56;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function Testimonials({
  className,
  id,
}: {
  className?: string;
  id?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const pausedRef = useRef(false);

  const goTo = useCallback((nextIndex: number, dir: number) => {
    setDirection(dir);
    setIndex((nextIndex + ENDORSEMENTS.length) % ENDORSEMENTS.length);
  }, []);

  const goNext = useCallback(() => {
    goTo(index + 1, 1);
  }, [goTo, index]);

  const goPrev = useCallback(() => {
    goTo(index - 1, -1);
  }, [goTo, index]);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      if (pausedRef.current) return;
      setDirection(1);
      setIndex((current) => (current + 1) % ENDORSEMENTS.length);
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -SWIPE_PX || info.velocity.x < -400) {
      goNext();
      return;
    }
    if (info.offset.x > SWIPE_PX || info.velocity.x > 400) {
      goPrev();
    }
  };

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  const current = ENDORSEMENTS[index];

  return (
    <section
      id={id}
      ref={sectionRef}
      className={className ?? "border-t border-agency-border py-16 lg:py-20"}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div
        data-reveal="heading"
        className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-4xl">
          <p
            data-reveal-item
            className="mb-4 font-sans text-xs font-medium uppercase tracking-editorial-wide text-agency-yellow"
          >
            Clients & testimonials
          </p>
          <h2 data-reveal-item className="section-heading text-agency-white">
            Trusted across sectors
          </h2>
          <p
            data-reveal-item
            className="mt-3 font-sans text-sm leading-relaxed text-agency-white/60"
          >
            Corporate, government, NGO and institutional partners — voices from briefs we&apos;ve
            delivered.
          </p>
        </div>
        <div data-reveal-item className="flex flex-wrap gap-2">
          {CLIENT_SECTORS.map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-agency-yellow/25 bg-agency-yellow/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-agency-yellow"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
      >
        <div className="relative min-h-[26rem] overflow-hidden rounded-2xl border border-agency-border bg-agency-white/[0.04] sm:min-h-[22rem] lg:min-h-[20rem]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.blockquote
              key={current.author}
              custom={direction}
              variants={reduceMotion ? undefined : slideVariants}
              initial={reduceMotion ? { opacity: 1, x: 0 } : "enter"}
              animate="center"
              exit={reduceMotion ? { opacity: 1, x: 0 } : "exit"}
              transition={{ duration: 0.55, ease: easings.outSnappy }}
              drag={reduceMotion ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={onDragEnd}
              className="absolute inset-0 cursor-grab p-7 active:cursor-grabbing sm:p-9 lg:p-12"
              aria-live="polite"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -top-4 right-6 font-display text-[7.5rem] font-extrabold leading-none text-agency-yellow/15"
              >
                ”
              </span>
              <div className="relative">
                <span className="mb-5 block h-8 w-8 rounded-full bg-agency-yellow text-center font-display text-2xl font-bold leading-8 text-agency-ink">
                  ”
                </span>
                <p className="max-w-4xl font-sans text-base leading-relaxed text-agency-white sm:text-lg">
                  {current.quote}
                </p>
                <footer className="mt-8 flex items-center gap-3 border-t border-agency-white/10 pt-5">
                  <span className="h-8 w-0.5 shrink-0 bg-agency-yellow" />
                  <div>
                    <cite className="not-italic font-display text-sm font-semibold text-agency-white">
                      {current.author}
                    </cite>
                    <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-agency-white/50">
                      {current.role}
                    </p>
                  </div>
                </footer>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonials">
            {ENDORSEMENTS.map((item, itemIndex) => {
              const active = itemIndex === index;
              return (
                <button
                  key={item.author}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-label={`Show testimonial from ${item.author}`}
                  onClick={() => goTo(itemIndex, itemIndex > index ? 1 : -1)}
                  className={`h-2 rounded-full transition-all ${
                    active
                      ? "w-7 bg-agency-yellow"
                      : "w-2 bg-agency-white/25 hover:bg-agency-white/45"
                  }`}
                />
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-agency-border text-agency-white transition-colors hover:border-agency-yellow hover:text-agency-yellow"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-agency-border text-agency-white transition-colors hover:border-agency-yellow hover:text-agency-yellow"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      </div>
      <div className="mt-12">
        <ClientLogos embedded />
      </div>
    </section>
  );
}

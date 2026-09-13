"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import FadeImage from "@/components/media/FadeImage";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA } from "@/lib/services-data";
import { WHATSAPP_LINK } from "@/lib/site";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { useInViewGate } from "@/hooks/useInViewGate";
import {
  cardLiftHover,
  cardLiftTap,
  easings,
  galleryEnterTransition,
} from "@/lib/animations";
import { altCardBg } from "@/lib/utils";

export default function ServicesGrid() {
  const featuredServices = SERVICES_DATA.slice(0, 4);
  const [activeId, setActiveId] = useState(featuredServices[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  useSectionReveal(sectionRef);
  const { ref: listRef, ready } = useInViewGate();
  const reduceMotion = useReducedMotion();

  const activeService =
    featuredServices.find((s) => s.id === activeId) || featuredServices[0];

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-7xl border-t border-agency-border px-6 py-28 lg:px-12"
    >
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-96 w-96 rounded-full bg-agency-yellow/10 blur-3xl" />

      <div
        data-reveal="heading"
        className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
      >
        <div>
          <div
            data-reveal-item
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-agency-yellow/30 bg-agency-yellow/10 px-3 py-1 font-mono text-xs text-agency-yellow"
          >
            <span>Production capabilities</span>
          </div>
          <h2
            data-reveal-item
            className="section-heading page-heading text-agency-white"
          >
            Production Capabilities.
          </h2>
        </div>
        <p
          data-reveal-item
          className="max-w-md font-sans text-sm leading-relaxed text-agency-white/55"
        >
          From cinema-grade film and 2D animation to museum digitization and brand identity,
          we combine creative strategy with execution under one roof.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div ref={listRef} className="flex flex-col gap-3 lg:col-span-5">
          {featuredServices.map((service, index) => {
            const isActive = service.id === activeId;
            return (
              <motion.button
                key={service.id}
                type="button"
                onClick={() => setActiveId(service.id)}
                onMouseEnter={() => setActiveId(service.id)}
                initial={{ opacity: 0, y: 24 }}
                animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={galleryEnterTransition(index)}
                whileHover={
                  reduceMotion || isActive
                    ? undefined
                    : { ...cardLiftHover, y: -4 }
                }
                whileTap={reduceMotion ? undefined : cardLiftTap}
                className={`group relative w-full overflow-hidden rounded-xl border p-6 text-left will-change-transform ${
                  isActive
                    ? "border-agency-yellow/50 bg-agency-surface shadow-[0_0_20px_rgba(248,214,37,0.15)]"
                    : `border-agency-border hover:border-agency-border-strong ${altCardBg(index)}`
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId={reduceMotion ? undefined : "active-service-bar"}
                    className="absolute bottom-0 left-0 top-0 w-1 bg-agency-yellow"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}

                <div className="mb-2 flex items-center justify-between">
                  <span
                    className={`font-mono text-xs transition-colors ${
                      isActive ? "font-bold text-agency-yellow" : "text-agency-white/55"
                    }`}
                  >
                    {service.number} · {service.category}
                  </span>
                  <ArrowUpRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isActive
                        ? "rotate-45 text-agency-yellow"
                        : "text-agency-white/55 group-hover:text-agency-white"
                    }`}
                  />
                </div>

                <h3
                  className={`font-display text-xl font-semibold uppercase tracking-tight transition-colors ${
                    isActive ? "text-agency-white" : "text-agency-white/80"
                  }`}
                >
                  {service.title}
                </h3>

                <p className="mt-2 line-clamp-2 font-sans text-xs leading-relaxed text-agency-white/55">
                  {service.tagline}
                </p>
              </motion.button>
            );
          })}
        </div>

        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.99,
                transition: { duration: 0.22, ease: easings.exitFast },
              }}
              transition={{ duration: 0.42, ease: easings.outPremium }}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-agency-border bg-agency-surface p-8 sm:p-10"
            >
              <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-agency-border">
                <FadeImage
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agency-black via-agency-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded border border-agency-border bg-agency-black/90 px-3 py-1 font-mono text-[11px] text-agency-yellow">
                    {activeService.differentiator}
                  </span>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-mono text-xs text-agency-yellow">
                    {activeService.number}
                  </span>
                  <span className="font-sans text-xs uppercase tracking-wider text-agency-white/55">
                    Production discipline
                  </span>
                </div>

                <h3 className="mb-4 font-display text-xl font-semibold uppercase tracking-tight text-agency-white">
                  {activeService.title}
                </h3>

                <p className="mb-6 font-sans text-sm leading-relaxed text-agency-white/55 sm:text-base">
                  {activeService.description}
                </p>

                <div className="mb-6">
                  <h4 className="mb-3 font-sans text-[11px] font-medium uppercase tracking-wider text-agency-white/55">
                    Core deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-agency-border bg-agency-black px-3 py-1 font-mono text-xs text-agency-white/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8 rounded-xl border border-agency-border bg-agency-black/60 p-4">
                  <span className="mb-2 block font-sans text-[10px] font-medium uppercase tracking-wider text-agency-yellow">
                    Credited campaigns
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs text-agency-white/80">
                    {activeService.clientWorks.slice(0, 3).map((client, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-agency-yellow" />
                        <span>{client}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-agency-border pt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-agency-yellow hover:underline"
                >
                  <span>Explore all services</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>

                <a
                  {...WHATSAPP_LINK}
                  className="rounded-full bg-agency-yellow px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-agency-ink transition-colors hover:bg-agency-yellow"
                >
                  Inquire
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-16 flex flex-col justify-between gap-4 border-t border-agency-border pt-8 font-mono text-xs text-agency-white/55 sm:flex-row sm:items-center">
        <span>Six major pillars, 25+ deliverable specs</span>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-full border border-agency-border-strong bg-agency-surface px-6 py-3 font-semibold text-agency-yellow transition-all hover:bg-agency-yellow hover:text-agency-ink"
        >
          <span>View all services</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

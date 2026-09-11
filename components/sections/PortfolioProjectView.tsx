import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Calendar, Building, Sparkles } from "lucide-react";
import FadeImage from "@/components/media/FadeImage";
import type { PortfolioProject } from "@/lib/portfolio-data";
import { WHATSAPP_LINK } from "@/lib/site";

export default function PortfolioProjectView({ project }: { project: PortfolioProject }) {
  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-8 lg:px-12">
      <p className="mb-4 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow">
        Case study
      </p>

      <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl border border-agency-border sm:aspect-[21/9]">
        <FadeImage
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-agency-black via-agency-black/40 to-transparent" />
        <div className="absolute left-6 top-6">
          <span className="rounded-full border border-agency-border bg-agency-black/80 px-3.5 py-1.5 font-mono text-xs text-agency-yellow backdrop-blur-md">
            {project.number} · {project.category}
          </span>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-agency-border pb-6 font-mono text-xs text-agency-white/55">
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

      <h1 className="mb-4 font-display text-xl font-semibold uppercase tracking-tight text-agency-white">
        {project.title}
      </h1>
      <p className="mb-10 font-sans text-base font-medium text-agency-yellow sm:text-lg">
        {project.tagline}
      </p>

      <div className="mb-10">
        <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-agency-white/55">
          Overview
        </h2>
        <p className="font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
          {project.overview}
        </p>
      </div>

      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-agency-border bg-agency-black/60 p-6">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-agency-white/55">
            The challenge
          </h2>
          <p className="font-sans text-sm leading-relaxed text-agency-white/80">{project.challenge}</p>
        </div>
        <div className="rounded-2xl border border-agency-border bg-agency-black/60 p-6">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-agency-yellow">
            The solution
          </h2>
          <p className="font-sans text-sm leading-relaxed text-agency-white/80">{project.solution}</p>
        </div>
      </div>

      <div className="mb-10 flex items-start gap-4 rounded-2xl border border-agency-border-strong bg-agency-yellow/10 p-6">
        <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-agency-yellow" />
        <div>
          <h2 className="mb-1 font-mono text-xs uppercase tracking-wider text-agency-yellow">
            Impact
          </h2>
          <p className="font-sans text-sm font-medium text-agency-white">{project.impact}</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-agency-white/55">
          Deliverables
        </h2>
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
        <Link
          href="/portfolio"
          className="rounded-full border border-agency-border px-6 py-3 text-center font-mono text-xs uppercase tracking-wider text-agency-white/55 transition-colors hover:text-agency-white"
        >
          Back to portfolio
        </Link>
        <a
          {...WHATSAPP_LINK}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-agency-yellow px-8 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-agency-ink"
        >
          <span>Start a similar project</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

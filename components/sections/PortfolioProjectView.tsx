import React from "react";
import FadeImage from "@/components/media/FadeImage";
import ProjectFacts from "@/components/sections/ProjectFacts";
import ProjectImageGallery from "@/components/sections/ProjectImageGallery";
import ProjectTestimonial from "@/components/sections/ProjectTestimonial";
import type { PortfolioProject } from "@/lib/portfolio-data";
import { testimonialForKey } from "@/lib/testimonials";

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

      <div className="group/heading">
        <h1 className="mb-3 font-mono text-[11px] font-normal uppercase tracking-wider text-agency-white sm:text-xs">
          {project.title}
        </h1>
        <p className="mb-3 font-display text-[1.25rem] font-bold uppercase leading-[1.05] tracking-[-0.015em] text-agency-white transition-colors group-hover/heading:text-agency-yellow">
          {project.tagline}
        </p>
      </div>
      <p className="mb-8 font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
        {project.summary}
      </p>

      <div className="mb-10">
        <ProjectFacts facts={project.facts} />
      </div>

      <div className="mb-10 rounded-2xl border border-agency-border bg-agency-white/[0.03] p-6 sm:p-8">
        <h2 className="mb-3 font-sans text-xs font-medium uppercase tracking-wider text-agency-yellow">
          Overview
        </h2>
        <p className="font-sans text-sm leading-relaxed text-agency-white/75 sm:text-base">
          {project.overview}
        </p>
      </div>

      <ProjectImageGallery images={project.galleryImages} alt={project.title} />

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

      <div className="mb-10 rounded-2xl border border-agency-border-strong bg-agency-yellow/10 p-6">
        <div>
          <h2 className="mb-1 font-mono text-xs uppercase tracking-wider text-agency-yellow">
            Impact
          </h2>
          <p className="font-sans text-sm font-medium text-agency-white">{project.impact}</p>
        </div>
      </div>

      <div className="mb-4">
        <ProjectTestimonial {...testimonialForKey(project.id)} />
      </div>
    </article>
  );
}

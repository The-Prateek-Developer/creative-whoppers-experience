import React from "react";
import type { Testimonial } from "@/lib/testimonials";

type Props = Testimonial & {
  compact?: boolean;
};

export default function ProjectTestimonial({ quote, author, role, compact = false }: Props) {
  if (compact) {
    return (
      <blockquote className="mt-4 border-t border-agency-border pt-4">
        <p className="line-clamp-4 font-sans text-xs leading-relaxed text-agency-white/70 sm:text-sm">
          “{quote}”
        </p>
        <footer className="mt-3">
          <cite className="not-italic font-display text-xs font-semibold uppercase tracking-tight text-agency-yellow">
            {author}
          </cite>
          <p className="mt-0.5 line-clamp-2 font-mono text-[10px] uppercase tracking-wider text-agency-white/45">
            {role}
          </p>
        </footer>
      </blockquote>
    );
  }

  return (
    <blockquote className="relative overflow-hidden rounded-2xl border border-agency-border bg-agency-white/[0.04] p-6 sm:p-8">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-3 right-5 font-display text-[6.5rem] font-extrabold leading-none text-agency-yellow/15"
      >
        ”
      </span>
      <p className="mb-4 font-mono text-[11px] uppercase tracking-editorial-wide text-agency-yellow">
        Client testimonial
      </p>
      <span className="mb-5 block h-8 w-8 rounded-full bg-agency-yellow text-center font-display text-2xl font-bold leading-8 text-agency-ink">
        ”
      </span>
      <p className="relative font-sans text-sm leading-relaxed text-agency-white sm:text-base">
        {quote}
      </p>
      <footer className="relative mt-6 flex items-center gap-3 border-t border-agency-white/10 pt-5">
        <span className="h-8 w-0.5 shrink-0 bg-agency-yellow" />
        <div>
          <cite className="not-italic font-display text-sm font-semibold text-agency-white">
            {author}
          </cite>
          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-agency-white/50">
            {role}
          </p>
        </div>
      </footer>
    </blockquote>
  );
}

import React from "react";
import type { ProjectFact } from "@/lib/portfolio-data";
import { altCardBg, cn } from "@/lib/utils";

export default function ProjectFacts({
  facts,
  compact = false,
}: {
  facts: ProjectFact[];
  compact?: boolean;
}) {
  return (
    <dl className={cn("grid grid-cols-1 sm:grid-cols-2", compact ? "gap-2" : "gap-3")}>
      {facts.map((fact, index) => (
        <div
          key={fact.label}
          className={cn(
            "rounded-2xl border border-agency-border",
            altCardBg(index),
            compact ? "px-3.5 py-3" : "px-5 py-4"
          )}
        >
          <dt
            className={cn(
              "font-sans font-medium uppercase tracking-wider text-agency-yellow",
              compact ? "text-[10px]" : "text-[11px]"
            )}
          >
            {fact.label}
          </dt>
          <dd
            className={cn(
              "mt-1 font-sans leading-relaxed text-agency-white",
              compact ? "line-clamp-2 text-xs" : "text-sm sm:text-base"
            )}
          >
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

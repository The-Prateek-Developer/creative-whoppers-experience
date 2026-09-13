"use client";

import React, { useEffect, useRef } from "react";
import FadeImage from "@/components/media/FadeImage";
import { useReducedMotion } from "framer-motion";

export type TeamMember = {
  name: string;
  role: string;
  experience: string;
  image: string;
  bio: string;
};

export default function TeamMarquee({ people }: { people: TeamMember[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const pointerRef = useRef({ startX: 0, startScroll: 0 });
  const reduceMotion = useReducedMotion();
  const loop = [...people, ...people];

  useEffect(() => {
    if (reduceMotion) return;
    const node = scrollerRef.current;
    if (!node) return;

    let frame = 0;
    const tick = () => {
      if (!pausedRef.current && !draggingRef.current) {
        node.scrollLeft += 0.65;
        const half = node.scrollWidth / 2;
        if (half > 0 && node.scrollLeft >= half) {
          node.scrollLeft -= half;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    if (!draggingRef.current) pausedRef.current = false;
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = scrollerRef.current;
    if (!node) return;
    draggingRef.current = true;
    pausedRef.current = true;
    pointerRef.current = { startX: event.clientX, startScroll: node.scrollLeft };
    node.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollLeft = pointerRef.current.startScroll + (pointerRef.current.startX - event.clientX);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = scrollerRef.current;
    draggingRef.current = false;
    node?.releasePointerCapture(event.pointerId);
    const half = (node?.scrollWidth ?? 0) / 2;
    if (node && half > 0 && node.scrollLeft >= half) {
      node.scrollLeft -= half;
    }
    window.setTimeout(() => {
      pausedRef.current = false;
    }, 800);
  };

  return (
    <div
      ref={scrollerRef}
      tabIndex={0}
      aria-label="Team members, scroll horizontally"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className="flex cursor-grab gap-5 overflow-x-auto px-6 pb-2 active:cursor-grabbing lg:px-12 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {loop.map((person, index) => (
        <article
          key={`${person.name}-${index}`}
          className="w-[min(82vw,22rem)] shrink-0 overflow-hidden rounded-3xl border border-agency-border bg-agency-black select-none"
        >
          <div className="relative aspect-[16/10]">
            <FadeImage
              src={person.image}
              alt={person.name}
              fill
              sizes="360px"
              className="pointer-events-none object-cover object-[center_28%] grayscale"
            />
          </div>
          <div className="p-6">
            <p className="font-sans text-[11px] font-medium uppercase tracking-wider text-agency-yellow">
              {person.experience}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-tight text-agency-white">
              {person.name}
            </h3>
            <p className="mt-1 text-sm text-agency-white/55">{person.role}</p>
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-agency-white/65">{person.bio}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { CLIENTS, type ClientLogo } from "@/lib/clients";
import { cn } from "@/lib/utils";

function LogoTile({ client, className }: { client: ClientLogo; className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[4.75rem] w-[10.75rem] shrink-0 items-center justify-center rounded-xl bg-white px-4 py-3 ring-1 ring-black/10 sm:h-[5.25rem] sm:w-[12.25rem]",
        className
      )}
    >
      <span className="relative h-12 w-full sm:h-14">
        <Image
          src={client.src}
          alt=""
          fill
          sizes="196px"
          className="pointer-events-none object-contain"
        />
      </span>
    </div>
  );
}

function AutoRow({
  items,
  speed,
  offset = 0,
}: {
  items: ClientLogo[];
  speed: number;
  offset?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const loop = [...items, ...items];

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    let primed = false;
    let frame = 0;
    const tick = () => {
      const half = node.scrollWidth / 2;
      if (half > 0 && !primed) {
        node.scrollLeft = offset ? (half * offset) % half : 0;
        primed = true;
      }
      if (!pausedRef.current && primed) {
        node.scrollLeft += speed;
        if (node.scrollLeft >= half) {
          node.scrollLeft -= half;
        }
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
    };
  }, [offset, speed]);

  return (
    <div
      ref={scrollerRef}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      className="flex gap-4 overflow-x-auto px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {loop.map((client, index) => (
        <LogoTile key={`${client.id}-${index}`} client={client} />
      ))}
    </div>
  );
}

export default function ClientLogos() {
  const reduceMotion = useReducedMotion();
  const rowA = CLIENTS.filter((_, index) => index % 2 === 0);
  const rowB = CLIENTS.filter((_, index) => index % 2 === 1);

  return (
    <section
      className="border-t border-agency-border py-16 lg:py-20"
      aria-labelledby="clients-heading"
    >
      <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-12">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-editorial-wide text-agency-yellow">
          Our clients
        </p>
        <h2
          id="clients-heading"
          className="section-heading text-agency-white"
        >
          Trusted by teams who need it <span className="italic text-agency-yellow">done</span>
        </h2>
        <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-agency-white/60">
          Government, defence, culture, education and brands — partners across the briefs we
          produce.
        </p>
      </div>

      <ul className="sr-only">
        {CLIENTS.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>

      {reduceMotion ? (
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-12">
          {CLIENTS.map((client) => (
            <LogoTile key={client.id} client={client} className="w-full max-w-none" />
          ))}
        </div>
      ) : (
        <div aria-hidden className="relative space-y-4 overflow-hidden">
          <AutoRow items={rowA} speed={0.85} />
          <AutoRow items={rowB} speed={1.15} offset={0.35} />
        </div>
      )}
    </section>
  );
}

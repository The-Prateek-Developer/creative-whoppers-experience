"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CLIENTS, type ClientLogo } from "@/lib/clients";
import { cn } from "@/lib/utils";

function LogoTile({ client, className }: { client: ClientLogo; className?: string }) {
  const tileRef = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState("50% 50%");
  const [hovered, setHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const box = tileRef.current?.getBoundingClientRect();
    if (!box) return;
    const x = ((event.clientX - box.left) / box.width) * 100;
    const y = ((event.clientY - box.top) / box.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <motion.div
      ref={tileRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setOrigin("50% 50%");
      }}
      animate={reduceMotion ? undefined : { scale: hovered ? 1.16 : 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.6 }}
      style={{ transformOrigin: origin, zIndex: hovered ? 20 : 1 }}
      className={cn(
        "relative flex h-[4.75rem] w-[10.75rem] shrink-0 items-center justify-center rounded-xl bg-white px-4 py-3 ring-1 ring-black/10 sm:h-[5.25rem] sm:w-[12.25rem]",
        className
      )}
    >
      <span className="relative h-12 w-full sm:h-14">
        <Image
          src={client.src}
          alt={client.name}
          fill
          sizes="196px"
          className="pointer-events-none object-contain"
        />
      </span>
    </motion.div>
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
      className="flex gap-4 overflow-x-auto px-4 py-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {loop.map((client, index) => (
        <LogoTile key={`${client.id}-${index}`} client={client} />
      ))}
    </div>
  );
}

export default function ClientLogos({
  scrollerOnly = false,
  embedded = false,
}: {
  scrollerOnly?: boolean;
  embedded?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const hideChrome = scrollerOnly || embedded;

  const body = (
    <>
      {!hideChrome && (
        <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-12">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-editorial-wide text-agency-yellow">
            Our clients
          </p>
          <h2 className="section-heading text-agency-white">
            Trusted by teams who need it done
          </h2>
          <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-agency-white/60">
            Government, defence, culture, education and brands, partners across the briefs we
            produce.
          </p>
        </div>
      )}

      <ul className="sr-only">
        {CLIENTS.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>

      {reduceMotion ? (
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-6 py-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-12">
          {CLIENTS.map((client) => (
            <LogoTile key={client.id} client={client} className="w-full max-w-none" />
          ))}
        </div>
      ) : (
        <div aria-hidden className="relative overflow-x-hidden">
          <AutoRow items={CLIENTS} speed={0.9} />
        </div>
      )}
    </>
  );

  if (embedded) {
    return <div aria-label="Our clients">{body}</div>;
  }

  return (
    <section
      className={cn(
        "border-t border-agency-border",
        scrollerOnly ? "py-8 lg:py-10" : "py-16 lg:py-20"
      )}
      aria-label="Our clients"
    >
      {body}
    </section>
  );
}

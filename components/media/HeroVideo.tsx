"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { HERO_VIDEO, HERO_VIDEO_POSTER } from "@/lib/services-tree";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const tryPlay = () => {
      if (reduceMotion) {
        node.pause();
        return;
      }
      node.play().catch(() => undefined);
    };

    tryPlay();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          node.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full scale-105 object-cover"
      src={HERO_VIDEO}
      poster={HERO_VIDEO_POSTER}
      muted
      loop
      playsInline
      autoPlay
      preload="auto"
      aria-hidden
    />
  );
}

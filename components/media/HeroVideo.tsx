"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";
import { HERO_VIDEO_POSTER, HERO_YOUTUBE_ID } from "@/lib/services-tree";

const YOUTUBE_EMBED = `https://www.youtube-nocookie.com/embed/${HERO_YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_YOUTUBE_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0`;

export default function HeroVideo() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={HERO_VIDEO_POSTER}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        aria-hidden
      />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <iframe
        src={YOUTUBE_EMBED}
        title="Creative Whoppers showreel"
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-video h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen={false}
        tabIndex={-1}
      />
    </div>
  );
}

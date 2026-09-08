"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });
}

/** Matches Framer `easings.outPremium` / `easings.exitFast`. */
export const gsapEase = {
  outPremium: "expo.out",
  exitFast: "power2.in",
} as const;

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

let refreshTimer = 0;

export function refreshScrollTrigger(delay = 0) {
  if (typeof window === "undefined") return;
  window.clearTimeout(refreshTimer);
  refreshTimer = window.setTimeout(() => {
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, delay);
}

export { gsap, ScrollTrigger };

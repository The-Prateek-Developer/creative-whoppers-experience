"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function useInViewGate() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.08, margin: "240px 0px" });
  const [forceReady, setForceReady] = useState(false);

  // After client navigations, IntersectionObserver can miss the first paint.
  // Fail open so cards never stay stuck at opacity 0.
  useEffect(() => {
    const timer = window.setTimeout(() => setForceReady(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  const allowMotion = reduceMotion === false;

  return {
    ref,
    ready: !allowMotion || inView || forceReady,
    reduceMotion: reduceMotion === true,
  };
}

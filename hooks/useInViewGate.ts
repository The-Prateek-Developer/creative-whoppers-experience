"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function useInViewGate() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return {
    ref,
    ready: Boolean(reduceMotion) || inView,
    reduceMotion: Boolean(reduceMotion),
  };
}

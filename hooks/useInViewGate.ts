"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function useInViewGate() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.08, margin: "240px 0px" });

  // useReducedMotion() is null on the first paint. Boolean(null) is false,
  // which used to keep cards at opacity 0 until IntersectionObserver fired —
  // and it often would not fire while the page wrapper was also hidden.
  const allowMotion = reduceMotion === false;

  return {
    ref,
    ready: !allowMotion || inView,
    reduceMotion: reduceMotion === true,
  };
}

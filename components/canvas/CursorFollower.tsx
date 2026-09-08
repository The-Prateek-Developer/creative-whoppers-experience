"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { subscribeScrollPause } from "@/lib/scroll-activity";

export default function CursorFollower() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const opacity = useMotionValue(0);
  const springX = useSpring(x, { damping: 28, stiffness: 220, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 220, mass: 0.4 });

  useEffect(() => {
    if (reduceMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    let scrolling = false;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!scrolling) opacity.set(1);
    };

    const unsub = subscribeScrollPause((paused) => {
      scrolling = paused;
      opacity.set(paused ? 0.18 : 1);
    });

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      unsub();
    };
  }, [opacity, reduceMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 will-change-transform"
      style={{ x: springX, y: springY, opacity }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <div className="h-8 w-8 rounded-full border border-agency-yellow/40" />
        <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-agency-yellow shadow-[0_0_8px_#F8D625]" />
      </div>
    </motion.div>
  );
}

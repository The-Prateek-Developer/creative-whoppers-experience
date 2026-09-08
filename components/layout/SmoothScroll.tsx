"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { gsap, refreshScrollTrigger, ScrollTrigger } from "@/lib/gsap";
import { notifyScrollActivity } from "@/lib/scroll-activity";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      autoRaf: false,
      autoResize: true,
      respectReducedMotion: true,
    });

    const onScroll = () => {
      ScrollTrigger.update();
      notifyScrollActivity();
    };

    instance.on("scroll", onScroll);

    const onTick = (time: number) => {
      instance.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
    setLenis(instance);

    const onLoad = () => refreshScrollTrigger(0);
    window.addEventListener("load", onLoad);
    window.addEventListener("scroll", notifyScrollActivity, { passive: true });

    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("scroll", notifyScrollActivity);
      instance.off("scroll", onScroll);
      gsap.ticker.remove(onTick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;

    lenis.resize();
    refreshScrollTrigger(480);
  }, [pathname, lenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

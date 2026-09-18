"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@/components/layout/SmoothScroll";

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * App Router swaps `children` in place. Wrapping them in AnimatePresence +
 * pathname keys with opacity-0 enter often leaves the next route stuck blank
 * until a hard refresh. Keep content always visible and only reset scroll.
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return <div className="w-full flex-1">{children}</div>;
}

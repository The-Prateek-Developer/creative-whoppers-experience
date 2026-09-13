"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageExitTiming, pageTransition, pageTransitionTiming } from "@/lib/animations";
import { useLenis } from "@/components/layout/SmoothScroll";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();
  const prevPath = useRef(pathname);
  const isClientNav = useRef(false);

  if (prevPath.current !== pathname) {
    prevPath.current = pathname;
    isClientNav.current = true;
  }

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  // useReducedMotion() is null until hydration. Treating that as a branch
  // remounts AnimatePresence and can leave the page stuck at opacity 0.
  // mode="wait" also unmounts the incoming page until exit finishes — if
  // that exit never completes (common with App Router children), the page
  // stays blank until a hard refresh.
  const skipEnter = reduceMotion === true || !isClientNav.current;

  return (
    <AnimatePresence initial={false} mode="sync">
      <motion.div
        key={pathname}
        initial={skipEnter ? false : pageTransition.initial}
        animate={pageTransition.animate}
        exit={
          reduceMotion === true
            ? undefined
            : { ...pageTransition.exit, transition: pageExitTiming }
        }
        transition={pageTransitionTiming}
        className="w-full flex-1"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

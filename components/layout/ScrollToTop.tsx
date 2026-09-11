"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenis } from "@/components/layout/SmoothScroll";
import { easings } from "@/lib/animations";

const SHOW_AFTER = 420;

export default function ScrollToTop() {
  const lenis = useLenis();
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = lenis?.scroll ?? window.scrollY;
      setVisible(y > SHOW_AFTER);
    };

    update();

    if (lenis) {
      lenis.on("scroll", update);
      return () => {
        lenis.off("scroll", update);
      };
    }

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [lenis]);

  const scrollTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: reduceMotion ? 0 : 1.05 });
      return;
    }
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          key="scroll-to-top"
          onClick={scrollTop}
          aria-label="Scroll to top"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.28, ease: easings.outSoft }}
          whileHover={reduceMotion ? undefined : { scale: 1.06 }}
          whileTap={reduceMotion ? undefined : { scale: 0.94 }}
          className="fixed bottom-6 right-6 z-[90] inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-agency-yellow text-agency-ink shadow-[0_0_24px_rgba(248,214,37,0.35)] transition-colors hover:bg-agency-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black sm:bottom-8 sm:right-8"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

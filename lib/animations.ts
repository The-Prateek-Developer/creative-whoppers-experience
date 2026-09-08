import { Variants, Transition } from "framer-motion";

/**
 * Distinct cubic-beziers — none of these are CSS ease / easeInOut.
 * outPremium: cinematic settle for headline reveals
 * outSnappy: overlays, underlines, page enter
 * outSoft: hover micro-interactions (responsive, no bounce)
 * exitFast: leave faster than enter so motion feels decisive
 */
export const easings = {
  outPremium: [0.19, 1, 0.22, 1] as [number, number, number, number],
  outSnappy: [0.22, 1, 0.36, 1] as [number, number, number, number],
  outSoft: [0.33, 1, 0.68, 1] as [number, number, number, number],
  exitFast: [0.55, 0, 1, 0.45] as [number, number, number, number],
  pageEnter: [0.2, 0.78, 0.22, 1] as [number, number, number, number],
};

export const editorialTransition: Transition = {
  ease: easings.outPremium,
  duration: 0.72,
};

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 28,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: editorialTransition,
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.28, ease: easings.exitFast },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export const reducedStagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

export const headlineBlock: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.04,
    },
  },
};

export const headlineLine: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const headlineWord: Variants = {
  initial: {
    y: "118%",
    opacity: 0,
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.64,
      ease: easings.outPremium,
    },
  },
};

export const reducedWord: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export const pageTransitionTiming: Transition = {
  opacity: { duration: 0.38, ease: easings.pageEnter },
  y: { duration: 0.5, ease: easings.pageEnter },
};

export const pageExitTiming: Transition = {
  opacity: { duration: 0.2, ease: easings.exitFast },
  y: { duration: 0.26, ease: easings.exitFast },
};

export const ctaHover = {
  scale: 1.035,
  boxShadow: "0 10px 28px rgba(248, 214, 37, 0.32), 0 2px 8px rgba(0, 0, 0, 0.22)",
};

export const ctaTap = {
  scale: 0.97,
  boxShadow: "0 2px 10px rgba(248, 214, 37, 0.16)",
};

export const ctaRest = {
  scale: 1,
  boxShadow: "0 0 0 0 rgba(248, 214, 37, 0)",
};

export const ctaTransition: Transition = {
  scale: { duration: 0.32, ease: easings.outSoft },
  boxShadow: { duration: 0.38, ease: easings.outSnappy },
};

export const underlineTransition: Transition = {
  duration: 0.42,
  ease: easings.outSnappy,
};

export const menuOverlayVariants: Variants = {
  closed: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.02,
    },
  },
};

export const menuScrimVariants: Variants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.26, ease: easings.exitFast },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.34, ease: easings.outSnappy },
  },
};

export const menuPanelVariants: Variants = {
  closed: {
    x: 32,
    opacity: 0,
    transition: {
      duration: 0.24,
      ease: easings.exitFast,
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easings.outPremium,
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },
};

export const menuListVariants: Variants = {
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
  open: {
    transition: { staggerChildren: 0.055, delayChildren: 0.02 },
  },
};

export const menuItemVariants: Variants = {
  closed: {
    opacity: 0,
    x: -18,
    transition: { duration: 0.2, ease: easings.exitFast },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.46, ease: easings.outPremium },
  },
};

export const layoutSpring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 36,
  mass: 0.82,
};

export const cardLiftHover = {
  y: -7,
  transition: { duration: 0.34, ease: easings.outSoft },
};

export const cardLiftTap = {
  y: -2,
  scale: 0.985,
  transition: { duration: 0.14, ease: easings.outSoft },
};

export const filterExit = {
  opacity: 0,
  y: 14,
  scale: 0.97,
  transition: { duration: 0.22, ease: easings.exitFast },
};

export function galleryEnterTransition(index: number): Transition {
  const delay = Math.min(index, 8) * 0.055;
  return {
    layout: layoutSpring,
    opacity: { duration: 0.34, ease: easings.outSnappy, delay },
    y: { duration: 0.52, ease: easings.outPremium, delay },
    scale: { duration: 0.42, ease: easings.outSoft, delay },
  };
}

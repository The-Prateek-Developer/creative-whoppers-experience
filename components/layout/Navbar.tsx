"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  ctaHover,
  ctaRest,
  ctaTap,
  ctaTransition,
  easings,
  menuItemVariants,
  menuListVariants,
  menuOverlayVariants,
  menuPanelVariants,
  menuScrimVariants,
  underlineTransition,
} from "@/lib/animations";

const MotionLink = motion.create(Link);

const NAV_LINKS = [
  { name: "Services", href: "/services", index: "01", tag: "CAPABILITIES & EXPERTISE", accent: "coral" as const },
  { name: "Portfolio", href: "/portfolio", index: "02", tag: "SELECTED CAMPAIGN ARCHIVES", accent: "cyan" as const },
  { name: "About", href: "/about", index: "03", tag: "PHILOSOPHY & PRODUCTION POWER", accent: "violet" as const },
  { name: "Contact", href: "/contact", index: "04", tag: "START A NEW BRIEF", accent: "yellow" as const },
];

const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://instagram.com", handle: "@creativewhoppers" },
  { name: "LinkedIn", href: "https://linkedin.com", handle: "Creative Whoppers" },
  { name: "Behance", href: "https://behance.net", handle: "creativewhoppers" },
  { name: "Twitter / X", href: "https://twitter.com", handle: "@creativewhoppers" },
];

const magneticSpring = { stiffness: 320, damping: 22, mass: 0.34 };

const ACCENT_CLASSES = {
  coral: {
    activeText: "text-agency-coral font-semibold",
    hoverText: "group-hover:text-agency-coral",
    underline: "bg-agency-coral",
  },
  cyan: {
    activeText: "text-agency-cyan font-semibold",
    hoverText: "group-hover:text-agency-cyan",
    underline: "bg-agency-cyan",
  },
  violet: {
    activeText: "text-agency-violet-light font-semibold",
    hoverText: "group-hover:text-agency-violet-light",
    underline: "bg-agency-violet",
  },
  yellow: {
    activeText: "text-agency-yellow font-semibold",
    hoverText: "group-hover:text-agency-yellow",
    underline: "bg-agency-yellow",
  },
};

function MagneticNavLink({
  href,
  index,
  name,
  accent = "yellow",
  isActive,
}: {
  href: string;
  index: string;
  name: string;
  accent?: "coral" | "cyan" | "violet" | "yellow";
  isActive: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, magneticSpring);
  const springY = useSpring(y, magneticSpring);

  const styling = ACCENT_CLASSES[accent] || ACCENT_CLASSES.yellow;

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.24);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionLink
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      initial={false}
      animate={isActive ? "active" : "rest"}
      whileHover={reduceMotion ? undefined : "hover"}
      whileFocus={reduceMotion ? undefined : "hover"}
      variants={{ rest: {}, hover: {}, active: {} }}
      className="group relative inline-flex items-center gap-1.5 py-1 text-sm font-medium tracking-wide uppercase focus-visible:outline-none"
    >
      <span className="text-[10px] text-agency-muted font-mono">{index}</span>
      <span
        className={`${
          isActive ? styling.activeText : "text-agency-white/80"
        } ${styling.hoverText} transition-colors duration-200`}
      >
        {name}
      </span>
      <motion.span
        aria-hidden
        className={`pointer-events-none absolute -bottom-1 left-0 h-[1.5px] w-full ${styling.underline}`}
        style={{ originX: 0 }}
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
          active: { scaleX: 1 },
        }}
        transition={underlineTransition}
      />
    </MotionLink>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-agency-black/92 border-b border-agency-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-agency-yellow flex items-center justify-center font-display font-black text-agency-black text-xl tracking-tighter transition-transform duration-300 group-hover:scale-105">
              CW
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-agency-white group-hover:text-agency-yellow transition-colors">
                CREATIVE WHOPPERS
              </span>
              <span className="text-[10px] tracking-editorial-wide text-agency-muted uppercase font-sans">
                Experience Production
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <MagneticNavLink
                key={link.name}
                href={link.href}
                index={link.index}
                name={link.name}
                accent={link.accent}
                isActive={pathname === link.href}
              />
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <MotionLink
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-agency-yellow text-agency-black font-semibold text-xs uppercase tracking-wider transition-colors duration-300 hover:bg-agency-yellow-hover"
              initial="rest"
              animate="rest"
              whileHover={reduceMotion ? undefined : "hover"}
              whileTap={reduceMotion ? undefined : "tap"}
              variants={{
                rest: ctaRest,
                hover: ctaHover,
                tap: { ...ctaTap, scale: 0.96 },
              }}
              transition={ctaTransition}
            >
              <span>Start a Project</span>
              <motion.span
                variants={{
                  rest: { rotate: 0, y: 0 },
                  hover: { rotate: 0, x: 1, y: -1 },
                  tap: { scale: 0.95 },
                }}
                transition={{ duration: 0.28, ease: easings.outSoft }}
                className="inline-flex"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.span>
            </MotionLink>

            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2.5 rounded-full border border-agency-border bg-agency-surface text-agency-white hover:text-agency-yellow hover:border-agency-yellow"
              aria-label="Open Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="fullscreen-mobile-menu"
              id="mobile-menu-open-btn"
              whileTap={reduceMotion ? undefined : { scale: 0.9 }}
              transition={{ duration: 0.16, ease: easings.outSoft }}
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuOverlayVariants}
            className="fixed inset-0 z-50 overflow-hidden"
            id="fullscreen-mobile-menu"
          >
            <motion.div
              variants={menuScrimVariants}
              className="absolute inset-0 bg-agency-black"
            />

            <motion.div
              variants={menuPanelVariants}
              data-lenis-prevent
              className="relative z-10 h-full flex flex-col justify-between overflow-y-auto px-6 sm:px-12 py-8"
            >
              {/* Top Bar inside Overlay */}
              <motion.div
                variants={menuItemVariants}
                className="max-w-7xl w-full mx-auto flex items-center justify-between border-b border-agency-border pb-6"
              >
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-sm bg-agency-yellow flex items-center justify-center font-display font-black text-agency-black text-lg">
                    CW
                  </div>
                  <span className="font-display font-bold text-base tracking-tight text-agency-white">
                    CREATIVE WHOPPERS
                  </span>
                </Link>

                <motion.button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-agency-border bg-agency-surface text-agency-white hover:text-agency-yellow hover:border-agency-yellow text-xs font-mono uppercase"
                  aria-label="Close Menu"
                  id="mobile-menu-close-btn"
                  whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                  transition={{ duration: 0.16, ease: easings.outSoft }}
                >
                  <span>Close</span>
                  <X className="w-4 h-4 text-agency-yellow" />
                </motion.button>
              </motion.div>

              {/* Middle: Oversized Staggered Links */}
              <motion.nav
                variants={menuListVariants}
                className="max-w-7xl w-full mx-auto py-12 flex flex-col gap-4 sm:gap-6"
              >
                <p className="text-xs font-mono text-agency-yellow uppercase tracking-editorial-wide mb-4">
                  [ NAVIGATION INDEX ]
                </p>
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  const itemColor =
                    link.accent === "coral"
                      ? "group-hover:text-agency-coral"
                      : link.accent === "cyan"
                      ? "group-hover:text-agency-cyan"
                      : link.accent === "violet"
                      ? "group-hover:text-agency-violet-light"
                      : "group-hover:text-agency-yellow";

                  const activeColor =
                    link.accent === "coral"
                      ? "text-agency-coral"
                      : link.accent === "cyan"
                      ? "text-agency-cyan"
                      : link.accent === "violet"
                      ? "text-agency-violet-light"
                      : "text-agency-yellow";

                  const borderHover =
                    link.accent === "coral"
                      ? "hover:border-agency-coral"
                      : link.accent === "cyan"
                      ? "hover:border-agency-cyan"
                      : link.accent === "violet"
                      ? "hover:border-agency-violet"
                      : "hover:border-agency-yellow";

                  const arrowColor =
                    link.accent === "coral"
                      ? "text-agency-coral"
                      : link.accent === "cyan"
                      ? "text-agency-cyan"
                      : link.accent === "violet"
                      ? "text-agency-violet"
                      : "text-agency-yellow";

                  return (
                    <motion.div key={link.name} variants={menuItemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-agency-border/60 ${borderHover} transition-colors`}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className={`text-sm font-mono text-agency-muted ${itemColor} transition-colors`}>
                            {link.index}
                          </span>
                          <span
                            className={`font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight transition-all duration-300 ${
                              isActive ? activeColor : "text-agency-white"
                            } ${itemColor} group-hover:translate-x-2`}
                          >
                            {link.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-1 sm:mt-0">
                          <span className="text-[11px] font-mono text-agency-muted group-hover:text-agency-white/80 transition-colors">
                            {link.tag}
                          </span>
                          <ArrowUpRight className={`w-4 h-4 ${arrowColor} opacity-0 group-hover:opacity-100 transition-opacity`} />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div variants={menuItemVariants} className="mt-6">
                  <MotionLink
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-agency-yellow text-agency-black font-display font-bold text-sm tracking-wider uppercase"
                    whileHover={reduceMotion ? undefined : ctaHover}
                    whileTap={reduceMotion ? undefined : ctaTap}
                    transition={ctaTransition}
                  >
                    <span>Start A Project Brief</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </MotionLink>
                </motion.div>
              </motion.nav>

              {/* Bottom: Studio Coordinates & Socials */}
              <motion.div
                variants={menuItemVariants}
                className="max-w-7xl w-full mx-auto pt-8 border-t border-agency-border grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs"
              >
                <div>
                  <span className="text-agency-muted font-mono block mb-2">[ INQUIRIES ]</span>
                  <a
                    href="mailto:hello@creativewhoppers.com"
                    className="text-agency-white hover:text-agency-yellow transition-colors font-mono"
                  >
                    hello@creativewhoppers.com
                  </a>
                </div>

                <div>
                  <span className="text-agency-muted font-mono block mb-2">[ STUDIO HUBS ]</span>
                  <p className="text-agency-white/80 font-sans">
                    New Delhi / London / New York
                  </p>
                </div>

                <div>
                  <span className="text-agency-muted font-mono block mb-2">[ CONNECT ]</span>
                  <div className="flex flex-wrap gap-4 font-mono text-[11px]">
                    {SOCIAL_LINKS.map((soc) => (
                      <a
                        key={soc.name}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-agency-white/80 hover:text-agency-yellow transition-colors"
                      >
                        {soc.name} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

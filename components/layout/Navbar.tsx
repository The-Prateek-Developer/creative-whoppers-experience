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
import { CONTACT_HREF, NAP, NAV_LINKS } from "@/lib/site";
import SocialIcon from "@/components/icons/SocialIcon";
import ThemeToggle from "@/components/theme/ThemeToggle";
import BrandLogo from "@/components/brand/BrandLogo";

const MotionLink = motion.create(Link);

function isNavActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const magneticSpring = { stiffness: 320, damping: 22, mass: 0.34 };

function MagneticNavLink({
  href,
  name,
  isActive,
}: {
  href: string;
  name: string;
  isActive: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, magneticSpring);
  const springY = useSpring(y, magneticSpring);

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
      {...(href.startsWith("http")
        ? { target: "_blank" as const, rel: "noopener noreferrer" }
        : {})}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduceMotion ? undefined : { x: springX, y: springY }}
      initial={false}
      animate={isActive ? "active" : "rest"}
      whileHover={reduceMotion ? undefined : "hover"}
      whileFocus={reduceMotion ? undefined : "hover"}
      variants={{ rest: {}, hover: {}, active: {} }}
      className="group relative inline-flex items-center py-1 text-sm font-medium tracking-wide uppercase focus-visible:outline-none"
    >
      <span
        className={`${
          isActive ? "text-agency-yellow font-semibold" : "text-agency-white/80"
        } group-hover:text-agency-yellow transition-colors duration-200`}
      >
        {name}
      </span>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -bottom-1 left-0 h-[1.5px] w-full bg-agency-yellow"
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
      <header className="fixed top-0 left-0 z-[100] w-full border-b border-agency-border bg-agency-black backdrop-blur-md">
        <div className="mx-auto flex h-[5.5rem] max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Brand Logo / Wordmark */}
          <Link
            href="/"
            aria-label="Creative Whoppers home"
            className="group flex min-w-0 items-center transition-opacity duration-300 hover:opacity-80"
          >
            <BrandLogo size="nav" priority />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <MagneticNavLink
                key={link.name}
                href={link.href}
                name={link.name}
                isActive={isNavActive(pathname, link.href)}
              />
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle />
            <MotionLink
              href={CONTACT_HREF}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-agency-yellow px-6 py-3 text-xs font-semibold uppercase tracking-wider text-agency-ink transition-colors duration-300 hover:bg-agency-yellow"
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
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-agency-border bg-agency-surface text-agency-white hover:border-agency-yellow hover:text-agency-yellow md:hidden"
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
            className="fixed inset-0 z-[110] overflow-hidden"
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
                  aria-label="Creative Whoppers home"
                  className="flex min-w-0 items-center"
                >
                  <BrandLogo size="menu" />
                </Link>

                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <motion.button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-agency-border bg-agency-surface px-4 text-xs font-mono uppercase text-agency-white hover:border-agency-yellow hover:text-agency-yellow"
                    aria-label="Close Menu"
                    id="mobile-menu-close-btn"
                    whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                    transition={{ duration: 0.16, ease: easings.outSoft }}
                  >
                    <span>Close</span>
                    <X className="w-4 h-4 text-agency-yellow" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Middle: Oversized Staggered Links */}
              <motion.nav
                variants={menuListVariants}
                className="max-w-7xl w-full mx-auto py-12 flex flex-col gap-4 sm:gap-6"
              >
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-agency-yellow">
                  Menu
                </p>
                {NAV_LINKS.map((link) => {
                  const isActive = isNavActive(pathname, link.href);

                  return (
                    <motion.div key={link.name} variants={menuItemVariants}>
                      <Link
                        href={link.href}
                        {...(link.href.startsWith("http")
                          ? { target: "_blank" as const, rel: "noopener noreferrer" }
                          : {})}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-2 border-b border-agency-white/10 hover:border-agency-yellow transition-colors"
                      >
                        <div className="flex items-baseline">
                          <span
                            className={`font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight transition-all duration-300 ${
                              isActive ? "text-agency-yellow" : "text-agency-white"
                            } group-hover:text-agency-yellow group-hover:translate-x-2`}
                          >
                            {link.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-1 sm:mt-0">
                          <span className="text-[11px] font-mono text-agency-white/55 group-hover:text-agency-white/80 transition-colors">
                            {link.tag}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-agency-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div variants={menuItemVariants} className="mt-6">
                  <MotionLink
                    href={CONTACT_HREF}
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-agency-yellow text-agency-ink font-display font-bold text-sm tracking-wider uppercase"
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
                  <span className="mb-2 block text-agency-white/55">Inquiries</span>
                  <Link
                    href={CONTACT_HREF}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-agency-white hover:text-agency-yellow transition-colors font-mono"
                  >
                    {NAP.emails[0]}
                  </Link>
                </div>

                <div>
                  <span className="mb-2 block text-agency-white/55">Studio</span>
                  <p className="text-agency-white/80 font-sans">
                    {NAP.addressLocality}, {NAP.addressRegion}
                  </p>
                </div>

                <div>
                  <span className="mb-2 block text-agency-white/55">Connect</span>
                  <div className="flex flex-wrap gap-4 font-mono text-[11px]">
                    {NAP.social.map((soc) => (
                      <a
                        key={soc.name}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-agency-white/80 hover:text-agency-yellow transition-colors"
                      >
                        <SocialIcon name={soc.name} />
                        {soc.name}
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

"use client";

import React, { useCallback, useEffect, useState } from "react";
import FadeImage from "@/components/media/FadeImage";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { PROCESS_STAGES } from "@/lib/process";
import { SITE_IMAGES } from "@/lib/site-images";
import TeamGrid from "@/components/sections/TeamGrid";
import { altCardBg } from "@/lib/utils";
import { useLenis } from "@/components/layout/SmoothScroll";
import { layoutSpring } from "@/lib/animations";

const ABOUT_SECTIONS = [
  { id: "who-we-are", label: "Who we are" },
  { id: "mission-and-vision", label: "Mission & vision" },
  { id: "our-approach", label: "Our approach" },
  { id: "our-team", label: "Our team" },
  { id: "trusted-across-sectors", label: "Trusted across sectors" },
] as const;

type AboutSectionId = (typeof ABOUT_SECTIONS)[number]["id"];

const NAV_OFFSET = -112;

const MISSION_VISION = [
  {
    title: "Our mission",
    detail:
      "To design, create and amplify meaningful experiences that connect people, communicate ideas and create lasting impact.",
    image: SITE_IMAGES.ourMission,
    imageClass: "object-cover object-center",
    alt: "A glowing lamp — ideas brought to light",
  },
  {
    title: "Our vision",
    detail:
      "To become a leading creative experience company, shaping how organisations connect with people through ideas, stories, technology and experiences.",
    image: SITE_IMAGES.ourVision,
    imageClass: "object-cover object-center",
    alt: "A yellow queen among chess pieces — leading with clarity",
  },
] as const;

const TEAM = [
  {
    name: "Khaalid Naik",
    role: "Co-Founder & Executive Director",
    experience: "Leadership",
    image: "/images/team/khaalid-naik.png",
  },
  {
    name: "Dilip Katariya",
    role: "Co-Founder & Creative Director",
    experience: "Leadership",
    image: "/images/team/dilip-katariya.png",
  },
  {
    name: "Imran Haider",
    role: "Production Designer",
    experience: "Experience Design",
    image: "/images/team/imran-haider.png",
  },
  {
    name: "Ashima Kumar",
    role: "Brand Marketing Manager",
    experience: "Brand Marketing",
    image: "/images/team/ashima-kumar.png",
  },
  {
    name: "Umar Bin Ahad",
    role: "Cinematographer",
    experience: "Creative Production",
    image: "/images/team/umar-bin-ahad.png",
  },
  {
    name: "Ruchika Khatri",
    role: "Graphic and UI Designer",
    experience: "Design",
    image: "/images/team/ruchika-khatri.png",
  },
  {
    name: "Shoaib Zaidi",
    role: "Content Writer",
    experience: "Content",
    image: "/images/team/shoaib-zaidi.png",
  },
  {
    name: "Anand Mohan Gupta",
    role: "Video Editor",
    experience: "Post-Production",
    image: "/images/team/anand-mohan-gupta.png",
  },
  {
    name: "Hilal Bhat",
    role: "Photographer",
    experience: "Photography",
    image: "/images/team/hilal-bhat.png",
  },
  {
    name: "Rohan Sonker",
    role: "Creative Designer",
    experience: "Design",
    image: "/images/team/rohan-sonker.png",
  },
  {
    name: "Jitendra Singh",
    role: "Drone Pilot",
    experience: "Aerial",
    image: "/images/team/jitendra-singh.png",
  },
];

export default function AboutClient() {
  const lenis = useLenis();
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<AboutSectionId>(ABOUT_SECTIONS[0].id);

  const scrollToSection = useCallback(
    (id: AboutSectionId) => {
      const target = document.getElementById(id);
      if (!target) return;
      setActiveId(id);
      window.history.replaceState(null, "", `#${id}`);
      if (lenis) {
        lenis.scrollTo(target, {
          offset: NAV_OFFSET,
          duration: reduceMotion ? 0 : 1.05,
        });
        return;
      }
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    },
    [lenis, reduceMotion]
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as AboutSectionId;
    if (ABOUT_SECTIONS.some((section) => section.id === hash)) {
      const timer = window.setTimeout(() => scrollToSection(hash), 80);
      return () => window.clearTimeout(timer);
    }
  }, [scrollToSection]);

  useEffect(() => {
    const updateActive = () => {
      const marker = 140;
      let current: AboutSectionId = ABOUT_SECTIONS[0].id;
      for (const section of ABOUT_SECTIONS) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= marker) current = section.id;
      }
      setActiveId(current);
    };

    if (lenis) {
      lenis.on("scroll", updateActive);
      updateActive();
      return () => {
        lenis.off("scroll", updateActive);
      };
    }

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", updateActive);
  }, [lenis]);

  return (
    <>
      <section className="relative z-10 mx-auto mb-16 max-w-7xl px-6 lg:px-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-editorial-wide text-agency-yellow">
          About us
        </p>
        <h1 className="page-heading mb-6 max-w-none whitespace-nowrap font-display text-display-xl font-bold uppercase tracking-tight text-agency-white">
          Who we are
        </h1>
        <p className="page-heading-lead font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
          Have a project in mind? Share your brief with us, and let&apos;s explore how we can bring
          it to life.
        </p>
      </section>

      <section className="relative z-10 mx-auto mb-16 max-w-7xl px-6 lg:px-12">
        <LayoutGroup id="about-section-nav">
        <div className="flex items-center gap-2 overflow-x-auto border-b border-agency-border pb-4 scrollbar-none">
          {ABOUT_SECTIONS.map((section) => {
            const isActive = activeId === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`relative whitespace-nowrap rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  isActive
                    ? "font-bold text-agency-ink"
                    : "border border-agency-border bg-agency-surface text-agency-white/70 hover:border-agency-yellow/50 hover:text-agency-yellow"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId={reduceMotion ? undefined : "about-section-pill"}
                    className="absolute inset-0 rounded-full bg-agency-yellow shadow-[0_0_15px_rgba(248,214,37,0.35)]"
                    transition={layoutSpring}
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </button>
            );
          })}
        </div>
        </LayoutGroup>
      </section>

      <section id="who-we-are" className="relative z-10 mx-auto mb-24 max-w-7xl scroll-mt-28 px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-agency-border lg:col-span-6">
            <FadeImage
              src="/images/site/conference.jpg"
              alt="Live event production and stage design"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-6">
            <p className="mb-4 font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
              Have a project in mind? Share your brief with us, and let&apos;s explore how we can
              bring it to life. Every memorable experience starts with an idea, but it takes
              strategy, creativity, technology and flawless execution to bring that idea to life.
              That&apos;s where we come in.
            </p>
            <p className="font-sans text-sm leading-relaxed text-agency-white/65 sm:text-base">
              From a stage and a screen to an interactive space, we bring together creative thinking
              and execution under one roof to create experiences that connect with people, communicate
              ideas and create lasting impact.
            </p>
          </div>
        </div>
      </section>

      <section
        id="mission-and-vision"
        className="relative z-10 mx-auto mb-24 max-w-7xl scroll-mt-28 px-6 lg:px-12"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {MISSION_VISION.map((item, index) => (
            <div
              key={item.title}
              className={`overflow-hidden rounded-3xl border border-agency-border ${altCardBg(index)}`}
            >
              <div className="relative aspect-[4/3]">
                <FadeImage
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={item.imageClass}
                />
              </div>
              <div className="p-8">
                <h3 className="mb-4 font-display text-xl font-semibold uppercase text-agency-yellow">
                  {item.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-agency-white/70">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="our-approach"
        className="relative z-10 mx-auto mb-24 max-w-7xl scroll-mt-28 px-6 lg:px-12"
      >
        <h2 className="section-heading mb-12 text-agency-white">Our approach</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {PROCESS_STAGES.map((stage, index) => (
            <div
              key={stage.id}
              className={`rounded-2xl border border-agency-border p-8 ${altCardBg(index)}`}
            >
              <span className="font-mono text-xs text-agency-yellow">{stage.number}</span>
              <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-tight text-agency-white">
                {stage.title}
              </h3>
              <p className="mt-2 font-display text-base font-semibold tracking-tight text-agency-white">
                {stage.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-agency-white/60">{stage.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="our-team" className="relative z-10 mb-8 scroll-mt-28">
        <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-12">
          <h2 className="section-heading text-agency-white">Meet the team</h2>
        </div>
        <TeamGrid people={TEAM} />
      </section>
    </>
  );
}

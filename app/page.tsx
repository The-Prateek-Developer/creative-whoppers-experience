import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import ServicesGrid from "@/components/sections/ServicesGrid";
import PhilosophySection from "@/components/sections/PhilosophySection";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { SITE_DESCRIPTION, SITE_NAME, SITE_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} | Experiential Advertising & Production` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} | Experiential Advertising & Production`,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Experiential Advertising & Production`,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
};

export default function HomePage() {
  return (
    <div className="relative w-full">
      {/* Editorial Section Flow */}
      <Hero />
      <WhatWeDo />
      <ServicesGrid />
      <PhilosophySection />
      <PortfolioGrid />
      <Testimonials />
      <CTA />
    </div>
  );
}

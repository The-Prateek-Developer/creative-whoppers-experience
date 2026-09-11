import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import FlagshipServices from "@/components/sections/FlagshipServices";
import ExpertisePillars from "@/components/sections/ExpertisePillars";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import WhyWhoppers from "@/components/sections/WhyWhoppers";
import ClientLogos from "@/components/sections/ClientLogos";
import Testimonials from "@/components/sections/Testimonials";
import JsonLd from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/schema";
import { PAGE_SEO, SITE_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: PAGE_SEO.home.title },
  description: PAGE_SEO.home.description,
  keywords: [...PAGE_SEO.home.keywords],
  alternates: { canonical: "/" },
  openGraph: {
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    url: "/",
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    images: [SITE_OG_IMAGE],
  },
};

export default function HomePage() {
  return (
    <div className="relative w-full">
      <JsonLd data={organizationJsonLd()} />
      <Hero />
      <AboutSnapshot />
      <FlagshipServices />
      <ExpertisePillars />
      <PortfolioGrid />
      <WhyWhoppers />
      <ClientLogos />
      <Testimonials />
    </div>
  );
}

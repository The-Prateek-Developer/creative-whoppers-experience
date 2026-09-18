import React from "react";
import type { Metadata } from "next";
import AboutClient from "@/components/sections/AboutClient";
import Testimonials from "@/components/sections/Testimonials";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { PAGE_SEO, SITE_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: PAGE_SEO.about.title },
  description: PAGE_SEO.about.description,
  keywords: [...PAGE_SEO.about.keywords],
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    url: "/about-us",
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.about.title,
    description: PAGE_SEO.about.description,
    images: [SITE_OG_IMAGE],
  },
};

export default function AboutPage() {
  return (
    <div className="relative w-full overflow-hidden pb-10 pt-8">
      <div
        className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-agency-yellow/15 blur-3xl"
        aria-hidden
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about-us" },
        ])}
      />
      <AboutClient />
      <Testimonials
        id="trusted-across-sectors"
        className="relative z-10 scroll-mt-28 pt-12 pb-6 lg:pt-16 lg:pb-8"
      />
    </div>
  );
}

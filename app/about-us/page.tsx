import React from "react";
import type { Metadata } from "next";
import AboutClient from "@/components/sections/AboutClient";
import ClientLogos from "@/components/sections/ClientLogos";
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
    <div className="w-full">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about-us" },
        ])}
      />
      <AboutClient />
      <Testimonials />
      <ClientLogos scrollerOnly />
    </div>
  );
}

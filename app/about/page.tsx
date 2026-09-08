import React from "react";
import type { Metadata } from "next";
import AboutClient from "@/components/sections/AboutClient";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { SITE_OG_IMAGE } from "@/lib/site";

const ABOUT_DESCRIPTION =
  "We design experiences that people remember. 16+ years of creative leadership, Hollywood feature visual effects, nationwide state broadcasts, and high-impact experiential advertising.";
const ABOUT_OG_DESCRIPTION =
  "A creative experience company helping organisations design, produce, and amplify memorable moments across events, multimedia, spatial environments, and marketing.";

export const metadata: Metadata = {
  title: "About",
  description: ABOUT_DESCRIPTION,
  keywords: [
    "Creative Whoppers about",
    "Dilip Katariya",
    "Khaalid Naik",
    "experiential agency",
    "creative production company",
    "immersive advertising",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Creative Whoppers",
    description: ABOUT_OG_DESCRIPTION,
    url: "/about",
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Creative Whoppers",
    description: ABOUT_OG_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutClient />
      <Testimonials />
      <CTA />
    </div>
  );
}

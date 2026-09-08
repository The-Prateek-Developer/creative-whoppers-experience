import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Film, motion, brand identity, experiential spaces, photography, and post-production — capabilities engineered for campaigns that stop culture mid-scroll.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Production Disciplines | Creative Whoppers",
    description:
      "From cinema-grade film to museum digitization, explore the full Creative Whoppers production catalog.",
    url: "/services",
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Production Disciplines | Creative Whoppers",
    description:
      "From cinema-grade film to museum digitization, explore the full Creative Whoppers production catalog.",
    images: [SITE_OG_IMAGE],
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}

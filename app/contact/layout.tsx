import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Creative Whoppers. Brief us on campaign films, spatial experiences, and high-craft production.",
  keywords: [
    "Contact Creative Whoppers",
    "Creative Production Brief",
    "Experiential Agency New Delhi",
    "Advertising Production Inquiry",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Start a Project | Creative Whoppers",
    description:
      "Discuss your upcoming brief, timeline, and campaign objectives with our production team.",
    url: "/contact",
    images: ["/images/brand/banners/final_contact_banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Start a Project | Creative Whoppers",
    description:
      "Discuss your upcoming brief, timeline, and campaign objectives with our production team.",
    images: ["/images/brand/banners/final_contact_banner.png"],
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}

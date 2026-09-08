import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected campaign archives: diplomatic films, national broadcasts, museum digitization, and live cultural spectacles produced by Creative Whoppers.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Selected Works | Creative Whoppers",
    description:
      "Case studies spanning government, diplomatic, and commercial productions — from Cycling4Life to Hall of Fame Leh.",
    url: "/portfolio",
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Works | Creative Whoppers",
    description:
      "Case studies spanning government, diplomatic, and commercial productions — from Cycling4Life to Hall of Fame Leh.",
    images: [SITE_OG_IMAGE],
  },
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return children;
}

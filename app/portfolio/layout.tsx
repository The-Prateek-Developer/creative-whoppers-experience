import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PAGE_SEO, SITE_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: PAGE_SEO.portfolio.title },
  description: PAGE_SEO.portfolio.description,
  keywords: [...PAGE_SEO.portfolio.keywords],
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: PAGE_SEO.portfolio.title,
    description: PAGE_SEO.portfolio.description,
    url: "/portfolio",
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.portfolio.title,
    description: PAGE_SEO.portfolio.description,
    images: [SITE_OG_IMAGE],
  },
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return children;
}

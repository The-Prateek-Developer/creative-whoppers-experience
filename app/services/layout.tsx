import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PAGE_SEO, SITE_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: PAGE_SEO.services.title },
  description: PAGE_SEO.services.description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: PAGE_SEO.services.title,
    description: PAGE_SEO.services.description,
    url: "/services",
    images: [SITE_OG_IMAGE],
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}

import type { Metadata } from "next";
import { SITE_NAME, SITE_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
  openGraph: {
    title: SITE_NAME,
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Creative Whoppers brand mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [SITE_OG_IMAGE],
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}

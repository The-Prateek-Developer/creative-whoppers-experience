import React from "react";
import type { Metadata } from "next";
import ContactClient from "@/components/sections/ContactClient";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, localBusinessJsonLd } from "@/lib/schema";
import { PAGE_SEO, SITE_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: PAGE_SEO.contact.title },
  description: PAGE_SEO.contact.description,
  keywords: [...PAGE_SEO.contact.keywords],
  alternates: { canonical: "/contact-us" },
  openGraph: {
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    url: "/contact-us",
    images: [SITE_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.contact.title,
    description: PAGE_SEO.contact.description,
    images: [SITE_OG_IMAGE],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact-us" },
          ]),
        ]}
      />
      <ContactClient />
    </>
  );
}

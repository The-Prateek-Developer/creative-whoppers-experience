import React from "react";
import PortfolioArchive from "@/components/sections/PortfolioArchive";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
        ])}
      />
      <PortfolioArchive />
    </>
  );
}

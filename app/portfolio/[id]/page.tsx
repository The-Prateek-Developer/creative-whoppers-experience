import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PortfolioProjectView from "@/components/sections/PortfolioProjectView";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { getProject, PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import { SITE_OG_IMAGE } from "@/lib/site";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({ id: project.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.id);
  if (!project) return {};
  return {
    title: { absolute: `${project.title} | Creative Whoppers` },
    description: project.overview,
    alternates: { canonical: `/portfolio/${project.id}` },
    openGraph: {
      title: `${project.title} | Creative Whoppers`,
      description: project.tagline,
      url: `/portfolio/${project.id}`,
      images: [project.coverImage || SITE_OG_IMAGE],
    },
  };
}

export default function PortfolioProjectPage({ params }: Props) {
  const project = getProject(params.id);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: project.title, path: `/portfolio/${project.id}` },
        ])}
      />
      <PortfolioProjectView project={project} />
    </>
  );
}

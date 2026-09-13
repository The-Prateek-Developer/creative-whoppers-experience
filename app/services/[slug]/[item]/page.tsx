import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceItemView from "@/components/sections/ServiceItemView";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";
import { getServiceItem } from "@/lib/services-tree";
import { getServiceItemDetail, listServiceItemParams } from "@/lib/service-item-pages";
import { SITE_OG_IMAGE } from "@/lib/site";

type Props = { params: { slug: string; item: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return listServiceItemParams();
}

export function generateMetadata({ params }: Props): Metadata {
  const match = getServiceItem(params.slug, params.item);
  const detail = getServiceItemDetail(params.slug, params.item);
  if (!match || !detail) return {};

  const title = `${match.item.name} | Creative Whoppers`;
  const description = match.item.description;
  const path = `/services/${params.slug}/${params.item}`;
  const image = detail.images[0] || SITE_OG_IMAGE;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [image],
    },
  };
}

export default function ServiceItemPage({ params }: Props) {
  const match = getServiceItem(params.slug, params.item);
  const detail = getServiceItemDetail(params.slug, params.item);
  if (!match || !detail) notFound();

  const path = `/services/${match.page.slug}/${detail.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: match.page.title, path: `/services/${match.page.slug}` },
            { name: match.item.name, path: path },
          ]),
          serviceJsonLd({
            name: match.item.name,
            description: match.item.description,
            path,
          }),
        ]}
      />
      <ServiceItemView
        page={match.page}
        group={match.group}
        item={match.item}
        detail={detail}
      />
    </>
  );
}

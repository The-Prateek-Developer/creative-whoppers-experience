import { BRAND_LOGOS, NAP, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}${BRAND_LOGOS.yellow}`,
    email: NAP.emails[0],
    telephone: NAP.phoneTel[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.headOffice.streetAddress,
      addressLocality: NAP.headOffice.addressLocality,
      addressRegion: NAP.headOffice.addressRegion,
      postalCode: NAP.headOffice.postalCode,
      addressCountry: NAP.headOffice.addressCountry,
    },
    location: NAP.offices.map((office) => ({
      "@type": "Place",
      name: `${SITE_NAME} - ${office.title}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.streetAddress,
        addressLocality: office.addressLocality,
        addressRegion: office.addressRegion,
        postalCode: office.postalCode,
        addressCountry: office.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: office.geo.latitude,
        longitude: office.geo.longitude,
      },
    })),
    sameAs: NAP.social.map((item) => item.href),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: NAP.name,
    image: `${SITE_URL}${SITE_OG_IMAGE}`,
    url: `${SITE_URL}/contact-us`,
    telephone: NAP.phoneTel[0],
    email: NAP.emails[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.corporateOffice.streetAddress,
      addressLocality: NAP.corporateOffice.addressLocality,
      addressRegion: NAP.corporateOffice.addressRegion,
      postalCode: NAP.corporateOffice.postalCode,
      addressCountry: NAP.corporateOffice.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.corporateOffice.geo.latitude,
      longitude: NAP.corporateOffice.geo.longitude,
    },
    department: [
      {
        "@type": "LocalBusiness",
        name: `${NAP.name} - Head Office`,
        address: {
          "@type": "PostalAddress",
          streetAddress: NAP.headOffice.streetAddress,
          addressLocality: NAP.headOffice.addressLocality,
          addressRegion: NAP.headOffice.addressRegion,
          postalCode: NAP.headOffice.postalCode,
          addressCountry: NAP.headOffice.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: NAP.headOffice.geo.latitude,
          longitude: NAP.headOffice.geo.longitude,
        },
        openingHours: "Mo-Sa 10:00-19:00",
      },
    ],
    openingHours: "Mo-Sa 10:00-19:00",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "IN",
  };
}

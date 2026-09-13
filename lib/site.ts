export const SITE_NAME = "Creative Whoppers";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://creativewhoppers.com";
export const SITE_OG_IMAGE = "/images/site/cycling-stage.jpg";

export const BRAND_LOGOS = {
  dark: "/images/brand/logos/logo-wordmark-dark.png",
  light: "/images/brand/logos/logo-wordmark-light.png",
  yellow: "/images/brand/logos/logo-lockup-yellow.png",
} as const;

export const SITE_DESCRIPTION =
  "We're a Creative Experience Company helping organisations design, produce and amplify memorable experiences through events, multimedia production, digital experiences and strategic marketing.";

export const SITE_TAGLINE = "Enhance the creative impact of your Brand";

export const NAP = {
  name: "Creative Whoppers",
  legalName: "Creative Whopper Pvt. Ltd.",
  streetAddress: "3rd Floor, 211, Okhla Industrial Estate Phase 3 Rd, Okhla Phase III",
  addressLocality: "New Delhi",
  addressRegion: "Delhi",
  postalCode: "110020",
  addressCountry: "IN",
  phones: ["+91 96675 63175", "+91 93544 84098"],
  phoneTel: ["+919667563175", "+919354484098"],
  emails: ["hello@creativewhoppers.com"],
  hours: "Monday–Saturday, 10:00 AM – 7:00 PM IST",
  mapEmbed:
    "https://maps.google.com/maps?q=211%20Okhla%20Industrial%20Estate%20Phase%203%2C%20New%20Delhi%20110020&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapLink:
    "https://maps.google.com/?q=211+Okhla+Industrial+Estate+Phase+3,+New+Delhi+110020",
  social: [
    { name: "Instagram", href: "https://instagram.com/creativewhoppers" },
    { name: "LinkedIn", href: "https://linkedin.com/company/creative-whoppers" },
    { name: "Facebook", href: "https://facebook.com/creativewhoppers" },
    { name: "YouTube", href: "https://youtube.com/@creativewhoppers" },
  ],
} as const;

export const PAGE_SEO = {
  home: {
    title: "Creative Whoppers | Creative Experience Company",
    description: SITE_DESCRIPTION,
    h1: "Creative Whoppers, Enhance the creative impact of your Brand",
    keywords: [
      "creative agency",
      "advertising agency",
      "experience design company",
      "event management agency",
      "brand marketing agency",
      "digital experience company",
    ],
  },
  about: {
    title: "About Creative Whoppers | Our Story, Mission & Team",
    description:
      "Learn how Creative Whoppers designs memorable experiences — our story, mission, approach and the team behind events, production, digital and marketing.",
    h1: "About Creative Whoppers",
    keywords: [
      "about creative whoppers",
      "creative agency team",
      "agency mission and vision",
      "creative agency India",
    ],
  },
  services: {
    title: "Our Services | Events, Creative Production, Digital & Marketing",
    description:
      "Explore Creative Whoppers' services — experience design, film & photography, digital experiences and brand & marketing, all under one creative agency.",
    h1: "Our Services",
    keywords: [
      "creative agency services",
      "event management services",
      "brand and marketing services",
      "digital experience services",
      "video production services",
    ],
  },
  portfolio: {
    title: "Our Work | Portfolio & Case Studies — Creative Whoppers",
    description:
      "Browse Creative Whoppers' portfolio of events, films, branding and digital projects for corporate, government and institutional clients.",
    h1: "Our Work",
    keywords: [
      "creative agency portfolio",
      "agency case studies",
      "event management case studies",
      "branding portfolio",
      "digital design portfolio",
    ],
  },
  contact: {
    title: "Contact Creative Whoppers | Get a Quote",
    description:
      "Get in touch with Creative Whoppers for events, creative production, digital experiences and marketing. Request a quote or visit our office.",
    h1: "Contact Us",
    keywords: [
      "contact creative agency",
      "get a quote creative agency",
      "creative agency near me",
      "event agency contact",
    ],
  },
} as const;

export const CONTACT_HREF = "/contact-us";
export const WHATSAPP_URL = "https://wa.me/919354484098";
export const WHATSAPP_LINK = {
  href: CONTACT_HREF,
};

export const NAV_LINKS = [
  { name: "Services", href: "/services", tag: "Events, film, digital & marketing" },
  { name: "Portfolio", href: "/portfolio", tag: "Our work & case studies" },
  { name: "About Us", href: "/about-us", tag: "Story, mission & team" },
  { name: "Contact Us", href: "/contact-us", tag: "Get a quote" },
] as const;

export const STATS = [
  { value: "16+", label: "Years of Experience" },
  { value: "75+", label: "Projects Delivered" },
  { value: "20+", label: "Organisations Served" },
  { value: "47+", label: "Cities & Locations" },
] as const;

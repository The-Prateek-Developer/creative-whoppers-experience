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
  "Creative Whoppers is a full-service creative agency for event experiences, film production, digital design and brand marketing. Turning ideas into memorable brand experiences.";

export const SITE_TAGLINE = "Crafting Memorable Brand Experiences";

export const NAP = {
  name: "Creative Whoppers",
  legalName: "Creative Whoppers",
  streetAddress: "3rd Floor, 211, Okhla Industrial Estate Phase 3 Rd, Okhla Phase III",
  addressLocality: "New Delhi",
  addressRegion: "Delhi",
  postalCode: "110020",
  addressCountry: "IN",
  phones: ["+91 96675 63175", "+91 93544 84098"],
  phoneTel: ["+919667563175", "+919354484098"],
  emails: ["contact@creativewhoppers.com"],
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
    title: "Creative Whoppers | Advertising & Experience Design Agency",
    description: SITE_DESCRIPTION,
    h1: "Creative Whoppers — Crafting Memorable Brand Experiences",
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
      "Learn how Creative Whoppers became a full-service creative agency — our story, mission, approach and the team behind memorable brand experiences.",
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

export const WHATSAPP_URL = "https://wa.me/919354484098";
export const WHATSAPP_LINK = {
  href: WHATSAPP_URL,
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};

export const NAV_LINKS = [
  { name: "Services", href: "/services", tag: "EVENTS, FILM, DIGITAL & MARKETING" },
  { name: "Portfolio", href: "/portfolio", tag: "OUR WORK & CASE STUDIES" },
  { name: "About Us", href: "/about-us", tag: "STORY, MISSION & TEAM" },
  { name: "Contact Us", href: "/contact-us", tag: "GET A QUOTE" },
] as const;

export const STATS = [
  { value: "10+", label: "Years of experience" },
  { value: "4", label: "Integrated capability pillars" },
  { value: "Gov + Corp", label: "Trusted across sectors" },
  { value: "1 roof", label: "Strategy to execution" },
] as const;

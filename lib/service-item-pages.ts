export type ServiceItemDetail = {
  slug: string;
  capabilities?: string[];
  images: string[];
  videos?: string[];
};

const ED = "/images/services/experience-design";
const CP = "/images/services/creative-production";

function shots(base: string, count: number) {
  return Array.from({ length: count }, (_, index) => `${base}/${String(index + 1).padStart(2, "0")}.png`);
}

export const ITEM_SLUG_BY_NAME: Record<string, string> = {
  "Turnkey Event Management & Production": "turnkey-event-management-production",
  "Venue & Hospitality Management": "venue-hospitality-management",
  "Event Branding & Environmental Design": "event-branding-environmental-design",
  "Event Production & Technical Solutions": "event-production-technical-solutions",
  "Food & Beverage Management": "food-beverage-management",
  "Corporate Gifts & Branded Packaging": "corporate-gifts-branded-packaging",
  "Destination & Programme Design": "destination-programme-design",
  "Themed Events & Experience Design": "themed-events-experience-design",
  "Entertainment & Live Experiences": "entertainment-live-experiences",
  "Corporate Offsites & Team Experiences": "corporate-offsites-team-experiences",
  "Tours, Excursions & Local Experiences": "tours-excursions-local-experiences",
  "Off-Property Events & Destination Experiences": "off-property-events-destination-experiences",
  "Brand Films": "brand-films",
  "Corporate Films": "corporate-films",
  "Documentary Films": "documentary-films",
  "Explainer Videos": "explainer-videos",
  "Product Videos": "product-videos",
  "Testimonial Videos": "testimonial-videos",
  "Podcast Production": "podcast-production",
  "Live Streaming": "live-streaming",
  "Reels & Shorts": "reels-shorts",
  "Video & Audio Editing": "video-audio-editing",
  "Event Photography": "event-photography",
  "Corporate Photography": "corporate-photography",
  "Product Photography": "product-photography",
  "Drone Photography": "drone-photography",
  "Motion Graphics": "motion-graphics",
  "2D Animation": "2d-animation",
  "Logo Design": "logo-design",
  "Brand Identity": "brand-identity",
  "Visual Identity": "visual-identity",
  "Packaging Design": "packaging-design",
  "Company Profile Design": "company-profile-design",
  "Brochure Design": "brochure-design",
  "Social Media Creatives": "social-media-creatives",
  Illustration: "illustration",
  "Creative Campaign Design": "creative-campaign-design",
  "Print Collateral": "print-collateral",
};

export const SERVICE_ITEM_DETAILS: Record<string, ServiceItemDetail> = {
  "experience-design/turnkey-event-management-production": {
    slug: "turnkey-event-management-production",
    capabilities: [
      "Event Strategy, Planning & Project Management",
      "Creative Concept & Experience Design",
      "Production & Technical Infrastructure",
      "Logistics, Hospitality & Vendor Management",
      "On-Ground Execution, Show Management & Closure",
    ],
    images: shots(`${ED}/turnkey-event-management-production`, 4),
  },
  "experience-design/venue-hospitality-management": {
    slug: "venue-hospitality-management",
    capabilities: [
      "Strategic Venue Sourcing & Shortlisting",
      "Hotel & Accommodation Solutions",
      "Site Inspection & Venue Assessment",
      "Commercial Negotiation & Contract Coordination",
      "Venue, Guest & Hospitality Coordination",
    ],
    images: shots(`${ED}/venue-hospitality-management`, 4),
  },
  "experience-design/event-branding-environmental-design": {
    slug: "event-branding-environmental-design",
    capabilities: [
      "Event Brand Identity & Visual Systems",
      "Stage, Backdrop & Set Branding",
      "Venue & Environmental Branding",
      "Wayfinding & Directional Systems",
      "Fabrication, Production & Installation",
    ],
    images: shots(`${ED}/event-branding-environmental-design`, 4),
  },
  "experience-design/event-production-technical-solutions": {
    slug: "event-production-technical-solutions",
    capabilities: [
      "Integrated AV & Display Solutions",
      "Professional Audio & Sound Engineering",
      "Stage, Set & Lighting Production",
      "Technical Direction & Show Management",
      "Live & Multi-Camera Production",
    ],
    images: shots(`${ED}/event-production-technical-solutions`, 4),
  },
  "experience-design/food-beverage-management": {
    slug: "food-beverage-management",
    capabilities: [
      "Menu Planning & Culinary Curation",
      "Catering & Multi-Cuisine Experiences",
      "Live Stations & Interactive Dining",
      "Beverage & Hospitality Services",
      "F&B Operations & Service Management",
    ],
    images: shots(`${ED}/food-beverage-management`, 4),
  },
  "experience-design/corporate-gifts-branded-packaging": {
    slug: "corporate-gifts-branded-packaging",
    capabilities: [
      "Corporate & Executive Gifting",
      "Custom Branded Merchandise",
      "Event & Delegate Gift Kits",
      "Bespoke Packaging & Presentation",
      "Sourcing, Customisation & Production",
    ],
    images: shots(`${ED}/corporate-gifts-branded-packaging`, 4),
  },
  "experience-design/destination-programme-design": {
    slug: "destination-programme-design",
    capabilities: [
      "Destination Research & Selection",
      "Programme & Itinerary Design",
      "Venue & Experience Curation",
      "Local & Cultural Experience Integration",
      "End-to-End Programme Coordination",
    ],
    images: shots(`${ED}/destination-programme-design`, 4),
  },
  "experience-design/themed-events-experience-design": {
    slug: "themed-events-experience-design",
    capabilities: [
      "Thematic Concept & Creative Development",
      "Gala Dinners & Special Events",
      "Décor, Styling & Venue Transformation",
      "Cultural & Destination-Themed Experiences",
      "Experiential Programming & Execution",
    ],
    images: shots(`${ED}/themed-events-experience-design`, 4),
  },
  "experience-design/entertainment-live-experiences": {
    slug: "entertainment-live-experiences",
    capabilities: [
      "Artist & Performer Curation",
      "Live Music & Cultural Performances",
      "DJs, Hosts & Event Entertainment",
      "Interactive & Experiential Entertainment",
      "Entertainment Production & Coordination",
    ],
    images: shots(`${ED}/entertainment-live-experiences`, 4),
  },
  "experience-design/corporate-offsites-team-experiences": {
    slug: "corporate-offsites-team-experiences",
    capabilities: [
      "Corporate Offsite Planning & Management",
      "Team-Building & Group Experiences",
      "Leadership & Collaboration Activities",
      "Indoor & Outdoor Recreational Activities",
      "Retreat, Recreation & Wellness Programmes",
    ],
    images: shots(`${ED}/corporate-offsites-team-experiences`, 4),
  },
  "experience-design/tours-excursions-local-experiences": {
    slug: "tours-excursions-local-experiences",
    capabilities: [
      "Sightseeing & Guided Excursions",
      "Heritage & Cultural Experiences",
      "Adventure & Outdoor Activities",
      "Special-Interest & Experiential Tours",
      "Pre- & Post-Event Tours & Extensions",
    ],
    images: shots(`${ED}/tours-excursions-local-experiences`, 4),
  },
  "experience-design/off-property-events-destination-experiences": {
    slug: "off-property-events-destination-experiences",
    capabilities: [
      "Off-Site Venue & Location Curation",
      "Destination Dinners & Gala Experiences",
      "Heritage & Unique Venue Experiences",
      "Outdoor & Experiential Event Formats",
      "Logistics, Vendor & On-Ground Management",
    ],
    images: shots(`${ED}/off-property-events-destination-experiences`, 4),
  },
  "creative-production/brand-films": {
    slug: "brand-films",
    images: shots(`${CP}/brand-films`, 2),
    videos: [
      "https://www.youtube.com/watch?v=gFNK1gZgUjE",
      "https://www.youtube.com/watch?v=Y69X15We4TU",
    ],
  },
  "creative-production/corporate-films": {
    slug: "corporate-films",
    images: shots(`${CP}/corporate-films`, 2),
    videos: [
      "https://www.youtube.com/watch?v=SHTF8jD-weg",
      "https://www.youtube.com/watch?v=ppiSVJ4Pp0U",
    ],
  },
  "creative-production/documentary-films": {
    slug: "documentary-films",
    images: shots(`${CP}/documentary-films`, 2),
    videos: [
      "https://www.youtube.com/watch?v=xXOThqEDXcQ",
      "https://www.youtube.com/watch?v=ewNnHcp5MWc",
    ],
  },
  "creative-production/explainer-videos": {
    slug: "explainer-videos",
    images: shots(`${CP}/explainer-videos`, 2),
    videos: [
      "https://www.youtube.com/watch?v=4NNO5jCFvTw",
      "https://www.youtube.com/watch?v=3X836Yz6c2g",
    ],
  },
  "creative-production/product-videos": {
    slug: "product-videos",
    images: shots(`${CP}/product-videos`, 2),
    videos: [
      "https://www.youtube.com/watch?v=grlISKkR1ug",
      "https://www.youtube.com/watch?v=dRKwJNnrm48",
    ],
  },
  "creative-production/testimonial-videos": {
    slug: "testimonial-videos",
    images: shots(`${CP}/testimonial-videos`, 2),
    videos: [
      "https://www.youtube.com/watch?v=KZlnoRbi5fI",
      "https://www.youtube.com/watch?v=1s5LzTZF_XM",
    ],
  },
  "creative-production/podcast-production": {
    slug: "podcast-production",
    images: shots(`${CP}/podcast-production`, 2),
    videos: [
      "https://www.youtube.com/watch?v=yV9D9NUqPLo",
      "https://www.youtube.com/watch?v=-lrL0yB5XoY",
    ],
  },
  "creative-production/live-streaming": {
    slug: "live-streaming",
    images: shots(`${CP}/live-streaming`, 2),
    videos: [
      "https://www.youtube.com/watch?v=LhouH513UqY",
      "https://www.youtube.com/watch?v=lhQSfH6mEHI",
    ],
  },
  "creative-production/reels-shorts": {
    slug: "reels-shorts",
    images: shots(`${CP}/reels-shorts`, 3),
    videos: ["https://www.youtube.com/@CreativeWhoppers"],
  },
  "creative-production/video-audio-editing": {
    slug: "video-audio-editing",
    images: shots(`${CP}/video-audio-editing`, 1),
  },
  "creative-production/event-photography": {
    slug: "event-photography",
    images: shots(`${CP}/event-photography`, 4),
  },
  "creative-production/corporate-photography": {
    slug: "corporate-photography",
    images: shots(`${CP}/corporate-photography`, 4),
  },
  "creative-production/product-photography": {
    slug: "product-photography",
    images: shots(`${CP}/product-photography`, 3),
  },
  "creative-production/drone-photography": {
    slug: "drone-photography",
    images: shots(`${CP}/drone-photography`, 4),
  },
  "creative-production/motion-graphics": {
    slug: "motion-graphics",
    images: shots(`${CP}/motion-graphics`, 2),
    videos: ["https://www.youtube.com/watch?v=ObVGT5TzGOM"],
  },
  "creative-production/2d-animation": {
    slug: "2d-animation",
    images: shots(`${CP}/2d-animation`, 2),
    videos: ["https://www.youtube.com/watch?v=WSwgPP2K2LI"],
  },
  "creative-production/logo-design": {
    slug: "logo-design",
    images: shots(`${CP}/logo-design`, 3),
  },
  "creative-production/brand-identity": {
    slug: "brand-identity",
    images: shots(`${CP}/brand-identity`, 1),
  },
  "creative-production/visual-identity": {
    slug: "visual-identity",
    images: shots(`${CP}/visual-identity`, 3),
  },
  "creative-production/packaging-design": {
    slug: "packaging-design",
    images: shots(`${CP}/packaging-design`, 3),
  },
  "creative-production/company-profile-design": {
    slug: "company-profile-design",
    images: shots(`${CP}/company-profile-design`, 3),
  },
  "creative-production/brochure-design": {
    slug: "brochure-design",
    images: shots(`${CP}/brochure-design`, 4),
  },
  "creative-production/social-media-creatives": {
    slug: "social-media-creatives",
    images: shots(`${CP}/social-media-creatives`, 4),
  },
  "creative-production/illustration": {
    slug: "illustration",
    images: shots(`${CP}/illustration`, 4),
  },
  "creative-production/creative-campaign-design": {
    slug: "creative-campaign-design",
    images: shots(`${CP}/creative-campaign-design`, 1),
  },
  "creative-production/print-collateral": {
    slug: "print-collateral",
    images: shots(`${CP}/print-collateral`, 3),
  },
};

export function itemSlugForName(name: string) {
  return ITEM_SLUG_BY_NAME[name];
}

export function getServiceItemDetail(pillarSlug: string, itemSlug: string) {
  return SERVICE_ITEM_DETAILS[`${pillarSlug}/${itemSlug}`] ?? null;
}

export function listServiceItemParams() {
  return Object.keys(SERVICE_ITEM_DETAILS).map((key) => {
    const [slug, item] = key.split("/");
    return { slug, item };
  });
}

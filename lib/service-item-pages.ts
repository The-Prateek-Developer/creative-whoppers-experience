export type ServiceItemDetail = {
  slug: string;
  capabilities?: string[];
  images: string[];
  videos?: string[];
};

const ED = "/images/services/experience-design";
const CP = "/images/services/creative-production";
const DE = "/images/services/digital-experiences";
const BM = "/images/services/brand-marketing";

function collage(base: string, count = 1) {
  return Array.from({ length: count }, (_, index) =>
    index === 0 ? `${base}/collage.jpg` : `${base}/collage-${String(index + 1).padStart(2, "0")}.jpg`
  );
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
  "Artifact & Archive Digitization": "artifact-archive-digitization",
  "Digital Twin Mapping": "digital-twin-mapping",
  "Heritage Documentary Production": "heritage-documentary-production",
  "Curated Multimedia Kiosks": "curated-multimedia-kiosks",
  "Audio-Visual Guides": "audio-visual-guides",
  "Immersive Narrated Walkthroughs": "immersive-narrated-walkthroughs",
  "On-Site Immersive Installations": "on-site-immersive-installations",
  "Sound Domes & Triggered Soundscapes": "sound-domes-triggered-soundscapes",
  "UI/UX Design & Strategy": "ui-ux-design-strategy",
  "Website Development & CMS Integration": "website-development-cms-integration",
  "Mobile App Design & Development": "mobile-app-design-development",
  "Brand Strategy": "brand-strategy",
  "Search Engine Optimization (SEO)": "search-engine-optimization-seo",
  "Digital Marketing": "digital-marketing",
  "Social Media Marketing": "social-media-marketing",
  "Performance Marketing": "performance-marketing",
  "Integrated Marketing Campaigns": "integrated-marketing-campaigns",
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
    images: collage(`${ED}/turnkey-event-management-production`),
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
    images: collage(`${ED}/venue-hospitality-management`),
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
    images: collage(`${ED}/event-branding-environmental-design`),
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
    images: collage(`${ED}/event-production-technical-solutions`),
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
    images: collage(`${ED}/food-beverage-management`),
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
    images: collage(`${ED}/corporate-gifts-branded-packaging`),
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
    images: collage(`${ED}/destination-programme-design`),
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
    images: collage(`${ED}/themed-events-experience-design`),
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
    images: collage(`${ED}/entertainment-live-experiences`),
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
    images: collage(`${ED}/corporate-offsites-team-experiences`),
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
    images: collage(`${ED}/tours-excursions-local-experiences`),
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
    images: collage(`${ED}/off-property-events-destination-experiences`),
  },
  "creative-production/brand-films": {
    slug: "brand-films",
    images: collage(`${CP}/brand-films`),
    videos: [
      "https://www.youtube.com/watch?v=gFNK1gZgUjE",
      "https://www.youtube.com/watch?v=Y69X15We4TU",
    ],
  },
  "creative-production/corporate-films": {
    slug: "corporate-films",
    images: collage(`${CP}/corporate-films`),
    videos: [
      "https://www.youtube.com/watch?v=SHTF8jD-weg",
      "https://www.youtube.com/watch?v=ppiSVJ4Pp0U",
    ],
  },
  "creative-production/documentary-films": {
    slug: "documentary-films",
    images: collage(`${CP}/documentary-films`),
    videos: [
      "https://www.youtube.com/watch?v=xXOThqEDXcQ",
      "https://www.youtube.com/watch?v=ewNnHcp5MWc",
    ],
  },
  "creative-production/explainer-videos": {
    slug: "explainer-videos",
    images: collage(`${CP}/explainer-videos`),
    videos: [
      "https://www.youtube.com/watch?v=4NNO5jCFvTw",
      "https://www.youtube.com/watch?v=3X836Yz6c2g",
    ],
  },
  "creative-production/product-videos": {
    slug: "product-videos",
    images: collage(`${CP}/product-videos`),
    videos: [
      "https://www.youtube.com/watch?v=grlISKkR1ug",
      "https://www.youtube.com/watch?v=dRKwJNnrm48",
    ],
  },
  "creative-production/testimonial-videos": {
    slug: "testimonial-videos",
    images: collage(`${CP}/testimonial-videos`),
    videos: [
      "https://www.youtube.com/watch?v=KZlnoRbi5fI",
      "https://www.youtube.com/watch?v=1s5LzTZF_XM",
    ],
  },
  "creative-production/podcast-production": {
    slug: "podcast-production",
    images: collage(`${CP}/podcast-production`),
    videos: [
      "https://www.youtube.com/watch?v=yV9D9NUqPLo",
      "https://www.youtube.com/watch?v=-lrL0yB5XoY",
    ],
  },
  "creative-production/live-streaming": {
    slug: "live-streaming",
    images: collage(`${CP}/live-streaming`),
    videos: [
      "https://www.youtube.com/watch?v=LhouH513UqY",
      "https://www.youtube.com/watch?v=lhQSfH6mEHI",
    ],
  },
  "creative-production/reels-shorts": {
    slug: "reels-shorts",
    images: collage(`${CP}/reels-shorts`),
    videos: [
      "https://www.youtube.com/shorts/Zv9YUWMQYhs",
      "https://www.youtube.com/shorts/_oyT7hAxOCA",
      "https://www.youtube.com/shorts/PRk4eL7IteE",
      "https://www.youtube.com/shorts/rYA7aCpzEPk",
    ],
  },
  "creative-production/video-audio-editing": {
    slug: "video-audio-editing",
    images: collage(`${CP}/video-audio-editing`),
  },
  "creative-production/event-photography": {
    slug: "event-photography",
    images: collage(`${CP}/event-photography`),
  },
  "creative-production/corporate-photography": {
    slug: "corporate-photography",
    images: collage(`${CP}/corporate-photography`),
  },
  "creative-production/product-photography": {
    slug: "product-photography",
    images: collage(`${CP}/product-photography`),
  },
  "creative-production/drone-photography": {
    slug: "drone-photography",
    images: collage(`${CP}/drone-photography`),
  },
  "creative-production/motion-graphics": {
    slug: "motion-graphics",
    images: collage(`${CP}/motion-graphics`),
    videos: ["https://www.youtube.com/watch?v=ObVGT5TzGOM"],
  },
  "creative-production/2d-animation": {
    slug: "2d-animation",
    images: collage(`${CP}/2d-animation`),
    videos: ["https://www.youtube.com/watch?v=WSwgPP2K2LI"],
  },
  "creative-production/logo-design": {
    slug: "logo-design",
    images: collage(`${CP}/logo-design`),
  },
  "creative-production/brand-identity": {
    slug: "brand-identity",
    images: collage(`${CP}/brand-identity`),
  },
  "creative-production/visual-identity": {
    slug: "visual-identity",
    images: collage(`${CP}/visual-identity`),
  },
  "creative-production/packaging-design": {
    slug: "packaging-design",
    images: collage(`${CP}/packaging-design`),
  },
  "creative-production/company-profile-design": {
    slug: "company-profile-design",
    images: collage(`${CP}/company-profile-design`),
  },
  "creative-production/brochure-design": {
    slug: "brochure-design",
    images: collage(`${CP}/brochure-design`),
  },
  "creative-production/social-media-creatives": {
    slug: "social-media-creatives",
    images: collage(`${CP}/social-media-creatives`),
  },
  "creative-production/illustration": {
    slug: "illustration",
    images: collage(`${CP}/illustration`, 3),
  },
  "creative-production/creative-campaign-design": {
    slug: "creative-campaign-design",
    images: collage(`${CP}/creative-campaign-design`),
  },
  "creative-production/print-collateral": {
    slug: "print-collateral",
    images: collage(`${CP}/print-collateral`),
  },
  "digital-experiences/artifact-archive-digitization": {
    slug: "artifact-archive-digitization",
    images: collage(`${DE}/artifact-archive-digitization`),
  },
  "digital-experiences/digital-twin-mapping": {
    slug: "digital-twin-mapping",
    images: collage(`${DE}/digital-twin-mapping`),
  },
  "digital-experiences/heritage-documentary-production": {
    slug: "heritage-documentary-production",
    images: collage(`${DE}/heritage-documentary-production`),
  },
  "digital-experiences/curated-multimedia-kiosks": {
    slug: "curated-multimedia-kiosks",
    images: collage(`${DE}/curated-multimedia-kiosks`),
  },
  "digital-experiences/audio-visual-guides": {
    slug: "audio-visual-guides",
    images: collage(`${DE}/audio-visual-guides`),
  },
  "digital-experiences/immersive-narrated-walkthroughs": {
    slug: "immersive-narrated-walkthroughs",
    images: collage(`${DE}/immersive-narrated-walkthroughs`),
  },
  "digital-experiences/on-site-immersive-installations": {
    slug: "on-site-immersive-installations",
    images: collage(`${DE}/on-site-immersive-installations`),
  },
  "digital-experiences/sound-domes-triggered-soundscapes": {
    slug: "sound-domes-triggered-soundscapes",
    images: collage(`${DE}/sound-domes-triggered-soundscapes`),
  },
  "digital-experiences/ui-ux-design-strategy": {
    slug: "ui-ux-design-strategy",
    images: collage(`${DE}/ui-ux-design-strategy`),
  },
  "digital-experiences/website-development-cms-integration": {
    slug: "website-development-cms-integration",
    images: collage(`${DE}/website-development-cms-integration`),
  },
  "digital-experiences/mobile-app-design-development": {
    slug: "mobile-app-design-development",
    images: collage(`${DE}/mobile-app-design-development`),
  },
  "brand-marketing/brand-strategy": {
    slug: "brand-strategy",
    capabilities: [
      "Brand Positioning & Messaging",
      "Brand Identity & Guidelines",
      "Competitive & Market Analysis",
      "Naming & Tagline Development",
      "Brand Voice & Tone Strategy",
    ],
    images: collage(`${BM}/brand-strategy`),
  },
  "brand-marketing/search-engine-optimization-seo": {
    slug: "search-engine-optimization-seo",
    capabilities: [
      "On-Page & Technical SEO",
      "Keyword Research & Strategy",
      "GMB (Google Business Profile) & Local SEO",
      "Link Building & Off-Page SEO",
      "SEO Audits & Performance Reporting",
    ],
    images: collage(`${BM}/search-engine-optimization-seo`),
  },
  "brand-marketing/digital-marketing": {
    slug: "digital-marketing",
    capabilities: [
      "Email & WhatsApp Marketing",
      "Content Marketing",
      "Influencer & Affiliate Marketing",
      "ORM (Online Reputation Management)",
      "Local Listings & Citations",
    ],
    images: collage(`${BM}/digital-marketing`),
  },
  "brand-marketing/social-media-marketing": {
    slug: "social-media-marketing",
    capabilities: [
      "Social Media Strategy & Planning",
      "Content Creation & Scheduling",
      "Community Management & Engagement",
      "Platform-Specific Campaigns",
      "Social Media Analytics & Reporting",
    ],
    images: collage(`${BM}/social-media-marketing`),
  },
  "brand-marketing/performance-marketing": {
    slug: "performance-marketing",
    capabilities: [
      "Google Ads & Search Campaigns",
      "Meta Ads (Facebook & Instagram)",
      "LinkedIn Ads & YouTube Ads",
      "A/B Testing & Conversion Rate Optimization",
      "Campaign Analytics & Performance Tracking",
    ],
    images: collage(`${BM}/performance-marketing`),
  },
  "brand-marketing/integrated-marketing-campaigns": {
    slug: "integrated-marketing-campaigns",
    capabilities: [
      "Cross-Channel Campaign Planning",
      "Creative & Content Strategy",
      "Lead Generation & CRM Integration",
      "Campaign Rollout & Coordination",
      "Analytics & ROI Measurement",
    ],
    images: collage(`${BM}/integrated-marketing-campaigns`),
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

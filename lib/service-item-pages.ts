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
    capabilities: [
      "Concept Development & Scriptwriting",
      "Creative Direction & Storyboarding",
      "Production & Cinematography",
      "Sound Design & Post-Production",
      "Distribution Strategy & Performance Tracking",
    ],
    images: collage(`${CP}/brand-films`),
    videos: [
      "https://www.youtube.com/watch?v=gFNK1gZgUjE",
      "https://www.youtube.com/watch?v=Y69X15We4TU",
    ],
  },
  "creative-production/corporate-films": {
    slug: "corporate-films",
    capabilities: [
      "Corporate Profile & Vision Films",
      "Leadership & Interview Filming",
      "Internal Communication Videos",
      "Investor & Annual Report Films",
      "Employee Culture & Recruitment Films",
    ],
    images: collage(`${CP}/corporate-films`),
    videos: [
      "https://www.youtube.com/watch?v=SHTF8jD-weg",
      "https://www.youtube.com/watch?v=ppiSVJ4Pp0U",
    ],
  },
  "creative-production/documentary-films": {
    slug: "documentary-films",
    capabilities: [
      "Research & Story Development",
      "Field Production & Interviews",
      "Archival Footage Sourcing",
      "Cinematic Editing & Grading",
      "Festival & Distribution Support",
    ],
    images: collage(`${CP}/documentary-films`),
    videos: [
      "https://www.youtube.com/watch?v=xXOThqEDXcQ",
      "https://www.youtube.com/watch?v=ewNnHcp5MWc",
    ],
  },
  "creative-production/explainer-videos": {
    slug: "explainer-videos",
    capabilities: [
      "Script & Concept Writing",
      "2D/3D Animation & Motion Graphics",
      "Voiceover & Sound Design",
      "Whiteboard & Explainer Styles",
      "Multi-Platform Video Optimization",
    ],
    images: collage(`${CP}/explainer-videos`),
    videos: [
      "https://www.youtube.com/watch?v=4NNO5jCFvTw",
      "https://www.youtube.com/watch?v=3X836Yz6c2g",
    ],
  },
  "creative-production/product-videos": {
    slug: "product-videos",
    capabilities: [
      "Product Concept & Scripting",
      "Studio & On-Location Shoots",
      "360° & Feature Showcase Videos",
      "Motion Graphics & Overlays",
      "E-commerce & Social Formatting",
    ],
    images: collage(`${CP}/product-videos`),
    videos: [
      "https://www.youtube.com/watch?v=grlISKkR1ug",
      "https://www.youtube.com/watch?v=dRKwJNnrm48",
    ],
  },
  "creative-production/testimonial-videos": {
    slug: "testimonial-videos",
    capabilities: [
      "Customer Sourcing & Scripting",
      "On-Location Interview Filming",
      "Emotional Storytelling & Direction",
      "Editing & Sound Enhancement",
      "Multi-Format Delivery",
    ],
    images: collage(`${CP}/testimonial-videos`),
    videos: [
      "https://www.youtube.com/watch?v=KZlnoRbi5fI",
      "https://www.youtube.com/watch?v=1s5LzTZF_XM",
    ],
  },
  "creative-production/podcast-production": {
    slug: "podcast-production",
    capabilities: [
      "Concept & Format Development",
      "Studio Setup & Recording",
      "Audio Mixing & Mastering",
      "Video Podcast Production",
      "Publishing & Distribution Support",
    ],
    images: collage(`${CP}/podcast-production`),
    videos: [
      "https://www.youtube.com/watch?v=yV9D9NUqPLo",
      "https://www.youtube.com/watch?v=-lrL0yB5XoY",
    ],
  },
  "creative-production/live-streaming": {
    slug: "live-streaming",
    capabilities: [
      "Multi-Camera Live Production",
      "Streaming Platform Integration",
      "Real-Time Graphics & Overlays",
      "Technical Support & Backup Systems",
      "Post-Event Recording & Archival",
    ],
    images: collage(`${CP}/live-streaming`),
    videos: [
      "https://www.youtube.com/watch?v=LhouH513UqY",
      "https://www.youtube.com/watch?v=lhQSfH6mEHI",
    ],
  },
  "creative-production/reels-shorts": {
    slug: "reels-shorts",
    capabilities: [
      "Trend Research & Concept Ideation",
      "Quick-Turnaround Shoots",
      "Dynamic Editing & Transitions",
      "Platform-Specific Formatting",
      "Hashtag & Caption Strategy",
    ],
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
    capabilities: [
      "Video Cutting & Assembly",
      "Color Grading & Correction",
      "Sound Mixing & Mastering",
      "Motion Graphics & Titles",
      "Format Optimization for All Platforms",
    ],
    images: collage(`${CP}/video-audio-editing`),
  },
  "creative-production/event-photography": {
    slug: "event-photography",
    capabilities: [
      "Pre-Event Planning & Shot Listing",
      "Candid & Formal Coverage",
      "Multi-Camera & Multi-Angle Shooting",
      "Real-Time Editing & Highlights",
      "Full Gallery Delivery & Archival",
    ],
    images: collage(`${CP}/event-photography`),
  },
  "creative-production/corporate-photography": {
    slug: "corporate-photography",
    capabilities: [
      "Executive & Leadership Portraits",
      "Workplace & Culture Photography",
      "Corporate Event Coverage",
      "Headshots & Team Photography",
      "Brand-Aligned Editing & Retouching",
    ],
    images: collage(`${CP}/corporate-photography`),
  },
  "creative-production/product-photography": {
    slug: "product-photography",
    capabilities: [
      "Studio & Lifestyle Shoots",
      "360° & Multi-Angle Product Shots",
      "Styling & Set Design",
      "Retouching & Color Correction",
      "E-commerce & Catalog Formatting",
    ],
    images: collage(`${CP}/product-photography`),
  },
  "creative-production/drone-photography": {
    slug: "drone-photography",
    capabilities: [
      "Aerial Shot Planning & Permissions",
      "High-Resolution Aerial Imaging",
      "Event & Venue Aerial Coverage",
      "Real Estate & Landscape Shoots",
      "Post-Production & Editing",
    ],
    images: collage(`${CP}/drone-photography`),
  },
  "creative-production/motion-graphics": {
    slug: "motion-graphics",
    capabilities: [
      "Concept & Storyboard Development",
      "Kinetic Typography & Title Animation",
      "Logo Animation & Brand Stings",
      "Infographic & Data Visualization",
      "Multi-Platform Motion Design",
    ],
    images: collage(`${CP}/motion-graphics`),
    videos: ["https://www.youtube.com/watch?v=ObVGT5TzGOM"],
  },
  "creative-production/2d-animation": {
    slug: "2d-animation",
    capabilities: [
      "Character Design & Development",
      "Storyboarding & Scriptwriting",
      "Frame-by-Frame & Vector Animation",
      "Voiceover Syncing & Sound Design",
      "Rendering & Multi-Format Export",
    ],
    images: collage(`${CP}/2d-animation`),
    videos: ["https://www.youtube.com/watch?v=WSwgPP2K2LI"],
  },
  "creative-production/logo-design": {
    slug: "logo-design",
    capabilities: [
      "Brand Research & Concept Sketching",
      "Typography & Symbol Design",
      "Multiple Concept Iterations",
      "Color & Variation Exploration",
      "Final Files & Usage Guidelines",
    ],
    images: collage(`${CP}/logo-design`),
  },
  "creative-production/brand-identity": {
    slug: "brand-identity",
    capabilities: [
      "Brand Strategy & Positioning",
      "Logo & Visual Language Design",
      "Typography & Color Palette Systems",
      "Brand Guidelines Documentation",
      "Cross-Platform Brand Application",
    ],
    images: collage(`${CP}/brand-identity`),
  },
  "creative-production/visual-identity": {
    slug: "visual-identity",
    capabilities: [
      "Visual Style & Mood Development",
      "Icon & Graphic Element Design",
      "Layout & Grid Systems",
      "Digital & Print Application",
      "Brand Consistency Auditing",
    ],
    images: collage(`${CP}/visual-identity`),
  },
  "creative-production/packaging-design": {
    slug: "packaging-design",
    capabilities: [
      "Structural & Concept Design",
      "Material & Finish Selection",
      "Label & Artwork Design",
      "Regulatory & Print Compliance",
      "Print-Ready File Preparation",
    ],
    images: collage(`${CP}/packaging-design`),
  },
  "creative-production/company-profile-design": {
    slug: "company-profile-design",
    capabilities: [
      "Content Structuring & Layout Planning",
      "Custom Graphics & Infographics",
      "Brand-Aligned Visual Design",
      "Print & Digital Format Design",
      "Editing & Proofreading Support",
    ],
    images: collage(`${CP}/company-profile-design`),
  },
  "creative-production/brochure-design": {
    slug: "brochure-design",
    capabilities: [
      "Concept & Layout Planning",
      "Content & Copy Integration",
      "Custom Illustrations & Graphics",
      "Print & Digital Versions",
      "Multi-Fold & Format Design",
    ],
    images: collage(`${CP}/brochure-design`),
  },
  "creative-production/social-media-creatives": {
    slug: "social-media-creatives",
    capabilities: [
      "Content Calendar Planning",
      "Platform-Specific Design Formats",
      "Static & Animated Post Design",
      "Story & Reel Cover Design",
      "Brand-Consistent Templates",
    ],
    images: collage(`${CP}/social-media-creatives`),
  },
  "creative-production/illustration": {
    slug: "illustration",
    capabilities: [
      "Concept Sketching & Style Development",
      "Character & Icon Illustration",
      "Digital & Hand-Drawn Techniques",
      "Editorial & Campaign Illustration",
      "Multi-Format File Delivery",
    ],
    images: collage(`${CP}/illustration`),
  },
  "creative-production/creative-campaign-design": {
    slug: "creative-campaign-design",
    capabilities: [
      "Campaign Concept & Theme Development",
      "Key Visual & Asset Design",
      "Multi-Channel Creative Adaptation",
      "Copy & Visual Alignment",
      "Campaign Guideline Documentation",
    ],
    images: collage(`${CP}/creative-campaign-design`),
  },
  "creative-production/print-collateral": {
    slug: "print-collateral",
    capabilities: [
      "Business Cards & Stationery Design",
      "Flyers & Poster Design",
      "Signage & Banner Design",
      "Print-Ready Artwork Preparation",
      "Vendor Coordination & Quality Check",
    ],
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

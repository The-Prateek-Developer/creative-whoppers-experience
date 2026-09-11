import { SITE_IMAGES } from "@/lib/site-images";

export type ServiceItem = {
  name: string;
  description: string;
};

export type ServiceGroup = {
  title: string;
  items: ServiceItem[];
};

export type ServicePage = {
  slug: string;
  kind: "pillar" | "flagship";
  number?: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  image: string;
  imageAlt: string;
  video?: string;
  groups?: ServiceGroup[];
  pillarSlug?: string;
};

const IMG = {
  experience: SITE_IMAGES.conference,
  production: SITE_IMAGES.videoEditor,
  digital: SITE_IMAGES.programmer,
  brand: SITE_IMAGES.designStudio,
  museum: SITE_IMAGES.festival,
  video: SITE_IMAGES.colorGrade,
  events: SITE_IMAGES.erasmus,
  packaging: SITE_IMAGES.pencils,
};

export const HERO_VIDEO =
  "https://videos.pexels.com/video-files/2022395/2022395-hd_1920_1080_30fps.mp4";
export const HERO_VIDEO_POSTER =
  "https://images.pexels.com/videos/2022395/free-video-2022395.jpg?auto=compress&cs=tinysrgb&w=1920";

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "experience-design",
    kind: "pillar",
    number: "01",
    title: "Experience Design",
    h1: "Experience Design",
    metaTitle: "Experience Design & Event Production | Creative Whoppers",
    metaDescription:
      "From corporate summits to government and cultural events, our experience design team plans and produces engagements that leave a lasting impression.",
    intro:
      "From corporate summits to government and cultural events, our experience design team plans and produces engagements that leave a lasting impression.",
    image: IMG.experience,
    imageAlt: "Audience at a professionally produced conference and stage experience",
    groups: [
      {
        title: "Corporate Experiences",
        items: [
          { name: "Corporate Events", description: "End-to-end planning and execution of business events that reflect your brand and engage stakeholders." },
          { name: "Conferences", description: "Multi-session conferences designed for a seamless delegate experience, from registration to closing." },
          { name: "Summits", description: "High-profile summits bringing together industry leaders with polished production and content flow." },
          { name: "Annual Meetings", description: "Structured, professional annual general meetings and shareholder events managed start to finish." },
          { name: "Award Ceremonies", description: "Memorable award nights with stage design, scripting and guest experience handled end to end." },
        ],
      },
      {
        title: "Government & Institutional Experiences",
        items: [
          { name: "Government Events", description: "Large-scale government event management with protocol, security and logistics expertise." },
          { name: "Institutional Events", description: "Events for academic, financial and public institutions, planned with precision and compliance." },
          { name: "NGO Events", description: "Purpose-driven events for NGOs that amplify cause and community impact." },
          { name: "CSR Events", description: "CSR initiatives brought to life through engaging on-ground and community activations." },
          { name: "Community & Public Engagement", description: "Public engagement programs that connect institutions with the communities they serve." },
          { name: "Education Fairs", description: "Education and career fairs designed to connect institutions with students and parents." },
        ],
      },
      {
        title: "Exhibitions & Experiential Events",
        items: [
          { name: "Exhibitions & Trade Shows", description: "Custom stall design and exhibition management that maximizes visitor engagement and leads." },
          { name: "Experience Centres", description: "Immersive, branded experience centres that tell your brand story in physical space." },
          { name: "Cultural Festivals", description: "Large-scale cultural festival production, from stage design to crowd management." },
          { name: "Sports Events", description: "Sports event management covering logistics, sponsorship activation and fan experience." },
          { name: "Brand Activations", description: "On-ground brand activations designed to drive engagement and conversions." },
        ],
      },
      {
        title: "Event Production",
        items: [
          { name: "Stage Design", description: "Custom stage design and set fabrication tailored to each event's theme and scale." },
          { name: "Event Branding", description: "Cohesive on-site branding across signage, backdrops and collateral." },
          { name: "Registration Management", description: "Smooth guest registration and check-in, on-site and digital." },
          { name: "Venue Design", description: "Venue layout and design planning for optimal flow and impact." },
          { name: "Sound, Lighting & LED Walls", description: "Technical production including sound, lighting and LED wall setups for high-impact events." },
          { name: "Exhibition Stall Design", description: "Custom exhibition stalls designed to attract footfall and showcase brand identity." },
          { name: "Guest Management", description: "End-to-end guest handling, hospitality and on-ground coordination." },
        ],
      },
    ],
  },
  {
    slug: "creative-production",
    kind: "pillar",
    number: "02",
    title: "Creative Production",
    h1: "Creative Production",
    metaTitle: "Video Production, Film & Branding Studio | Creative Whoppers",
    metaDescription:
      "A full creative production studio covering film, photography, animation and design — everything a brand needs to tell its story visually.",
    intro:
      "A full creative production studio covering film, photography, animation and design — everything a brand needs to tell its story visually.",
    image: IMG.production,
    imageAlt: "Film and commercial video production on a professional set",
    groups: [
      {
        title: "Film & Video Production",
        items: [
          { name: "Brand Films", description: "Cinematic brand films that communicate purpose, values and vision." },
          { name: "Corporate Films", description: "Professional corporate videos for internal communication, investor relations and recruitment." },
          { name: "Documentary Films", description: "Documentary-style storytelling that captures real narratives with depth and authenticity." },
          { name: "Explainer Videos", description: "Clear, engaging explainer videos that simplify products and services." },
          { name: "Product Videos", description: "High-quality product videos crafted to drive interest and conversions." },
          { name: "Testimonial Videos", description: "Authentic client and customer testimonial videos that build trust." },
          { name: "Podcast Production", description: "Full podcast production, from concept and recording to editing and distribution." },
          { name: "Live Streaming", description: "Reliable live streaming for events, conferences and product launches." },
        ],
      },
      {
        title: "Photography",
        items: [
          { name: "Event Photography", description: "Professional event photography that captures key moments as they happen." },
          { name: "Corporate Photography", description: "Corporate headshots and workplace photography for a polished brand image." },
          { name: "Product Photography", description: "High-resolution product photography for e-commerce and marketing use." },
          { name: "Drone Photography", description: "Aerial drone photography for events, venues and large-scale properties." },
        ],
      },
      {
        title: "Motion & Animation",
        items: [
          { name: "Motion Graphics", description: "Custom motion graphics that bring data, ideas and brand stories to life." },
          { name: "2D Animation", description: "2D animated content for explainer videos, campaigns and social media." },
          { name: "Reels & Shorts", description: "Short-form reels and vertical video content optimized for social platforms." },
        ],
      },
      {
        title: "Design & Branding",
        items: [
          { name: "Logo Design", description: "Distinctive logo design that forms the foundation of a strong brand identity." },
          { name: "Brand Identity", description: "Comprehensive brand identity systems including colour, typography and visual language." },
          { name: "Visual Identity", description: "Consistent visual identity applied across every brand touchpoint." },
          { name: "Packaging Design", description: "Packaging design that stands out on shelf and reflects brand positioning." },
          { name: "Company Profile Design", description: "Professional company profile design for pitches, tenders and partnerships." },
          { name: "Brochure Design", description: "Compelling brochure design for marketing and sales collateral." },
          { name: "Presentation Design", description: "Polished presentation design for pitches, reports and internal decks." },
          { name: "Social Media Creatives", description: "On-brand social media creatives designed for engagement across platforms." },
          { name: "Infographics", description: "Data-driven infographics that simplify complex information visually." },
          { name: "Illustration", description: "Custom illustration work for branding, campaigns and publications." },
          { name: "Creative Campaign Design", description: "End-to-end creative design for integrated marketing campaigns." },
          { name: "Print Collateral", description: "Print-ready collateral including flyers, posters and standees." },
          { name: "Marketing Collateral", description: "Marketing collateral designed to support sales and brand communication." },
        ],
      },
      {
        title: "Post Production",
        items: [
          { name: "Video Editing", description: "Professional video editing that transforms raw footage into polished content." },
          { name: "Audio Production", description: "Audio mixing, mastering and sound design for video and podcast content." },
        ],
      },
    ],
  },
  {
    slug: "digital-experiences",
    kind: "pillar",
    number: "03",
    title: "Digital Experiences",
    h1: "Digital Experiences",
    metaTitle: "Digital Experience Design, Web & Immersive | Creative Whoppers",
    metaDescription:
      "Websites, apps and immersive digital installations engineered for performance, usability and measurable results.",
    intro:
      "Websites, apps and immersive digital installations engineered for performance, usability and measurable results.",
    image: IMG.digital,
    imageAlt: "Digital product and interface design on multiple screens",
    groups: [
      {
        title: "Web & Mobile",
        items: [
          { name: "Website Development", description: "Custom website development built for performance, scalability and SEO." },
          { name: "Landing Pages", description: "Conversion-focused landing pages designed for campaigns and product launches." },
          { name: "E-commerce Websites", description: "Secure, user-friendly e-commerce websites built to drive online sales." },
          { name: "Mobile Applications", description: "Custom mobile app development for iOS and Android." },
        ],
      },
      {
        title: "User Experience",
        items: [
          { name: "UI Design", description: "Clean, intuitive UI design that enhances usability across devices." },
          { name: "UX Design", description: "Research-driven UX design focused on user needs and business goals." },
          { name: "Interactive Design", description: "Interactive design elements that make digital experiences more engaging." },
        ],
      },
      {
        title: "Immersive Experiences",
        items: [
          { name: "Museum Digitization", description: "Digitizing museum collections and exhibits for interactive, accessible experiences." },
          { name: "Virtual Tours", description: "Immersive virtual tours that let audiences explore spaces remotely." },
          { name: "Interactive Touchscreens", description: "Interactive touchscreen installations for exhibitions and experience centres." },
          { name: "Experience Centres", description: "Digitally-enabled experience centres that blend physical and digital storytelling." },
          { name: "Digital Installations", description: "Custom digital installations that create memorable, interactive brand moments." },
        ],
      },
      {
        title: "Technology Solutions",
        items: [
          { name: "CRM Integration", description: "CRM integration that connects your website to sales and marketing workflows." },
          { name: "Website Maintenance", description: "Ongoing website maintenance to keep sites secure, updated and running smoothly." },
          { name: "Website Speed Optimization", description: "Performance optimization to improve website speed and search rankings." },
          { name: "Web Hosting", description: "Reliable web hosting solutions tailored to site size and traffic needs." },
          { name: "CMS Development", description: "Custom CMS development for easy, flexible content management." },
          { name: "Custom Web Applications", description: "Bespoke web application development for unique business needs." },
        ],
      },
    ],
  },
  {
    slug: "brand-marketing",
    kind: "pillar",
    number: "04",
    title: "Brand & Marketing",
    h1: "Brand & Marketing",
    metaTitle: "Brand Strategy & Marketing Agency | Creative Whoppers",
    metaDescription:
      "Strategy-led branding, digital marketing, advertising, PR and integrated campaigns that build brands and drive growth.",
    intro:
      "Strategy-led branding, digital marketing, advertising, PR and integrated campaigns that build brands and drive growth.",
    image: IMG.brand,
    imageAlt: "Brand strategy workshop and marketing campaign planning",
    groups: [
      {
        title: "Brand Strategy",
        items: [
          { name: "Brand Strategy", description: "Strategic brand planning that aligns business goals with market positioning." },
          { name: "Brand Audit", description: "In-depth brand audits that identify gaps and growth opportunities." },
          { name: "Rebranding", description: "End-to-end rebranding services from strategy through to rollout." },
          { name: "Positioning", description: "Clear brand positioning that differentiates you from competitors." },
          { name: "Brand Architecture", description: "Structured brand architecture for businesses with multiple products or divisions." },
        ],
      },
      {
        title: "Digital Marketing",
        items: [
          { name: "Search Engine Optimization (SEO)", description: "SEO strategies that improve organic visibility and search rankings." },
          { name: "Social Media Marketing", description: "Social media marketing that builds community and drives engagement." },
          { name: "Performance Marketing", description: "Data-driven performance marketing focused on measurable ROI." },
          { name: "Content Marketing", description: "Content marketing strategies that attract and retain audiences." },
          { name: "Email Marketing", description: "Targeted email marketing campaigns that nurture leads and customers." },
          { name: "WhatsApp Marketing", description: "WhatsApp marketing campaigns for direct, personal customer engagement." },
          { name: "Marketing Automation", description: "Marketing automation setup that streamlines campaigns and lead nurturing." },
          { name: "Online Reputation Management", description: "Online reputation management to protect and strengthen brand perception." },
        ],
      },
      {
        title: "Advertising",
        items: [
          { name: "Google Ads", description: "Google Ads campaigns managed for maximum reach and conversions." },
          { name: "LinkedIn Ads", description: "LinkedIn advertising for B2B lead generation and brand visibility." },
          { name: "YouTube Advertising", description: "YouTube advertising campaigns that put video content in front of the right audience." },
          { name: "Digital Media Buying", description: "Strategic digital media buying across platforms for optimal reach and spend efficiency." },
          { name: "Media Planning & Buying", description: "Integrated media planning and buying across digital and traditional channels." },
          { name: "Outdoor Advertising", description: "Outdoor advertising placements including hoardings and billboards." },
          { name: "Transit Advertising", description: "Transit advertising across buses, metros and public transport hubs." },
          { name: "Print Advertising", description: "Print advertising in newspapers, magazines and publications." },
          { name: "Television Advertising", description: "Television advertising planning and production for mass-reach campaigns." },
          { name: "Radio Advertising", description: "Radio advertising campaigns for local and regional audience reach." },
        ],
      },
      {
        title: "Public Relations",
        items: [
          { name: "Media Relations", description: "Building and managing relationships with media for consistent brand coverage." },
          { name: "Press Releases", description: "Press release writing and distribution for announcements and milestones." },
          { name: "Press Conferences", description: "End-to-end press conference planning and execution." },
          { name: "Crisis Communication", description: "Crisis communication strategy and support to protect brand reputation." },
          { name: "Influencer Relations", description: "Influencer relationship management for authentic brand advocacy." },
        ],
      },
      {
        title: "Campaigns",
        items: [
          { name: "Integrated Marketing Campaigns", description: "Integrated campaigns that align creative, media and PR around a single message." },
          { name: "Government Communication", description: "Communication campaigns for government departments and public sector initiatives." },
          { name: "Public Information Campaigns", description: "Public information campaigns designed to inform and engage citizens." },
          { name: "CSR Campaigns", description: "CSR campaign design and execution that amplifies social impact." },
          { name: "IEC Campaigns", description: "Information, Education and Communication (IEC) campaigns for public health and awareness programs." },
          { name: "Brand Activation", description: "On-ground and digital brand activation campaigns that drive engagement." },
          { name: "Influencer Marketing", description: "Influencer marketing campaigns that extend reach through trusted voices." },
        ],
      },
    ],
  },
  {
    slug: "museum-heritage-digitization",
    kind: "flagship",
    title: "Museum Experiences & Heritage Digitization",
    h1: "Museum Experiences & Heritage Digitization",
    metaTitle: "Museum Digitization & Heritage Experiences | Creative Whoppers",
    metaDescription:
      "Digitizing and reimagining museums and heritage sites into interactive, accessible experiences.",
    intro:
      "Digitizing and reimagining museums and heritage sites into interactive, accessible experiences — from collections and kiosks to documentary storytelling.",
    image: IMG.museum,
    imageAlt: "Museum gallery prepared for heritage digitization and visitor experiences",
    pillarSlug: "digital-experiences",
  },
  {
    slug: "video-marketing",
    kind: "flagship",
    title: "Video Marketing",
    h1: "Video Marketing",
    metaTitle: "Video Marketing & Brand Films | Creative Whoppers",
    metaDescription:
      "Brand films, corporate videos and social content that grow reach, engagement and recall.",
    intro:
      "Brand films, corporate videos and social content crafted to grow reach, engagement and recall.",
    image: IMG.video,
    imageAlt: "Video marketing crew filming a brand film",
    pillarSlug: "creative-production",
  },
  {
    slug: "event-management",
    kind: "flagship",
    title: "Event Management & Production",
    h1: "Event Management & Production",
    metaTitle: "Event Management & Production Agency | Creative Whoppers",
    metaDescription:
      "End-to-end event management and production, from concept to flawless on-ground execution.",
    intro:
      "End-to-end event management and production, from concept and stage design to flawless on-ground execution.",
    image: IMG.events,
    imageAlt: "Large-scale event stage production with lighting and audience",
    pillarSlug: "experience-design",
  },
  {
    slug: "brand-strategy-packaging",
    kind: "flagship",
    title: "Brand Strategy & Packaging",
    h1: "Brand Strategy & Packaging",
    metaTitle: "Brand Strategy & Packaging Design | Creative Whoppers",
    metaDescription:
      "Strategic brand positioning and packaging design that help businesses stand out.",
    intro:
      "Strategic brand positioning and packaging design that helps businesses stand out on shelf and in the market.",
    image: IMG.packaging,
    imageAlt: "Brand packaging and identity design layout",
    pillarSlug: "brand-marketing",
  },
];

export const PILLARS = SERVICE_PAGES.filter((page) => page.kind === "pillar");
export const FLAGSHIPS = SERVICE_PAGES.filter((page) => page.kind === "flagship");

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export const CLIENT_SECTORS = [
  "Corporate",
  "Government",
  "NGO",
  "Institutional",
] as const;

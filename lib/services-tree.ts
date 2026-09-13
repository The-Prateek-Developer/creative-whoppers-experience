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
  experience: SITE_IMAGES.pillarExperienceDesign,
  production: SITE_IMAGES.pillarCreativeProduction,
  digital: SITE_IMAGES.pillarDigitalExperiences,
  brand: SITE_IMAGES.pillarBrandMarketing,
  museum: SITE_IMAGES.whatWeDoMuseumDigitization,
  digitalSocial: SITE_IMAGES.whatWeDoDigitalSocial,
  events: SITE_IMAGES.whatWeDoEventManagement,
  whatWeDoProduction: SITE_IMAGES.whatWeDoCreativeProduction,
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
      "End-to-end event production for corporate, government, and public events, conferences, summits, and exhibitions.",
    intro:
      "End-to-end event production for corporate, government, and public events, conferences, summits, and exhibitions, designed to engage audiences and create memorable brand experiences.",
    image: IMG.experience,
    imageAlt: "Experience design and event production",
    groups: [
      {
        title: "Event Management",
        items: [
          {
            name: "Turnkey Event Management & Production",
            description:
              "Complete event solutions, delivered from concept to closure. We bring strategy, creative, production, technology, logistics, hospitality and on-ground execution together under one accountable team.",
          },
          {
            name: "Venue & Hospitality Management",
            description:
              "The right venue sets the foundation for a successful event. We source, evaluate and coordinate venues and accommodation aligned with your event format, audience, objectives and budget.",
          },
          {
            name: "Event Branding & Environmental Design",
            description:
              "We transform brand identity into immersive event environments through cohesive visual systems, impactful branding and carefully designed audience touchpoints across the venue.",
          },
          {
            name: "Event Production & Technical Solutions",
            description:
              "Powering memorable events with dependable technical expertise, production infrastructure and show technology, from staging and sound to lighting, AV, LED and live production.",
          },
          {
            name: "Food & Beverage Management",
            description:
              "Thoughtfully planned culinary experiences that complement the occasion, elevate guest hospitality and deliver quality service across conferences, celebrations, launches and institutional events.",
          },
          {
            name: "Corporate Gifts & Branded Packaging",
            description:
              "Extending the event experience beyond the venue through thoughtfully curated gifts, branded merchandise and distinctive packaging that create lasting brand impressions.",
          },
        ],
      },
      {
        title: "Destination Management & MICE",
        items: [
          {
            name: "Destination & Programme Design",
            description:
              "Creating thoughtfully structured destination programmes aligned with your objectives, audience and itinerary, from destination selection and experience curation to complete programme planning.",
          },
          {
            name: "Themed Events & Experience Design",
            description:
              "Transforming destination venues into distinctive event experiences through creative themes, immersive environments and engaging programmes designed around the occasion and audience.",
          },
          {
            name: "Entertainment & Live Experiences",
            description:
              "Curating engaging entertainment and live experiences that add energy, character and local flavour to corporate programmes, celebrations and destination events.",
          },
          {
            name: "Corporate Offsites & Team Experiences",
            description:
              "Designing purposeful corporate offsites that combine business objectives with recreation, engagement and team experiences to encourage connection, collaboration and renewed energy.",
          },
          {
            name: "Tours, Excursions & Local Experiences",
            description:
              "Curating memorable journeys that connect guests with the character of each destination through sightseeing, heritage, culture, adventure and specially curated local experiences.",
          },
          {
            name: "Off-Property Events & Destination Experiences",
            description:
              "Taking programmes beyond conventional event venues through distinctive off-property locations, destination settings and curated experiences that create memorable moments for guests and delegates.",
          },
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
    metaTitle: "Film, Photography, Motion & Branding | Creative Whoppers",
    metaDescription:
      "Film and video production, motion design, animation, and brand identity design — visual stories and creative campaigns that build brand recall.",
    intro:
      "Film and video production, motion design, animation, and brand identity design, crafting visual stories and creative campaigns that capture attention and build brand recall.",
    image: IMG.production,
    imageAlt: "Creative production studio for film, photography and design",
    groups: [
      {
        title: "Film & Video Production",
        items: [
          { name: "Brand Films", description: "Compelling narratives that connect brands with their audience through strategy, scriptwriting, cinematography and post-production." },
          { name: "Corporate Films", description: "Professional films that showcase your organization's vision, culture and achievements for stakeholders, investors and employees." },
          { name: "Documentary Films", description: "Authentic, research-driven storytelling that captures real people, places and moments from research to the final cut." },
          { name: "Explainer Videos", description: "Simplifying complex ideas into clear, engaging visuals that educate and drive action." },
          { name: "Product Videos", description: "High-impact visuals that highlight product features and benefits to drive engagement, conversions and brand recall." },
          { name: "Testimonial Videos", description: "Genuine customer stories that build trust and credibility with your target audience." },
          { name: "Podcast Production", description: "End-to-end podcast solutions from concept and studio setup to recording, editing and publishing." },
          { name: "Live Streaming", description: "Seamless live broadcast solutions for events, conferences and launches with real-time audience engagement." },
          { name: "Reels & Shorts", description: "Fast-paced, trend-driven short-form videos built for social media impact and brand visibility." },
          { name: "Video & Audio Editing", description: "Professional post-production that elevates raw footage into polished content across every platform." },
        ],
      },
      {
        title: "Photography Production",
        items: [
          { name: "Event Photography", description: "Capturing every key moment with a mix of candid, formal and cinematic shots that tell the complete story." },
          { name: "Corporate Photography", description: "Professional imagery that reflects your brand's identity and culture across corporate communications and marketing." },
          { name: "Product Photography", description: "Sharp, detail-focused visuals tailored for e-commerce, catalogs and campaigns." },
          { name: "Drone Photography", description: "Aerial perspectives that add scale and impact, captured safely and creatively." },
        ],
      },
      {
        title: "Motion & Animation",
        items: [
          { name: "Motion Graphics", description: "Dynamic visual elements that blend design, animation and storytelling to capture attention and simplify messaging." },
          { name: "2D Animation", description: "Hand-crafted animated storytelling that adds character and charm across formats and audiences." },
        ],
      },
      {
        title: "Design & Branding",
        items: [
          { name: "Logo Design", description: "Distinctive marks that capture the essence of your brand — memorable, versatile and built to last." },
          { name: "Brand Identity", description: "A complete visual language that defines who you are and creates recognition across every touchpoint." },
          { name: "Visual Identity", description: "Consistent visual elements that make your brand instantly recognizable everywhere." },
          { name: "Packaging Design", description: "Packaging that stands out on the shelf and tells your brand story." },
          { name: "Company Profile Design", description: "Professional profiles that present your business with clarity and impact." },
          { name: "Brochure Design", description: "Informative, visually engaging brochures that balance content and creativity." },
          { name: "Social Media Creatives", description: "Scroll-stopping, platform-specific visuals that keep your brand consistent and relevant." },
          { name: "Illustration", description: "Custom artwork that adds a unique, human touch to your brand storytelling." },
          { name: "Creative Campaign Design", description: "Integrated visual campaigns that bring big ideas to life across every channel." },
          { name: "Print Collateral", description: "High-quality print materials that reinforce your brand presence offline." },
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
    metaTitle: "Digital Experiences, Museum Digitization & Apps | Creative Whoppers",
    metaDescription:
      "Websites, mobile apps, and interactive experiences, with specialised museum and heritage digitization, virtual tours, and interactive touchscreens.",
    intro:
      "Websites, mobile apps, and interactive experiences, with specialised museum and heritage digitization, virtual tours, and interactive touchscreens, making stories accessible and unforgettable.",
    image: IMG.digital,
    imageAlt: "Digital experiences, museum digitization and interactive design",
    groups: [
      {
        title: "Museum & Heritage Digitization — Capture & Documentation",
        items: [
          { name: "Artifact & Archive Digitization", description: "Preserving fragile artifacts and records through high-precision digital capture into accessible, future-proof archives." },
          { name: "Digital Twin Mapping", description: "Precise digital replicas of physical spaces and structures for research, restoration and virtual access." },
          { name: "Heritage Documentary Production", description: "Cinematic storytelling that captures the history and significance of heritage sites for future audiences." },
        ],
      },
      {
        title: "Visitor Experience & Interpretation",
        items: [
          { name: "Curated Multimedia Kiosks", description: "Interactive touchpoints that deliver rich, curated content at the visitor's fingertips." },
          { name: "Audio-Visual Guides", description: "Personalized audio-visual companions that enrich the visitor journey through storytelling." },
          { name: "Immersive Narrated Walkthroughs", description: "Story-driven journeys that guide visitors through history in a compelling sequence." },
          { name: "On-Site Immersive Installations", description: "Physical and digital installations that transform spaces into immersive storytelling environments." },
          { name: "Sound Domes & Triggered Soundscapes", description: "Directional and responsive audio experiences that add depth to exhibits." },
        ],
      },
      {
        title: "Websites & Mobile Applications",
        items: [
          { name: "UI/UX Design & Strategy", description: "Crafting intuitive, user-centric design experiences that translate brand identity into seamless digital interactions." },
          { name: "Website Development & CMS Integration", description: "Building responsive, scalable websites powered by flexible content management systems." },
          { name: "Mobile App Design & Development", description: "Designing and developing intuitive mobile applications for iOS and Android." },
        ],
      },
    ],
  },
  {
    slug: "brand-marketing",
    kind: "pillar",
    number: "04",
    title: "Brand Marketing",
    h1: "Brand Marketing",
    metaTitle: "Brand Strategy, SEO & Digital Marketing | Creative Whoppers",
    metaDescription:
      "Brand strategy, SEO, and digital marketing, including social media and performance marketing, built to boost visibility and deliver measurable growth.",
    intro:
      "Brand strategy, SEO, and digital marketing, including social media and performance marketing, integrated campaigns built to boost visibility and deliver measurable growth.",
    image: IMG.brand,
    imageAlt: "Brand marketing strategy and campaign planning",
    groups: [
      {
        title: "Brand Marketing",
        items: [
          { name: "Brand Strategy", description: "Defining a clear and distinctive brand foundation through positioning, messaging and identity that resonates with your target audience." },
          { name: "Search Engine Optimization (SEO)", description: "Improving organic visibility and search rankings through technical, content and local optimization strategies." },
          { name: "Digital Marketing", description: "Driving brand growth through integrated digital channels, combining paid, organic and communication-led strategies." },
          { name: "Social Media Marketing", description: "Building brand presence and audience engagement across social platforms through strategic content and community management." },
          { name: "Performance Marketing", description: "Maximizing ROI through data-driven paid campaigns across search, social and display platforms." },
          { name: "Integrated Marketing Campaigns", description: "Designing end-to-end campaigns that unify brand, content and channels for cohesive, high-impact marketing outcomes." },
        ],
      },
    ],
  },
  {
    slug: "digital-social-media",
    kind: "flagship",
    title: "Digital & Social Media",
    h1: "Digital & Social Media",
    metaTitle: "Digital & Social Media | Creative Whoppers",
    metaDescription:
      "Building a stronger digital presence through strategic social media, content, campaigns and audience engagement.",
    intro:
      "Building a stronger digital presence through strategic social media, content, campaigns and audience engagement.",
    image: IMG.digitalSocial,
    imageAlt: "Digital and social media campaign planning",
    pillarSlug: "brand-marketing",
  },
  {
    slug: "event-management",
    kind: "flagship",
    title: "Event Management",
    h1: "Event Management",
    metaTitle: "Event Management | Creative Whoppers",
    metaDescription:
      "Planning and delivering impactful events through creative concepts, seamless production and end-to-end execution.",
    intro:
      "Planning and delivering impactful events through creative concepts, seamless production and end-to-end execution.",
    image: IMG.events,
    imageAlt: "Event management and on-ground production",
    pillarSlug: "experience-design",
  },
  {
    slug: "museum-heritage-digitization",
    kind: "flagship",
    title: "Museum Digitization",
    h1: "Museum Digitization",
    metaTitle: "Museum Digitization | Creative Whoppers",
    metaDescription:
      "Digitising heritage collections and transforming historical narratives into interactive, technology-enabled museum experiences.",
    intro:
      "Digitising heritage collections and transforming historical narratives into interactive, technology-enabled museum experiences that educate, engage and inspire.",
    image: IMG.museum,
    imageAlt: "Museum and heritage digitization",
    pillarSlug: "digital-experiences",
  },
];

export const PILLARS = SERVICE_PAGES.filter((page) => page.kind === "pillar");

const pageBySlug = (slug: string) => {
  const page = SERVICE_PAGES.find((item) => item.slug === slug);
  if (!page) {
    throw new Error(`Missing service page: ${slug}`);
  }
  return page;
};

export const FLAGSHIPS: ServicePage[] = [
  pageBySlug("digital-social-media"),
  {
    ...pageBySlug("creative-production"),
    image: IMG.whatWeDoProduction,
    imageAlt: "Creative production across film, photography and design",
    intro:
      "Creating compelling visual content through film, video, photography, graphic design, motion and animation.",
  },
  pageBySlug("event-management"),
  pageBySlug("museum-heritage-digitization"),
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export const CLIENT_SECTORS = [
  "Corporate",
  "Government",
  "NGO",
  "Institutional",
] as const;

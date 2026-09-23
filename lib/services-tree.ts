import { SITE_IMAGES } from "@/lib/site-images";
import { itemSlugForName } from "@/lib/service-item-pages";

export type ServiceItem = {
  name: string;
  description: string;
};

export type ServiceGroup = {
  title: string;
  subtitle?: string;
  items: ServiceItem[];
};

/** Numbered capability blocks used on Creative Excellence detail pages */
export type ServiceCapabilitySection = {
  number: string;
  title: string;
  description: string;
  capabilities: string[];
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
  /** When set, detail page renders these blocks (Creative Excellence doc layout) */
  capabilitySections?: ServiceCapabilitySection[];
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
      "End to end event production for corporate, government, and public events, conferences, summits, and exhibitions.",
    intro:
      "End to end event production for corporate, government, and public events, conferences, summits, and exhibitions, designed to engage audiences and create memorable brand experiences.",
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
    metaTitle: "Creative Production | Creative Whoppers",
    metaDescription:
      "Film and video production, motion design, animation, and brand identity design, crafting visual stories and creative campaigns that capture attention and build brand recall.",
    intro:
      "Film and video production, motion design, animation, and brand identity design, crafting visual stories and creative campaigns that capture attention and build brand recall.",
    image: IMG.production,
    imageAlt: "Creative production across film, photography and design",
    groups: [
      {
        title: "Film & Video Production",
        items: [
          {
            name: "Brand Films",
            description:
              "Compelling narratives that connect brands with their audience. We combine strategy, scriptwriting, cinematography and post-production to craft films that inform, inspire and convert.",
          },
          {
            name: "Corporate Films",
            description:
              "Professional films that showcase your organization's vision, culture and achievements. We craft corporate narratives that build credibility with stakeholders, investors and employees.",
          },
          {
            name: "Documentary Films",
            description:
              "Authentic, research-driven storytelling that captures real people, places and moments. We handle every stage from research to the final cut with cinematic depth.",
          },
          {
            name: "Explainer Videos",
            description:
              "Simplifying complex ideas into clear, engaging visuals. We turn concepts, products and processes into videos that educate and drive action.",
          },
          {
            name: "Product Videos",
            description:
              "High-impact visuals that highlight product features and benefits. We create videos that drive engagement, conversions and brand recall.",
          },
          {
            name: "Testimonial Videos",
            description:
              "Genuine customer stories that build trust and credibility. We capture authentic experiences that resonate with your target audience.",
          },
          {
            name: "Podcast Production",
            description:
              "End-to-end podcast solutions from concept to publishing. We manage studio setup, recording and editing for a polished listener experience.",
          },
          {
            name: "Live Streaming",
            description:
              "Seamless live broadcast solutions for events, conferences and launches. We ensure flawless technical execution and real-time audience engagement.",
          },
          {
            name: "Reels & Shorts",
            description:
              "Fast-paced, trend-driven content built for social media impact. We create scroll-stopping short-form videos that boost brand visibility.",
          },
          {
            name: "Video & Audio Editing",
            description:
              "Professional post-production that elevates raw footage into polished content. We refine every frame and sound byte for maximum impact.",
          },
        ],
      },
      {
        title: "Photography Production",
        items: [
          {
            name: "Event Photography",
            description:
              "Capturing every key moment with precision and creativity. We document your events with a mix of candid, formal and cinematic shots that tell the complete story.",
          },
          {
            name: "Corporate Photography",
            description:
              "Professional imagery that reflects your brand's identity and culture. We deliver polished visuals for use across corporate communications and marketing.",
          },
          {
            name: "Product Photography",
            description:
              "Sharp, detail-focused visuals that make products stand out. We create clean, high-quality images tailored for e-commerce, catalogs and campaigns.",
          },
          {
            name: "Drone Photography",
            description:
              "Stunning aerial perspectives that add scale and impact to your visuals. We use advanced drone technology to capture unique vantage points safely and creatively.",
          },
        ],
      },
      {
        title: "Motion & Animation",
        items: [
          {
            name: "Motion Graphics",
            description:
              "Dynamic visual elements that bring static ideas to life. We blend design, animation and storytelling to create graphics that capture attention and simplify messaging.",
          },
          {
            name: "2D Animation",
            description:
              "Hand-crafted animated storytelling that adds character and charm to your brand. We create visually engaging animated content for a wide range of formats and audiences.",
          },
        ],
      },
      {
        title: "Design & Branding",
        items: [
          {
            name: "Logo Design",
            description:
              "Distinctive marks that capture the essence of your brand. We craft logos that are memorable, versatile and built to stand the test of time.",
          },
          {
            name: "Brand Identity",
            description:
              "A complete visual language that defines who you are. We build cohesive brand systems that create recognition and trust across every touchpoint.",
          },
          {
            name: "Visual Identity",
            description:
              "Consistent visual elements that bring your brand to life across platforms. We design cohesive systems that ensure your brand is instantly recognizable everywhere.",
          },
          {
            name: "Packaging Design",
            description:
              "Packaging that stands out on the shelf and tells your brand story. We design functional, eye-catching packaging that drives purchase decisions.",
          },
          {
            name: "Company Profile Design",
            description:
              "Professional profiles that present your business with clarity and impact. We design compelling layouts that communicate your value to clients and investors.",
          },
          {
            name: "Brochure Design",
            description:
              "Informative, visually engaging brochures that communicate your message effectively. We design layouts that balance content and creativity for maximum impact.",
          },
          {
            name: "Social Media Creatives",
            description:
              "Scroll-stopping visuals designed for maximum social media engagement. We create platform-specific creatives that keep your brand consistent and relevant.",
          },
          {
            name: "Illustration",
            description:
              "Custom artwork that adds a unique, human touch to your brand. We create original illustrations tailored to your style, tone and storytelling needs.",
          },
          {
            name: "Creative Campaign Design",
            description:
              "Integrated visual campaigns that bring big ideas to life. We design cohesive creative assets that support your marketing goals across every channel.",
          },
          {
            name: "Print Collateral",
            description:
              "High-quality print materials that reinforce your brand presence offline. We design collateral that is polished, professional and print-ready.",
          },
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
        title: "Museum & Heritage Digitization",
        subtitle: "Capture & Documentation",
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
    h1: "Building Brands in the Digital Space",
    metaTitle: "Digital & Social Media | Creative Whoppers",
    metaDescription:
      "Strategic social media, content and campaigns that build presence and drive engagement — precisely targeted, consistently delivered.",
    intro:
      "Strategic social media, content and campaigns that build presence and drive engagement — precisely targeted, consistently delivered.",
    image: IMG.digitalSocial,
    imageAlt: "Digital and social media campaign planning",
    pillarSlug: "brand-marketing",
    capabilitySections: [
      {
        number: "01",
        title: "Social Media Strategy & Content",
        description:
          "Strategy-led content that gives every brand a clear voice and a consistent digital presence.",
        capabilities: [
          "Platform & Audience Strategy",
          "Content Calendar & Production",
          "Copywriting & Captioning",
          "Trend-Based & Reels Content",
          "Brand Voice Guidelines",
        ],
      },
      {
        number: "02",
        title: "Performance Marketing",
        description: "ROI-driven paid campaigns built to convert, not just to reach.",
        capabilities: [
          "Meta, Google & LinkedIn Ad Management",
          "Audience Targeting & Retargeting",
          "Creative A/B Testing",
          "Budget Optimization",
          "Conversion Tracking",
        ],
      },
      {
        number: "03",
        title: "Community & Growth Management",
        description:
          "Active engagement and reporting that turns followers into a measurable, growing community.",
        capabilities: [
          "Community & DM Management",
          "Influencer Collaboration",
          "SEO & Traffic Growth",
          "Performance Reporting & Insights",
          "Brand Sentiment Monitoring",
        ],
      },
    ],
  },
  {
    slug: "event-management",
    kind: "flagship",
    title: "Event Management",
    h1: "Planning and Delivering Impactful Events",
    metaTitle: "Event Management | Creative Whoppers",
    metaDescription:
      "Creative concepts turned into flawless execution from national conferences to institutional summits.",
    intro:
      "Creative concepts turned into flawless execution from national conferences to institutional summits.",
    image: IMG.events,
    imageAlt: "Event management and on-ground production",
    pillarSlug: "experience-design",
    capabilitySections: [
      {
        number: "01",
        title: "Event Concept & Strategy",
        description:
          "Original concepts and themes that give every event a distinct identity and clear objective.",
        capabilities: [
          "Concept Ideation & Theme Design",
          "Audience & Objective Mapping",
          "Budgeting & Feasibility Planning",
          "Timeline & Milestone Planning",
          "Creative Narrative Development",
        ],
      },
      {
        number: "02",
        title: "Corporate, Government & Conference Events",
        description:
          "Large-scale institutional events delivered with precision, protocol and end-to-end ownership.",
        capabilities: [
          "Corporate & Government Event Execution",
          "Protocol & VIP Coordination",
          "Agenda & Delegate Management",
          "Exhibition & Stall Design",
          "Multi-City Project Management",
        ],
      },
      {
        number: "03",
        title: "Production & Technical Execution",
        description:
          "Stage, set and technical production that brings every concept to life on-ground.",
        capabilities: [
          "Stage, Set & Décor Design",
          "AV, Lighting & LED Production",
          "Artist & Vendor Management",
          "Logistics & On-Ground Execution",
          "Technical Rehearsals & Backup Planning",
        ],
      },
    ],
  },
  {
    slug: "museum-heritage-digitization",
    kind: "flagship",
    title: "Museum Digitization",
    h1: "Museum & Heritage Digitization",
    metaTitle: "Museum Digitization | Creative Whoppers",
    metaDescription:
      "Preserving history through technology and immersive storytelling from archive to experience.",
    intro:
      "Preserving history through technology and immersive storytelling from archive to experience.",
    image: IMG.museum,
    imageAlt: "Museum and heritage digitization",
    pillarSlug: "digital-experiences",
    capabilitySections: [
      {
        number: "01",
        title: "Artifact & Digital Twin Capture",
        description:
          "High-precision documentation that turns fragile heritage into permanent, accessible digital records.",
        capabilities: [
          "High-Resolution Artifact Scanning",
          "3D Object & Digital Twin Mapping",
          "Archival Document Digitization",
          "Metadata Tagging & Cataloguing",
          "Secure Digital Archive Storage",
        ],
      },
      {
        number: "02",
        title: "Immersive Visitor Experiences",
        description:
          "Technology-driven touchpoints that transform how visitors connect with history on-site.",
        capabilities: [
          "Multimedia Kiosks & AV Guides",
          "Narrated Walkthroughs",
          "Projection Mapping & Installations",
          "Triggered Soundscapes",
          "Heritage Documentary Production",
        ],
      },
      {
        number: "03",
        title: "Digital Platforms for Heritage",
        description:
          "Websites and apps that extend the museum experience beyond its physical walls.",
        capabilities: [
          "UI/UX Design & Strategy",
          "Website Development & CMS Integration",
          "Mobile App Design & Development",
          "Virtual Tour Integration",
          "Platform Maintenance & Support",
        ],
      },
    ],
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
  {
    ...pageBySlug("digital-social-media"),
    intro:
      "Building a stronger digital presence through strategic social media, content, campaigns and audience engagement.",
  },
  {
    ...pageBySlug("creative-production"),
    title: "Graphics & Video Production",
    image: IMG.whatWeDoProduction,
    imageAlt: "Creative production across film, photography and design",
    intro:
      "Creating compelling visual content through film, video, photography, graphic design, motion and animation.",
  },
  {
    ...pageBySlug("event-management"),
    intro:
      "Planning and delivering impactful events through creative concepts, seamless production and end-to-end execution.",
  },
  {
    ...pageBySlug("museum-heritage-digitization"),
    intro:
      "Digitising heritage collections and transforming historical narratives into interactive, technology-enabled museum experiences that educate, engage and inspire.",
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((page) => page.slug === slug);
}

export function getServiceItem(pillarSlug: string, itemSlug: string) {
  const page = getServicePage(pillarSlug);
  if (!page?.groups) return null;
  for (const group of page.groups) {
    const item = group.items.find((entry) => itemSlugForName(entry.name) === itemSlug);
    if (item) {
      return { page, group, item };
    }
  }
  return null;
}

export const CLIENT_SECTORS = [
  "Corporate",
  "Government",
  "NGO",
  "Institutional",
] as const;

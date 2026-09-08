export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  clientWorks: string[];
  differentiator: string;
  image: string;
  featured: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "film-video-production",
    number: "01",
    category: "Film & Video Production",
    title: "Film & Commercial Production",
    tagline: "Cinema-grade commercial storytelling engineered for global broadcast and digital impact.",
    description:
      "From high-impact brand films and corporate documentaries to live multi-camera broadcasts and explainer films, we produce compelling cinematic narratives. We bring together scriptwriting, cinema camera direction, VFX, and precision execution under one roof.",
    deliverables: [
      "Brand Films",
      "Corporate Documentaries",
      "Product Commercials",
      "Explainer Videos",
      "Testimonial Films",
      "Podcast Production",
      "Multi-Cam Live Streaming",
    ],
    clientWorks: [
      "Skill India Commercial Campaign (Govt of India)",
      "EU in India - Cycling4Life Sustainability Film",
      "BRICS International School (Russian House)",
      "Rus Education - Global Medical Education Films",
      "The Rumi Project & Kabir Soulful Sufi Kalaam",
    ],
    differentiator: "Full-cycle cinema production from treatment to multi-lingual broadcast distribution.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "motion-animation",
    number: "02",
    category: "Motion & Animation",
    title: "Motion Graphics & 2D Animation",
    tagline: "Dynamic visual physics and kinetic typography that transform complex ideas into compelling stories.",
    description:
      "Bridging cinematic storytelling and graphic design through high-end motion graphics, character animation, viral social shorts, and Hollywood-caliber title design. Built to capture attention within the first 3 seconds.",
    deliverables: [
      "Broadcast Motion Graphics",
      "2D Character Animation",
      "Explainer Motion Design",
      "Reels & Viral Shorts",
      "Title Sequences & VFX",
      "Interactive UI Motion",
    ],
    clientWorks: [
      "Hollywood Feature Contribution: 'The Time is... Now!'",
      "Lincoln American University Awareness Series",
      "Dynamic Social Campaign Shorts",
    ],
    differentiator: "Hollywood-credited animation artists delivering frame-accurate kinetic design.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "design-brand-identity",
    number: "03",
    category: "Design & Brand Identity",
    title: "Brand Identity & Visual Systems",
    tagline: "Distinctive, enduring visual languages that establish category leadership.",
    description:
      "We design cohesive identity systems that communicate purpose across every brand touchpoint. From foundational logo geometry and brand books to packaging design, presentation architecture, and marketing collateral.",
    deliverables: [
      "Logo & Symbol Design",
      "Brand & Visual Identity Systems",
      "Packaging & Structural Design",
      "Company Profile & Pitch Decks",
      "Editorial & Brochure Design",
      "Custom Digital Illustrations",
      "Integrated Campaign Collateral",
    ],
    clientWorks: [
      "Global Institutional Rebranding",
      "Enterprise Pitch Deck Architecture",
      "Consumer Product Packaging",
    ],
    differentiator: "16+ years of human-centered brand strategy led by veteran design entrepreneurs.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "experiential-digital-spaces",
    number: "04",
    category: "Experiential & Spaces",
    title: "Experiential Spaces & Museum Digitization",
    tagline: "Transforming physical environments into interactive, emotionally resonant destinations.",
    description:
      "We fuse architecture, spatial tech, and historical storytelling to build unforgettable visitor journeys. From museum digitization and interactive kiosks to corporate summits, pop-up brand pavilions, and live experiential spectacles.",
    deliverables: [
      "Museum Digitization & Curation",
      "Interactive Touch & Sensor Kiosks",
      "Corporate Conferences & Summits",
      "Brand Pop-Up Pavilions",
      "Projection Mapping & Spatial Audio",
    ],
    clientWorks: [
      "Hall of Fame Defence Museum (Leh, Ladakh)",
      "Grenadiers Regiment Museum (Jabalpur)",
      "Russian Young Entrepreneurs Delegation Pavilion",
    ],
    differentiator: "Pioneering defence and cultural museum digitization with permanent public impact.",
    image: "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "photography-production",
    number: "05",
    category: "Photography Production",
    title: "Commercial & Aerial Photography",
    tagline: "Striking high-resolution still imagery crafted for advertising, editorial, and industrial portfolios.",
    description:
      "Our photography unit provides complete coverage for live summits, corporate leadership portraits, high-detail product catalogs, and licensed drone aerial surveys across industrial and architectural landscapes.",
    deliverables: [
      "Live Event & Summit Photography",
      "Corporate & Leadership Headshots",
      "Product & Catalog Photography",
      "Drone Aerial Cinematography & Stills",
      "Architectural Space Capture",
    ],
    clientWorks: [
      "International Diplomatic Summits",
      "Clarion Industrial Air Coolers Product Range",
      "Government Cultural Festivals",
    ],
    differentiator: "Licensed drone pilots and commercial lighting masters on standby across India and abroad.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "post-production-audio",
    number: "06",
    category: "Post Production",
    title: "Post-Production & Audio Engineering",
    tagline: "Precision editing, Dolby-spec sound design, and color grading for cinematic polish.",
    description:
      "Where raw captures are transformed into masterworks. We handle advanced DaVinci Resolve color grading, multi-track dialogue mastering, Foley sound effects, original musical score curation, and broadcast quality-control.",
    deliverables: [
      "Narrative & Commercial Video Editing",
      "Color Grading (DaVinci Resolve)",
      "Sound Design & Audio Mastering",
      "Multilingual Voiceover & Dubbing",
      "Broadcast Finishing & QC",
    ],
    clientWorks: [
      "International Multilingual Video Adaptations",
      "Classical Sufi Music Master Audio Recordings",
      "Documentary Post-Production Suites",
    ],
    differentiator: "Full in-house post-production pipeline ensuring rapid turnaround without vendor markups.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
];

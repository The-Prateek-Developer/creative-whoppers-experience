export const PORTFOLIO_CATEGORIES = [
  "Experience Design",
  "Creative Production",
  "Digital Experiences",
  "Brand & Marketing",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  client: string;
  industry: string;
  category: PortfolioCategory;
  year: string;
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
  deliverables: string[];
  coverImage: string;
  featured: boolean;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "cycling-for-life",
    number: "01",
    title: "Cycling4Life Sustainability",
    client: "European Union Delegation to India",
    industry: "Diplomatic & Sustainability",
    category: "Creative Production",
    year: "2024",
    tagline: "Push the Pedals for a Sustainable Future: A nationwide cinematic movement.",
    overview:
      "Produced for the European Union in India (#EUinIndia), Cycling4Life is a high-profile sustainability film and event campaign designed to champion green urban mobility and international climate action.",
    challenge:
      "Communicate serious environmental policy and European green initiatives to an energetic Indian youth audience without sounding bureaucratic or academic.",
    solution:
      "Developed a dynamic, high-energy cinematic treatment capturing grassroots cycling communities alongside diplomatic dignitaries, fusing fast-paced rhythm with emotive visual storytelling.",
    impact: "Over 45,000 direct campaign views, widespread diplomatic press coverage, and nationwide participation.",
    deliverables: [
      "Cinematic Campaign Film",
      "Multi-City Event Video Production",
      "Social Media Teasers & Cutdowns",
      "Broadcast Color Grading & Sound Mix",
    ],
    coverImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "skill-india-commercial",
    number: "02",
    title: "Skill India National Campaign",
    client: "Ministry of Skill Development & Entrepreneurship",
    industry: "Government & Public Advocacy",
    category: "Brand & Marketing",
    year: "2024",
    tagline: "Empowering India's youth through world-class vocational mastery and entrepreneurship.",
    overview:
      "An official television and digital broadcast advertising campaign featuring Union Minister Anant Kumar Hegde, designed to inspire millions of young Indians to embrace specialized vocational skills.",
    challenge:
      "Create an authoritative yet deeply inspiring commercial format with cinema-grade visual appeal suitable for national broadcast across multiple regional channels.",
    solution:
      "Deployed high-end cinema camera crews to industrial workshops and training hubs, pairing real artisan close-ups with stirring vocal delivery and orchestral scoring.",
    impact: "National TV broadcast run, featured in government youth outreach summits across 28 states.",
    deliverables: [
      "National Broadcast Television Commercial",
      "Ministerial Address Production",
      "Multilingual Voiceover Adaptations",
      "Digital Short-Form Snippets",
    ],
    coverImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "hall-of-fame-museum",
    number: "03",
    title: "Hall of Fame Defence Museum",
    client: "THE ANTS Defence / Indian Armed Forces",
    industry: "Cultural & Defence Heritage",
    category: "Digital Experiences",
    year: "2024",
    tagline: "Digitizing India's military valor in Leh, Ladakh for future generations.",
    overview:
      "A landmark museum digitization and historical documentary project immortalizing the stories of the Kargil War, the Siachen Glacier bravehearts, and the rich legacy of the Indian Armed Forces in Leh, Ladakh.",
    challenge:
      "Preserving fragile historical archives and extreme-altitude war stories while engineering interactive digital touchpoints for over 250,000 annual global visitors.",
    solution:
      "Built interactive touchscreen kiosks, digitized hundreds of war memorabilia artifacts, and directed cinema-grade documentary films chronicling frontline veteran accounts.",
    impact: "Permanent installation at the Hall of Fame Museum Leh, featured as a prime national heritage destination.",
    deliverables: [
      "Documentary Film Production",
      "Interactive Museum Kiosk Software",
      "Historical Archival Digitization",
      "Frontline Veteran Interview Series",
    ],
    coverImage: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "the-rumi-project",
    number: "04",
    title: "The Rumi Project & Kabir Kalaam",
    client: "Manjari Chaturvedi & Harshdeep Kaur",
    industry: "Performing Arts & Heritage",
    category: "Experience Design",
    year: "2024",
    tagline: "An ode to mystic poetry through Sufi Kathak dance and transcendent vocal performance.",
    overview:
      "Multi-camera live concert recording and documentary production celebrating the timeless verses of Jalaluddin Rumi and Saint Kabir, featuring world-renowned dancer Manjari Chaturvedi and vocal sensation Harshdeep Kaur.",
    challenge:
      "Capturing the delicate subtleties of Sufi dance and high-dynamic stage acoustics in a live auditorium setting without obstructing the live audience's experience.",
    solution:
      "Employed an unobtrusive 5-camera 4K cinema rig with calibrated prime lenses, synchronized with multi-track Dolby audio capture directly from master microphones.",
    impact: "Over 500,000 digital views, widespread cultural acclaim, and broadcast across international festival channels.",
    deliverables: [
      "Multi-Camera 4K Live Concert Capture",
      "Master Audio Mix & Dolby Mastering",
      "Behind-the-Scenes Artist Interviews",
      "International Film Festival Screener",
    ],
    coverImage: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "brics-international-school",
    number: "05",
    title: "BRICS International Youth Summit",
    client: "Russian House / BRICS Youth Forum",
    industry: "Diplomacy & Education",
    category: "Experience Design",
    year: "2024",
    tagline: "Fostering economic and cultural exchange among emerging global powerhouses.",
    overview:
      "Comprehensive event production, live streaming, and documentary storytelling for the BRICS International School symposium at Russian House, New Delhi, hosting high-level ambassadors and young entrepreneurs.",
    challenge:
      "Delivering seamless multi-nation technical streaming across time zones with simultaneous Russian-English translation and real-time social highlights.",
    solution:
      "Designed a complete experiential pavilion, high-speed broadcast uplink, on-site editing bullpen for 30-minute turnaround recaps, and bilateral documentary coverage.",
    impact: "Flawless broadcast to 12 nations, praised by embassy officials and international delegations.",
    deliverables: [
      "Summit Stage & Pavilion Design",
      "Multilingual Live Broadcast Uplink",
      "Rapid-Response Social Video Recap",
      "Diplomatic Highlight Documentary",
    ],
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "clarion-aura-21",
    number: "06",
    title: "Clarion AURA 21 Commercial",
    client: "Clarion Appliances",
    industry: "Consumer Electronics & Industrial",
    category: "Creative Production",
    year: "2025",
    tagline: "Industrial aerodynamic engineering brought to life with 3D fluid simulation.",
    overview:
      "A flagship commercial product video combining studio commercial cinematography with 3D VFX fluid dynamics to introduce the high-performance AURA 21 air cooler line to consumer retail channels.",
    challenge:
      "Demonstrating invisible airflow dynamics and advanced cooling technology in a tangible, visually mesmerizing format.",
    solution:
      "Rendered photorealistic 3D particle vortexes revealing the internal cooling matrix, intercut with sleek studio lighting reveals on macro hardware textures.",
    impact: "Directly attributed to a 38% increase in retail distributor pre-orders across northern India.",
    deliverables: [
      "Commercial Product Video",
      "3D Fluid Dynamics Simulation & VFX",
      "Retail Showroom Video Loops",
      "Maintenance & Explainer Guide",
    ],
    coverImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "the-time-is-now",
    number: "07",
    title: "Hollywood Film: 'The Time is... Now!'",
    client: "International Film Production",
    industry: "Cinema & Entertainment",
    category: "Creative Production",
    year: "2023",
    tagline: "International cinematic animation and visual effects title architecture.",
    overview:
      "Creative Whoppers founder Dilip Katariya contributed animation and title architecture to the acclaimed Hollywood feature film 'The Time is... Now!', showcasing Indian creative capability on the world cinema stage.",
    challenge:
      "Adhering to strict Hollywood delivery pipelines and 4K cinema projection color grading standards.",
    solution:
      "Engineered bespoke 2D kinetic sequences and typography treatments that established the film's philosophical narrative tension.",
    impact: "Screened in major international film festivals with global distribution credentials.",
    deliverables: [
      "Cinema Title Sequence Design",
      "2D Narrative Animation Inserts",
      "Promotional Theatrical Trailer VFX",
      "Festival Screening Master Deliveries",
    ],
    coverImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "lincoln-american-university",
    number: "08",
    title: "Global Health Awareness Campaign",
    client: "Lincoln American University School of Medicine",
    industry: "Healthcare & Education",
    category: "Brand & Marketing",
    year: "2024",
    tagline: "Simplifying complex viral epidemiology into accessible animated micro-stories.",
    overview:
      "An educational motion graphics campaign engineered during peak global health crises, translating intricate medical and virus transmission data into clear, empathetic vector character animations.",
    challenge:
      "Communicating critical public health protocols across diverse linguistic and demographic groups without creating panic.",
    solution:
      "Designed friendly character animations with intuitive infographics and multilingual subtitles for rapid digital dissemination.",
    impact: "Over 40,000 university students and community members reached across South America and the Caribbean.",
    deliverables: [
      "Vector Motion Infographics",
      "Character Animation Storyboards",
      "Multilingual Social Cutdowns",
      "University Portal Educational Assets",
    ],
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    featured: false,
  },
];

export function getProject(id: string) {
  return PORTFOLIO_PROJECTS.find((project) => project.id === id);
}

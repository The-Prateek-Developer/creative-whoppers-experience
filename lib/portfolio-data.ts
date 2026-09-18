import { SITE_IMAGES } from "@/lib/site-images";

export const PORTFOLIO_CATEGORIES = [
  "Experience Design",
  "Creative Production",
  "Digital Experiences",
  "Brand Marketing",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export type ProjectFact = {
  label: string;
  value: string;
};

export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  client: string;
  industry: string;
  category: PortfolioCategory;
  year: string;
  tagline: string;
  summary: string;
  facts: ProjectFact[];
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
  deliverables: string[];
  coverImage: string;
  /** Six case-study photos shown below Overview on the brief page */
  galleryImages: string[];
  featured: boolean;
}

function caseStudyGallery(folder: string): string[] {
  return [
    `/images/portfolio/${folder}/cover.jpg`,
    `/images/portfolio/${folder}/01.jpg`,
    `/images/portfolio/${folder}/02.jpg`,
    `/images/portfolio/${folder}/03.jpg`,
    `/images/portfolio/${folder}/04.jpg`,
    `/images/portfolio/${folder}/05.jpg`,
  ];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "sberbank-corporate-event",
    number: "01",
    title: "Sberbank Corporate Event",
    client: "Sberbank India",
    industry: "Corporate",
    category: "Experience Design",
    year: "2024",
    tagline: "A Day to Connect, Collaborate and Celebrate",
    summary:
      "End-to-end corporate event management for Sberbank India's flagship employee gathering.",
    facts: [
      { label: "Client", value: "Sberbank India" },
      { label: "Year", value: "2024" },
      { label: "Location", value: "Russian House, New Delhi" },
      { label: "Capacity", value: "150+ attendees" },
      { label: "Duration", value: "1 Day" },
    ],
    overview:
      "Creative Whoppers delivered end-to-end event management for Sberbank India's corporate gathering at the Russian House in New Delhi. Bringing together 100+ employees for a full day of leadership dialogue, team engagement, and celebration, the event was designed to feel purposeful rather than procedural — a rare balance for a large-scale corporate town hall.",
    challenge:
      "Sberbank needed a single-day format that could hold a formal leadership townhall, Q&A sessions, panel discussions, and internal business updates, while still creating space for genuine team bonding. The brief was clear: this couldn't be read as an office meeting stretched across eight hours — it needed to feel like an occasion.",
    solution:
      "Our team managed the event setup, stage and branding design, AV and technical production, and live coordination of the leadership panel and townhall sessions. We built a programme flow that transitioned naturally from structured corporate dialogue into collaborative, celebratory moments, keeping energy and attention high through the day.",
    impact:
      "A seamless full-day experience for 150+ attendees at a premier New Delhi venue, delivered with zero logistical disruptions and strong positive feedback from both leadership and staff, reinforcing Sberbank India's internal culture of connection and recognition.",
    deliverables: [
      "Venue & Stage Setup",
      "Townhall & Panel Coordination",
      "AV & Technical Production",
      "On-Ground Event Management",
    ],
    coverImage: SITE_IMAGES.sberbankEvent,
    galleryImages: caseStudyGallery("sberbank"),
    featured: true,
  },
  {
    id: "armed-forces-museums",
    number: "02",
    title: "Indian Armed Forces Museums Digitisation",
    client: "Indian Armed Forces (Army, Navy, and Air Force)",
    industry: "Defence Heritage",
    category: "Digital Experiences",
    year: "2024",
    tagline: "Preserving a Nation's Military Legacy, Museum by Museum",
    summary:
      "A nationwide digitisation initiative capturing the history, artefacts, and stories of India's Army, Navy, and Air Force museums for the Indian Armed Forces Museum Digital Platform.",
    facts: [
      { label: "Client", value: "Indian Armed Forces (Army, Navy, and Air Force)" },
      { label: "Scope", value: "22 States & Union Territories, 47 Museum Locations" },
      { label: "Coverage", value: "Leh to Trivandrum, Jaisalmer to Assam" },
      { label: "Service", value: "Museum & Heritage Digitisation" },
    ],
    overview:
      "Creative Whoppers partnered with the Indian Armed Forces on a pan-India mission to digitise the legacy of the Army, Navy, and Air Force museums, travelling to 47 museum locations across 22 states and union territories, from Leh to Trivandrum and Jaisalmer to Assam. The project goes beyond documentation, building the foundation for the upcoming Indian Armed Forces Museum Digital Platform, making India's military heritage accessible to every citizen.",
    challenge:
      "India's military museums hold decades of pre- and post-independence history, spread across some of the country's most geographically diverse and remote locations. The challenge was twofold: execute a consistent, high-quality digitisation process across 47 sites with vastly different terrains, artefacts, and conditions, while capturing not just objects, but the human stories of valour, sacrifice, and brotherhood behind them, in a form fit for a national digital platform.",
    solution:
      "Our team conducted on-ground digitisation across all 47 museum locations, documenting artefacts, uniforms, war machines, and archival material through detailed photography and videography. Beyond visual capture, the project focused on narrative depth, surfacing untold stories tied to each museum's collection, to be presented through the Indian Armed Forces Museum Digital Platform.",
    impact:
      "A first-of-its-kind, nationwide digitisation effort spanning 22 states and 47 museums, laying the groundwork for a national digital platform that will make India's military history accessible beyond physical museum walls. The project positions Creative Whoppers at the forefront of heritage and museum digitisation in India, with defence heritage as a flagship specialisation.",
    deliverables: [
      "Nationwide Museum Digitisation (47 Locations, 22 States/UTs)",
      "Artefact, Uniform & Archival Photography",
      "3D Modelling of Exhibits & Artefacts",
      "Virtual Tours of Museum Spaces",
      "Narrative & Story Development",
      "Digital Platform Content Production",
    ],
    coverImage: SITE_IMAGES.armedForcesMuseum,
    galleryImages: caseStudyGallery("armed-forces"),
    featured: true,
  },
  {
    id: "erasmus-mundus-ceremony",
    number: "03",
    title: "Erasmus Mundus Scholarship Pre-Departure Ceremony",
    client: "European Union & The Instituto Cervantes, New Delhi",
    industry: "Diplomatic & Education",
    category: "Experience Design",
    year: "2023",
    tagline: "Celebrating a New Chapter for India's Global Scholars",
    summary:
      "Full-scale event production and media coverage for the EU Delegation's send-off ceremony honoring Erasmus Mundus scholars.",
    facts: [
      { label: "Client", value: "European Union & The Instituto Cervantes, New Delhi" },
      { label: "Year", value: "2023" },
      { label: "Location", value: "Instituto Cervantes, New Delhi" },
      { label: "Capacity", value: "500+" },
      { label: "Duration", value: "1 Day" },
    ],
    overview:
      "Held at the Instituto Cervantes in New Delhi, the Erasmus Mundus Pre-Departure Ceremony brought together 500+ scholars, EU officials, and academic dignitaries to celebrate Indian students embarking on the prestigious Erasmus Mundus scholarship journey to Europe. Creative Whoppers led complete event production alongside videography and photography, working directly with the EU Delegation and Instituto Cervantes to deliver the ceremony end to end.",
    challenge:
      "A ceremony of this stature, backed by the European Union and hosted at a cultural institution like Instituto Cervantes, needed to feel both diplomatically polished and personally meaningful for the 500+ scholars being celebrated. The event called for tight coordination between multiple stakeholders, formal protocol for EU and institutional dignitaries, and production quality befitting an international scholarship programme, all within a single day.",
    solution:
      "Creative Whoppers managed the ceremony ground-up — event production, on-site coordination, and complete media documentation through videography and photography. Working in close partnership with the EU Delegation and Instituto Cervantes, our team handled logistics, stage and proceedings management, and real-time coverage of the ceremony.",
    impact:
      "A seamless, high-profile send-off for 500+ Erasmus Mundus scholars, delivered in full partnership with the EU Delegation and Instituto Cervantes, reinforcing Creative Whoppers' credibility in producing diplomatic and institutional events that blend formal protocol with genuine celebration.",
    deliverables: [
      "End-to-End Event Production",
      "Event Videography & Photography",
      "Stakeholder & Protocol Coordination",
      "On-Ground Event Management",
    ],
    coverImage: SITE_IMAGES.erasmusPanel,
    galleryImages: caseStudyGallery("erasmus"),
    featured: true,
  },
  {
    id: "cycling4life",
    number: "04",
    title: "Cycling4Life Event, New Delhi",
    client: "European Union Delegation, Netherlands Embassy, Embassy of the Federal Republic of Germany",
    industry: "Diplomatic & Sustainability",
    category: "Creative Production",
    year: "2022",
    tagline: "Pedaling for a Cleaner Capital",
    summary:
      "Media production and on-ground event support for a landmark climate-awareness cycling event by the EU Delegation.",
    facts: [
      { label: "Client", value: "European Union Delegation, Netherlands Embassy, Embassy of the Federal Republic of Germany" },
      { label: "Year", value: "2022" },
      { label: "Location", value: "Netherlands Embassy & Embassy of the Federal Republic of Germany, New Delhi" },
      { label: "Capacity", value: "2000+" },
      { label: "Duration", value: "1 Day" },
    ],
    overview:
      "Held on October 15, 2022, Cycling4Life brought together the EU Delegation, the Dutch and German Embassies, and NGO Delhi by Cycle for a city-wide cycling event promoting climate awareness and sustainable, low-emission living. More than 500 cyclists rode a 15–20 km route across Delhi's landmark roads, starting at the Netherlands Embassy in Chanakyapuri and finishing at Nehru Park opposite the German Embassy. Creative Whoppers led all media production for the event and supported the EU Delegation in on-ground event management.",
    challenge:
      "A public event of this scale, spanning multiple embassies, a moving route through central Delhi, and thousands of participants and attendees, needed cohesive documentation and dependable on-ground coordination. The goal was to capture the day's energy and message authentically, in real time, while ensuring the event ran smoothly across a route stretching from Teen Murti to Nehru Park.",
    solution:
      "Creative Whoppers managed complete media production for the day, including videography, photography, and live streaming, capturing the ride from its 8:00 AM start through checkpoints at Kartavya Path, Gandhi Smriti, Lodhi Garden, and Indira Gandhi Memorial, to the closing celebrations at Nehru Park. Alongside media coverage, our team supported the EU Delegation's on-ground event management.",
    impact:
      "Cycling4Life was documented and live-streamed to a wide audience, extending the reach of its climate and sustainability message well beyond the 500+ cyclists on the road. The event ran seamlessly across a multi-embassy, multi-location format, reinforcing Creative Whoppers' capability to manage media and logistics for large-scale public and diplomatic events.",
    deliverables: [
      "Event Videography & Photography",
      "Live Streaming",
      "On-Ground Event Management Support",
      "Multi-Location Route Coverage",
    ],
    coverImage: SITE_IMAGES.cycling4life,
    galleryImages: caseStudyGallery("cycling4life"),
    featured: true,
  },
  {
    id: "chambal-literary-festival",
    number: "05",
    title: "Chambal Literary Festival",
    client: "Chambal Museum & THE ANTS",
    industry: "Culture & Heritage",
    category: "Experience Design",
    year: "2024",
    tagline: "Where Literature Meets the Ravines of Chambal",
    summary:
      "A recurring flagship literary and cultural festival held on the banks of the Chambal, championing India's most misunderstood landscape.",
    facts: [
      { label: "Client", value: "Chambal Museum & THE ANTS" },
      { label: "Year", value: "2024 (4th Edition)" },
      { label: "Location", value: "Panchnad, Chambal & Chambal Ghati, Bhind" },
      { label: "Capacity", value: "2000+" },
      { label: "Duration", value: "3 Days" },
    ],
    overview:
      "The Chambal Literary Festival is a one-of-its-kind cultural gathering held not in a city auditorium, but on the sandbanks of Panchnad — the confluence of five rivers (Kunwari, Pahuj, Yamuna, Chambal and Sind) near the borders of Jalaun, Etawah and Auraiya. First organized in 2020 as an initiative of THE ANTS and Chambal Museum, the 2024 edition brought together writers, filmmakers, historians, and cultural figures from across India for three days of dialogue, storytelling, and heritage exploration in one of the country's most remote and least-documented regions.",
    challenge:
      "Bring a literature festival — a format typically associated with urban venues like Delhi and Jaipur — to one of India's most inaccessible landscapes, without losing production quality, safety, or scale. The larger challenge was narrative: to shift public perception of Chambal away from decades of \"dacoit-land\" stereotyping, and reintroduce the region through its history, ecology, and role in the freedom struggle, all while running a genuinely sustainable, plastic-free event for 2000+ attendees across three days.",
    solution:
      "The festival was structured across a full three-day programme: an opening ceremony and panel discussions on Chambal's past and future on Day 1; storytelling workshops, ecosystem and social-fabric discussions, and a musical evening on Day 2; and a heritage walk on Day 3. The production embraced sustainability at every level: stage design built from jute, bamboo and paper, a complete ban on plastic utensils, and full post-event site clean-up.",
    impact:
      "Now in its fourth edition, the Chambal Literary Festival has established itself as a literature festival in the ravines rather than the cities, drawing national attention from litterateurs, filmmakers, historians, and activists. The event has become a platform actively reshaping the narrative around Chambal, while positioning the region as an emerging destination for heritage and cultural tourism.",
    deliverables: [
      "Multi-Day Festival Programming & Production",
      "Sustainable, Plastic-Free Event Design",
      "Heritage Walk & Exhibition Curation",
      "Documentary Screenings & Cultural Programming",
      "On-Ground Event Management",
    ],
    coverImage: SITE_IMAGES.chambalLiteraryFestival,
    galleryImages: caseStudyGallery("chambal"),
    featured: true,
  },
];

export function getProject(id: string) {
  return PORTFOLIO_PROJECTS.find((project) => project.id === id);
}

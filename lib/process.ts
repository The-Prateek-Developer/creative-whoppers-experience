export const PROCESS_STAGES = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    subtitle: "Research & Strategy",
    description:
      "We start by understanding the brief, audience and context — research, stakeholder alignment and a clear strategic direction before a single asset is made.",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    subtitle: "Creative & Experience Development",
    description:
      "Concepts, narratives, spatial plans and visual systems are developed so every touchpoint feels intentional, on-brand and ready to produce.",
  },
  {
    id: "deliver",
    number: "03",
    title: "Deliver",
    subtitle: "Production & Execution",
    description:
      "Film crews, event teams, digital builders and marketers execute under one roof — from stage and screen to campaign launch.",
  },
  {
    id: "sustain",
    number: "04",
    title: "Sustain",
    subtitle: "Marketing, Growth & Support",
    description:
      "After go-live we keep the work working: content, performance, maintenance and long-term brand support.",
  },
] as const;

export const HOME_PROCESS = PROCESS_STAGES.slice(0, 3);

export const DIFFERENTIATORS = [
  {
    title: "End-to-end under one roof",
    description:
      "Experience design, creative production, digital and marketing sit in one team — fewer handoffs, tighter craft.",
  },
  {
    title: "Corporate, government and institutional",
    description:
      "Protocol-ready events and campaigns for ministries, missions, NGOs and brands — not just consumer launches.",
  },
  {
    title: "Proven process",
    description:
      "Discover → Design → Deliver (and Sustain) keeps briefs measurable from strategy through to on-ground and on-screen delivery.",
  },
] as const;

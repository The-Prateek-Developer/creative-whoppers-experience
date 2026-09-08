import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base Canvas & Neutral Surfaces
        background: "#141414",
        foreground: "#FFFFFF",
        "agency-black": "#141414",
        "agency-surface": "#1C1C1C",
        "agency-surface-light": "#252525",
        "agency-white": "#FFFFFF",
        "agency-muted": "#9CA3AF",
        "agency-border": "rgba(255, 255, 255, 0.08)",
        "agency-border-strong": "rgba(248, 214, 37, 0.3)",

        // Primary Brand Accent — Hero & Core Identity
        "agency-yellow": "#F8D625",
        "agency-yellow-hover": "#E5C41C",
        "agency-yellow-light": "#FDE047",

        // Warm Secondary Accent — Services, Cinema & Dynamic Motion
        "agency-coral": "#FF6B35",
        "agency-coral-hover": "#E85924",
        "agency-coral-light": "#FF8C5A",
        "agency-border-coral": "rgba(255, 107, 53, 0.3)",

        // Cool Tertiary Accent — Portfolio, Digital Experiences & Spatial Computing
        "agency-cyan": "#00E5FF",
        "agency-cyan-hover": "#00C2D8",
        "agency-cyan-light": "#67E8F9",
        "agency-border-cyan": "rgba(0, 229, 255, 0.3)",

        // Experiential Accent — Studio Ethos, Philosophy & Vision
        "agency-violet": "#B366FF",
        "agency-violet-hover": "#9933FF",
        "agency-violet-light": "#C084FC",
        "agency-border-violet": "rgba(179, 102, 255, 0.3)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 9vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(2.75rem, 6.5vw, 6rem)", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "editorial-sub": ["clamp(1.125rem, 1.8vw, 1.5rem)", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        editorial: "-0.035em",
        "editorial-tight": "-0.05em",
        "editorial-wide": "0.2em",
      },
      gridTemplateColumns: {
        asymmetric: "1.4fr 1fr",
        "asymmetric-reverse": "1fr 1.4fr",
        editorial: "2fr 1fr 1.2fr",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;

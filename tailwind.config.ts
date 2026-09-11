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
        // Theme-aware channels live in --cw-bg / --cw-fg (see app/globals.css).
        background: "rgb(var(--cw-bg) / <alpha-value>)",
        foreground: "rgb(var(--cw-fg) / <alpha-value>)",
        "agency-black": "rgb(var(--cw-bg) / <alpha-value>)",
        "agency-white": "rgb(var(--cw-fg) / <alpha-value>)",
        "agency-ink": "#141414",
        "agency-yellow": "#F8D625",
        "agency-surface": "rgb(var(--cw-fg) / 0.06)",
        "agency-muted": "rgb(var(--cw-fg) / 0.55)",
        "agency-border": "rgb(var(--cw-fg) / 0.12)",
        "agency-border-strong": "rgba(248, 214, 37, 0.3)",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "Poppins", "sans-serif"],
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
        mono: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 9vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(2.75rem, 6.5vw, 6rem)", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.25rem)", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
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
        "client-marquee": "client-marquee 42s linear infinite",
        "client-marquee-reverse": "client-marquee 48s linear infinite reverse",
      },
      keyframes: {
        "client-marquee": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

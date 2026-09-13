/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "framer-motion",
    "lenis",
  ],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/services/video-marketing", destination: "/services/digital-social-media", permanent: true },
      { source: "/services/brand-strategy-packaging", destination: "/services/creative-production", permanent: true },
      { source: "/portfolio/cycling-for-life", destination: "/portfolio/cycling4life", permanent: true },
      { source: "/portfolio/skill-india-commercial", destination: "/portfolio", permanent: true },
      { source: "/portfolio/hall-of-fame-museum", destination: "/portfolio/armed-forces-museums", permanent: true },
      { source: "/portfolio/the-rumi-project", destination: "/portfolio", permanent: true },
      { source: "/portfolio/brics-international-school", destination: "/portfolio", permanent: true },
      { source: "/portfolio/clarion-aura-21", destination: "/portfolio", permanent: true },
      { source: "/portfolio/the-time-is-now", destination: "/portfolio", permanent: true },
      { source: "/portfolio/lincoln-american-university", destination: "/portfolio", permanent: true },
    ];
  },
};

export default nextConfig;

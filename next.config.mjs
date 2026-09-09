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
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
    ];
  },
};

export default nextConfig;

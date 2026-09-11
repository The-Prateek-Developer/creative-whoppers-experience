import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CursorFollower from "@/components/canvas/CursorFollower";
import ThemeScript from "@/components/theme/ThemeScript";
import { PAGE_SEO, SITE_DESCRIPTION, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_SEO.home.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [...PAGE_SEO.home.keywords, "Creative Whoppers"],
  icons: {
    icon: "/images/brand/logos/favicon_yellow.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: PAGE_SEO.home.title,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Creative Whoppers — advertising and experience design agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.home.title,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${poppins.variable} font-sans bg-agency-black text-agency-white antialiased selection:bg-agency-yellow selection:text-agency-ink min-h-screen flex flex-col`}
      >
        <SmoothScroll>
          <CursorFollower />
          <Navbar />
          <main className="flex-1 w-full relative pt-20">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

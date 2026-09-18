"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Play, X } from "lucide-react";
import FadeImage from "@/components/media/FadeImage";
import ServiceYoutubeEmbed from "@/components/media/ServiceYoutubeEmbed";
import ServiceYoutubeThumb from "@/components/media/ServiceYoutubeThumb";
import { embeddableVideos, isYoutubeShort } from "@/lib/youtube";
import { easings } from "@/lib/animations";
import { cn } from "@/lib/utils";

type Props = {
  images: string[];
  videos?: string[];
  alt: string;
  variant?: "page" | "card";
  priority?: boolean;
  /** Compact portfolio-style banner crop for service brief pages */
  banner?: boolean;
};

function videoForIndex(videos: string[] | undefined, index: number) {
  if (!videos?.length) return undefined;
  return videos[index] ?? (videos.length === 1 ? videos[0] : undefined);
}

function FullImage({
  src,
  alt,
  sizes,
  priority,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <FadeImage
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes={sizes}
      priority={priority}
      className={cn("relative mx-auto h-auto w-full object-contain", className)}
      style={{ width: "100%", height: "auto" }}
    />
  );
}

function ImageLightbox({
  src,
  alt,
  onClose,
}: {
  src: string | null;
  alt: string;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!src) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {src ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: easings.outSnappy }}
            onClick={onClose}
            className="absolute inset-0 bg-agency-black/92 backdrop-blur-md"
            aria-label="Close image"
          />
          <motion.figure
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.4, ease: easings.outPremium }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-6xl flex-col items-center"
          >
            <button
              type="button"
              onClick={onClose}
              className="mb-4 self-end rounded-full border border-agency-border bg-agency-black/80 p-2.5 text-agency-white transition-colors hover:border-agency-yellow hover:text-agency-yellow"
              aria-label="Close image"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative w-full">
              <FullImage
                src={src}
                alt={alt}
                sizes="96vw"
                priority
                className="max-h-[78vh]"
              />
            </div>
          </motion.figure>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}

function Shot({
  src,
  alt,
  href,
  sizes,
  priority,
  onOpen,
}: {
  src: string;
  alt: string;
  href?: string;
  sizes: string;
  priority?: boolean;
  onOpen: (src: string) => void;
}) {
  const media = (
    <div className="relative w-full">
      <FullImage src={src} alt={alt} sizes={sizes} priority={priority} />
      {href ? (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-agency-black/20">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-agency-black/80 text-agency-white shadow-lg ring-2 ring-white/80">
            <Play className="h-6 w-6 fill-current pl-0.5" aria-hidden />
          </span>
        </span>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${alt} on YouTube`}
        className="relative block w-full"
      >
        {media}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(src)}
      className="relative block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black"
      aria-label={`View full image: ${alt}`}
    >
      {media}
    </button>
  );
}

export default function ServiceImagePayout({
  images,
  videos,
  alt,
  priority,
  banner,
}: Props) {
  const [openSrc, setOpenSrc] = useState<string | null>(null);
  const [activeShort, setActiveShort] = useState<string | null>(null);
  const embeds = embeddableVideos(videos);
  const shorts = embeds.filter((url) => isYoutubeShort(url));

  if (shorts.length > 0) {
    return (
      <div
        className={cn(
          "grid gap-4 sm:gap-5",
          shorts.length === 1
            ? "grid-cols-1 sm:max-w-sm"
            : shorts.length === 2
              ? "grid-cols-2"
              : "grid-cols-2 lg:grid-cols-4"
        )}
      >
        {shorts.map((url, index) => (
          <ServiceYoutubeThumb
            key={url}
            videoUrl={url}
            alt={`${alt} ${index + 1}`}
            portrait
            playing={activeShort === url}
            onPlay={() => setActiveShort(url)}
            priority={priority && index === 0}
          />
        ))}
      </div>
    );
  }

  if (embeds.length > 0) {
    return (
      <div className={cn("grid gap-6", embeds.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        {embeds.map((url, index) => (
          <ServiceYoutubeEmbed
            key={url}
            videoUrl={url}
            poster={images[index] ?? images[0]}
            alt={`${alt} ${index + 1}`}
            priority={priority && index === 0}
          />
        ))}
      </div>
    );
  }

  if (images.length === 0) return null;

  if (banner) {
    const src = images[0];
    return (
      <>
        <button
          type="button"
          onClick={() => setOpenSrc(src)}
          className="relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden rounded-3xl border border-agency-border sm:aspect-[21/9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black"
          aria-label={`View full image: ${alt}`}
        >
          <FadeImage
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority={priority}
          />
        </button>
        <ImageLightbox src={openSrc} alt={alt} onClose={() => setOpenSrc(null)} />
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-8">
        {images.map((src, index) => (
          <Shot
            key={src}
            src={src}
            href={videoForIndex(videos, index)}
            alt={images.length === 1 ? alt : `${alt} ${index + 1}`}
            priority={priority && index === 0}
            sizes="(max-width: 1280px) 100vw, 1152px"
            onOpen={setOpenSrc}
          />
        ))}
      </div>
      <ImageLightbox
        src={openSrc}
        alt={alt}
        onClose={() => setOpenSrc(null)}
      />
    </>
  );
}

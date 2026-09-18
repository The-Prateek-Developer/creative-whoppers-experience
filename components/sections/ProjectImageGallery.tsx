"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import FadeImage from "@/components/media/FadeImage";
import { easings } from "@/lib/animations";

type Props = {
  images: string[];
  alt: string;
};

export default function ProjectImageGallery({ images, alt }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % images.length
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? null : (current - 1 + images.length) % images.length
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, images.length]);

  if (images.length === 0) return null;

  const activeSrc = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className="mb-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-agency-border transition-colors hover:border-agency-yellow/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agency-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-agency-black"
            aria-label={`View ${alt} photo ${index + 1}`}
          >
            <FadeImage
              src={src}
              alt={`${alt} photo ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 300px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {activeSrc ? (
                <div
                  className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
                  role="dialog"
                  aria-modal="true"
                  aria-label={`${alt} gallery`}
                >
                  <motion.button
                    type="button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: easings.outSnappy }}
                    onClick={() => setActiveIndex(null)}
                    className="absolute inset-0 bg-agency-black/92 backdrop-blur-md"
                    aria-label="Close gallery"
                  />

                  <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: 10 }}
                    transition={{ duration: 0.4, ease: easings.outPremium }}
                    className="relative z-10 flex w-full max-w-6xl flex-col items-center"
                  >
                    <div className="mb-4 flex w-full items-center justify-between gap-3">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-agency-white/55">
                        {(activeIndex ?? 0) + 1} / {images.length}
                      </p>
                      <button
                        type="button"
                        onClick={() => setActiveIndex(null)}
                        className="rounded-full border border-agency-border bg-agency-black/80 p-2.5 text-agency-white transition-colors hover:border-agency-yellow hover:text-agency-yellow"
                        aria-label="Close gallery"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="relative flex w-full items-center gap-3 sm:gap-5">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex((current) =>
                            current === null
                              ? null
                              : (current - 1 + images.length) % images.length
                          )
                        }
                        className="shrink-0 rounded-full border border-agency-border bg-agency-black/80 p-3 text-agency-white transition-colors hover:border-agency-yellow hover:text-agency-yellow"
                        aria-label="Previous image"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </button>

                      <div className="relative min-w-0 flex-1">
                        <FadeImage
                          key={activeSrc}
                          src={activeSrc}
                          alt={`${alt} photo ${(activeIndex ?? 0) + 1}`}
                          width={0}
                          height={0}
                          sizes="96vw"
                          priority
                          className="relative mx-auto h-auto max-h-[78vh] w-full object-contain"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveIndex((current) =>
                            current === null ? null : (current + 1) % images.length
                          )
                        }
                        className="shrink-0 rounded-full border border-agency-border bg-agency-black/80 p-3 text-agency-white transition-colors hover:border-agency-yellow hover:text-agency-yellow"
                        aria-label="Next image"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </>
  );
}

"use client";

import React from "react";
import { Play } from "lucide-react";
import FadeImage from "@/components/media/FadeImage";
import { youtubeEmbedSrc, youtubeThumbnailSrc } from "@/lib/youtube";
import { cn } from "@/lib/utils";

type Props = {
  videoUrl: string;
  alt: string;
  playing?: boolean;
  onPlay?: () => void;
  priority?: boolean;
  portrait?: boolean;
  className?: string;
};

export default function ServiceYoutubeThumb({
  videoUrl,
  alt,
  playing = false,
  onPlay,
  priority,
  portrait = false,
  className,
}: Props) {
  const thumb = youtubeThumbnailSrc(videoUrl);
  const embedSrc = youtubeEmbedSrc(videoUrl, true);

  if (!embedSrc || !thumb) return null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-agency-border bg-agency-black",
        portrait ? "aspect-[9/16]" : "aspect-video",
        className
      )}
    >
      {playing ? (
        <iframe
          src={embedSrc}
          title={alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={onPlay}
          className="group/thumb absolute inset-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-agency-yellow"
          aria-label={`Play ${alt}`}
        >
          <FadeImage
            src={thumb}
            alt={alt}
            fill
            sizes={portrait ? "(max-width: 768px) 50vw, 25vw" : "(max-width: 768px) 100vw, 50vw"}
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
          />
          <span className="absolute inset-0 bg-agency-black/25 transition-colors group-hover/thumb:bg-agency-black/40" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-agency-black/80 text-agency-white shadow-lg ring-2 ring-white/80 transition-transform duration-300 group-hover/thumb:scale-110">
              <Play className="h-6 w-6 fill-current pl-0.5" aria-hidden />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

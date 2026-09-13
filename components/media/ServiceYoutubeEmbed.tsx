import React from "react";
import { youtubeEmbedSrc } from "@/lib/youtube";
import { cn } from "@/lib/utils";

type Props = {
  videoUrl: string;
  poster?: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function ServiceYoutubeEmbed({ videoUrl, alt, className }: Props) {
  const embedSrc = youtubeEmbedSrc(videoUrl);

  if (!embedSrc) return null;

  return (
    <div className={cn("relative aspect-video overflow-hidden bg-agency-black", className)}>
      <iframe
        src={embedSrc}
        title={alt}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

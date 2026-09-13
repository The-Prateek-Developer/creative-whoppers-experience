import React from "react";
import { Play } from "lucide-react";
import FadeImage from "@/components/media/FadeImage";
import ServiceYoutubeEmbed from "@/components/media/ServiceYoutubeEmbed";
import { embeddableVideos } from "@/lib/youtube";
import { cn } from "@/lib/utils";

type Props = {
  images: string[];
  videos?: string[];
  alt: string;
  variant?: "page" | "card";
  priority?: boolean;
};

function videoForIndex(videos: string[] | undefined, index: number) {
  if (!videos?.length) return undefined;
  return videos[index] ?? (videos.length === 1 ? videos[0] : undefined);
}

function Shot({
  src,
  alt,
  href,
  className,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  href?: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const media = (
    <>
      <FadeImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover/shot:scale-105"
        priority={priority}
      />
      {href ? (
        <span className="absolute inset-0 flex items-center justify-center bg-agency-black/25 transition-colors group-hover/shot:bg-agency-black/40">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-agency-black/80 text-agency-white shadow-lg ring-2 ring-white/80">
            <Play className="h-6 w-6 fill-current pl-0.5" aria-hidden />
          </span>
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${alt} on YouTube`}
        className={cn("group/shot relative overflow-hidden bg-agency-black", className)}
      >
        {media}
      </a>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-agency-black", className)}>
      {media}
    </div>
  );
}

export default function ServiceImagePayout({
  images,
  videos,
  alt,
  variant = "page",
  priority,
}: Props) {
  if (images.length === 0) return null;

  const isCard = variant === "card";
  const frame = isCard ? "rounded-none" : "rounded-xl sm:rounded-2xl";
  const gap = isCard ? "gap-1" : "gap-2 sm:gap-3";
  const hrefAt = (index: number) => (isCard ? undefined : videoForIndex(videos, index));
  const embeds = !isCard ? embeddableVideos(videos) : [];

  if (embeds.length > 0) {
    return (
      <div
        className={cn(
          "grid",
          gap,
          embeds.length === 1 ? "grid-cols-1" : "grid-cols-2"
        )}
      >
        {embeds.map((url, index) => (
          <ServiceYoutubeEmbed
            key={url}
            videoUrl={url}
            poster={images[index] ?? images[0]}
            alt={`${alt} ${index + 1}`}
            priority={priority && index === 0}
            className={frame}
          />
        ))}
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <Shot
        src={images[0]}
        alt={alt}
        href={hrefAt(0)}
        priority={priority}
        sizes={isCard ? "(max-width: 768px) 100vw, 640px" : "100vw"}
        className={cn(frame, isCard ? "aspect-[16/10]" : "aspect-[16/9]")}
      />
    );
  }

  if (images.length === 2) {
    return (
      <div className={cn("grid grid-cols-2", gap, isCard ? "aspect-[16/9]" : "")}>
        {images.map((src, index) => (
          <Shot
            key={src}
            src={src}
            href={hrefAt(index)}
            alt={`${alt} ${index + 1}`}
            priority={priority && index === 0}
            sizes={isCard ? "(max-width: 768px) 50vw, 320px" : "(max-width: 768px) 50vw, 50vw"}
            className={cn(frame, isCard ? "h-full" : "aspect-[16/10]")}
          />
        ))}
      </div>
    );
  }

  if (images.length === 3) {
    return (
      <div
        className={cn(
          "grid grid-cols-12 grid-rows-2",
          gap,
          isCard ? "aspect-[16/10]" : "min-h-[22rem] sm:min-h-[28rem]"
        )}
      >
        <Shot
          src={images[0]}
          href={hrefAt(0)}
          alt={`${alt} 1`}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={cn(frame, "col-span-12 sm:col-span-7 sm:row-span-2")}
        />
        <Shot
          src={images[1]}
          href={hrefAt(1)}
          alt={`${alt} 2`}
          sizes="(max-width: 768px) 50vw, 25vw"
          className={cn(frame, "col-span-6 sm:col-span-5")}
        />
        <Shot
          src={images[2]}
          href={hrefAt(2)}
          alt={`${alt} 3`}
          sizes="(max-width: 768px) 50vw, 25vw"
          className={cn(frame, "col-span-6 sm:col-span-5")}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-12 grid-rows-2",
        gap,
        isCard ? "aspect-[16/10]" : "min-h-[24rem] sm:min-h-[32rem] lg:min-h-[36rem]"
      )}
    >
      <Shot
        src={images[0]}
        href={hrefAt(0)}
        alt={`${alt} 1`}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 35vw"
        className={cn(frame, "col-span-12 sm:col-span-4 sm:row-span-2")}
      />
      <Shot
        src={images[1]}
        href={hrefAt(1)}
        alt={`${alt} 2`}
        sizes="(max-width: 768px) 50vw, 40vw"
        className={cn(frame, "col-span-7 sm:col-span-5")}
      />
      <Shot
        src={images[2]}
        href={hrefAt(2)}
        alt={`${alt} 3`}
        sizes="(max-width: 768px) 50vw, 25vw"
        className={cn(frame, "col-span-5 sm:col-span-3")}
      />
      <Shot
        src={images[3]}
        href={hrefAt(3)}
        alt={`${alt} 4`}
        sizes="(max-width: 768px) 100vw, 65vw"
        className={cn(frame, "col-span-12 sm:col-span-8")}
      />
    </div>
  );
}

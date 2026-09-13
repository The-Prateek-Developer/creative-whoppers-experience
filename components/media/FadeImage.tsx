"use client";

import Image, { type ImageProps } from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type FadeImageProps = ImageProps & {
  skeletonClassName?: string;
};

export default function FadeImage({
  className,
  skeletonClassName,
  alt,
  onLoad,
  quality = 90,
  ...props
}: FadeImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <span
        aria-hidden
        className={cn(
          "img-skeleton pointer-events-none absolute inset-0 z-[1] transition-opacity duration-500",
          loaded ? "opacity-0" : "opacity-100",
          skeletonClassName
        )}
      />
      <Image
        alt={alt}
        quality={quality}
        {...props}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        className={cn(
          "transition-opacity duration-[550ms] ease-[cubic-bezier(0.33,1,0.68,1)]",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
      />
    </>
  );
}

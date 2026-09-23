import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

/** Soft yellow brand mark for page heroes (right side, low opacity). */
export default function PageHeroMark({ className }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -right-6 top-1/2 z-0 w-[min(52vw,28rem)] -translate-y-1/2 opacity-[0.22] sm:-right-2 sm:w-[min(48vw,32rem)] lg:right-0 lg:w-[36rem]",
        className
      )}
    >
      <Image
        src="/images/brand/hero-mark.png"
        alt=""
        width={4212}
        height={1307}
        className="h-auto w-full select-none"
        priority={false}
      />
    </div>
  );
}

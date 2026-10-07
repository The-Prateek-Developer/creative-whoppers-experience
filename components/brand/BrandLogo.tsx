import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND_LOGOS } from "@/lib/site";

const SIZE = {
  nav: "h-11 w-[9.5rem] sm:h-12 sm:w-[10.4rem]",
  menu: "h-11 w-[9.5rem] sm:h-12 sm:w-[10.4rem]",
  footer: "h-11 w-[9.5rem] sm:h-12 sm:w-[10.4rem]",
  hero: "aspect-[1000/314] w-full max-w-[36rem]",
} as const;

const SIZES = {
  nav: "192px",
  menu: "192px",
  footer: "192px",
  hero: "(max-width: 640px) 90vw, 576px",
} as const;

type BrandLogoProps = {
  size?: keyof typeof SIZE;
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({
  size = "nav",
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={cn("relative block", SIZE[size], className)}>
      <Image
        src={BRAND_LOGOS.dark}
        alt="Creative Whoppers"
        fill
        sizes={SIZES[size]}
        priority={priority}
        className="hidden object-contain object-left dark:block"
      />
      <Image
        src={BRAND_LOGOS.light}
        alt=""
        fill
        sizes={SIZES[size]}
        priority={priority}
        aria-hidden
        className="object-contain object-left dark:hidden"
      />
    </span>
  );
}

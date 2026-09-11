import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND_LOGOS } from "@/lib/site";

const SIZE = {
  nav: "h-8 w-[6.5rem] sm:h-9 sm:w-[7.2rem]",
  menu: "h-8 w-[6.5rem]",
  footer: "h-10 w-32 sm:h-11 sm:w-[8.8rem]",
  hero: "aspect-[1000/320] w-full max-w-[36rem]",
} as const;

const SIZES = {
  nav: "115px",
  menu: "104px",
  footer: "141px",
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
    <span className={cn("relative inline-block shrink-0", SIZE[size], className)}>
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

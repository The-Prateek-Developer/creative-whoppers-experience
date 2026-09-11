import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND_LOGOS } from "@/lib/site";

const SIZE = {
  nav: "h-11 w-[8.3rem] sm:h-12 sm:w-[9.05rem]",
  menu: "h-11 w-[8.3rem] sm:h-12 sm:w-[9.05rem]",
  footer: "h-11 w-[8.3rem] sm:h-12 sm:w-[9.05rem]",
  hero: "aspect-[1000/320] w-full max-w-[36rem]",
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
    <span className={cn("relative block overflow-hidden", SIZE[size], className)}>
      <span className="absolute -left-[15.62%] -top-[16.27%] h-[124.6%] w-[131.23%]">
        <Image
          src={BRAND_LOGOS.dark}
          alt="Creative Whoppers"
          fill
          sizes={SIZES[size]}
          priority={priority}
          className="hidden object-fill dark:block"
        />
      </span>
      <span className="absolute -left-[15.62%] -top-[18.25%] h-[132.54%] w-[131.23%]">
        <Image
          src={BRAND_LOGOS.light}
          alt=""
          fill
          sizes={SIZES[size]}
          priority={priority}
          aria-hidden
          className="object-fill dark:hidden"
        />
      </span>
    </span>
  );
}

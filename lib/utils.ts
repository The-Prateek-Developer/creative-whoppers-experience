import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Alternate card fill: normal, then a bit darker, then normal… */
export function altCardBg(index: number) {
  return index % 2 === 0 ? "bg-agency-white/[0.05]" : "bg-agency-white/[0.015]";
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export { altCardBg } from "@/lib/card-styles";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

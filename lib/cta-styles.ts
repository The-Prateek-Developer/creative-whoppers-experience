/** Shared pill CTA styles — keep font + size identical across pages. */
export const ctaBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-sm font-bold uppercase tracking-wider transition-colors";

export const ctaPrimary =
  `${ctaBase} bg-agency-yellow text-agency-ink hover:bg-agency-yellow`;

export const ctaSecondary =
  `${ctaBase} border border-agency-border bg-agency-black text-agency-white hover:border-agency-yellow hover:text-agency-yellow`;

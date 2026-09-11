import React from "react";

const iconClass = "h-4 w-4 shrink-0";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V24H.24V8.25zM8.34 8.25h4.33v2.14h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V24h-4.52v-7.69c0-1.83-.03-4.19-2.55-4.19-2.55 0-2.94 1.99-2.94 4.05V24H8.34V8.25z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.09 5.66 21.24 10.44 22v-7.02H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.09 22 12.07z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.13-2.14C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.37.46A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.13 2.14c1.87.46 9.37.46 9.37.46s7.5 0 9.37-.46a3.02 3.02 0 0 0 2.13-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.52V8.48L15.84 12l-6.09 3.52z" />
    </svg>
  );
}

const ICONS: Record<string, () => React.JSX.Element> = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  Facebook: FacebookIcon,
  YouTube: YouTubeIcon,
};

export default function SocialIcon({ name }: { name: string }) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon />;
}

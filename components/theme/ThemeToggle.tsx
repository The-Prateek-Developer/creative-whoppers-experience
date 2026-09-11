"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { applyTheme, readStoredTheme, type Theme } from "@/lib/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const sync = () => setTheme(readStoredTheme());
    sync();

    const onTheme = (event: Event) => {
      const next = (event as CustomEvent<Theme>).detail;
      if (next === "dark" || next === "light") setTheme(next);
    };

    window.addEventListener("cw-theme", onTheme);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("cw-theme", onTheme);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-agency-border bg-agency-surface text-agency-white transition-colors hover:border-agency-yellow hover:text-agency-yellow"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

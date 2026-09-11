export const THEME_STORAGE_KEY = "cw-theme";

export type Theme = "dark" | "light";

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const isDark = theme === "dark";
  root.classList.toggle("dark", isDark);
  root.classList.toggle("light", !isDark);
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent("cw-theme", { detail: theme }));
}

export function readStoredTheme(): Theme {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

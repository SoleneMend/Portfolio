import { useState } from "react";
import type { Lang, Theme } from "./data/type";

function read(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function initialLang(): Lang {
  const saved = read("lang");
  if (saved === "fr" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
}

function initialTheme(): Theme {
  const saved = read("theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export default function usePreferences() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<Theme>(initialTheme);

  document.documentElement.lang = lang;
  document.documentElement.dataset.theme = theme;

  const toggleLang = () => {
    const next = lang === "fr" ? "en" : "fr";
    setLang(next);
    write("lang", next);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    write("theme", next);
  };

  return { lang, theme, toggleLang, toggleTheme };
}

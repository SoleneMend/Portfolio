import type { Lang, Theme, Ui } from "../data/type";

type Props = {
  ui: Ui;
  lang: Lang;
  theme: Theme;
  onToggleLang: () => void;
  onToggleTheme: () => void;
};

export default function Controls({
  ui,
  lang,
  theme,
  onToggleLang,
  onToggleTheme,
}: Props) {
  const nextLang = lang === "fr" ? "en" : "fr";

  return (
    <div className="controls">
      <button
        type="button"
        className="icon-btn"
        onClick={onToggleLang}
        lang={nextLang}
        aria-label={ui.switchLang}
      >
        {nextLang.toUpperCase()}
      </button>
      <button
        type="button"
        className="icon-btn"
        onClick={onToggleTheme}
        aria-label={theme === "dark" ? ui.toLight : ui.toDark}
      >
        <span key={theme} className="theme-icon" aria-hidden="true">
          {theme === "dark" ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <title>Soleil</title>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <title>Lune</title>
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}

import type { Lang, Theme, Ui } from "../data/type";
import Controls from "./Controls";

type Props = {
  ui: Ui;
  name: string;
  cvUrl: string;
  lang: Lang;
  theme: Theme;
  onToggleLang: () => void;
  onToggleTheme: () => void;
};

export default function Header({
  ui,
  name,
  cvUrl,
  lang,
  theme,
  onToggleLang,
  onToggleTheme,
}: Props) {
  return (
    <header className="top">
      <a className="logo" href="#top">
        {name}
      </a>
      <div className="top-right">
        <nav aria-label={ui.navLabel}>
          <a href="#projets">{ui.projects}</a>
          <a href="#apropos">{ui.about}</a>
          <a href="#contact">{ui.contact}</a>
          <a className="btn" href={cvUrl}>
            {ui.downloadCv}
          </a>
        </nav>
        <Controls
          ui={ui}
          lang={lang}
          theme={theme}
          onToggleLang={onToggleLang}
          onToggleTheme={onToggleTheme}
        />
      </div>
    </header>
  );
}

import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Now from "./components/Now";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import { content } from "./data/content";
import usePreferences from "./usePreferences";
import useReveal from "./useReveal";

export default function App() {
  const { lang, theme, toggleLang, toggleTheme } = usePreferences();
  const { ui, profile, projects, now, about, stack } = content[lang];

  useReveal();
  useEffect(() => {
    document.title = ui.pageTitle;
  }, [ui.pageTitle]);

  return (
    <main id="top">
      <Header
        ui={ui}
        name={profile.name}
        cvUrl={profile.cvUrl}
        lang={lang}
        theme={theme}
        onToggleLang={toggleLang}
        onToggleTheme={toggleTheme}
      />
      <Hero ui={ui} profile={profile} />
      <Projects ui={ui} projects={projects} />
      <Now ui={ui} now={now} />
      <About ui={ui} about={about} />
      <Stack ui={ui} stack={stack} />
      <Contact ui={ui} profile={profile} />
    </main>
  );
}

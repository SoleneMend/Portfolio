import type { Profile, Ui } from "../data/type";

export default function Hero({ ui, profile }: { ui: Ui; profile: Profile }) {
  return (
    <section className="hero">
      <p className="status">
        <span className="dot" aria-hidden="true" />
        {profile.status}
      </p>
      <h1>{profile.headline}</h1>
      <p className="lead">
        {profile.title}. {profile.intro}
      </p>
      <div className="cta">
        <a className="btn p" href="#projets">
          {ui.seeProjects}
        </a>
        <a className="btn" href="#contact">
          {ui.contactMe}
        </a>
      </div>
    </section>
  );
}

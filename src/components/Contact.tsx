import type { Profile, Ui } from "../data/type";

export default function Contact({ ui, profile }: { ui: Ui; profile: Profile }) {
  return (
    <section className="contact reveal" id="contact">
      <h2>{ui.workTogether}</h2>
      <a className="mail" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="cta">
        <a
          className="btn p"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="btn"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a className="btn" href={profile.cvUrl}>
          {ui.cvPdf}
        </a>
      </div>
    </section>
  );
}

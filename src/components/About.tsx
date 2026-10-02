import type { About as AboutContent, Ui } from "../data/type";

export default function About({ ui, about }: { ui: Ui; about: AboutContent }) {
  return (
    <section id="apropos" className="reveal">
      <h2>{ui.about}</h2>
      <div className="two">
        <p>{about.text}</p>
        <div>
          <h3 className="sub">{ui.wants}</h3>
          <ul>
            {about.wants.map((want) => (
              <li key={want}>{want}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

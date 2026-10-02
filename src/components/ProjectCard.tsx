import { type CSSProperties, Fragment, useState } from "react";
import type { Project, Ui } from "../data/type";

type Props = { ui: Ui; project: Project; index: number };

export default function ProjectCard({ ui, project, index }: Props) {
  const { name, problem, role, architecture, tags, image, demo, code } =
    project;
  // Si l'image est absente ou illisible, on revient au visuel par défaut
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="card reveal" style={{ "--i": index } as CSSProperties}>
      {image && !imageFailed ? (
        <img
          className="shot-img"
          src={image}
          alt={`${ui.screenshot} ${name}`}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="shot" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      )}
      <h3>{name}</h3>
      <p>{problem}</p>
      <p className="role">{role}</p>
      <div
        className="flow"
        role="img"
        aria-label={`${ui.architecture} ${architecture.join(", ")}`}
      >
        {architecture.map((step, i) => (
          <Fragment key={step}>
            {i > 0 && <em aria-hidden="true">›</em>}
            <span>{step}</span>
          </Fragment>
        ))}
      </div>
      <ul className="chips">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="links">
        {demo && (
          <a href={demo} target="_blank" rel="noreferrer">
            {ui.demo}
          </a>
        )}
        <a href={code} target="_blank" rel="noreferrer">
          {ui.code}
        </a>
      </div>
    </article>
  );
}

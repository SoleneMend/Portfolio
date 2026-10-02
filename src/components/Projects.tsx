import type { Project, Ui } from "../data/type";
import ProjectCard from "./ProjectCard";

export default function Projects({
  ui,
  projects,
}: {
  ui: Ui;
  projects: Project[];
}) {
  return (
    <section id="projets">
      <h2>{ui.projects}</h2>
      <div className="grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} ui={ui} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

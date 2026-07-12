import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software, infrastructure, and automation projects by Suvir Potdar.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <header className="page-hero dense-page-hero section-shell projects-index-hero">
        <div>
          <p className="eyebrow">Projects / 2023—Present</p>
          <h1>Work that connects code to operation.</h1>
        </div>
        <div className="page-lead">
          <p>
            A curated set of projects that taught me about interaction design,
            architecture, deployment, security, integration, and maintenance.
          </p>
          <p>No vanity metrics, automated repository feeds, or unfinished filler.</p>
        </div>
      </header>

      <section className="section-shell dense-project-index" aria-label="Project case studies">
        <div className="project-index-head" aria-hidden="true">
          <span>Index</span><span>Project</span><span>System</span><span>Status</span>
        </div>
        {projects.map((project) => (
          <article key={project.slug}>
            <div className="project-number">{project.index}</div>
            <div className="dense-project-main">
              <p className="project-meta">{project.category} · {project.year}</p>
              <h2><Link href={`/projects/${project.slug}`}>{project.title}</Link></h2>
              <p>{project.description}</p>
            </div>
            <ul className="dense-project-tech" aria-label={`${project.title} technologies`}>
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <div className="dense-project-status">
              <span>{project.status}</span>
              <Link href={`/projects/${project.slug}`} aria-label={`Read ${project.title} case study`}>Case study ↗</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

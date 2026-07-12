import type { Metadata } from "next";
import { coursework, experiences, interests, profile, skillGroups } from "../content";

export const metadata: Metadata = {
  title: "About",
  description: "Background, experience, education, and working approach of Suvir Potdar.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <header className="page-hero dense-page-hero section-shell about-page-hero">
        <div>
          <p className="eyebrow">About / Student engineer</p>
          <h1>Curious about the entire system.</h1>
        </div>
        <div className="page-lead">
          <p>
            I’m a student developer from South Brunswick, New Jersey, graduating
            in 2027. I’m most interested in the work where software,
            infrastructure, security, and AI stop being separate subjects.
          </p>
          <p>
            Writing code is one part of engineering. A useful system also needs
            deliberate architecture, secure access, reliable deployment,
            monitoring, documentation, and ongoing maintenance.
          </p>
        </div>
      </header>

      <div className="section-shell inner-page-grid">
        <aside className="page-rail" aria-label="About page sections">
          <a href="#experience">01 Experience</a>
          <a href="#education">02 Education</a>
          <a href="#skills">03 Skills</a>
          <a href="#ai">04 AI workflow</a>
          <a href="#outside">05 Outside</a>
        </aside>

        <div className="inner-page-content">
          <section id="experience" className="dense-content-section" aria-labelledby="experience-title">
            <div className="dense-section-label"><span>01</span><p>Experience</p></div>
            <h2 id="experience-title">Learning through sustained ownership.</h2>
            <div className="dense-timeline">
              {experiences.map((experience) => (
                <article key={`${experience.period}-${experience.title}`}>
                  <div className="timeline-date">{experience.period}</div>
                  <div>
                    <p className="project-meta">{experience.context}</p>
                    <h3>{experience.title}</h3>
                    <p>{experience.summary}</p>
                    <ul>{experience.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="education" className="dense-content-section" aria-labelledby="education-title">
            <div className="dense-section-label"><span>02</span><p>Education</p></div>
            <div className="split-content-head">
              <div>
                <p className="project-meta">South Brunswick High School · {profile.location}</p>
                <h2 id="education-title">High School Diploma, expected June 2027.</h2>
              </div>
              <p>Advanced study across mathematics, physics, computer science, statistics, and written communication.</p>
            </div>
            <ul className="dense-coursework">
              {coursework.map((course, index) => <li key={course}><span>0{index + 1}</span>{course}</li>)}
            </ul>
          </section>

          <section id="skills" className="dense-content-section" aria-labelledby="skills-title">
            <div className="dense-section-label"><span>03</span><p>Skills</p></div>
            <h2 id="skills-title">Capability over arbitrary percentages.</h2>
            <div className="dense-skills-grid">
              {skillGroups.map((group) => (
                <article key={group.label}>
                  <h3>{group.label}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          <section id="ai" className="dense-content-section" aria-labelledby="ai-title">
            <div className="dense-section-label"><span>04</span><p>AI-assisted engineering</p></div>
            <div className="split-content-head">
              <h2 id="ai-title">Use the tool. Understand the result.</h2>
              <div>
                <p>I use AI-assisted development to explore unfamiliar codebases, compare approaches, automate repetitive work, and accelerate debugging.</p>
                <p>Generated code is a starting point. I review changes, test behavior, inspect failures, and refine the result until I understand what is running and why.</p>
              </div>
            </div>
          </section>

          <section id="outside" className="dense-content-section" aria-labelledby="outside-title">
            <div className="dense-section-label"><span>05</span><p>Outside the terminal</p></div>
            <div className="split-content-head">
              <h2 id="outside-title">Systems, performance, and strategy.</h2>
              <div>
                <p>Outside software, I’m interested in aerospace, physics, and competitive sports—the same mix of complex systems, performance, and continuous improvement that draws me to engineering.</p>
                <p className="interest-line">{interests.join(" · ")}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

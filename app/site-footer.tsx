import Link from "next/link";
import { profile } from "./content";

export function SiteFooter() {
  return (
    <footer id="contact" className="global-footer">
      <div className="footer-contact section-shell">
        <div>
          <p className="eyebrow">Available for the right opportunity</p>
          <h2>Let’s build something useful.</h2>
        </div>
        <div className="footer-contact-copy">
          <p>
            I’m interested in internships, technical mentorship, collaborative
            projects, and teams where I can contribute while continuing to grow.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <span aria-hidden="true">↗</span>
          </a>
          <nav className="social-links" aria-label="External profiles">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <Link href="/resume">Résumé ↗</Link>
          </nav>
        </div>
      </div>
      <div className="site-footer section-shell">
        <p>© {new Date().getFullYear()} Suvir Potdar</p>
        <p>Designed and operated by Suvir.</p>
        <p>React · TypeScript · GitHub Pages</p>
      </div>
    </footer>
  );
}

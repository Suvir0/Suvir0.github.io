import type { Metadata } from "next";
import Link from "next/link";
import { capabilityGroups } from "../content";

export const metadata: Metadata = {
  title: "Engineering",
  description: "How Suvir Potdar builds, deploys, secures, and operates software systems.",
};

export default function EngineeringPage() {
  return (
    <main id="main-content">
      <header className="page-hero dense-page-hero section-shell engineering-page-hero">
        <div>
          <p className="eyebrow">Engineering / Infrastructure practice</p>
          <h1>How I build and operate systems.</h1>
        </div>
        <div className="page-lead">
          <p>
            My favorite projects cross traditional boundaries. I want to write
            the application and understand how it is deployed, authenticated,
            observed, updated, and protected.
          </p>
          <p>
            A self-hosted infrastructure lab gives me regular practice with
            deployment, access control, monitoring, maintenance, and recovery.
          </p>
        </div>
      </header>

      <div className="section-shell inner-page-grid">
        <aside className="page-rail" aria-label="Engineering page sections">
          <a href="#system">01 System</a>
          <a href="#capabilities">02 Capabilities</a>
          <a href="#lab">03 Lab</a>
          <a href="#principles">04 Principles</a>
        </aside>

        <div className="inner-page-content">
          <section id="system" className="dense-content-section" aria-labelledby="system-title">
            <div className="dense-section-label"><span>01</span><p>Conceptual system</p></div>
            <div className="split-content-head">
              <h2 id="system-title">A simplified path from request to operation.</h2>
              <p>This diagram shows the general model I use for learning. It does not represent my live network or private topology.</p>
            </div>
            <div className="dense-pipeline" aria-label="Simplified conceptual infrastructure diagram">
              {[
                ["Request", "Users"], ["Route", "DNS + TLS"], ["Access", "Private network"],
                ["Control", "Identity / SSO"], ["Runtime", "Containers"], ["Operate", "Metrics + storage"],
              ].map(([label, value], index) => (
                <div key={label}><span>{String(index + 1).padStart(2, "0")}</span><small>{label}</small><strong>{value}</strong></div>
              ))}
            </div>
          </section>

          <section id="capabilities" className="dense-content-section" aria-labelledby="capabilities-title">
            <div className="dense-section-label"><span>02</span><p>Capabilities</p></div>
            <h2 id="capabilities-title">Build. Deploy. Secure. Operate.</h2>
            <div className="capability-matrix">
              {capabilityGroups.map((group, index) => (
                <article key={group.label}>
                  <div><span>0{index + 1}</span><h3>{group.label}</h3></div>
                  <p>{group.summary}</p>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          <section id="lab" className="dense-content-section" aria-labelledby="lab-title">
            <div className="dense-section-label"><span>03</span><p>Infrastructure Lab</p></div>
            <div className="split-content-head">
              <h2 id="lab-title">Personal infrastructure lab.</h2>
              <div>
                <p>The environment includes virtualized and containerized workloads, centralized identity concepts, private networking, reverse proxying, DNS management, monitoring, and cloud-connected services.</p>
                <p>Running the lab requires ongoing planning, diagnosis, updates, documentation, and recovery work.</p>
                <Link className="text-action" href="/projects/infrastructure-lab">Read the case study <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <dl className="lab-responsibilities">
              <div><dt>Platform</dt><dd>Linux · Proxmox · Docker · Virtual machines · Containers</dd></div>
              <div><dt>Network</dt><dd>DNS · TLS · Reverse proxies · Private access · Cloudflare</dd></div>
              <div><dt>Identity</dt><dd>Authentik · OAuth 2.0 · OpenID Connect · Access control</dd></div>
              <div><dt>Operation</dt><dd>Grafana · Metrics · Alerts · Troubleshooting · Documentation</dd></div>
            </dl>
          </section>

          <section id="principles" className="dense-content-section" aria-labelledby="principles-title">
            <div className="dense-section-label"><span>04</span><p>Operating principles</p></div>
            <h2 id="principles-title">Make the system understandable.</h2>
            <ol className="principles-list">
              <li><span>01</span><div><h3>Minimize unnecessary exposure.</h3><p>Prefer private access, deliberate identity boundaries, and narrowly scoped administration paths.</p></div></li>
              <li><span>02</span><div><h3>Observe before guessing.</h3><p>Use logs, metrics, health signals, and dependency checks to narrow a failure before changing configuration.</p></div></li>
              <li><span>03</span><div><h3>Document for the next incident.</h3><p>Record architecture and operational decisions so future maintenance starts with context.</p></div></li>
              <li><span>04</span><div><h3>Plan for recovery.</h3><p>Include backups, rollback paths, and reproducible deployment in the original system design.</p></div></li>
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}

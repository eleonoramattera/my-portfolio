import { profile, links, skillGroups, projects, training, work } from "../data/content";
import SectionTitle from "./SectionTitle";

export function About() {
  const behance = links.find((l) => l.id === "behance");
  return (
    <section id="chi-sono" className="section hero" aria-labelledby="titolo-chi-sono">
      <h1 id="titolo-chi-sono" className="hero-name">
        {profile.firstName}
        <br />
        {profile.lastName}
      </h1>
      <p className="hero-roles">{profile.roles.join(" e ")}</p>
      <div className="hero-bio">
        {profile.bio.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="hero-actions">
        <a className="button" href={profile.cv.url} target="_blank" rel="noreferrer">
          {profile.cv.label}
        </a>
        <a className="button button-ghost" href={behance.url} target="_blank" rel="noreferrer">
          Lavori grafici su Behance
        </a>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="competenze" className="section" aria-labelledby="titolo-competenze">
      <SectionTitle id="titolo-competenze">Competenze</SectionTitle>
      <div className="panel skills">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.name} className="tile">
                  <span className="tile-icon">
                    <img src={item.icon} alt="" />
                  </span>
                  <span className="tile-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="progetti" className="section" aria-labelledby="titolo-progetti">
      <SectionTitle id="titolo-progetti">Progetti</SectionTitle>
      {projects.map((p) => (
        <article className="panel project" key={p.title}>
          <img className="project-shot" src={p.image} alt={p.imageAlt} />
          <div className="project-body">
            <p className="project-context">{p.context}</p>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="chips">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <a className="button" href={p.repo} target="_blank" rel="noreferrer">
              Vedi il codice su GitHub
            </a>
          </div>
        </article>
      ))}
    </section>
  );
}

/* Gli studi e il lavoro sono in ordine di tempo: per questo usano una linea del tempo. */
function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={`${item.title}-${item.period}`}>
          <p className="timeline-period">{item.period}</p>
          <h3>{item.title}</h3>
          <p className="timeline-place">{item.place}</p>
          <p>{item.text}</p>
          {item.tags.length > 0 && (
            <ul className="chips">
              {item.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export function Training() {
  return (
    <section id="formazione" className="section" aria-labelledby="titolo-formazione">
      <SectionTitle id="titolo-formazione">Formazione</SectionTitle>
      <div className="panel">
        <Timeline items={training} />
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="lavoro" className="section" aria-labelledby="titolo-lavoro">
      <SectionTitle id="titolo-lavoro">Esperienza lavorativa</SectionTitle>
      <div className="panel">
        <Timeline items={work} />
      </div>
    </section>
  );
}

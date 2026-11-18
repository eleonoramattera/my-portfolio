import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa";
import margherita from "../assets/margherita.svg";
import { sections, links } from "../data/content";

const icons = { github: FaGithub, linkedin: FaLinkedinIn, behance: FaBehance };

export default function Nav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav">
      <a className="nav-logo" href="#chi-sono" aria-label="Torna all’inizio">
        <img className="daisy" src={margherita} alt="" />
      </a>
      <nav className="nav-links" aria-label="Sezioni">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? "true" : undefined}>
            {s.label}
          </a>
        ))}
      </nav>
      <div className="nav-social">
        {links.map((l) => {
          const Icon = icons[l.id];
          return (
            <a key={l.id} href={l.url} target="_blank" rel="noreferrer" aria-label={l.label} title={l.label}>
              {Icon ? <Icon /> : l.label}
            </a>
          );
        })}
      </div>
    </header>
  );
}

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import margherita from "../assets/margherita.svg";
import { profile } from "../data/content";

/* Pagina iniziale: nome + margherita che gira, poi escono verso l’alto e appare il sito. */
export default function Splash({ onDone }) {
  const wrap = useRef(null);
  const daisy = useRef(null);
  const name = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tl = gsap.timeline({ onComplete: onDone });

    tl.from(name.current, { opacity: 0, y: 24, duration: 0.8, ease: "power2.out" });
    if (!reduce) tl.to(daisy.current, { rotation: 360, duration: 2, ease: "power1.inOut" }, 0);
    tl.to({}, { duration: reduce ? 0.6 : 0.8 });
    tl.to([name.current, daisy.current], { opacity: 0, y: -90, duration: 0.9, ease: "power1.in" });
    tl.to(wrap.current, { opacity: 0, duration: 0.6, ease: "power1.out" }, "-=0.3");

    return () => tl.kill();
  }, [onDone]);

  return (
    <div className="splash" ref={wrap} aria-hidden="true">
      <div className="splash-inner">
        <span className="splash-name" ref={name}>
          {profile.name}
        </span>
        <img className="splash-daisy" ref={daisy} src={margherita} alt="" />
      </div>
    </div>
  );
}

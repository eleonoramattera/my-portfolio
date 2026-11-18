import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import margherita from "../assets/margherita.svg";

/* Titolo di sezione: la prima volta che entra nello schermo la margherita salta
   lungo il titolo, lo fa comparire e poi sparisce. Con "riduci animazioni" il titolo è sempre visibile. */
export default function SectionTitle({ id, children }) {
  const wrap = useRef(null);
  const text = useRef(null);
  const daisy = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const hidden = "inset(-12% 100% -12% 0%)";
    const shown = "inset(-12% 0% -12% 0%)";
    gsap.set(text.current, { clipPath: hidden });

    let tl;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const size = daisy.current.offsetWidth;
        const travel = Math.max(wrap.current.offsetWidth - size, 0);

        tl = gsap.timeline();
        tl.set(daisy.current, { x: 0, y: -50, opacity: 0, rotation: 0 });
        tl.to(daisy.current, { opacity: 1, y: 0, duration: 0.25, ease: "power1.out" });
        // la margherita attraversa il titolo con due salti e lo scopre mentre passa
        tl.to(daisy.current, { x: travel, rotation: 360, duration: 1.1, ease: "none" }, ">");
        tl.to(daisy.current, { y: -34, duration: 0.275, yoyo: true, repeat: 3, ease: "power2.out" }, "<");
        tl.to(text.current, { clipPath: shown, duration: 1.1, ease: "none" }, "<");
        // poi salta via
        tl.to(daisy.current, { y: -70, opacity: 0, rotation: "+=180", duration: 0.45, ease: "power1.in" });
      },
      { rootMargin: "-15% 0px -15% 0px" }
    );
    observer.observe(wrap.current);

    return () => {
      observer.disconnect();
      if (tl) tl.kill();
    };
  }, []);

  return (
    <h2 id={id} className="section-title">
      <span className="title-wrap" ref={wrap}>
        <span className="title-text" ref={text}>
          {children}
        </span>
        <img className="title-daisy" ref={daisy} src={margherita} alt="" aria-hidden="true" />
      </span>
    </h2>
  );
}

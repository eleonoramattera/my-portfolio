import { useEffect } from "react";

/* Scrive due variabili CSS sulla pagina:
   --scroll    quanti pixel hai scrollato (usata per far scorrere piano gli sfondi)
   --progress  da 0 (inizio pagina) a 1 (fine pagina), usata per muovere le onde
   --spin    gradi di rotazione della margherita: scendendo gira verso destra,
             risalendo gira verso sinistra. */
export default function useScrollMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      root.style.setProperty("--scroll", `${y}px`);
      root.style.setProperty("--progress", String(Math.min(y / max, 1)));
      if (!reduce) root.style.setProperty("--spin", `${y * 0.3}deg`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}

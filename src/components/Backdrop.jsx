import { backgrounds } from "../data/content";

/* Immagini sfocate fisse sullo sfondo: scorrono piano mentre si scrolla. */
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      {backgrounds.map((file, i) => (
        <img
          key={file}
          className={`backdrop-img backdrop-img-${(i % 3) + 1}`}
          src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/backgrounds/${file}`}
          alt=""
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      ))}
      <div className="backdrop-veil" />
    </div>
  );
}

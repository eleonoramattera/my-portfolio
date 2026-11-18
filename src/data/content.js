import photoshop from "../assets/photoshop.svg";
import illustrator from "../assets/illustrator.svg";
import indesign from "../assets/indesign.svg";
import lightroom from "../assets/lightroom.svg";
import html from "../assets/html5.svg";
import css from "../assets/css3.svg";
import bootstrap from "../assets/bootstrap.svg";
import sass from "../assets/sass.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import node from "../assets/nodejs.svg";
import java from "../assets/java.svg";
import spring from "../assets/spring.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import postgresql from "../assets/postgreesql.svg";
import jwt from "../assets/jwt.svg";
import npm from "../assets/npm.svg";
import discord from "../assets/discord.svg";
import postman from "../assets/postman.svg";
import eclipse from "../assets/eclipse.svg";
import vscode from "../assets/visualstudiocode.svg";
import wordpress from "../assets/wordpress.svg";
import woocommerce from "../assets/woocommerce.svg";
import appMeteo from "../assets/appMeteo.png";

/* ============================================================
   TUTTI I CONTENUTI DEL SITO SONO QUI.
   Modifica testi, link e liste senza toccare i componenti.
   ============================================================ */

export const profile = {
  name: "Eleonora Mattera",
  firstName: "Eleonora",
  lastName: "Mattera",
  roles: ["Junior Full Stack Developer", "Graphic Designer"],
  bio: [
    "La mia passione unisce l’arte della grafica e la logica della programmazione: mi permette di creare esperienze coinvolgenti e di sviluppare soluzioni innovative.",
    "Il background in grafica mi dà un occhio per i dettagli estetici, mentre la mente analitica affronta le sfide di programmazione con precisione. Le mie competenze vanno dalla progettazione di interfacce accattivanti alla scrittura di codice efficiente.",
    "Cerco continuamente occasioni per crescere come professionista e per mettere in pratica la mia creatività.",
  ],
  cv: { label: "Visualizza il curriculum", url: "https://drive.google.com/drive/folders/1KptnJsz4LIun5RTDZCF8dbazZuvBWt-1" },
};

/* Nessun telefono, email o indirizzo: solo profili pubblici. Togli o aggiungi righe a piacere. */
export const links = [
  { id: "github", label: "GitHub", url: "https://github.com/eleonoramattera" },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/eleonora-mattera-655078218/" },
  { id: "behance", label: "Behance", url: "https://www.behance.net/eleonoramattera" },
];

/* Immagini sfocate dello sfondo.
   Metti i tuoi disegni/lavori grafici in public/backgrounds/ (jpg, png, svg o webp)
   e scrivi qui i nomi dei file. Funzionano meglio immagini larghe e colorate. */
export const backgrounds = ["bg-1.svg", "bg-2.svg", "bg-3.svg"];

export const sections = [
  { id: "chi-sono", label: "Chi sono" },
  { id: "competenze", label: "Competenze" },
  { id: "progetti", label: "Progetti" },
  { id: "formazione", label: "Formazione" },
  { id: "lavoro", label: "Esperienza lavorativa" },
];

export const skillGroups = [
  {
    title: "Front end",
    items: [
      { name: "HTML5", icon: html },
      { name: "CSS3", icon: css },
      { name: "Bootstrap", icon: bootstrap },
      { name: "Sass", icon: sass },
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript", icon: typescript },
      { name: "React", icon: react },
      { name: "Redux", icon: redux },
    ],
  },
  {
    title: "Back end",
    items: [
      { name: "Java", icon: java },
      { name: "Spring", icon: spring },
      { name: "JWT", icon: jwt },
      { name: "PostgreSQL", icon: postgresql },
      { name: "Node.js", icon: node },
      { name: "npm", icon: npm },
    ],
  },
  {
    title: "Grafica",
    items: [
      { name: "Photoshop", icon: photoshop },
      { name: "Illustrator", icon: illustrator },
      { name: "InDesign", icon: indesign },
      { name: "Lightroom", icon: lightroom },
    ],
  },
  {
    title: "Strumenti",
    items: [
      { name: "GitHub", icon: github },
      { name: "Git", icon: git },
      { name: "VS Code", icon: vscode },
      { name: "Eclipse", icon: eclipse },
      { name: "Postman", icon: postman },
      { name: "Discord", icon: discord },
      { name: "WordPress", icon: wordpress },
      { name: "WooCommerce", icon: woocommerce },
    ],
  },
];

export const projects = [
  {
    title: "App Meteo",
    context: "Build Week con Epicode",
    image: appMeteo,
    imageAlt: "Schermata dell’app meteo",
    tech: ["React", "React Hooks", "React Router"],
    description:
      "Applicazione meteorologica che permette di cercare una città e vedere le previsioni, temperature comprese, fino a cinque giorni.",
    repo: "https://github.com/eleonoramattera/u3-w2-d5-progetto-settimanale",
  },
  /* Per aggiungere un progetto, copia il blocco qui sopra e cambia i valori. */
];

export const training = [
  {
    title: "Full Stack Developer",
    place: "Epicode",
    period: "2022–2023",
    text:
      "Corso intensivo full stack che unisce teoria e pratica: ho applicato quello che imparavo in progetti reali, da sola e in gruppo, su tutti gli aspetti dello sviluppo web.",
    tags: ["Bootstrap", "Sass", "JavaScript", "TypeScript", "React", "Redux", "Java", "Spring", "JWT", "JUnit", "PostgreSQL"],
  },
  {
    title: "Master in Grafica Editoriale, Web Design & eCommerce",
    place: "Pc Academy",
    period: "2020–2021",
    text:
      "Corso multidisciplinare che mette insieme grafica e web design in un’unica formazione, con i due campi creativi che si completano a vicenda.",
    tags: ["HTML5", "CSS3", "WordPress", "WooCommerce", "Divi", "Photoshop", "InDesign", "Illustrator", "Lightroom"],
  },
  {
    title: "Laurea triennale in Culture Digitali e della Comunicazione",
    place: "Università degli Studi di Napoli Federico II",
    period: "2016–2020",
    text:
      "Un punto di partenza solido per il mondo digitale: comunicazione digitale, marketing online, gestione dei contenuti web e basi di informatica e web design. Gli esami più significativi: “Elementi di informatica e web” (programmazione, linguaggi di markup, networking) e “Web design e nuovi media”.",
    tags: [],
  },
];

/* ESPERIENZA LAVORATIVA: compila tu questa lista.
   Ogni blocco è un lavoro; il più recente va per primo. */
export const work = [
  {
    title: "Ruolo",
    place: "Azienda",
    period: "Periodo",
    text: "Descrivi qui cosa fai e i risultati ottenuti.",
    tags: [],
  },
];

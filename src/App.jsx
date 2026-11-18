import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Splash from "./components/Splash";
import Backdrop from "./components/Backdrop";
import Waves from "./components/Waves";
import Nav from "./components/Nav";
import { About, Skills, Projects, Training, Work } from "./components/Sections";
import useScrollMotion from "./components/useScrollMotion";

function App() {
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);

  useScrollMotion();

  // Durante la pagina iniziale lo scroll resta bloccato.
  useEffect(() => {
    document.body.classList.toggle("locked", !ready);
  }, [ready]);

  return (
    <>
      <Backdrop />
      <Waves />
      {!ready && <Splash onDone={onDone} />}
      <div className={`site${ready ? " site-in" : ""}`}>
        <Nav />
        <main>
          <About />
          <Skills />
          <Projects />
          <Training />
          <Work />
        </main>
        <footer className="footer">
          <div className="footer-inner">© {new Date().getFullYear()} Eleonora Mattera</div>
        </footer>
      </div>
    </>
  );
}

export default App;

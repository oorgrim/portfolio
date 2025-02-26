import { useState } from "react";
import Desktop from "./components/Desktop";
import Terminal from "./components/Terminal";
import Projects from "./components/ProjectsWindow";
import Intro from "./components/Intro";

function App() {
  const [isTerminalOpen, setTerminalOpen] = useState(false);
  const [isProjectsOpen, setProjectsOpen] = useState(false);
  const [started, setStarted] = useState(false);

  return (
    <div className="app">
      {!started ? (
        <Intro onStart={() => setStarted(true)} />
      ) : (
        <>
          <Desktop 
            openTerminal={() => setTerminalOpen(true)} 
            openProjects={() => setProjectsOpen(true)} 
          />
          {isTerminalOpen && <Terminal closeTerminal={() => setTerminalOpen(false)} />}
          {isProjectsOpen && <Projects closeProjects={() => setProjectsOpen(false)} />}
        </>
      )}
    </div>
  );
}

export default App;
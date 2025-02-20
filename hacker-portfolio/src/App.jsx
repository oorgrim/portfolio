import { useState } from "react";
import Desktop from "./components/Desktop";
import Terminal from "./components/Terminal";
import Projects from "./components/Projects";

function App() {
  const [isTerminalOpen, setTerminalOpen] = useState(false);
  const [isProjectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="app">
      <Desktop 
        openTerminal={() => setTerminalOpen(true)} 
        openProjects={() => setProjectsOpen(true)} 
      />
      {isTerminalOpen && <Terminal closeTerminal={() => setTerminalOpen(false)} />}
      {isProjectsOpen && <Projects closeProjects={() => setProjectsOpen(false)} />}
    </div>
  );
}

export default App;

import { NavBar } from "@/components/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

function App() {
  return (
    <Router>
      <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white w-screen h-screen">
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

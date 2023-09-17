import { NavBar } from "@/components/navBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Contact } from "./Contact";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/projects' Component={Projects} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;

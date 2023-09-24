import { NavBar } from "@/components/navBar";
import Router from "./pages/router";

function App() {
  return (
      <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white w-screen h-screen">
        <NavBar />
        <Router />
      </div>
  );
}

export default App;

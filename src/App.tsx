import { NavBar } from "@/components/navBar";
import Router from "./pages/router";
import { Toaster } from "@/components/ui/toaster"


function App() {
  return (
      <div className="bg-white dark:bg-black text-slate-900 dark:text-white w-screen h-screen">
        <NavBar />
        <Router />
        <Toaster />
      </div>
  );
}

export default App;

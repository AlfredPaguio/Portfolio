import { NavBar } from "@/components/navBar";
import Router from "./pages/router";
import { Toaster } from "@/components/ui/toaster"


function App() {
  return (
      <div className=" bg-background dark:bg-background-dark h-screen">
        <NavBar />
        <Router />
        <Toaster />
      </div>
  );
}

export default App;

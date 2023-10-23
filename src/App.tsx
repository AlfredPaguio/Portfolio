import { NavBar } from "@/components/NavBar";
import Router from "./routes/router";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="flex h-screen min-h-screen w-screen snap-y flex-col justify-between overflow-y-scroll scroll-smooth">
      <NavBar />
      <main className="container grow ">
        <Router />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

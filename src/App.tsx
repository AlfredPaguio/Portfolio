import { Navbar } from "@/components/Navbar";
import Router from "./routes/router";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="flex h-screen min-h-screen w-screen lg:snap-y flex-col justify-between overflow-y-scroll scroll-smooth">
      <Navbar />
      <main className="container grow ">
        <Router />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

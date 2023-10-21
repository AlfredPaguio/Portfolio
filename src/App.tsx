import { NavBar } from "@/components/NavBar";
import Router from "./routes/router";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <main className="md:min-w-980 container flex min-h-screen min-w-full flex-col bg-gradient-to-b from-blue-900 via-black to-black bg-fixed">
      <NavBar />
      <Router />
      <Footer />
      <Toaster />
    </main>
  );
}

export default App;

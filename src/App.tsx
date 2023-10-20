import { NavBar } from "@/components/NavBar";
import Router from "./routes/router";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <main className="container md:min-w-980 flex min-h-screen min-w-full flex-col bg-gradient-to-b from-blue-900 via-black to-black bg-fixed">
      <NavBar />
      <Router />
      <Toaster />
      <Footer />
    </main>
  );
}

export default App;

import { NavBar } from "@/components/NavBar";
import Router from "./routes/router";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <NavBar />
      <main className="container grow">
        <Router />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

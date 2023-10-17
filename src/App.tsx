import { NavBar } from "@/components/navBar";
import Router from "./routes/router";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer";

function App() {
  return (
    <div className="bg-background dark:bg-background-dark">
      <NavBar />
      <main className="container block min-w-full md:min-w-980">
        <Router />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

import { NavBar } from "@/components/navBar";
import Router from "./pages/router";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/footer";

function App() {
  return (
    <div className="h-100 bg-background dark:bg-background-dark">
      <NavBar />
      <main className="container">
        <Router />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark flex h-screen min-h-screen w-screen flex-col justify-between overflow-y-scroll lg:snap-y">
      <Navbar />
      <main className="container grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

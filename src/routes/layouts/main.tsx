import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen min-h-screen w-screen flex-col justify-between overflow-y-scroll scroll-smooth lg:snap-y">
      <Navbar />
      <main className="container grow ">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

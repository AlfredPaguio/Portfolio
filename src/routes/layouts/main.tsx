import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ScrollMore from "@/components/ScrollMore";
import { Toaster } from "@/components/ui/toaster";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex h-screen min-h-screen w-screen min-w-[1024px] flex-col justify-between overflow-x-none bg-background text-foreground lg:snap-y">
      <Navbar />
      <main className="container grow">
        <Outlet />
      </main>
      {location.pathname === "/contact" ? <Footer /> : <ScrollMore />}
      <Toaster />
    </div>
  );
}

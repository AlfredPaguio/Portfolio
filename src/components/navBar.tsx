"use client";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import { Menu } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import pagesData from "../routes/pagesData";
import { routerType } from "../routes/types/router.types";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="relative mx-auto p-4">
      {/* Container */}
      <div className="flex items-center justify-between">
         {/* Theme ModeToggle */}
        <div className="py-auto">
          <ModeToggle />
        </div>
        {/* Menu Items */}
        <div className="hidden items-center space-x-6 md:flex align-end">
          {pagesData
            .filter((route: routerType) => route.path !== "*")
            .map((route: routerType, key) => {
              return (
                <Link
                  key={key}
                  to={`/${route.path}`}
                  className="group relative text-text transition-all duration-300 ease-in-out dark:text-text-dark"
                >
                  {route.title}
                  <div className="top-50 absolute left-0 right-0 h-0.5 origin-left scale-x-0 transform bg-accent transition-all duration-200 ease-in-out group-hover:scale-x-100"></div>
                </Link>
              );
            })}
          
        </div>

        <div className="block space-x-6 focus:outline-none md:hidden">
          {/* Hamburger Menu */}
          <button id="menu-btn" onClick={() => setShowMenu(!showMenu)}>
            <Menu className="text-text transition-all duration-200 hover:text-accent dark:text-text-dark dark:hover:text-accent-dark" />
          </button>
        </div>
      </div>

      {/* Mobile View Menu */}
      <div className="md:hidden">
        <div
          className={twMerge(
            showMenu ? "flex" : "hidden",
            "absolute left-6 right-6 mt-1 flex-col items-center space-y-6 self-end bg-background py-8 font-bold drop-shadow-md dark:bg-background-dark sm:w-auto sm:self-center",
          )}
        >
          {pagesData
            .filter((route: routerType) => route.path != "*")
            .map((route: routerType, key) => {
              return (
                <Link
                  key={"MenuMobileView" + key}
                  to={`/${route.path}`}
                  className="pb-1 text-text transition-all duration-300 ease-in-out hover:text-accent dark:text-text-dark dark:hover:text-accent-dark"
                >
                  {route.title}
                </Link>
              );
            })}
        </div>
      </div>
    </nav>
  );
}

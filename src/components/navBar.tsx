"use client";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import { Menu } from "lucide-react";

import pagesData from "../routes/pagesData";
import { routerType } from "../routes/types/router.types";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="relative mx-auto p-4">
      {/* Container */}
      <div className="flex items-center justify-end">
        {/* Menu Items */}
        <div className="align-end hidden items-center gap-3 space-x-6 rounded-md bg-white/10 py-4 pe-3 ps-4 backdrop-blur-md md:flex">
          {pagesData
            .filter((route: routerType) => route.path !== "*")
            .map((route: routerType, key) => {
              return (
                <Link
                  key={key}
                  to={`/${route.path}`}
                  className="group relative w-max max-w-full text-text transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-in-out after:content-[''] after:hover:scale-x-100"
                >
                  {route.title}
                </Link>
              );
            })}
        </div>

        <div className="block space-x-6 focus:outline-none md:hidden">
          {/* Hamburger Menu */}
          <button id="menu-btn" onClick={() => setShowMenu(!showMenu)}>
            <Menu className="text-text transition-all duration-200 hover:text-accent " />
          </button>
        </div>
      </div>

      {/* Mobile View Menu */}
      <div className="md:hidden">
        <div
          className={twMerge(
            showMenu ? "flex" : "hidden",
            "absolute left-6 right-6 mt-1 flex-col items-center space-y-6 self-end bg-background py-8 font-bold drop-shadow-md sm:w-auto sm:self-center",
          )}
        >
          {pagesData
            .filter((route: routerType) => route.path != "*")
            .map((route: routerType, key) => {
              return (
                <Link
                  key={"MenuMobileView" + key}
                  to={`/${route.path}`}
                  className="pb-1 text-text transition-all duration-300 ease-in-out hover:text-accent"
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

"use client";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import { Menu } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import pagesData from "../pages/pagesData";
import { routerType } from "../types/router.types";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="relative container mx-auto p-4">
      {/* Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="p-2">
          <Link to="/">
            <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-primary to-accent text-transparent">
              Portfolio
            </h1>
          </Link>
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex">
          {pagesData
            .filter((route: routerType) => route.path != "*")
            .map((route: routerType, key) => {
              console.log('Menu' + key);
              return <Link
                    key={key}
                    to={`/${route.path}`}
                    className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark pt-1"
                  >
                    {route.title}
                  </Link>
              
            })}
          <ModeToggle />
        </div>

        <div className="block md:hidden focus:outline-none space-x-6">
          {/* Icons */}
          <ModeToggle />
          <button id="menu-btn" onClick={() => setShowMenu(!showMenu)}>
            <Menu className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark" />
          </button>
        </div>
      </div>

      {/* Mobile View Menu */}
      <div className="md:hidden">
        <div
          className={twMerge(
            showMenu ? "flex" : "hidden",
            "absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-background dark:bg-background-dark sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          )}
        >
          {pagesData
            .filter((route: routerType) => route.path != "*")
            .map((route: routerType, key) => {
              console.log('MenuMobileView' + key);
              return (
                <>
                  <Link
                    key={'MenuMobileView'+key}
                    to={`/${route.path}`}
                    className="text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark pb-1"
                  >
                    {route.title}
                  </Link>
                  
                </>
              );
            })}
        </div>
      </div>
    </nav>
  );
}

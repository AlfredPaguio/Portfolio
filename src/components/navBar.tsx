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
    <nav className="relative mx-auto p-4 shadow-sm shadow-accent/40 dark:shadow-accent-dark/40">
      {/* Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="p-2">
          <Link to="/">
            <div className="flex items-center">
              <h1 className="animate-ping bg-gradient-to-r from-primary to-accent bg-clip-text  text-3xl font-bold text-transparent dark:from-primary-dark  dark:to-accent-dark">
                ∀
              </h1>
              <h1 className="animate-pulse text-shadow-sm  text-3xl font-bold text-text shadow-primary dark:text-text-dark dark:shadow-primary-dark">
                lfred
              </h1>
            </div>
          </Link>
        </div>
        {/* Menu Items */}
        <div className="hidden items-center space-x-6 md:flex">
          {pagesData
            .filter((route: routerType) => route.path != "*")
            .map((route: routerType, key) => {
              return (
                <Link
                  key={key}
                  to={`/${route.path}`}
                  className="relative pb-0.5 pt-1 text-text transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-200 hover:text-accent hover:after:w-full dark:text-text-dark dark:hover:text-accent-dark"
                >
                  {route.title}
                </Link>
              );
            })}
          <ModeToggle />
        </div>

        <div className="block space-x-6 focus:outline-none md:hidden">
          {/* Icons */}
          <ModeToggle />
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
                <>
                  <Link
                    key={"MenuMobileView" + key}
                    to={`/${route.path}`}
                    className="pb-1 text-text transition-all duration-200 hover:text-accent dark:text-text-dark dark:hover:text-accent-dark"
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

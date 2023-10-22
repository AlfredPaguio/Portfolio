"use client";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import { Menu } from "lucide-react";

import pagesData from "../routes/pagesData";
import { routerType } from "../routes/types/router.types";
import { useState } from "react";
import { SideBar } from "./Sidebar";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar relative p-4">
      {/* Container */}
      <div className="flex items-center justify-end">
        {/* Menu Items */}
        <ul className="align-end hidden items-center gap-3 space-x-3 rounded-md bg-white/10 py-4 pe-4 ps-4 backdrop-blur-md md:flex">
          {pagesData
            .filter((route: routerType) => route.path !== "*")
            .map((route: routerType, key) => {
              return (
                <li className="peer relative after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-secondary after:transition-transform after:ease-in-out after:content-['']  after:hover:translate-x-0 after:hover:scale-x-100 after:hover:duration-300  peer-hover:after:-translate-x-full peer-hover:after:duration-300">
                  <Link
                    key={key}
                    to={`/${route.path}`}
                    className="w-max max-w-full text-2xl font-medium text-text opacity-70 transition-all duration-300 ease-in-out hover:opacity-100 focus-visible:opacity-100 "
                  >
                    {route.title}
                  </Link>
                </li>
              );
            })}
        </ul>

        <div className="block space-x-6 rounded-md bg-white/10 py-4 pe-4 ps-4 backdrop-blur-md focus:outline-none md:hidden">
          {/* Hamburger Menu */}
          <button id="menu-btn" onClick={() => setShowMenu(!showMenu)}>
            <Menu className="text-text transition-all duration-200 hover:text-accent" />
          </button>
        </div>
      </div>

      {/* Mobile View Menu */}

      <SideBar showMenu={showMenu} />
    </nav>
  );
}

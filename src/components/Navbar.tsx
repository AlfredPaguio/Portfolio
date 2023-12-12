"use client";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import pagesData, { routerType } from "../routes/pagesData";
import { useState } from "react";
import { NavbarMenu } from "./NavbarMenu";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <nav className="navbar relative p-4 md:p-16 md:pb-10">
      {/* Container */}
      <div
        className={`flex items-center ${
          currentLocation != "/" ? "justify-between" : "justify-end"
        }`}
      >
        {currentLocation != "/" ? (
          <h1 className="text-center text-2xl font-bold [viewTransitionName:brand-name]">
            Alfred
          </h1>
        ) : (
          ""
        )}

        {/* Menu Items */}
        <ul className="align-end hidden items-center gap-3 space-x-1 rounded-md py-4 pe-4 ps-4 md:flex">
          {pagesData
            .filter((route: routerType) => route.path !== "*")
            .map((route: routerType, key) => {
              return (
                <NavLink
                  key={key}
                  to={`/${route.path}`}
                  className={({ isActive }) =>
                    `peer w-max max-w-full pl-4 text-2xl font-medium text-foreground transition-all duration-75 ease-in first:pl-0 first:after:ml-0 hover:text-accent focus-visible:text-accent  ${
                      isActive
                        ? "opacity-100"
                        : "opacity-70 hover:opacity-100 focus-visible:opacity-100"
                    }`
                  }
                  unstable_viewTransition
                >
                  <li className="relative flex items-center justify-center gap-1 transition-all duration-300 ease-in-out after:absolute after:bottom-0  after:left-0 after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:ease-in after:content-['']  after:hover:translate-x-0 after:hover:scale-x-100 after:hover:duration-300  peer-hover:after:-translate-x-full peer-hover:after:duration-300">
                    {route.Icon && <route.Icon className="h-6 w-6" />}
                    {route.title}
                  </li>
                </NavLink>
              );
            })}
          <ThemeToggle />
        </ul>

        <div className="block space-x-6 rounded-md bg-card/10 py-4 pe-4 ps-4 backdrop-blur-md focus:outline-none md:hidden">
          <ThemeToggle />
          {/* Hamburger Menu */}
          <button id="menu-btn" onClick={() => setShowMenu(!showMenu)}>
            <Menu className="text-foreground transition-all duration-200 hover:text-accent" />
          </button>
        </div>
      </div>

      {/* Mobile View Menu */}

      <NavbarMenu showMenu={showMenu} />
    </nav>
  );
}

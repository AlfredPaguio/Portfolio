"use client";
import { Menu } from "lucide-react";
import { ElementType, useState } from "react";
// import { NavbarMenu } from "./NavbarMenu";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { Button } from "./ui/button";
import { PageInformationType, pageInformation } from "@/data/constant";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  //   const router = useRouter();
  //   const currentLocation = router.pathname;

  return (
    <nav className="navbar relative px-4 md:px-16 md:py-8">
      {/* Container */}
      <div
        className={`flex items-center ${
          pathname != "/" ? "justify-between" : "justify-end"
        }`}
      >
        {pathname != "/" ? (
          <h1 className="text-center text-2xl font-bold [viewTransitionName:brand-name]">
            Alfred
          </h1>
        ) : (
          ""
        )}

        {/* Menu Items */}
        {/* <ul className="align-end hidden items-center gap-3 space-x-1 rounded-md py-4 pe-4 ps-4 md:flex">
          {pageInformation
            .filter((route: PageInformationType) => route.path !== "*")
            .map((route: PageInformationType, key) => {
              return (
                <Link
                  key={key}
                  href={`/${route.path}`}
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
                </Link>
              );
            })}
          <ThemeToggle />
        </ul> */}

        <ul className="align-end hidden items-center gap-3 space-x-1 rounded-md py-4 pe-4 ps-4 md:flex">
          {pageInformation
            .filter((route: PageInformationType) => route.path !== "*")
            .map((route: PageInformationType, key) => {
              return (
                <NavLink
                  key={key}
                  href={`/${route.path}`}
                  name={route.title}
                  Icon={route.Icon}
                />
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

      {/* <NavbarMenu showMenu={showMenu} /> */}
    </nav>
  );
}

interface NavLinkProps {
  href: string | object;
  name: string;
  Icon?: ElementType;
}

function NavLink({ href, name, Icon }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link href={href} passHref legacyBehavior>
      <Button
        variant={"ghost"}
        className={`peer w-max max-w-full pl-4 text-2xl font-medium text-foreground transition-all duration-75 ease-in first:pl-0 first:after:ml-0 hover:text-accent focus-visible:text-accent`}
      >
        <span
          className={`relative flex items-center justify-center gap-1 transition-all duration-300 ease-in-out after:absolute after:bottom-0  after:left-0 after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:ease-in after:content-['']  after:hover:translate-x-0 after:hover:scale-x-100 after:hover:duration-300  peer-hover:after:-translate-x-full peer-hover:after:duration-30 ${
            pathname === href
              ? "opacity-100"
              : "opacity-70 hover:opacity-100 focus-visible:opacity-100"
          }`}
        >
          {Icon && <Icon className="size-6 pr-2" />}
          {name}
        </span>
      </Button>
    </Link>
  );
}

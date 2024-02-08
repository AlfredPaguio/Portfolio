"use client";
import { Menu } from "lucide-react";
import React, { ElementType } from "react";
// import { NavbarMenu } from "./NavbarMenu";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { Button } from "./ui/button";
import { PageInformationType, pageInformation } from "@/data/constant";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "../lib/utils";

export function Navbar() {
  // const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  //   const router = useRouter();
  //   const currentLocation = router.pathname;

  return (
    <NavigationMenu
      className={`max-w-full relative px-4 md:px-16 md:py-8 flex flex-none items-center ${
        pathname != "/" ? "justify-between" : "justify-end"
      }`}
    >
      {/* Container */}

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

      <ul className="self-end hidden items-center gap-3 space-x-1 rounded-md py-4 pe-4 ps-4 md:flex">
        {pageInformation.map((route: PageInformationType, key) => {
          return (
            <NavLink
              key={key}
              href={route.path}
              name={route.title}
              Icon={route.Icon}
            />
          );
        })}
        <ThemeToggle />
      </ul>

      <div className="flex space-x-6 rounded-md bg-card/10 py-4 pe-4 ps-4 backdrop-blur-md focus:outline-none md:hidden">
        <ThemeToggle />
        {/* Hamburger Menu */}
        {/* <button id="menu-btn" onClick={() => setShowMenu(!showMenu)}>
            <Menu className="text-foreground transition-all duration-200 hover:text-accent" />
          </button> */}

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Menu className="text-foreground transition-all duration-200 hover:text-accent" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="self-end grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {pageInformation.map((route: PageInformationType) => (
                  <ListItem
                    key={route.title}
                    title={route.title}
                    href={route.path}
                  >
                    {route.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>

      {/* Mobile View Menu */}

      {/* <NavbarMenu showMenu={showMenu} /> */}
    </NavigationMenu>
  );
}

interface NavLinkProps {
  href: string | object;
  name: string;
  Icon?: ElementType;
  children?: React.ReactNode;
}

function NavLink({ href, name, Icon, children }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <li>
      <Link href={href} passHref legacyBehavior>
        <Button
          variant={"link"}
          className={`select-none outline-none space-y-1 underline-offset-0 hover:no-underline peer w-max max-w-full pl-4 text-2xl font-medium text-foreground transition-all duration-75 ease-in first:pl-0 first:after:ml-0 hover:text-accent focus-visible:text-accent`}
        >
          <div
            className={`relative flex items-center justify-center gap-1 transition-all duration-300 ease-in-out after:absolute after:bottom-0  after:left-0 after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:ease-in after:content-['']  after:hover:translate-x-0 after:hover:scale-x-100 after:hover:duration-300  peer-hover:after:-translate-x-full peer-hover:after:duration-30 ${
              pathname === href
                ? "opacity-100"
                : "opacity-70 hover:opacity-100 focus-visible:opacity-100"
            }`}
          >
            {Icon && <Icon className="size-6 pr-2" />}
            {name}
          </div>

          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Button>
      </Link>
    </li>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

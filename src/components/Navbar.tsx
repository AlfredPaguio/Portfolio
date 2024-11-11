"use client";
import { ElementType, useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { Button } from "./ui/button";
import { PageInformationType, pageInformation } from "@/config/pageInformation";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
// import MobileNavigation from "./MobileNavigation";

import logoLight from "@@/public/assets/logoLight.svg";
import logoDark from "@@/public/assets/logoDark.svg";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", changeBackground);

    return () => document.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 bottom-4 z-40 mx-8 flex h-14 items-center justify-between rounded-3xl border border-border bg-transparent px-4  shadow-sm saturate-100 backdrop-blur-sm transition-all duration-200 md:top-4 md:mx-8 md:max-w-full md:px-8",
        isScrolled &&
          " bottom-0 mx-0 rounded-none border-border/40 px-4 shadow-lg md:top-0 md:mx-0 md:max-w-full md:px-4 lg:max-w-full",
      )}
    >
      {/* Container */}

      <div className="mx-auto flex h-14 w-full items-center justify-between">
        <div className="flex h-14 items-center p-2">
          <Button variant="ghost" aria-label="Home" asChild>
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <div aria-hidden="true" className="h-14 w-auto">
                <img
                  src={logoDark.src}
                  alt="Brand Logo"
                  className="hidden h-14 w-auto dark:block"
                />
                <img
                  src={logoLight.src}
                  alt="Brand Logo"
                  className="block h-14 w-auto dark:hidden"
                />
              </div>
            </Link>
          </Button>
        </div>

        <div className="flex items-center md:space-x-3">
          <NavigationMenu className="flex px-1">
            <NavigationMenuList>
              {pageInformation
                .filter((route: PageInformationType) => route.path !== "*")
                .map((link) => (
                  <NavigationMenuItem key={link.title}>
                    <NavLink
                      href={link.path}
                      name={link.title}
                      Icon={link.Icon}
                    />
                  </NavigationMenuItem>
                ))}
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
          {/* <MobileNavigation /> */}
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  name: string;
  Icon?: ElementType;
  className?: string;
}

function NavLink({ href, name, Icon, className }: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    (pathname.startsWith(href) && href !== "/") || pathname === href;

  return (
    <Link href={href} key={`link-${name}`} legacyBehavior passHref>
      <NavigationMenuLink
        active={isActive}
        className={cn(
          navigationMenuTriggerStyle(),
          className,
          isActive ? "text-foreground" : "text-foreground/60",
        )}
      >
        {Icon && <Icon className="size-6 pr-2" />}
        {name}
      </NavigationMenuLink>
    </Link>
  );
}

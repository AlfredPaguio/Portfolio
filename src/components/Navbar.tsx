"use client";
import { Menu } from "lucide-react";
import React, { ElementType, useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { PageInformationType, pageInformation } from "@/config/pageInformation";
import { usePathname, useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/utils/cn";
import { checkURLPath } from "@/utils/checkURLPath";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import MobileNavigation from "./MobileNavigation";

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
        "fixed inset-x-0 left-[calc(100vw-100%)] top-4 z-40 mx-8 flex h-[60px] items-center justify-between rounded-3xl border border-transparent bg-transparent  px-4 shadow-sm saturate-100 backdrop-blur-[4px] transition-all duration-200 md:mx-auto md:max-w-[768px] md:px-8 lg:max-w-[1168px]",
        isScrolled && "border-border",
      )}
    >
      {/* Container */}

      <div className="mx-auto flex h-[60px] w-full items-center justify-between">
        <div className="flex h-14 items-center p-2 lg:h-[60px]">
          {/* {pathname != "/" && ( */}
          <Button variant="ghost" aria-label="Home" asChild>
            <Link
              href="/"
              className="flex items-center gap-2"
              prefetch={false}
            >
              <h1 className="text-center text-2xl font-light [viewTransitionName:brand-name]">
                Alfred
              </h1>
            </Link>
          </Button>
          {/* )} */}
        </div>

        <div className="flex items-center md:space-x-3">
          <NavigationMenu className="hidden  md:flex">
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
          <MobileNavigation />
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

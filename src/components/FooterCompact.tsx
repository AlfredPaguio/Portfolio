import { pageInformation } from "@/data/constant";
import { cn } from "@/utils/cn";
import {
  SiFacebook,
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

function FooterCompact() {
  const pathname = usePathname();
  return (
    <footer className="px-4 py-6 md:py-10">
      <h2 className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl">
        <div
          role="separator"
          className="mx-auto flex h-6 w-full max-w-7xl items-center justify-center gap-2 py-2 md:px-14 md:py-4"
        >
          <Separator className="bg-secondary" />
        </div>
        <ul className="flex items-center justify-center gap-10">
          {pageInformation.map((item) => (
            <li className="h-6 list-none" key={item.path}>
              <a
                key={item.path}
                className={cn(
                  "shrink-0 items-center justify-center bg-none px-0 font-medium text-foreground no-underline hover:bg-none hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
                  pathname === item.path
                    ? "border-text-cyan-700 border-b-2"
                    : "border-transparent",
                  "block h-full",
                )}
                href={item.path}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex max-w-7xl flex-col items-center justify-between gap-6 px-5 pt-4 text-center md:flex-row md:px-10 md:pt-2 md:text-left">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="flex space-x-2 md:justify-center xl:justify-start">
              <Button
                variant={"link"}
                className="group"
                aria-label="Alfred's Github page (opens in new window)"
                asChild
              >
                <Link href="https://github.com/AlfredPaguio/">
                  <SiGithub
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    className="size-6 fill-current text-accent group-hover:text-secondary"
                  />
                </Link>
              </Button>
              <Button
                variant={"link"}
                className="group"
                aria-label="Alfred's Facebook profile (opens in new window)"
                asChild
              >
                <Link href="https://www.facebook.com/FleetingComet/">
                  <SiFacebook
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    className="size-6 fill-current text-accent group-hover:text-secondary"
                  />
                </Link>
              </Button>

              <Button
                variant={"link"}
                className="group"
                aria-label="Alfred's LinkedIn profile (opens in new window)"
                asChild
              >
                <Link href="https://www.linkedin.com/in/alfredpaguio/">
                  <SiLinkedin
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                    className="size-6 fill-current text-accent group-hover:text-secondary"
                  />
                </Link>
              </Button>
            </div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Alfred U. Paguio. All rights
              reserved.
            </p>
          </div>
          <p className="text-sm">
            Made with <span className="text-[#ff3838]">♥</span> in Philippines
            by Alfred.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterCompact;

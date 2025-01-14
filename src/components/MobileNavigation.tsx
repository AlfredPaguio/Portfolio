import React, { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { pageInformation, PageInformationType } from "@/config/pageInformation";
import MobileLinkHelper from "./MobileLinkHelper";
import { MenuIcon, XIcon } from "lucide-react";

import logoLight from "@@/public/assets/logoLight.svg";
import logoDark from "@@/public/assets/logoDark.svg";
import { cn } from "@/utils/cn";

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <MenuIcon />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col p-0" hideCloseButton>
        <div className="flex items-center justify-between border-b p-4">
          <MobileLinkHelper
            href="/"
            className="flex items-center"
            onOpenChange={setOpen}
          >
            <img
              src={logoDark.src}
              alt="Brand Logo"
              className="hidden size-14 w-auto dark:block"
              aria-hidden="true"
            />
            <img
              src={logoLight.src}
              alt="Brand Logo"
              className="block size-14 w-auto dark:hidden"
              aria-hidden="true"
            />
          </MobileLinkHelper>
          <Button variant="ghost" size="icon" aria-label="Close menu" asChild>
            <SheetClose>
              <XIcon className="h-6 w-6" />
            </SheetClose>
          </Button>
        </div>
        {/* <ScrollArea className="h-[calc(100vh-8rem)]"> */}

        <ScrollArea className="flex-grow">
        <nav className="p-4">
          <ul className="space-y-2">
            {pageInformation
              .filter((route: PageInformationType) => route.path !== "*")
              .map((item) => {
                return (
                  <li key={item.path} className={"group/menu-item relative"}>
                    <Button variant={"ghost"} className="w-full" asChild>
                      <MobileLinkHelper
                        key={item.path}
                        href={item.path}
                        // className={cn(
                        //   "block py-2 px-4 rounded-md transition-colors",
                        //   router.pathname === item.path
                        //     ? "bg-primary text-primary-foreground"
                        //     : "hover:bg-accent"
                        // )}
                        onOpenChange={setOpen}
                      >
                        {item.title}
                      </MobileLinkHelper>
                    </Button>
                  </li>
                );
              })}
          </ul>
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;

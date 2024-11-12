import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { pageInformation, PageInformationType } from "@/config/pageInformation";
import MobileLinkHelper from "./MobileLinkHelper";
import { MenuIcon } from "lucide-react";

import logoLight from "@@/public/assets/logoLight.svg";
import logoDark from "@@/public/assets/logoDark.svg";

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
      <SheetContent side="left" className="pt-4 p-0">
        <div className="flex flex-col gap-2 border-b">
          <MobileLinkHelper
            href="/"
            className="flex items-center"
            onOpenChange={setOpen}
          >
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
          </MobileLinkHelper>
        </div>
        <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto">
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <ul className="flex w-full min-w-0 flex-col gap-1 list-none">
              {pageInformation
                .filter((route: PageInformationType) => route.path !== "*")
                .map((item) => (
                  <li key={item.path} className={"group/menu-item relative"}>
                    <Button variant={"ghost"} className="w-full" asChild>
                      <MobileLinkHelper
                        key={item.path}
                        href={item.path}
                        onOpenChange={setOpen}
                      >
                        {item.title}
                      </MobileLinkHelper>
                    </Button>
                  </li>
                ))}
            </ul>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { pageInformation, PageInformationType } from "@/config/pageInformation";
import MobileLinkHelper from "./MobileLinkHelper";

function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mx-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLinkHelper
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          {/* <Icons.logo className="mr-2 h-4 w-4" /> */}
          <h1 className="text-center text-2xl font-bold [viewTransitionName:brand-name]">
            Alfred
          </h1>
          {/* <span className="font-bold">{title}</span> */}
        </MobileLinkHelper>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {pageInformation
              .filter((route: PageInformationType) => route.path !== "*")
              .map((item) => (
                <MobileLinkHelper
                  key={item.path}
                  href={item.path}
                  onOpenChange={setOpen}
                >
                  {item.title}
                </MobileLinkHelper>
              ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation;

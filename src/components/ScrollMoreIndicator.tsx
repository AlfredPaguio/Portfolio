"use client";
import {
  ArrowLeftSquare,
  ArrowRightSquare,
  ChevronsRightIcon,
} from "lucide-react";

export default function ScrollMoreIndicator() {
  return (
    <footer className="flex w-full items-center justify-between">
      <div className="invisible relative flex w-96 animate-fadeInFadeOutInfinite overflow-hidden px-16 py-1 before:absolute before:left-48 before:block before:content-['Press_arrow_keys_to_navigate'] md:visible md:space-y-0 ">
        <ArrowLeftSquare className="size-14" />
        <ArrowRightSquare className="size-14" />
      </div>
      <div className="w-96 overflow-hidden px-6 py-10 md:space-y-0">
        <div className="relative flex animate-scrollToRightInfinite items-center justify-center text-foreground before:absolute before:-left-72 before:block before:h-0.5 before:w-96 before:bg-foreground after:absolute after:left-[12rem] after:block after:h-0.5 after:w-48 after:bg-foreground sm:before:-left-56">
          <i className="relative left-[3.75rem] before:absolute before:left-2 before:h-1 before:w-2 before:origin-top-left before:-translate-x-[1100%] before:-translate-y-[430%] before:content-['SWIPE'] sm:left-10 sm:before:left-6 md:left-2 md:before:content-['NEXT']">
            <ChevronsRightIcon className="fill-foreground text-foreground" />
          </i>
        </div>
      </div>
    </footer>
  );
}

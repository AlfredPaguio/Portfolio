import { ChevronsRightIcon } from "lucide-react";

export default function ScrollMoreIndicator() {
  return (
    <footer className="flex w-full justify-between">
      <div className="w-96 overflow-hidden px-6 py-1 md:space-y-0 md:py-10"></div>
      <div className="w-96 overflow-hidden px-6 py-1 md:space-y-0 md:py-10">
        <div className="animate-scrollToRightInfinite relative flex items-center justify-center text-foreground before:absolute before:-left-56 before:block before:h-0.5 before:w-96 before:bg-foreground after:absolute after:left-[12rem] after:block after:h-0.5 after:w-48 after:bg-foreground">
          <i className="relative left-2 before:absolute before:left-6 before:h-1 before:w-2 before:origin-top-left before:-translate-x-[1100%] before:-translate-y-[430%] before:content-['SWIPE'] lg:before:content-['NEXT']">
            <ChevronsRightIcon className="fill-foreground text-foreground" />
          </i>
        </div>
      </div>
    </footer>
  );
}

import { ChevronsRightIcon } from "lucide-react";

export default function ScrollMore() {
  return (
    <footer className="flex justify-between w-full">
        <div className="px-6 py-1 md:space-y-0 md:py-10 w-96 overflow-hidden">

        </div>
      <div className="px-6 py-1 md:space-y-0 md:py-10 w-96 overflow-hidden">
        <div className="animate-scrollInfinite relative flex items-center justify-center text-foreground before:h-0.5 before:-left-56 before:w-96 before:bg-foreground before:absolute before:block after:h-0.5 after:left-[12rem] after:w-48 after:bg-foreground after:absolute after:block">
          <i className="left-2 relative before:absolute before:left-6 before:h-1 before:w-2 before:origin-top-left before:-translate-x-[1100%] before:-translate-y-[430%] before:content-['SCROLL']">
            <ChevronsRightIcon className="fill-foreground text-foreground" />
          </i>
        </div>
      </div>
    </footer>
  );
}

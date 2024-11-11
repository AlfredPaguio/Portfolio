"use client";
import { pageInformation } from "@/config/pageInformation";
import {
  ArrowLeftSquare,
  ArrowRightSquare,
  ChevronsRightIcon,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ScrollMoreIndicator() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const matchedRoute = pageInformation.findIndex(
      (page) => page.path === pathname,
    );
    if (matchedRoute !== -1) {
      setCurrentIndex(matchedRoute);
    }
  }, [pathname]);

  const handlePrevious = () => {
    if (currentIndex !== 0) {
      const prevRoute =
        (currentIndex - 1 + pageInformation.length) % pageInformation.length;
      setCurrentIndex(prevRoute);
      router.push(pageInformation[prevRoute].path);
    }
  };

  const handleNext = () => {
    if (currentIndex !== pageInformation.length - 1) {
      const nextRoute = (currentIndex + 1) % pageInformation.length;
      setCurrentIndex(nextRoute);
      router.push(pageInformation[nextRoute].path);
    }
  };

  return (
    <footer className="flex w-full flex-none items-center justify-between mb-10 md:mb-0">
      <div className="invisible relative flex w-96 animate-fadeInFadeOutInfinite overflow-hidden px-16 py-1 before:absolute before:left-48 before:block before:content-['Press_arrow_keys_to_navigate'] hover:animate-none md:visible md:space-y-0 ">
        <ArrowLeftSquare
          className="size-14 hover:cursor-pointer hover:text-accent"
          onClick={handlePrevious}
        />
        <ArrowRightSquare
          className="size-14 hover:cursor-pointer hover:text-accent"
          onClick={handleNext}
        />
      </div>
      <div
        className="group w-96 overflow-hidden px-6 py-10 hover:cursor-pointer md:space-y-0"
        onClick={handleNext}
      >
        <div className="relative flex animate-scrollToRightInfinite items-center justify-center text-foreground before:absolute before:-left-72 before:block before:h-0.5 before:w-96 before:bg-foreground after:absolute after:left-[12rem] after:block after:h-0.5 after:w-48 after:bg-foreground group-hover:animate-none group-hover:text-accent group-hover:before:bg-accent group-hover:after:bg-accent sm:before:-left-56">
          <i className="relative left-[3.75rem] before:absolute before:left-2 before:h-1 before:w-2 before:origin-top-left before:-translate-x-[1100%] before:-translate-y-[430%] before:content-['SWIPE'] sm:left-10 sm:before:left-6 md:left-2 md:before:content-['NEXT']">
            <ChevronsRightIcon className="fill-foreground text-foreground group-hover:fill-accent group-hover:text-accent" />
          </i>
        </div>
      </div>
    </footer>
  );
}

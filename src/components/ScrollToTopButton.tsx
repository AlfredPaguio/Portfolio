"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowUpIcon } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="lg:hidden"
          variant={"ghost"}
          size={"icon"}
        >
          <ArrowUpIcon />
        </Button>
      )}
    </>
  );
}

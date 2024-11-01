"use client";
import { pageInformation } from "@/config/pageInformation";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function NavigationHandler() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  //need to update when the location updates
  useEffect(() => {
    const matchedRoute = pageInformation.findIndex(
      (page) => page.path === pathname,
    );
    if (matchedRoute !== -1) {
      setCurrentIndex(matchedRoute);
    }
  }, [pathname]);

  const isInputFocused = () => {
    const focusedElement = document.activeElement;
    // console.log(focusedElement?.getAttribute("role"));
    // Need to check the role to avoid switching page when dialog or menu is opened

    //fix for carousel and others:
    const isBodyPointerEventsNone =
      window
        .getComputedStyle(document.body)
        .getPropertyValue("pointer-events") === "none";

    // console.log("is Carousel Opened?: ",isBodyPointerEventsNone)

    // fix for light box
    const isBodyNoScroll = document.body.classList.contains("yarl__no_scroll");

    return (
      isBodyPointerEventsNone ||
      isBodyNoScroll ||
      focusedElement &&
      (focusedElement.tagName === "INPUT" ||
        focusedElement.tagName === "TEXTAREA" ||
        focusedElement?.getAttribute("role") === "dialog" ||
        focusedElement?.getAttribute("role") === "menu")
    );
  };

  useEffect(() => {
    const handleArrowLeft = () => {
      if (currentIndex !== 0 && !isInputFocused()) {
        const prevRoute =
          (currentIndex - 1 + pageInformation.length) % pageInformation.length;
        setCurrentIndex(prevRoute);
        router.push(pageInformation[prevRoute].path);
      }
    };

    const handleArrowRight = () => {
      if (currentIndex !== pageInformation.length - 1 && !isInputFocused()) {
        const nextRoute = (currentIndex + 1) % pageInformation.length;
        setCurrentIndex(nextRoute);
        router.push(pageInformation[nextRoute].path);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.code === "ArrowLeft") {
        handleArrowLeft();
      } else if (event.code === "ArrowRight") {
        handleArrowRight();
      }
    };

    function handleTouchStart(event: TouchEvent) {
      setTouchStartX(event.touches[0].clientX);
    }

    function handleTouchEnd(event: TouchEvent) {
      const touchEndX = event.changedTouches[0].clientX;
      const swipeThreshold = 150;

      if (touchEndX < touchStartX - swipeThreshold) {
        handleArrowRight(); // Swipe from left to right
      } else if (touchEndX > touchStartX + swipeThreshold) {
        handleArrowLeft(); // Swipe from right to left
      }
    }

    document.addEventListener("keydown", handleKey);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, touchStartX, router]);
  //https://stackoverflow.com/questions/69819877/navigating-router-through-arrow-keys
  //https://codesandbox.io/p/sandbox/fix-bug-for-question-stackoverflow-forked-lj3rcg
  //https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events

  return null;
}

import { pageInformation } from "@/data/constant";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function NavigationHandler() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const validPages = pageInformation.filter((page) => page.path !== "*");

  //need to update when the location updates
  useEffect(() => {
    const matchedRoute = validPages.findIndex(
      (page) => page.path === router.pathname
    );
    if (matchedRoute !== -1) {
      setCurrentIndex(matchedRoute);
    }
  }, [router.pathname, validPages]);

  const isInputFocused = () => {
    const focusedElement = document.activeElement;
    // console.log(focusedElement?.getAttribute("role"));
    // Need to check the role to avoid switching page when dialog or menu is opened
    return (
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
          (currentIndex - 1 + validPages.length) % validPages.length;
        setCurrentIndex(prevRoute);
        router.push(validPages[prevRoute].path, undefined, {
          shallow: true,
        });
      }
    };

    const handleArrowRight = () => {
      if (currentIndex !== validPages.length - 1 && !isInputFocused()) {
        const nextRoute = (currentIndex + 1) % validPages.length;
        setCurrentIndex(nextRoute);
        router.push(validPages[nextRoute].path, undefined, {
          shallow: true,
        });
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
  }, [currentIndex, validPages, touchStartX, router]);
  //https://stackoverflow.com/questions/69819877/navigating-router-through-arrow-keys
  //https://codesandbox.io/p/sandbox/fix-bug-for-question-stackoverflow-forked-lj3rcg
  //https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events

  return null;
}

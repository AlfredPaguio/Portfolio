import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ScrollMoreIndicator from "@/components/ScrollMoreIndicator";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import pagesData from "../pagesData";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const validPages = pagesData.filter((page) => page.path !== "*");

  useEffect(() => {
    function isInputFocused() {
      const focusedElement = document.activeElement;
      return (
        focusedElement &&
        (focusedElement.tagName === "Input" ||
          focusedElement.tagName === "Textarea")
      );
    }

    function handleArrowLeft() {
      if (currentIndex !== 0 && !isInputFocused()) {
        const prevRoute =
          (currentIndex - 1 + validPages.length) % validPages.length;
        // console.log("this is previous route: ", validPages[prevRoute].title);
        setCurrentIndex(prevRoute);
        navigate(validPages[prevRoute].path, { unstable_viewTransition: true });
      }
    }

    function handleArrowRight() {
      if (currentIndex !== validPages.length - 1 && !isInputFocused()) {
        const nextRoute = (currentIndex + 1) % validPages.length;
        // console.log("this is next route: ", validPages[nextRoute].title);
        setCurrentIndex(nextRoute);
        navigate(validPages[nextRoute].path, { unstable_viewTransition: true });
      }
    }

    function handleKey(event: KeyboardEvent) {
      if (event.code === "ArrowLeft") {
        handleArrowLeft();
      } else if (event.code === "ArrowRight") {
        handleArrowRight();
      }
    }

    function handleTouchStart(event: TouchEvent) {
      setTouchStartX(event.touches[0].clientX);
    }

    function handleTouchEnd(event: TouchEvent) {
      const touchEndX = event.changedTouches[0].clientX;
      const swipeThreshold = 50;

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
  }, [navigate, currentIndex, validPages, touchStartX]);
  //https://stackoverflow.com/questions/69819877/navigating-router-through-arrow-keys
  //https://codesandbox.io/p/sandbox/fix-bug-for-question-stackoverflow-forked-lj3rcg
  //https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events

  return (
    <div className="flex h-screen min-h-screen w-screen flex-col justify-between overflow-y-scroll bg-background text-foreground">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      {location.pathname === "/contact" ? <Footer /> : <ScrollMoreIndicator />}
      <Toaster />
    </div>
  );
}

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import ScrollMoreIndicator from "@/components/ScrollMoreIndicator";
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";
import {
  Outlet,
  matchRoutes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { pageInformation } from "./routes";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const validPages = pageInformation.filter((page) => page.path !== "*");

  //need to update when the location updates
  useEffect(() => {
    const matchedRoutes = matchRoutes(validPages, location.pathname);
    if (matchedRoutes && matchedRoutes.length > 0) {
      const index = validPages.findIndex(
        (page) => page.path === matchedRoutes[0].route.path,
      );
      setCurrentIndex(index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    function isInputFocused() {
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
    }

    function handleArrowLeft() {
      if (currentIndex !== 0 && !isInputFocused()) {
        const prevRoute =
          (currentIndex - 1 + validPages.length) % validPages.length;
        setCurrentIndex(prevRoute);
        navigate(validPages[prevRoute].path, {
          unstable_viewTransition: true,
          replace: true,
        });
        //testing some navigation history (back)
      }
    }

    function handleArrowRight() {
      if (currentIndex !== validPages.length - 1 && !isInputFocused()) {
        const nextRoute = (currentIndex + 1) % validPages.length;
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
  }, [navigate, currentIndex, validPages, touchStartX]);
  //https://stackoverflow.com/questions/69819877/navigating-router-through-arrow-keys
  //https://codesandbox.io/p/sandbox/fix-bug-for-question-stackoverflow-forked-lj3rcg
  //https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events

  return (
    <div className="antialiased flex h-svh min-h-svh w-screen flex-col justify-between overflow-x-hidden  bg-background text-foreground">
      <Navbar />
      <main className="grow px-4 pb-4 md:px-16">
        <Outlet />
      </main>
      {location.pathname === "/contact" ? <Footer /> : <ScrollMoreIndicator />}
      <Toaster />
    </div>
  );
}

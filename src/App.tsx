import { RouterProvider, createBrowserRouter } from "react-router-dom";
import pagesData from "./routes/pagesData";
import LoadingPage from "./routes/layouts/LoadingPage";
import Layout from "./routes/layouts/main";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: pagesData,
  },
]);

export default function App() {
  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      document.documentElement.style.fontSize = `${(windowHeight / 1080 * 16).toFixed(1)}px`;
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <RouterProvider
      future={{ v7_startTransition: true }}
      router={router}
      fallbackElement={<LoadingPage />}
    />
  );
}

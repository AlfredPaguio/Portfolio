import { Route, Routes, useLocation } from "react-router-dom";
import { routerType } from "./types/router.types";
import pagesData from "./pagesData";
import { AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading";
import { Suspense } from "react";

const Router = () => {
  const location = useLocation();

  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loading />}>
          <Routes location={location} key={location.pathname}>
            {pageRoutes}
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};

export default Router;

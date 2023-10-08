import { routerType } from "../types/router.types";
import { lazy, Suspense } from "react";

import Loading from "@/components/Loading";
import NoPage from "./NoPage";

const Home = lazy(() => import("./Home"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));

const pagesData: routerType[] = [
  {
    path: "",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
    title: "Home",
    description: "The starting point of creativity.",
  },
  {
    path: "projects",
    element: (
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
    ),
    title: "Projects",
    description: "Where innovation takes shape",
  },
  {
    path: "contact",
    element: (
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    ),
    title: "Contact",
    description: "Get in touch, let's make magic.",
  },
  {
    path: "*",
    element: <NoPage />,
    title: "404",
    description: "You've landed on a wrong planet!",
  },
];

export default pagesData;

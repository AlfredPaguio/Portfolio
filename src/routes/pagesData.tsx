import { routerType } from "./types/router.types";
import { lazy, Suspense } from "react";

import Loading from "@/components/Loading";
import NoPage from "../pages/Errors/NoPage";
import { BriefcaseIcon, HomeIcon, MailIcon } from "lucide-react";

const Home = lazy(() => import("../pages/Home"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));

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
    icon: (
      <HomeIcon
        className="mx-auto 
    text-2xl text-accent dark:text-accent-dark md:text-3xl"
      />
    ),
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
    icon: (
      <BriefcaseIcon
        className="mx-auto 
    text-2xl text-accent dark:text-accent-dark md:text-3xl"
      />
    ),
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
    icon: (
      <MailIcon
        className="mx-auto 
    text-2xl text-accent dark:text-accent-dark md:text-3xl"
      />
    ),
  },
  {
    path: "*",
    element: <NoPage />,
    title: "404",
    description: "You've landed on a wrong planet!",
  },
];

export default pagesData;

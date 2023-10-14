import { routerType } from "./types/router.types";
import { lazy } from "react";
import { BriefcaseIcon, HomeIcon, MailIcon } from "lucide-react";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const Contact = lazy(() => import("@/pages/Contact"));
const NoPage = lazy(() => import("@/pages/SpecialPages/NoPage"));


const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
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
    element: <Projects />,
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
    element: <Contact />,
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
    title: "404 Page Not Found",
    description: "You've landed on a wrong planet!",
  },
];

export default pagesData;

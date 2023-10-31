import { lazy } from "react";
import { BriefcaseIcon, HomeIcon, MailIcon } from "lucide-react";
import { ElementType } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const Contact = lazy(() => import("@/pages/Contact"));
const NoPage = lazy(() => import("@/pages/SpecialPages/NoPage"));

export type routerType = {
  title: string;
  path: string;
  description?: string;
  element: JSX.Element;
  Icon?: ElementType;
};

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "Home",
    description: "The starting point of creativity.",
    Icon: HomeIcon,
  },
  {
    path: "projects",
    element: <Projects />,
    title: "Projects",
    description: "Where innovation takes shape",
    Icon: BriefcaseIcon,
  },
  {
    path: "contact",
    element: <Contact />,
    title: "Contact",
    description: "Get in touch, let's make magic.",
    Icon: MailIcon,
  },
  {
    path: "*",
    element: <NoPage />,
    title: "404 Page Not Found",
    description: "You've landed on a wrong moon!",
  },
];

export default pagesData;

import { BriefcaseIcon, HomeIcon, MailIcon, UserIcon } from "lucide-react";
import { lazy, ElementType } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ProjectDetails from "./Projects/ProjectDetails";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Projects = lazy(() => import("@/pages/Projects"));
const Contact = lazy(() => import("@/pages/Contact"));
const NoPage = lazy(() => import("@/pages/SpecialPages/NoPage"));

export type validPagesDataType = {
  title: string;
  path: string;
  description?: string;
  element: JSX.Element;
  Icon?: ElementType;
};

export const validPagesData: validPagesDataType[] = [
  {
    path: "",
    element: <Home />,
    title: "Home",
    description: "The starting point of creativity.",
    Icon: HomeIcon,
  },
  {
    path: "about",
    element: <About />,
    title: "About",
    description: "Explore my coding journey",
    Icon: UserIcon,
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

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      { path: "/projects/:projectId", element: <ProjectDetails /> },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routers;

import GithubOriginal from "@beta/devicons-react/lib/icons/GithubOriginal";
import {
  Home,
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  Contact,
  MailIcon,
  ArrowUpRight,
} from "lucide-react";
import { ElementType } from "react";

export type PageInformationType = {
  title: string;
  path: string;
  description?: string;
  Icon?: ElementType;
};

export const pageInformation: PageInformationType[] = [
  {
    path: "/",
    title: "Home",
    description: "The starting point of creativity.",
    Icon: HomeIcon,
  },
  {
    path: "about",
    title: "About",
    description: "Explore my coding journey",
    Icon: UserIcon,
  },
  {
    path: "projects",
    title: "Projects",
    description: "Where innovation takes shape",
    Icon: BriefcaseIcon,
  },
  {
    path: "contact",
    title: "Contact",
    description: "Get in touch, let's make magic.",
    Icon: MailIcon,
  },
];

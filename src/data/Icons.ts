import { ElementType } from "react";

// Programming Languages
import CsharpPlain from "@beta/devicons-react/lib/icons/CsharpPlain";
import DotNetOriginalWordmark from "@beta/devicons-react/lib/icons/DotNetOriginalWordmark";
import JavaOriginalWordmark from "@beta/devicons-react/lib/icons/JavaOriginalWordmark";
import PhpOriginal from "@beta/devicons-react/lib/icons/PhpOriginal";
import PythonOriginalWordmark from "@beta/devicons-react/lib/icons/PythonOriginalWordmark";
import TypescriptOriginal from "@beta/devicons-react/lib/icons/TypescriptOriginal";
import JavascriptOriginal from "@beta/devicons-react/lib/icons/JavascriptOriginal";
// Frameworks
import LaravelOriginalWordmark from "@beta/devicons-react/lib/icons/LaravelOriginalWordmark";
import LivewireOriginalWordmark from "@beta/devicons-react/lib/icons/LivewireOriginalWordmark";
import FlaskOriginalWordmark from "@beta/devicons-react/lib/icons/FlaskOriginalWordmark";
import BootstrapOriginalWordmark from "@beta/devicons-react/lib/icons/BootstrapOriginalWordmark";
import TailwindcssPlainWordmark from "@beta/devicons-react/lib/icons/TailwindcssPlainWordmark";
// Database Management Systems
import MicrosoftsqlserverPlainWordmark from "@beta/devicons-react/lib/icons/MicrosoftsqlserverPlainWordmark";
import MysqlOriginalWordmark from "@beta/devicons-react/lib/icons/MysqlOriginalWordmark";
// Developer Tools
import GitPlainWordmark from "@beta/devicons-react/lib/icons/GitPlainWordmark";
import VisualstudioPlainWordmark from "@beta/devicons-react/lib/icons/VisualstudioPlainWordmark";
import VscodeOriginalWordmark from "@beta/devicons-react/lib/icons/VscodeOriginalWordmark";
// Libraries
import JqueryPlainWordmark from "@beta/devicons-react/lib/icons/JqueryPlainWordmark";
import ReactOriginalWordmark from "@beta/devicons-react/lib/icons/ReactOriginalWordmark";

import { CircleOffIcon } from "lucide-react";

export type IconType = {
  name: string;
  Icon: ElementType;
};

export const iconData: IconType[] = [
  {
    name: "C# 5.0",
    Icon: CsharpPlain,
  },
  {
    name: "Visual Basic .NET",
    Icon: DotNetOriginalWordmark,
  },
  {
    name: "Java",
    Icon: JavaOriginalWordmark,
  },
  {
    name: "PHP",
    Icon: PhpOriginal,
  },
  {
    name: "Python",
    Icon: PythonOriginalWordmark,
  },
  {
    name: "TypeScript",
    Icon: TypescriptOriginal,
  },
  {
    name: "JavaScript",
    Icon: JavascriptOriginal,
  },
  {
    name: "Laravel",
    Icon: LaravelOriginalWordmark,
  },
  {
    name: "Laravel Livewire",
    Icon: LivewireOriginalWordmark,
  },
  {
    name: "Flask",
    Icon: FlaskOriginalWordmark,
  },
  {
    name: "Bootstrap",
    Icon: BootstrapOriginalWordmark,
  },
  {
    name: "TailwindCSS",
    Icon: TailwindcssPlainWordmark,
  },
  {
    name: "Microsoft SQL Server",
    Icon: MicrosoftsqlserverPlainWordmark,
  },
  {
    name: "MySQL",
    Icon: MysqlOriginalWordmark,
  },
  {
    name: "Git",
    Icon: GitPlainWordmark,
  },
  {
    name: "Microsoft Visual Studio",
    Icon: VisualstudioPlainWordmark,
  },
  {
    name: "Visual Studio Code",
    Icon: VscodeOriginalWordmark,
  },
  {
    name: "jQuery",
    Icon: JqueryPlainWordmark,
  },
  {
    name: "React",
    Icon: ReactOriginalWordmark,
  },
];

export const getIconForTechnology = (technologyName: string): IconType => {
  const icon = iconData.find(
    (icon) => icon.name.toLowerCase() === technologyName.toLowerCase(),
  );
  return {
    name: technologyName,
    Icon: icon ? icon.Icon : CircleOffIcon,
  };
};

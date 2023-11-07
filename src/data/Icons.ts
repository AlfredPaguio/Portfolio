import { ElementType } from "react";
import {
  // Programming Languages
  CsharpPlain,
  DotNetOriginalWordmark,
  JavaOriginalWordmark,
  PhpOriginal,
  PythonOriginalWordmark,
  TypescriptOriginal,
  JavascriptOriginal,
  // Frameworks
  LaravelOriginal,
  LivewireOriginalWordmark,
  FlaskOriginalWordmark,
  BootstrapOriginalWordmark,
  TailwindcssPlainWordmark,
  // Database Management Systems
  MicrosoftsqlserverPlainWordmark,
  MysqlOriginalWordmark,
  // Developer Tools
  GitPlain,
  AndroidstudioOriginalWordmark,
  VisualstudioPlainWordmark,
  VscodeOriginalWordmark,
  // Libraries
  JqueryPlainWordmark,
  ReactOriginalWordmark,
} from "@beta/devicons-react";
import { Technologies } from "./Technologies";
import { CircleOffIcon } from "lucide-react";

export type IconType = {
  name: string;
  Icon: ElementType;
};

export const iconData: IconType[] = [
  {
    name: "C#",
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
    Icon: LaravelOriginal,
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
    Icon: GitPlain,
  },
  {
    name: "Android Studio",
    Icon: AndroidstudioOriginalWordmark,
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

// map
export const technologiesWithIcons = Technologies.map((tech) => ({
  ...tech,
  programmingLanguages: tech.programmingLanguages.map((name) => {
    const icon = iconData.find((icon) => icon.name === name);
    return {
      name,
      Icon: icon ? icon.Icon : CircleOffIcon,
    };
  }),
  frameworks: tech.frameworks.map((name) => {
    const icon = iconData.find((icon) => icon.name === name);
    return {
      name,
      Icon: icon ? icon.Icon : CircleOffIcon,
    };
  }),
  libraries: tech.libraries.map((name) => {
    const icon = iconData.find((icon) => icon.name === name);
    return {
      name,
      Icon: icon ? icon.Icon : CircleOffIcon,
    };
  }),
  developerTools: tech.developerTools.map((name) => {
    const icon = iconData.find((icon) => icon.name === name);
    return {
      name,
      Icon: icon ? icon.Icon : CircleOffIcon,
    };
  }),
  databaseManagementSystems: tech.databaseManagementSystems.map((name) => {
    const icon = iconData.find((icon) => icon.name === name);
    return {
      name,
      Icon: icon ? icon.Icon : CircleOffIcon,
    };
  }),
}));

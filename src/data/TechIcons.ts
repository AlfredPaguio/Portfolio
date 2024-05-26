import { ElementType } from "react";
import dynamic from 'next/dynamic'

const iconImports = {
  // Programming Languages
  "C# 5.0": () => import("@beta/devicons-react/lib/icons/CsharpPlain"),
  "Visual Basic .NET": () =>
    import("@beta/devicons-react/lib/icons/DotNetOriginalWordmark"),
  Java: () => import("@beta/devicons-react/lib/icons/JavaOriginal"),
  PHP: () => import("@beta/devicons-react/lib/icons/PhpOriginal"),
  Python: () => import("@beta/devicons-react/lib/icons/PythonOriginal"),
  TypeScript: () => import("@beta/devicons-react/lib/icons/TypescriptOriginal"),
  JavaScript: () => import("@beta/devicons-react/lib/icons/JavascriptOriginal"),
  // Frameworks
  Laravel: () =>
    import("@beta/devicons-react/lib/icons/LaravelOriginal"),
  Livewire: () =>
    import("@beta/devicons-react/lib/icons/LivewireOriginal"),
  Flask: () => import("@beta/devicons-react/lib/icons/FlaskOriginal"),
  Bootstrap: () =>
    import("@beta/devicons-react/lib/icons/BootstrapOriginalWordmark"),
  "Tailwind CSS": () =>
    import("@beta/devicons-react/lib/icons/TailwindcssOriginal"),
  // Database Management Systems
  "Microsoft SQL Server": () =>
    import("@beta/devicons-react/lib/icons/MicrosoftsqlserverOriginal"),
  MySQL: () => import("@beta/devicons-react/lib/icons/MysqlOriginalWordmark"),
  //Developer Tools
  Git: () => import("@beta/devicons-react/lib/icons/GitOriginal"),
  "Visual Studio": () =>
    import("@beta/devicons-react/lib/icons/VisualstudioPlainWordmark"),
  "VS Code": () =>
    import("@beta/devicons-react/lib/icons/VscodeOriginal"),
  // Libraries
  jQuery: () => import("@beta/devicons-react/lib/icons/JqueryPlainWordmark"),
  React: () => import("@beta/devicons-react/lib/icons/ReactOriginal"),
  "Next.js": () => import("@beta/devicons-react/lib/icons/NextjsOriginal"),
};

import { CircleOffIcon } from "lucide-react";

export type IconType = {
  name: string;
  Icon: ElementType;
};

export const iconData: IconType[] = [
  {
    name: "C# 5.0",
    Icon: dynamic(() => iconImports["C# 5.0"]()),
  },
  {
    name: "Visual Basic .NET",
    Icon: dynamic(() => iconImports["Visual Basic .NET"]()),
  },
  {
    name: "Java",
    Icon: dynamic(() => iconImports["Java"]()),
  },
  {
    name: "PHP",
    Icon: dynamic(() => iconImports["PHP"]()),
  },
  {
    name: "Python",
    Icon: dynamic(() => iconImports["Python"]()),
  },
  {
    name: "TypeScript",
    Icon: dynamic(() => iconImports["TypeScript"]()),
  },
  {
    name: "JavaScript",
    Icon: dynamic(() => iconImports["JavaScript"]()),
  },
  {
    name: "Laravel",
    Icon: dynamic(() => iconImports["Laravel"]()),
  },
  {
    name: "Laravel Livewire",
    Icon: dynamic(() => iconImports["Livewire"]()),
  },
  {
    name: "Flask",
    Icon: dynamic(() => iconImports["Flask"]()),
  },
  {
    name: "Bootstrap",
    Icon: dynamic(() => iconImports["Bootstrap"]()),
  },
  {
    name: "TailwindCSS",
    Icon: dynamic(() => iconImports["Tailwind CSS"]()),
  },
  {
    name: "Microsoft SQL Server",
    Icon: dynamic(() => iconImports["Microsoft SQL Server"]()),
  },
  {
    name: "MySQL",
    Icon: dynamic(() => iconImports["MySQL"]()),
  },
  {
    name: "Git",
    Icon: dynamic(() => iconImports["Git"]()),
  },
  {
    name: "Microsoft Visual Studio",
    Icon: dynamic(() => iconImports["Visual Studio"]()),
  },
  {
    name: "Visual Studio Code",
    Icon: dynamic(() => iconImports["VS Code"]()),
  },
  {
    name: "jQuery",
    Icon: dynamic(() => iconImports["jQuery"]()),
  },
  {
    name: "React",
    Icon: dynamic(() => iconImports["React"]()),
  },
  {
    name: "Next.js",
    Icon: dynamic(() => iconImports["Next.js"]()),
  },
];

const iconCache: { [key: string]: IconType } = {};

export const getIconForTechnology = (technologyName: string): IconType => {
  if (typeof technologyName !== "string") {
    console.error(`Invalid technologyName: ${technologyName}`);
    return {
      name: technologyName,
      Icon: CircleOffIcon,
    };
  }
  const lowerCaseTechnologyName = technologyName.toLowerCase();

  if (iconCache[lowerCaseTechnologyName]) {
    return iconCache[lowerCaseTechnologyName];
  }

  const icon = iconData.find(
    (icon) => icon.name.toLowerCase() === lowerCaseTechnologyName
  );

  if (!icon) {
    console.error(`Icon not found for technology: ${technologyName}`);
    const defaultIcon: IconType = {
      name: technologyName,
      Icon: CircleOffIcon,
    };
    iconCache[lowerCaseTechnologyName] = defaultIcon;
    return defaultIcon;
  }

  iconCache[lowerCaseTechnologyName] = {
    name: technologyName,
    Icon: icon.Icon,
  };

  return iconCache[lowerCaseTechnologyName];
};

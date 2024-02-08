import { ElementType, lazy } from "react";

const iconImports = {
  // Programming Languages
  "C# 5.0": () => import("@beta/devicons-react/lib/icons/CsharpPlain"),
  "Visual Basic .NET": () =>
    import("@beta/devicons-react/lib/icons/DotNetOriginalWordmark"),
  Java: () => import("@beta/devicons-react/lib/icons/JavaOriginalWordmark"),
  PHP: () => import("@beta/devicons-react/lib/icons/PhpOriginal"),
  Python: () => import("@beta/devicons-react/lib/icons/PythonOriginalWordmark"),
  TypeScript: () => import("@beta/devicons-react/lib/icons/TypescriptOriginal"),
  JavaScript: () => import("@beta/devicons-react/lib/icons/JavascriptOriginal"),
  // Frameworks
  Laravel: () =>
    import("@beta/devicons-react/lib/icons/LaravelOriginalWordmark"),
  Livewire: () =>
    import("@beta/devicons-react/lib/icons/LivewireOriginalWordmark"),
  Flask: () => import("@beta/devicons-react/lib/icons/FlaskOriginalWordmark"),
  Bootstrap: () =>
    import("@beta/devicons-react/lib/icons/BootstrapOriginalWordmark"),
  "Tailwind CSS": () =>
    import("@beta/devicons-react/lib/icons/TailwindcssPlainWordmark"),
  // Database Management Systems
  "Microsoft SQL Server": () =>
    import("@beta/devicons-react/lib/icons/MicrosoftsqlserverPlainWordmark"),
  MySQL: () => import("@beta/devicons-react/lib/icons/MysqlOriginalWordmark"),
  //Developer Tools
  Git: () => import("@beta/devicons-react/lib/icons/GitPlainWordmark"),
  "Visual Studio": () =>
    import("@beta/devicons-react/lib/icons/VisualstudioPlainWordmark"),
  "VS Code": () =>
    import("@beta/devicons-react/lib/icons/VscodeOriginalWordmark"),
  // Libraries
  jQuery: () => import("@beta/devicons-react/lib/icons/JqueryPlainWordmark"),
  React: () => import("@beta/devicons-react/lib/icons/ReactOriginalWordmark"),
};

import { CircleOffIcon } from "lucide-react";

export type IconType = {
  name: string;
  Icon: ElementType;
};

export const iconData: IconType[] = [
  {
    name: "C# 5.0",
    Icon: lazy(() => iconImports["C# 5.0"]()),
  },
  {
    name: "Visual Basic .NET",
    Icon: lazy(() => iconImports["Visual Basic .NET"]()),
  },
  {
    name: "Java",
    Icon: lazy(() => iconImports["Java"]()),
  },
  {
    name: "PHP",
    Icon: lazy(() => iconImports["PHP"]()),
  },
  {
    name: "Python",
    Icon: lazy(() => iconImports["Python"]()),
  },
  {
    name: "TypeScript",
    Icon: lazy(() => iconImports["TypeScript"]()),
  },
  {
    name: "JavaScript",
    Icon: lazy(() => iconImports["JavaScript"]()),
  },
  {
    name: "Laravel",
    Icon: lazy(() => iconImports["Laravel"]()),
  },
  {
    name: "Laravel Livewire",
    Icon: lazy(() => iconImports["Livewire"]()),
  },
  {
    name: "Flask",
    Icon: lazy(() => iconImports["Flask"]()),
  },
  {
    name: "Bootstrap",
    Icon: lazy(() => iconImports["Bootstrap"]()),
  },
  {
    name: "TailwindCSS",
    Icon: lazy(() => iconImports["Tailwind CSS"]()),
  },
  {
    name: "Microsoft SQL Server",
    Icon: lazy(() => iconImports["Microsoft SQL Server"]()),
  },
  {
    name: "MySQL",
    Icon: lazy(() => iconImports["MySQL"]()),
  },
  {
    name: "Git",
    Icon: lazy(() => iconImports["Git"]()),
  },
  {
    name: "Microsoft Visual Studio",
    Icon: lazy(() => iconImports["Visual Studio"]()),
  },
  {
    name: "Visual Studio Code",
    Icon: lazy(() => iconImports["VS Code"]()),
  },
  {
    name: "jQuery",
    Icon: lazy(() => iconImports["jQuery"]()),
  },
  {
    name: "React",
    Icon: lazy(() => iconImports["React"]()),
  },
];

export const getIconForTechnology = (technologyName: string): IconType => {
  if (typeof technologyName !== "string") {
    console.error(`Invalid technologyName: ${technologyName}`);
    return {
      name: technologyName,
      Icon: CircleOffIcon,
    };
  }
  const lowerCaseTechnologyName = technologyName.toLowerCase();

  const icon = iconData.find(
    (icon) => icon.name.toLowerCase() === lowerCaseTechnologyName
  );

  if (!icon) {
    console.error(`Icon not found for technology: ${technologyName}`);
    return {
      name: technologyName,
      Icon: CircleOffIcon,
    };
  }

  return {
    name: technologyName,
    Icon: icon.Icon,
  };
};

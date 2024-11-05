import { iconImports } from "@/data/TechIcons";
import {
  SiFacebook,
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { CircleOff, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = {
  github: (props: IconProps) => <SiGithub {...props} />,
  facebook: (props: IconProps) => <SiFacebook {...props} />,
  linkedin: (props: IconProps) => <SiLinkedin {...props} />,
  goToWebsite: (props: IconProps) => <ExternalLink {...props} />,
};

// Outside icon library
const externalIcons: Record<string, string> = {
  elysiajs: "https://elysiajs.com/assets/elysia.svg",
};

//test
export function getTechIcon(name: string) {
  const lowerCaseName = name.toLowerCase();
  const importFunc =
    (iconImports as any)[name] || (iconImports as any)[lowerCaseName];
  if (importFunc) {
    return dynamic(importFunc);
  }

  const externalIconUrl = externalIcons[lowerCaseName];
  if (externalIconUrl) {
    return () => (
      <img src={externalIconUrl} alt={`${name} icon`} className="size-4" />
    );
  }

  console.warn(`Icon not found for: ${name}`);
  return CircleOff;
}

import { iconImports } from "@/data/TechIcons";
import { cn } from "@/utils/cn";
import {
  SiFacebook,
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { CircleOff, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import * as React from "react";

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = {
  github: Object.assign((props: IconProps) => <SiGithub {...props} />, {
    displayName: "GithubIcon",
  }),
  facebook: Object.assign((props: IconProps) => <SiFacebook {...props} />, {
    displayName: "FacebookIcon",
  }),
  linkedin: Object.assign((props: IconProps) => <SiLinkedin {...props} />, {
    displayName: "LinkedinIcon",
  }),
  goToWebsite: Object.assign(
    (props: IconProps) => <ExternalLink {...props} />,
    { displayName: "GoToWebsiteIcon" },
  ),
};

// Outside icon library
const externalIcons: Record<string, string | JSX.Element> = {
  elysiajs: "https://elysiajs.com/assets/elysia.svg",
  "inertia.js": (
    <svg
      className="block size-4 fill-current text-white"
      viewBox="0 0 275.3 50.5"
      // style={{ height: "25px" }}
    >
      <path d="M231.2 16.1h-17.8l17.2 17.2-17.2 17.2h17.8l17.2-17.2z"></path>
      <path d="M258.1 16.1h-17.8l17.2 17.2-17.2 17.2h17.8l17.2-17.2z"></path>
      <path d="M6 15.3h10.3l-6 34.2H0l6-34.2zm.6-9.1C7.2 2.9 10.3 0 13.7 0s5.7 2.8 5.2 6.2c-.5 3.4-3.7 6.2-7.2 6.2s-5.6-3-5.1-6.2zM54.3 28.5l-3.7 21H40.4L43.8 30c.8-4.4-1.6-6.2-4.9-6.2-3.4 0-6.5 2-7.5 6.6L28 49.5H17.8l6-34.2h10.3l-.5 3.2c2.3-2.6 6.2-4.2 10.1-4.2 6.9.1 12.2 5.1 10.6 14.2zM94.5 32.4c-.1.8-.5 2.7-1.1 4.1H68.9c.6 3.8 3.8 4.8 7 4.8 2.9 0 5.2-.8 7.2-2.7l7.2 5.9c-4 4-8.7 6-15 6-11.8 0-18-8.5-16.3-18.7a20.7 20.7 0 0 1 20.5-17.4c9.8 0 16.9 7.6 15 18zm-9.7-3.7c-.3-3.8-3-5.3-6.2-5.3a8.9 8.9 0 0 0-8.3 5.3h14.5zM123.9 14.6l-2 11.6c-4-.6-10.5.8-11.7 7.8l.1-.4-2.8 15.9H97.3l6-34.2h10.3l-1.1 6.2c2.1-4.7 6.6-6.9 11.4-6.9zM137.8 37.3c-.5 3.1 2 3.3 6.6 2.9l-1.6 9.3c-12.3 1.4-16.9-2.7-15.2-12.2l2.1-12.1h-5.5l1.8-9.9h5.4l1.2-6.5 10.8-3.1-1.7 9.6h7.1l-1.8 9.9h-7l-2.2 12.1zM155.3 15.3h10.3l-6 34.2h-10.3l6-34.2zm.6-9.1c.5-3.3 3.7-6.2 7.1-6.2s5.7 2.8 5.2 6.2c-.5 3.4-3.7 6.2-7.2 6.2s-5.7-3-5.1-6.2zM208.1 15.3l-6 34.2h-10.3l.4-2.3a15.5 15.5 0 0 1-10.3 3.3c-11.1 0-15.3-9.6-13.5-18.9 1.6-8.8 8.6-17.2 19.2-17.2 4.5 0 7.7 1.8 9.6 4.6l.6-3.6h10.3zm-13.2 17.2c.9-5.2-1.9-8.4-6.6-8.4a9.5 9.5 0 0 0-9.5 8.3c-.9 5.1 1.8 8.3 6.6 8.3 4.6.1 8.6-3.1 9.5-8.2z"></path>
    </svg>
  ),
  "beautiful soup": "https://www.crummy.com/software/BeautifulSoup/10.1.jpg",
  "shadcn/ui": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="size-4"
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      ></line>
    </svg>
  ),
};

// Cache for dynamic imports
const iconCache = new Map();

//test
export function getTechIcon(name: string) {
  const lowerCaseName = name.trim().toLowerCase();

  if (iconCache.has(lowerCaseName)) {
    return iconCache.get(lowerCaseName);
  }

  // I need to lowercase the key of the object so I did this
  const normalizedImports = Object.fromEntries(
    Object.entries(iconImports).map(([key, value]) => [
      key.toLowerCase(),
      value,
    ]),
  );

  const importFunc = normalizedImports[lowerCaseName];

  if (importFunc) {
    const DynamicIcon = dynamic(importFunc, {
      loading: () => <CircleOff />,
      ssr: false,
    });
    DynamicIcon.displayName = `${name} Icon`;
    iconCache.set(lowerCaseName, DynamicIcon);
    return DynamicIcon;
    // return dynamic(importFunc);
  }

  const externalIcon = externalIcons[lowerCaseName];
  if (typeof externalIcon === "string") {
    const ImageIcon: React.FC<IconProps> = (props) => (
      <img
        src={externalIcon}
        alt={`${name} icon`}
        className={cn("size-4 pl-1", props.className)}
      />
    );
    ImageIcon.displayName = `${name} ImageIcon`;
    iconCache.set(lowerCaseName, ImageIcon);
    return ImageIcon;

    // Return an <img> element for URL-based icons
  } else if (externalIcon) {
    const SVGIcon: Icon = React.forwardRef((props, ref) =>
      React.cloneElement(externalIcon as React.ReactElement, { ...props, ref }),
    );
    SVGIcon.displayName = `${name} SVGIcon`;
    iconCache.set(lowerCaseName, SVGIcon);
    return SVGIcon;
    // Return the SVG element directly if it’s JSX
  }

  console.warn(`Icon not found for: ${name}`);
  return CircleOff;
}

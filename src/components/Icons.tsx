import {
  SiFacebook,
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

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

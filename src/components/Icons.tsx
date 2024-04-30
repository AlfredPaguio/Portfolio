import { SiFacebook, SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
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
  github: (props: IconProps) => <SiGithub {...props} />,
  facebook: (props: IconProps) => <SiFacebook {...props} />,
  linkedin: (props: IconProps) => <SiLinkedin {...props} />,
  goToWebsite: (props: IconProps) => <ExternalLink {...props} />,
};

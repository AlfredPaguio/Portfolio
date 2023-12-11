import GithubOriginal from "@beta/devicons-react/lib/icons/GithubOriginal";
import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ElementType } from "react";
import { VariantProps } from "class-variance-authority";

const linkIcons: { [key: string]: ElementType } = {
  Website: ArrowUpRight,
  GitHub: GithubOriginal,
};

type GenerateLinkIconsProps = {
  links?: { [key: string]: string };
  displayText?: boolean;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
};

const generateLinkIcons = ({
  links,
  displayText = false,
  className,
  variant = "ghost",
}: GenerateLinkIconsProps) => {
  if (!links) return null;

  return Object.entries(links).map(([linkText, linkUrl], index) => {
    const Icon = linkIcons[linkText];

    return (
      <Button
        key={index}
        variant={variant}
        className={className}
        size={Icon && displayText ? "default" : "icon"}
        asChild
      >
        <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
          {Icon && <Icon />}
          {displayText && <span className="ml-1">{linkText}</span>}
        </Link>
      </Button>
    );
  });
};

type LinkButtonIconsProps = {
  links?: GenerateLinkIconsProps["links"];
  displayText?: boolean;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
};

const LinkButtonIcons = ({
  links,
  displayText,
  className,
  variant,
}: LinkButtonIconsProps) => {
  return <>{generateLinkIcons({ links, displayText, className, variant })}</>;
};

export default LinkButtonIcons;

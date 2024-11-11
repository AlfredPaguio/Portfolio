import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@@/src/utils/cn";
import { XCircle } from "lucide-react";
import { ReactNode } from "react";

type TechButtonProps = {
  technology: string;
  isSelected?: boolean;
  hasCloseIcon?: boolean;
  onClickTechnology: () => void;
  children?: ReactNode;
  className?: string;
};

export default function TechPillButton({
  technology,
  isSelected = false,
  hasCloseIcon = false,
  children = null,
  className,
  onClickTechnology,
}: TechButtonProps) {
  return (
    <Button
      onClick={onClickTechnology}
      className={cn(
        badgeVariants({ variant: "default" }),
        `shrink-0 ${
          isSelected
            ? "bg-accent hover:bg-primary focus:outline-none"
            : "bg-secondary hover:bg-accent"
        }`,
        className,
      )}
    >
      {technology}
      {children}
      {hasCloseIcon && <XCircle className="shrink-0 pl-1" />}
    </Button>
  );
}

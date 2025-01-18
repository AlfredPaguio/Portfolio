import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@@/src/utils/cn";
import { XIcon } from "lucide-react";
import { ReactNode } from "react";

type TechButtonProps = {
  isSelected?: boolean;
  hasCloseIcon?: boolean;
  onClickTechnology: () => void;
  children?: ReactNode;
  className?: string;
};

export default function TechPillButton({
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
        `flex h-auto shrink-0 px-2 py-1 text-xs transition-colors`,
        isSelected
          ? badgeVariants({ variant: "accent" })
          : badgeVariants({ variant: "secondary" }),
        className,
      )}
    >
      {children}
      {hasCloseIcon && <XIcon className="shrink-0 pl-1" />}
    </Button>
  );
}

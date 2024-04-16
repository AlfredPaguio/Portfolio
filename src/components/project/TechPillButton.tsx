import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@@/src/utils/cn";
import { XCircle } from "lucide-react";

type TechButtonProps = {
  technology: string;
  isSelected?: boolean;
  hasCloseIcon?: boolean;
  onClickTechnology: () => void;
};

export default function TechPillButton({
  technology,
  // isSelected = false,
  hasCloseIcon = true,
  onClickTechnology,
}: TechButtonProps) {
  return (
    <Button
      onClick={onClickTechnology}
      className={cn(badgeVariants({ variant: "default" }), `shrink-0`)}
    >
      {/* <Button
      onClick={onClickTechnology}
      className={cn(badgeVariants({ variant: "default" }),`shrink-0 ${
        isSelected
          ? "bg-accent hover:bg-blue-600 focus:outline-none"
          : "bg-blue-500 hover:bg-blue-600"
      }`)}
    > */}
      {/* will remove that isSelected*/}
      {technology}
      {hasCloseIcon && <XCircle className="shrink-0 pl-1" />}
    </Button>
  );
}

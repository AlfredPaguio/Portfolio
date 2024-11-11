import { cn } from "@/utils/cn";
import { getTechIcon } from "./Icons";

function IconComponent({
  techName,
  className,
}: {
  techName: string;
  className?: string;
}) {
  // const TechIcon: IconType = getIconForTechnology(techName);
  const TechIcon = getTechIcon(techName);
  return <TechIcon className={cn(`size-4`, className)} />;
}

export { IconComponent };

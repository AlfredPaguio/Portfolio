import { getIconForTechnology, IconType } from "@/data/TechIcons";
import { cn } from "@/utils/cn";

function IconComponent({
  techName,
  className,
}: {
  techName: string;
  className?: string;
}) {
  const TechIcon: IconType = getIconForTechnology(techName);
  return <TechIcon.Icon className={cn(`size-4`, className)} />;
}

export { IconComponent };

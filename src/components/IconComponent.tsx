import { cn } from "@/utils/cn";
import { getTechIcon } from "./Icons";

function IconComponent({
  techName,
  className,
}: {
  techName: string;
  className?: string;
}) {
  const invertedTags = ["express.js", "flask", "next.js", "inertia.js"];

  // const TechIcon: IconType = getIconForTechnology(techName);
  const TechIcon = getTechIcon(techName);
  return (
    <TechIcon
      className={cn(
        `size-4`,
        invertedTags.includes(techName.toLowerCase()) ? "dark:invert" : "",
        className,
      )}
    />
  );
}

export { IconComponent };

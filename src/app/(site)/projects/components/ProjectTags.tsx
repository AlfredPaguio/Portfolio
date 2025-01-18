import { IconComponent } from "@/components/IconComponent";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

interface ProjectTagsProps {
  tags: readonly string[];
}

export default function ProjectTags({ tags }: ProjectTagsProps) {
  if (!tags || tags.length === 0) return null;

  const invertedTags = ["express.js", "flask", "next.js", "inertia.js"];

  return (
    <div className="flex flex-wrap items-center space-x-2 space-y-2">
      <Tag className="size-4" />
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="secondary"
          className="flex flex-wrap gap-x-2 text-xs"
        >
          <IconComponent
            techName={tag}
            className={`${invertedTags.includes(tag.toLowerCase()) ? "dark:invert" : ""}`}
          />
          {tag}
        </Badge>
      ))}
    </div>
  );
}

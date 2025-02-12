import { IconComponent } from "@/components/IconComponent";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

interface ProjectTagsProps {
  tags: readonly string[];
  otherTags?: readonly string[];
}

export default function ProjectTags({
  tags,
  otherTags = [],
}: ProjectTagsProps) {
  if (!tags?.length && !otherTags?.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Tag className="size-4" />
      {tags?.map((tag) => (
        <Badge
          variant="secondary"
          key={tag}
          className="flex flex-wrap gap-x-2 text-xs"
        >
          <IconComponent techName={tag} />
          {tag}
        </Badge>
      ))}
      {otherTags?.map((tag) => (
        <Badge
          variant="secondary"
          key={tag}
          className="flex flex-wrap gap-x-2 text-xs"
        >
          <IconComponent techName={tag} />
          {tag}
        </Badge>
      ))}
    </div>
  );
}

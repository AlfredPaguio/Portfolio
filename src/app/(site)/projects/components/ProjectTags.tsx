import { IconComponent } from "@/components/IconComponent";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";

interface ProjectTagsProps {
  tags: readonly string[];
}

export default function ProjectTags({ tags }: ProjectTagsProps) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex items-center space-x-2">
      <Tag className="size-4" />
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary" className="text-xs space-x-2">
          <IconComponent techName={tag} className="size-16" />
          {tag}
        </Badge>
      ))}
    </div>
  );
}

"use client";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IconType, getIconForTechnology } from "@/data/Icons";

type TechnologyIconsProps = {
  Stacks: string[];
};

export default function TechnologyIcons({ Stacks }: TechnologyIconsProps) {
  const stackWithIcons: IconType[] = Stacks.map((stack) =>
    getIconForTechnology(stack)
  );

  return (
    <TooltipProvider>
      {stackWithIcons.map((stack, key) => (
        <Tooltip key={key}>
          <TooltipTrigger>
            <Badge variant="outline">
              <stack.Icon size={32} />
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>{stack.name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  );
}

import { Badge } from "@/components/ui/badge";
import { IconType, getIconForTechnology } from "@/data/Icons";

type TechnologyIconsProps = {
  Stacks: string[];
};

export default function TechnologyIcons({ Stacks }: TechnologyIconsProps) {
  const stackWithIcons: IconType[] = Stacks.map((stack) =>
    getIconForTechnology(stack),
  );

  return (
    <div className="flex space-x-4">
      {stackWithIcons.map((stack, key) => (
        <Badge key={key} variant={"ghost"}>
          <stack.Icon key={key} size={32}/>
        </Badge>
      ))}
    </div>
  );
}

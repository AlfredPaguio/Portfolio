import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type TechButtonProps = {
  technology: string;
  isSelected: boolean;
  onChangeTechnology: () => void;
};

export default function TechCheckbox({
  technology,
  isSelected,
  onChangeTechnology,
}: TechButtonProps) {
  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox className="shrink-0 accent-accent hover:accent-secondary" id={technology} checked={isSelected} onCheckedChange={onChangeTechnology}/>
        <Label htmlFor={technology}>
          {technology}
        </Label>
      </div>
    </>
  );
}

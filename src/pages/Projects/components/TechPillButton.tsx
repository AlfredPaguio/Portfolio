import { XCircle } from "lucide-react";

type TechButtonProps = {
  technology: string;
  isSelected?: boolean;
  hasCloseIcon?: boolean;
  onClickTechnology: () => void;
};

export default function TechPillButton({
  technology,
  isSelected = false,
  hasCloseIcon = true,
  onClickTechnology,
}: TechButtonProps) {
  return (
    <button
      onClick={onClickTechnology}
      className={`inline-flex shrink-0 items-center overflow-hidden rounded-full py-1 pl-3 pr-2 text-sm font-medium ${
        isSelected
          ? "bg-blue-500 hover:bg-blue-600 focus:outline-none"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {technology}
      {hasCloseIcon && <XCircle className="shrink-0 pl-1" />}
    </button>
  );
}

type TechButtonProps = {
  technology: string;
  isSelected: boolean;
  onClickTechnology: () => void;
};

export default function TechButton({
  technology,
  isSelected,
  onClickTechnology,
}: TechButtonProps) {
  return (
    <button
      onClick={onClickTechnology}
      className={`whitespace-nowrap rounded-lg px-3 py-1 text-black ${
        isSelected ? "bg-accent" : "bg-slate-300"
      }`}
    >
      {technology}
    </button>
  );
}

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
      <div className="flex items-center">
        <input type="checkbox" className="shrink-0 accent-accent hover:accent-secondary" id={technology} checked={isSelected} onChange={onChangeTechnology}/>
        <label htmlFor={technology} className="ml-2 flex-1">
          {technology}
        </label>
      </div>
    </>
  );
}

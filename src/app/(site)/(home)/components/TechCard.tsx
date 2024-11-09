// import ColorThief from "colorthief";
import { IconComponent } from "@/components/IconComponent";

interface TechCardProps {
  name: string;
  description: string;
}

const TechCard = ({ name, description }: TechCardProps) => {
  return (
    <div className="flex items-center flex-1 gap-5 rounded-xl border border-border bg-card p-2.5 transition-colors duration-200 hover:bg-accent">
      <div
        aria-hidden="true"
        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0"
      >
        <IconComponent techName={name} />
      </div>
      <div>
        <h4 className="text-lg font-medium">{name}</h4>
        <p className="text-dark-200/70 text-sm dark:text-white/70">
          {description ?? "No description"}
        </p>
      </div>
    </div>
  );
};

export default TechCard;

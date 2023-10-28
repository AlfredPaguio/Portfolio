import { ChevronDown, ChevronUp, FilterIcon, XIcon } from "lucide-react";
import TechPillButton from "../components/TechPillButton";
import {
  ACTIONS,
  TechnologiesContextType,
} from "../contexts/TechnologiesContext";
import { ReactNode, useState } from "react";

type FilterListBarProps = {
  children: ReactNode;
};

export default function FilterListBar({
  dispatch,
  selectedTechnologies,
  children,
}: TechnologiesContextType & FilterListBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  const removeTechnology = (technology: string) => {
    // Check if the technology is selected
    if (selectedTechnologies.includes(technology)) {
      // If selected, remove it
      dispatch({ type: ACTIONS.REMOVE_TECH_ON_SELECTED, payload: technology });
    }
  };

  const removeFilters = () => {
    dispatch({ type: ACTIONS.REMOVE_ALL_SELECTED });
  };

  return (
    <div className="flex w-full flex-col rounded-lg bg-accent/10">
      <div className="md:text-md 3xl:text-3xl mx-auto w-full max-w-7xl px-6 py-3  text-sm  transition-all duration-300 md:flex md:items-center md:px-4 lg:text-lg xl:text-xl 2xl:text-2xl">
        <button
          type="button"
          onClick={() => setIsExpanded((e) => !e)}
          className={`order-1 inline-flex shrink-0 items-center p-2 ${
            isExpanded ? "bg-accent/30" : ""
          }`}
        >
          <FilterIcon className="mr-2 h-6 w-6" />
          <span className="font-bold">Filters</span>
          <ButtonIcon className="ml-2 h-6 w-6" />
        </button>
        {!!selectedTechnologies.length && (
          <button
            type="button"
            onClick={() => removeFilters()}
            className="order-2 ml-2 inline-flex shrink-0 items-center rounded-xl bg-red-500 p-2 md:order-4"
          >
            <XIcon className="h-6 w-6" />
          </button>
        )}
        <div className="order-3 hidden h-5 w-0.5 bg-white md:order-2 md:mx-4 md:block" />
        <div className="order-4 mt-2 flex flex-1 flex-wrap items-center gap-1 md:order-3 md:mt-0">
          {!selectedTechnologies.length && (
            <span className="py-1 pl-3 pr-2 text-sm font-medium lg:text-lg xl:text-xl 2xl:text-2xl">
              None
            </span>
          )}
          {selectedTechnologies.map((tech: string) => (
            <TechPillButton
              key={tech + " Pill"}
              isSelected={selectedTechnologies.includes(tech)}
              technology={tech}
              onClickTechnology={() => removeTechnology(tech)}
            />
          ))}
        </div>
      </div>

      {isExpanded && children}
    </div>
  );
}

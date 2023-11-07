import { ChevronDown, ChevronUp, FilterIcon, XIcon } from "lucide-react";
import TechPillButton from "../components/TechPillButton";
import {
  ACTIONS,
  useTechnologiesContext,
} from "../contexts/TechnologiesContext";
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type FilterListBarProps = {
  children: ReactNode;
};

export default function FilterListBar({ children }: FilterListBarProps) {
  const { selectedTechnologies, dispatch } = useTechnologiesContext();

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
    <div className="flex w-full flex-col items-center justify-center gap-y-2 rounded-lg">
      <Card className="bg-background-light/10 dark:bg-background-dark/10 md:text-md 3xl:text-3xl w-full max-w-7xl px-6 py-3  text-sm  transition-all duration-300 md:flex md:items-center md:px-4 lg:text-lg xl:text-xl 2xl:text-2xl">
        <Button
          variant={"ghost"}
          type="button"
          onClick={() => setIsExpanded((e) => !e)}
          className={`order-1 inline-flex shrink-0 items-center p-2 ${
            isExpanded ? "bg-accent-light/30 dark:bg-accent-dark/30" : ""
          }`}
        >
          <FilterIcon className="mr-2 h-6 w-6" />
          <span className="font-bold">Filters</span>
          <ButtonIcon className="ml-2 h-6 w-6" />
        </Button>
        {!!selectedTechnologies.length && (
          <Button
            variant={"destructive"}
            type="button"
            onClick={() => removeFilters()}
            className="order-2 ml-2 inline-flex shrink-0 items-center p-2 md:order-4"
          >
            <XIcon className="h-6 w-6" />
          </Button>
        )}
        <Separator
          orientation="vertical"
          className="bg-accent-light dark:bg-accent-dark order-3 hidden h-8 w-0.5 md:order-2 md:mx-4 md:block"
        />
        <div className="order-4 mt-2 flex flex-1 flex-wrap items-center gap-1 md:order-3 md:mt-0">
          {!selectedTechnologies.length && (
            <span className="pl-3 pr-2 text-sm font-medium lg:text-lg xl:text-xl 2xl:text-2xl">
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
      </Card>

      {isExpanded && children}
    </div>
  );
}

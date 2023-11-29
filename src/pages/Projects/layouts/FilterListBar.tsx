"use client";
import { FilterIcon, XIcon } from "lucide-react";
import TechPillButton from "../components/TechPillButton";
import {
  ACTIONS,
  useTechnologiesContext,
} from "../contexts/TechnologiesContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FilterListMenu from "./FilterListMenu";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function FilterListBar() {
  const { selectedTechnologies, dispatch } = useTechnologiesContext();

  const removeTechnology = (technology: string) => {
    // Check if the technology is selected
    if (selectedTechnologies.includes(technology)) {
      // If selected, remove it
      dispatch({ type: ACTIONS.REMOVE_TECH_ON_SELECTED, payload: technology });
    }
  };

  const removeAllFilters = () => {
    dispatch({ type: ACTIONS.REMOVE_ALL_SELECTED });
  };

  return (
      <Card className="shadow-2xl border-none md:text-md 3xl:text-3xl w-full max-w-7xl bg-background/10 px-6 py-3 text-sm transition-all duration-300 md:flex md:items-center md:px-4 lg:text-lg xl:text-xl 2xl:text-2xl">
        <Button variant={"ghost"} type="button" className={`order-1`} asChild>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant={"ghost"}
                type="button"
                className={`order-1 inline-flex shrink-0 items-center p-2`}
              >
                <FilterIcon className="mr-2 h-6 w-6" />
                <Label>Filters {selectedTechnologies.length}</Label>
              </Button>
            </SheetTrigger>
            <SheetContent side={"bottom"}>
              <SheetHeader>
                <SheetTitle>Filter by Technologies Used</SheetTitle>
                <SheetDescription>
                  Find projects based on the technologies used.
                </SheetDescription>
                {!!selectedTechnologies.length && (
                  <Button
                    type="button"
                    className="mt-4"
                    variant={"link"}
                    onClick={() => removeAllFilters()}
                  >
                    <XIcon className="h-6 w-6" /> Clear current filters
                  </Button>
                )}
              </SheetHeader>
              <ScrollArea>
                <FilterListMenu />
              </ScrollArea>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="button" className="mt-4">
                    Close
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </Button>
        {!!selectedTechnologies.length && (
          <Button
            variant={"destructive"}
            type="button"
            onClick={() => removeAllFilters()}
            size={"icon"}
            className="order-2 ml-2 inline-flex shrink-0 items-center p-2 md:order-4"
          >
            <XIcon />
          </Button>
        )}
        <Separator
          orientation="vertical"
          className="order-3 hidden h-8 w-0.5 bg-accent md:order-2 md:mx-4 md:block"
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
  );
}

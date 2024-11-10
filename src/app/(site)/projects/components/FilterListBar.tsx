"use client";
import { FilterIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  removeAllTechnology,
  removeTechnology,
} from "@@/src/app/store/technology/technology-slice";
import { useAppDispatch, useAppSelector } from "@@/src/app/store/hooks";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import FilterListMenu from "./FilterListMenu";
import { Badge } from "@/components/ui/badge";
import TechPillButton from "./TechPillButton";

type FilterListBarProps = {
  projects: ProjectTypeWithoutContent[];
};

export default function FilterListBar({ projects }: FilterListBarProps) {
  const selectedTechnologies = useAppSelector(
    (state) => state.technology.selectedTechnologies,
  );
  const dispatch = useAppDispatch();

  const handleRemoveTechnology = (technology: string) => {
    // Check if the technology is selected
    if (selectedTechnologies.includes(technology)) {
      // If selected, remove it
      dispatch(removeTechnology(technology));
    }
  };

  const handleRemoveAllFilters = () => {
    dispatch(removeAllTechnology());
  };

  return (
    <div className="md:text-md 3xl:text-3xl flex w-full flex-col text-sm md:flex-row md:items-center lg:text-lg xl:text-xl 2xl:text-2xl">
      <div className={`order-1`}>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={"secondary"}
              type="button"
              className={`order-1 inline-flex shrink-0 items-center p-2`}
            >
              <FilterIcon className="mr-2 h-6 w-6" />
              <span>Filter</span>
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
                  onClick={() => handleRemoveAllFilters()}
                >
                  <XIcon className="h-6 w-6" /> Clear current filters
                </Button>
              )}
            </SheetHeader>
            <ScrollArea>
              <FilterListMenu projects={projects} />
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

        {!!selectedTechnologies.length && (
          <Button
            variant={"destructive"}
            type="button"
            onClick={() => handleRemoveAllFilters()}
            size={"icon"}
            className="order-2 ml-2 inline-flex shrink-0 items-center p-2 md:order-4"
          >
            <XIcon />
          </Button>
        )}
      </div>

      <Separator
        orientation="vertical"
        className="order-3 hidden h-8 w-0.5 bg-accent md:order-2 md:mx-4 md:block"
      />
      <div className="order-4 mt-2 flex flex-1 flex-wrap items-center gap-2 md:order-3 md:mt-0">
        {!selectedTechnologies.length && (
          <span className="pl-3 pr-2 text-sm font-medium lg:text-lg xl:text-xl 2xl:text-2xl">
            None
          </span>
        )}
        {selectedTechnologies.length > 3 ? (
          <Badge variant="secondary" className="text-lg font-normal">
            {selectedTechnologies.length} selected
          </Badge>
        ) : (
          selectedTechnologies.map((tech: string) => (
            <TechPillButton
              key={tech + " Pill"}
              isSelected={selectedTechnologies.includes(tech)}
              technology={tech}
              onClickTechnology={() => handleRemoveTechnology(tech)}
            />
          ))
        )}
      </div>
    </div>
  );
}

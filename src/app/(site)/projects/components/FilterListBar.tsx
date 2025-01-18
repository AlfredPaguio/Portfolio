"use client";
import { IconComponent } from "@/components/IconComponent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
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
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import { useAppDispatch, useAppSelector } from "@@/src/app/store/hooks";
import {
  removeAllTechnology,
  removeTechnology,
} from "@@/src/app/store/technology/technology-slice";
import { FilterIcon, XIcon } from "lucide-react";
import FilterListMenu from "./FilterListMenu";
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
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={"secondary"}
              type="button"
              className="flex items-center gap-2"
            >
              <FilterIcon className="size-4" />
              <span>Filter</span>
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"} className="w-[300px] sm:w-[540px]">
            <ScrollArea className="h-full">
              <SheetHeader>
                <SheetTitle>Filter by Technologies Used</SheetTitle>
                <SheetDescription>
                  Find projects based on the technologies used.
                </SheetDescription>
              </SheetHeader>

              <FilterListMenu projects={projects} />

              <SheetFooter>
                <SheetClose asChild>
                  <Button type="button" className="mt-4">
                    Close
                  </Button>
                </SheetClose>
              </SheetFooter>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        {!!selectedTechnologies.length && (
          <Button
            variant={"destructive"}
            type="button"
            onClick={() => handleRemoveAllFilters()}
            size={"icon"}
            className="flex items-center gap-2"
          >
            <XIcon />
          </Button>
        )}
      </div>

      <Separator orientation="vertical" className="hidden h-8 md:block" />
      <div className="flex flex-wrap items-center gap-2">
        {!selectedTechnologies.length && (
          <span className="text-sm text-muted-foreground">
            No filters applied
          </span>
        )}
        {selectedTechnologies.length > 5 ? (
          <Badge variant="secondary" className="text-sm font-normal">
            {selectedTechnologies.length} selected
          </Badge>
        ) : (
          selectedTechnologies.map((tech: string) => (
            <TechPillButton
              key={tech + " Pill"}
              isSelected={selectedTechnologies.includes(tech)}
              onClickTechnology={() => handleRemoveTechnology(tech)}
              hasCloseIcon
            >
              <IconComponent techName={tech} key={tech} />
              {tech}
            </TechPillButton>
          ))
        )}
      </div>
    </div>
  );
}

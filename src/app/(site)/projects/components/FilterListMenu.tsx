"use client";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  addTechnology,
  removeAllTechnology,
  removeTechnology,
} from "@/app/store/technology/technology-slice";
import { IconComponent } from "@/components/IconComponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import { XIcon } from "lucide-react";
import { useState } from "react";
import TechPillButton from "./TechPillButton";

type TechCategory =
  | "programmingLanguage"
  | "library"
  | "framework"
  | "database"
  | "other";

type Project = ProjectTypeWithoutContent;

interface TechStats {
  count: number;
  projectCount: number;
  status: {
    active: number;
    archived: number;
    maintenance: number;
    unknown: number;
  };
}

type FilterListMenuProps = {
  projects: Project[];
};

export default function FilterListMenu({ projects }: FilterListMenuProps) {
  if (!projects?.length) return null;

  const [searchQuery, setSearchQuery] = useState("");
  const selectedTechnologies = useAppSelector(
    (state) => state.technology.selectedTechnologies,
  );
  const dispatch = useAppDispatch();

  //Please work pls help
  const techStats = projects.reduce(
    (acc, project) => {
      project.stack.forEach((tech) => {
        if (!acc[tech]) {
          acc[tech] = {
            count: 0,
            projectCount: 0,
            status: {
              active: 0,
              archived: 0,
              maintenance: 0,
              unknown: 0,
            },
          };
        }
        acc[tech].count++;
        acc[tech].projectCount++;
        acc[tech].status[project.status]++;
      });
      return acc;
    },
    {} as Record<string, TechStats>,
  );

  const handleTechnologyToggle = (technology: string) => {
    dispatch(
      // Check if the technology is selected
      selectedTechnologies.includes(technology)
        ? // If selected, remove it
          removeTechnology(technology)
        : // If not selected, add it
          addTechnology(technology),
    );
  };

  const handleRemoveAllFilters = () => {
    dispatch(removeAllTechnology());
  };

  // Filter by search and Sort technologies by usage frequency
  const filteredTechnologies = Object.entries(techStats)
    .filter(([tech]) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort(([, a], [, b]) => b.projectCount - a.projectCount);

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center space-x-2">
        <Input
          type="search"
          placeholder="Search technologies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Button size="icon" onClick={() => setSearchQuery("")}>
          <XIcon className="size-4" />
          <span className="sr-only">Clear Search</span>
        </Button>
      </div>
      {/* Selected technologies summary */}
      {selectedTechnologies.length > 0 && (
        <Card className="mt-2 border shadow-sm">
          <CardHeader className="py-2">
            {!!selectedTechnologies.length && (
              <Button
                type="button"
                variant={"destructive"}
                onClick={() => handleRemoveAllFilters()}
              >
                <XIcon className="h-6 w-6" /> Clear current filters
              </Button>
            )}
            <CardTitle className="pt-0 text-lg font-semibold">
              Selected Technologies ({selectedTechnologies.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-fit [&>[data-radix-scroll-area-viewport]]:max-h-[100px] md:[&>[data-radix-scroll-area-viewport]]:max-h-[150px]">
              <div className="flex flex-wrap gap-2">
                {selectedTechnologies.map((tech) => (
                  <TechPillButton
                    key={tech + " Pill"}
                    isSelected={selectedTechnologies.includes(tech)}
                    onClickTechnology={() => handleTechnologyToggle(tech)}
                    hasCloseIcon
                  >
                    <IconComponent techName={tech} key={tech} />
                    <span className="text-xs text-muted-foreground">
                      {tech} ({techStats[tech]?.projectCount || 0})
                    </span>
                  </TechPillButton>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
      {/* https://github.com/shadcn-ui/ui/issues/542#issuecomment-2015755497 */}
      <ScrollArea className="h-fit pr-4 [&>[data-radix-scroll-area-viewport]]:max-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={searchQuery ? "all" : undefined}
          defaultValue="popular"
        >
          {!searchQuery && (
            <AccordionItem value="popular">
              <AccordionTrigger>
                Most Used Technologies (Top 10)
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-3">
                  {filteredTechnologies.slice(0, 10).map(([tech, stats]) => (
                    <TechPillButton
                      key={tech}
                      isSelected={selectedTechnologies.includes(tech)}
                      onClickTechnology={() => handleTechnologyToggle(tech)}
                    >
                      <IconComponent techName={tech} key={tech} />
                      <span className="text-xs text-muted-foreground">
                        {tech} ({stats.projectCount})
                      </span>
                    </TechPillButton>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )}
          <AccordionItem value="all">
            <AccordionTrigger>
              All Technologies ({filteredTechnologies.length})
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-3">
                {filteredTechnologies.map(([tech, stats]) => (
                  <TechPillButton
                    key={tech}
                    isSelected={selectedTechnologies.includes(tech)}
                    onClickTechnology={() => handleTechnologyToggle(tech)}
                  >
                    <IconComponent techName={tech} key={tech} />
                    <span className="text-xs text-muted-foreground">
                      {tech} ({stats.projectCount})
                    </span>
                  </TechPillButton>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
    </div>
  );
}

"use client";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  addTechnology,
  removeTechnology,
} from "@/app/store/technology/technology-slice";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import TechPillButton from "./TechPillButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  const selectedTechnologies = useAppSelector(
    (state) => state.technology.selectedTechnologies,
  );
  const dispatch = useAppDispatch();

  if (!projects?.length) return null;

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

  // Sort technologies by usage frequency
  const sortedTechnologies = Object.entries(techStats).sort(
    ([, a], [, b]) => b.projectCount - a.projectCount,
  );

  return (
    <div className="space-y-6 p-4">
      <div className="flex flex-wrap gap-3">
        {sortedTechnologies.map(([tech, stats]) => (
          <TechPillButton
            key={tech + " Pill"}
            isSelected={selectedTechnologies.includes(tech)}
            technology={tech}
            onClickTechnology={() => handleTechnologyToggle(tech)}
          >
            <span className="text-xs text-secondary-foreground">
              ({stats.projectCount})
            </span>
          </TechPillButton>
        ))}
      </div>

      {/* Selected technologies summary */}
      {selectedTechnologies.length > 0 && (
         <Card className="border shadow-sm">
         <CardHeader>
           <CardTitle className="text-lg font-semibold">
             Selected Technologies ({selectedTechnologies.length})
           </CardTitle>
         </CardHeader>
         <CardContent>
           <div className="flex flex-wrap gap-2">
             {selectedTechnologies.map((tech) => (
               <TechPillButton
                 key={tech + " Pill"}
                 isSelected={selectedTechnologies.includes(tech)}
                 technology={tech}
                 onClickTechnology={() => handleTechnologyToggle(tech)}
                 className="bg-primary/10 text-foreground hover:bg-primary/20"
                 hasCloseIcon
               />
             ))}
           </div>
         </CardContent>
       </Card>
      )}
    </div>
  );
}

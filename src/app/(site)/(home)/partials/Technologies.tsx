"use client";
import { IconComponent } from "@/components/IconComponent";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TechStackType } from "@/data/fetchContent";
import { camelCaseToTitleCase } from "@/utils/camelCaseToTitleCase";
import React, { useMemo } from "react";

type TechnologiesProps = {
  techStack: TechStackType;
};

type Skill = {
  name: string;
  status: string;
  proficiency: string;
};

function Technologies({ techStack }: TechnologiesProps) {
  const filteredTechStack = useMemo(() => {
    return Object.fromEntries(
      Object.entries(techStack)
        .filter((entry) => entry[0] != "developerTools")
        .map(([category, skills]) => {
          const filteredSkills = skills
            .filter(
              (skill: Skill) =>
                skill.status === "using" || skill.status === "learning",
            )
            .map((skill: Skill) => ({
              name: skill.name,
              status: skill.status,
              proficiency: skill.proficiency,
            }));

          return [category, filteredSkills];
        })
        .filter(([, skills]) => skills.length > 0),
    );
  }, [techStack]);

  const categories = Object.keys(filteredTechStack);

  return (
    <div className="my-10 w-full">
      <h2 className="mb-6 text-center text-3xl font-bold">My Tech Stack</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{camelCaseToTitleCase(category)}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <TooltipProvider>
                <div className="flex flex-wrap gap-2">
                  {filteredTechStack[category].map((skill: Skill) => (
                    <Tooltip key={skill.name}>
                      <TooltipTrigger asChild>
                        <Badge
                          variant={
                            skill.status === "learning" ? "accent" : "secondary"
                          }
                          className="h-10 p-2"
                        >
                          <IconComponent
                            techName={skill.name}
                            className="mr-2 size-6"
                          />
                          {/* <span className="sr-only">{skill.name}</span> */}
                          <span className="text-foreground">{skill.name}</span>
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p className="font-semibold">{skill.name}</p>
                        <p className="text-sm capitalize">{skill.status}</p>
                        <p className="text-sm">
                          Proficiency: {skill.proficiency}/5
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Technologies;

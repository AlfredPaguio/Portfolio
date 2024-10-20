"use client";
import { IconComponent } from "@/components/IconComponent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TechStackType } from "@/data/fetchContent";
import { camelCaseToTitleCase } from "@/utils/camelCaseToTitleCase";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

type TechnologiesProps = {
  techStack: TechStackType;
};

function Technologies({ techStack }: TechnologiesProps) {
  const [tabIndex, setTabIndex] = useState(0);
  const categories = Object.keys(techStack);
  const techStackArray = Object.entries(techStack).map(
    ([category, skills]) => ({
      category: category,
      skills,
    }),
  );

  console.log(categories);

  const onTabChange = (value: string) => {
    const index = categories.indexOf(value);
    setTabIndex(index);
  };

  const onNextTab = () => {
    const nextIndex = (tabIndex + 1) % categories.length;
    setTabIndex(nextIndex);
  };

  const onPrevTab = () => {
    const prevIndex = (tabIndex - 1 + categories.length) % categories.length;
    setTabIndex(prevIndex);
  };

  return (
    <div className="my-10 w-full">
      <h3 className="md:leading-14 text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl">
        Technologies I've worked with
      </h3>
      <div className="mt-5">
        <TooltipProvider>
          <Tabs
            value={categories[tabIndex]}
            onValueChange={onTabChange}
            defaultValue={categories[0]}
          >
            <TabsList
              className={`h-27 grid w-full grid-cols-2 gap-2 md:h-9 md:grid-cols-5 md:gap-1 lg:grid-cols-5 xl:gap-2`}
            >
              {categories.map((category) => (
                <TabsTrigger
                  key={`trigger-${category}`}
                  value={category}
                  className={
                    "data-[state=active]:bg-gradient-to-tr col-span-2 from-blue-300 via-sky-300 to-cyan-300 data-[state=active]:text-slate-900 md:col-span-1"
                  }
                >
                  {camelCaseToTitleCase(category)}
                </TabsTrigger>
              ))}
            </TabsList>
            {techStackArray.map(({ category, skills }) => (
              <TabsContent key={category} value={category}>
                <Card key={category} className="w-full gap-y-4 p-0">
                  <CardHeader>
                    <CardTitle className="p-4">{camelCaseToTitleCase(category)}</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-5 gap-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-10">
                    {skills.map((skill) => (
                      <Tooltip key={skill}>
                        <TooltipTrigger asChild>
                          <Badge
                            // className={`h-14 p-2 sm:p-2 ${skill.level === "learning" ? "border border-green-300" : ""}`}
                            className="h-14 p-2 sm:p-2"
                            variant="outline"
                            
                          >
                            <IconComponent techName={skill} className="size-12"/>
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="w-auto">
                          {skill}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </CardContent>
                  <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span className="mx-1 inline-block h-3 w-3 rounded-full bg-green-300"></span>
                      <span>Currently Learning</span>
                    </div>
                    <Pagination className="ml-auto mr-0 w-auto">
                      <PaginationContent>
                        <PaginationItem>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6"
                            onClick={onPrevTab}
                          >
                            <ChevronLeft className="h-3.5 w-3.5" />
                            <span className="sr-only">Previous Page</span>
                          </Button>
                        </PaginationItem>
                        <PaginationItem>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6"
                            onClick={onNextTab}
                          >
                            <ChevronRight className="h-3.5 w-3.5" />
                            <span className="sr-only">Next Page</span>
                          </Button>
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </TooltipProvider>
      </div>
    </div>
  );
}

export default Technologies;

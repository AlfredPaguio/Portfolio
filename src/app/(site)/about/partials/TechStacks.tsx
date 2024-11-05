import { IconComponent } from "@/components/IconComponent";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProficiencyLabel } from "@/constant/proficiencyOptions";
import { TechStackType } from "@/data/fetchContent";
import { camelCaseToTitleCase } from "@/utils/camelCaseToTitleCase";
import { Terminal } from "lucide-react";

interface TechStackCategory {
  techStack: TechStackType;
}

export default function TechStacks({ techStack }: TechStackCategory) {
  const techStackArray = Object.entries(techStack).map(([category, items]) => ({
    category: camelCaseToTitleCase(category),
    items,
  }));

  const categories = techStackArray.map((item) => item.category);

  return (
    <div className="rounded-3xl">
      <h2 className="mb-6 flex items-center text-lg font-semibold">
        <Terminal className="size-6 text-accent" aria-hidden="true" />
        <span className="ml-3 text-sm text-accent">Technology Stacks</span>
      </h2>

      <Tabs defaultValue={techStackArray[0]?.category} className="w-full">
        <ScrollArea className="whitespace-nowrap">
          <TabsList className="mb-4 w-full justify-start gap-2 bg-transparent p-0">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {techStackArray.map(({ category, items }) => (
          <TabsContent key={category} value={category}>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.name} className="flex w-full items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0"
                  >
                    <IconComponent techName={item.name} />
                  </div>
                  <span className="grow text-sm font-medium">{item.name}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {getProficiencyLabel(Number(item.proficiency))}
                  </span>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ProjectType } from "@/data/Projects";
import TechnologyIcons from "./TechnologyIcons";

export default function CompactProjectCard({
  project,
}: {
  project: ProjectType;
}) {
  return (
    <>
      <Card className="group mx-auto flex max-w-3xl transform flex-wrap overflow-hidden antialiased shadow-lg duration-500 hover:-translate-y-1 hover:subpixel-antialiased md:flex-nowrap">
        {project.images && project.images.length > 0 && (
          <img
            className="h-960 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={project.images[0].imageUrl}
            alt=""
          />
        )}
        <CardContent className="p-0">
          <CardHeader className="items-center p-5">
            <CardTitle className="mt-4 text-2xl font-medium text-text-light dark:text-text-dark">
              {project.title}
            </CardTitle>
            {/* <CardDescription className="mt-2 text-xl leading-relaxed text-gray-400 text-clip overflow-hidden">
              {project.description}
            </CardDescription> */}
          </CardHeader>
          <CardFooter className="block p-5">
            <div className="sm:flex sm:justify-between">
              <div>
                <div className="text-lg text-text-light dark:text-text-dark">
                  Tech Stack{" "}
                  <span className="font-bold text-primary-light dark:text-primary-dark">
                    Used
                  </span>
                </div>
                <div className="flex items-center">
                  <TechnologyIcons Stacks={project.stack} />
                </div>
              </div>
            </div>
            <div className="mt-3 text-sm text-gray-600 md:text-sm">
              {project.date.toUTCString()}
              {"\n"}
              *Note: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid, eum?
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </>
  );
}

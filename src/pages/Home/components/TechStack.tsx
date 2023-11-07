import { Badge } from "@/components/ui/badge";
import { CardContent, CardTitle } from "@/components/ui/card";
import { Technologies } from "@/data/Technologies";

export default function TechStack() {
  return (
    <CardContent className="flex h-full w-full flex-col items-start gap-2 font-normal lg:w-2/5 lg:items-end">
      {Technologies.map((tech, index) => (
        <div key={index} className="flex flex-col">
          <CardTitle className="self-start py-2 text-xl font-medium lg:self-end">
            Programming Languages
          </CardTitle>
          <div className="flex flex-row flex-wrap justify-start gap-2 lg:justify-end">
            {tech.programmingLanguages.map((language: string) => (
              <Badge key={language}>{language}</Badge>
            ))}
          </div>

          <CardTitle className="self-start py-2 text-xl font-medium lg:self-end">
            Libraries
          </CardTitle>
          <div className="flex flex-row flex-wrap justify-start gap-2 lg:justify-end">
            {tech.libraries.map((library: string) => (
              <Badge key={library}>{library}</Badge>
            ))}
          </div>

          <CardTitle className="self-start py-2 text-xl font-medium lg:self-end">
            Frameworks
          </CardTitle>
          <div className="flex flex-row flex-wrap justify-start gap-2 lg:justify-end">
            {tech.frameworks.map((framework: string) => (
              <Badge key={framework}>{framework}</Badge>
            ))}
          </div>

          <CardTitle className="self-start py-2 text-xl font-medium lg:self-end">
            Developer Tools
          </CardTitle>
          <div className="flex flex-row flex-wrap justify-start gap-2 lg:justify-end">
            {tech.developerTools.map((tools: string) => (
              <Badge key={tools}>{tools}</Badge>
            ))}
          </div>

          <CardTitle className="self-start py-2 text-xl font-medium lg:self-end">
            Database Management Systems
          </CardTitle>
          <div className="flex flex-row flex-wrap justify-start gap-2 lg:justify-end">
            {tech.databaseManagementSystems.map((database: string) => (
              <Badge key={database}>{database}</Badge>
            ))}
          </div>
        </div>
      ))}
    </CardContent>
  );
}

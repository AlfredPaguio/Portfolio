import { DocumentRendererProps } from "@keystatic/core/renderer";
import Shiki from "./features/Shiki";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Badge } from "../ui/badge";
import CopyToClipboard from "../CopyToClipboard";

const ShikiCodeRenderer: DocumentRendererProps["renderers"] = {
  block: {
    code: ({ children, language = "plain" }) => {
      return (
        <ScrollArea className="relative">
          <div className="mt-4 absolute z-20 flex justify-between items-center w-full">
            <Badge variant={"accent"} className="ml-4">
              {language}
            </Badge>

            <CopyToClipboard toCopy={children} variant={"accent"} className="mr-2"/>
          </div>

          <Shiki code={children} language={language} />

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      );
    },
  },
};

export default ShikiCodeRenderer;

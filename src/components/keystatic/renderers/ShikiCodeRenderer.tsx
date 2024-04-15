import CopyToClipboard from "@/components/CopyToClipboard";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DocumentRendererProps } from "@keystatic/core/renderer";
import Shiki from "./features/Shiki";

const ShikiCodeRenderer: DocumentRendererProps["renderers"] = {
  block: {
    code: ({ children, language = "plain" }) => {
      return (
        <>
          <div className="flex w-full items-center justify-between py-2">
            <Badge variant={"accent"}>{language}</Badge>

            <CopyToClipboard
              toCopy={children}
              variant={"accent"}
              className="mr-2"
            />
          </div>
          <ScrollArea className="relative">
            <Shiki code={children} language={language} />

            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </>
      );
    },
  },
};

export default ShikiCodeRenderer;

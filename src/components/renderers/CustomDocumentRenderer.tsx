import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystatic/core/renderer";
import ShikiCodeRenderer from "./ShikiCodeRenderer";
import ComponentBlocks from "./ComponentBlocks";

export default function CustomDocumentRenderer({
  document,
}: DocumentRendererProps) {
  return (
    <DocumentRenderer
      document={document}
      renderers={ShikiCodeRenderer}
      componentBlocks={ComponentBlocks}
    />
  );
}

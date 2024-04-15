import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystatic/core/renderer";
import ShikiCodeRenderer from "./ShikiCodeRenderer";

export default function CustomDocumentRenderer({
  document,
}: DocumentRendererProps) {
  // console.table(ComponentBlocks);
  return <DocumentRenderer document={document} renderers={ShikiCodeRenderer} />;
}

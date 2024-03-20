import { DocumentRendererProps } from "@keystatic/core/renderer";
import Shiki from "./features/Shiki";

const ShikiCodeRenderer: DocumentRendererProps["renderers"] = {
  block: {
    code: ({ children, language = "plain" }) => {
      return <Shiki code={children} language={language} />;
    },
  },
};

export default ShikiCodeRenderer;

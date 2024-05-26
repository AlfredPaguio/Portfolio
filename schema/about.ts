import { fields, singleton } from "@keystatic/core";
import { contentField } from "./fields/content";

export const aboutSchema = singleton({
  label: "About",
  path: "src/content/data/about",
  entryLayout: "content",
  format: {
    contentField: "content",
  },
  schema: {
    cover: fields.image({
      label: "Cover",
      directory: "public/assets/about",
      publicPath: "/assets/about",
      validation: {
        isRequired: false,
      },
    }),
    content: contentField,
  },
});

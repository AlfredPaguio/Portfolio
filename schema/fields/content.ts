import { fields } from "@keystatic/core";

// export const contentField = fields.document({
//   label: "Content",
//   layouts: [[1], [1, 1], [1, 2], [2, 1]],
//   formatting: true,
//   links: true,
//   dividers: true,
//   tables: true,
//   componentBlocks: ComponentBlocks,
// });

export const contentField = fields.mdx({
  label: "Content",
});

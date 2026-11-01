import getReadingTime from "reading-time";
import { defineMdastPlugin } from "satteri";

export const mdastReadingTimePlugin = defineMdastPlugin({
  name: "mdast-reading-time",

  after(root, context) {
    const textOnPage = context.textContent(root);
    const readingTime = getReadingTime(textOnPage);

    if (context.data.astro != null) {
      context.data.astro.frontmatter.minutesRead = readingTime.text;
    }
  },
});

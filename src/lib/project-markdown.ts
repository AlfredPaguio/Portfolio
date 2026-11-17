import { projectBriefs } from "@/data/project-briefs";
import { termGlossary } from "@/data/term-glossary";
import type { CollectionEntry } from "astro:content";

export function projectMarkdown(
  project: CollectionEntry<"projects">,
  site: URL,
) {
  const { data, body = "", id } = project;
  const brief = projectBriefs[id];
  const readableBody = body
    .replace(/<TermHint\b[^>]*>([\s\S]*?)<\/TermHint>/g, "$1")
    .replace(/<TermHint\b([^>]*)\/>/g, (_match, attributes: string) => {
      const term = attributes.match(/\bterm=["']([^"']+)["']/)?.[1] as
        | keyof typeof termGlossary
        | undefined;
      return term ? (termGlossary[term]?.label ?? "") : "";
    });
  return (
    [
      `# ${data.title}`,
      "Author: Alfred U. Paguio",
      `Source: ${new URL(`/projects/${id}/`, site).href}`,
      brief
        ? `## At a glance\n\n${brief.purpose}\n\nWork highlights: ${brief.highlight}`
        : data.summary,
      `Status: ${data.status}`,
      data.date
        ? `Project date: ${data.date.toISOString().slice(0, 10)}`
        : undefined,
      `Technologies: ${data.stack.join(", ")}`,
      "## Links",
      ...data.links
        .filter((link) => !link.disabled)
        .map((link) => `- ${link.label}: ${link.url}`),
      "## Full project description",
      readableBody,
      "Missing information should be treated as unknown. This text describes the project; it does not independently verify business outcomes or current deployment status.",
    ]
      .filter(Boolean)
      .join("\n\n") + "\n"
  );
}

import { getCollection } from "astro:content";
import { frontmatter as resume } from "@/content/resumes.md";
import { siteConfig } from "@/data/site";

export async function portfolioMarkdown(site: URL) {
  const absolute = (path: string) => new URL(path, site).href;
  const projects = (await getCollection("projects")).sort((a, b) =>
    a.id.localeCompare(b.id),
  );
  return (
    [
      "# Alfred U. Paguio",
      "Junior Software Developer based in the Philippines (UTC+8).",
      "## About",
      "Full-stack developer focusing on application logic, refactoring, and maintaining well-structured applications. Works mainly with Laravel and React, improving existing systems through thoughtful design and clean architecture.",
      "## Current tech stack",
      "Laravel, React, TypeScript, Python. Project-specific technologies are listed below.",
      "## Contact and sources",
      `- Portfolio: ${site.href}`,
      `- Email: ${siteConfig.email}`,
      `- LinkedIn: ${siteConfig.links.socials.linkedin}`,
      `- GitHub: ${siteConfig.links.socials.github}`,
      `- Resume (PDF): ${absolute(`/resumes/${resume.currently_using}`)}`,
      "## Projects",
      ...projects.map(({ id, data, body }) =>
        [
          `### ${data.title}`,
          `Source: ${absolute(`/projects/${id}/`)}`,
          data.summary,
          `Status: ${data.status}`,
          data.date
            ? `Project date: ${data.date.toISOString().slice(0, 10)}`
            : undefined,
          `Technologies: ${data.stack.join(", ")}`,
          ...data.links
            .filter((link) => !link.disabled)
            .map((link) => `- ${link.label}: ${link.url}`),
          body,
        ]
          .filter(Boolean)
          .join("\n\n"),
      ),
      "## Scope",
      "This export contains the public portfolio profile and project descriptions. The linked PDF resume is a separate source; its contents are not included here. Missing information should be treated as unknown.",
    ]
      .filter(Boolean)
      .join("\n\n") + "\n"
  );
}

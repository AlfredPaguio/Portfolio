import {
  createMarkdownProcessor,
  parseFrontmatter,
} from "@astrojs/markdown-remark";
import type { Loader, LoaderContext } from "astro/loaders";

interface GitHubLoaderOptions {
  username: string;
  repository: string;
  branch?: string;
  token?: string;
  includePaths?: string[]; // e.g. ["projects/", "posts/"]
  excludePaths?: string[]; // e.g. ["drafts/"]
  extensions?: string[]; // e.g. [".md", ".mdx"]
}

export function myGithubLoader(options: GitHubLoaderOptions): Loader {
  const {
    username,
    repository,
    branch = "main",
    token,
    includePaths = [],
    excludePaths = [],
    extensions = [".md", ".mdx"],
  } = options;

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "astro-portfolio-loader",
  };

  if (token) headers["Authorization"] = `token ${token}`;

  return {
    name: "my-github-loader",
    load: async (context: LoaderContext) => {
      const { store, logger, parseData, config, generateDigest } = context;

      logger.info(`Fetching tree for ${username}/${repository}`);

      // Get the file tree from GitHub
      const treeUrl = `https://api.github.com/repos/${username}/${repository}/git/trees/${branch}?recursive=1`;
      const treeRes = await fetch(treeUrl, { headers });

      if (!treeRes.ok) {
        throw new Error(`Failed to fetch tree: ${treeRes.statusText}`);
      }

      const { tree } = await treeRes.json();

      const filteredFiles = tree.filter((file: any) => {
        if (file.type !== "blob") return false;

        const isCorrectExtension = extensions.some((ext) =>
          file.path.endsWith(ext)
        );

        if (!isCorrectExtension) return false;

        const isIncluded =
          includePaths.length === 0 ||
          includePaths.some((p) => file.path.startsWith(p));
        const isExcluded = excludePaths.some((p) => file.path.startsWith(p));

        return isIncluded && !isExcluded;
      });

      // Prepare Markdown Processor
      const processor = await createMarkdownProcessor(config.markdown);
      const baseRawUrl = `https://raw.githubusercontent.com/${username}/${repository}/${branch}`;
      logger.info(`Processing ${filteredFiles.length} files...`);

      await Promise.all(
        filteredFiles.map(async (file: { path: string }) => {
          try {
            const rawUrl = `${baseRawUrl}/${file.path}`;
            const contentRes = await fetch(rawUrl);
            if (!contentRes.ok) {
              throw new Error(
                `Failed to fetch file ${file.path}: ${contentRes.statusText}`
              );
            }
            const text = await contentRes.text();
            // Parse frontmatter and body
            const { frontmatter, content: markdownBody } =
              parseFrontmatter(text);
            // Render markdown
            const result = await processor.render(markdownBody);
            const digest = generateDigest(result.code);

            // Generate a clean ID (e.g. "projects/my-app" -> "my-app")
            const id =
              file.path
                .split("/")
                .pop()
                ?.replace(/\.(md|mdx)$/, "") || file.path;
            store.set({
              id,
              data: {
                title: frontmatter.title
                  ? frontmatter.title
                  : id.replace(/-/g, " "), // Fallback title logic
                path: file.path,
                url: rawUrl,
                ...frontmatter,
              },
              rendered: {
                html: result.code,
                metadata: {
                  frontmatter: { ...frontmatter },
                },
              },
              digest,
            });
          } catch (error) {
            logger.error(`Error processing file ${file.path}`);
            console.error(error);
          }
        })
      );
    },
  };
}

import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { removeFileExtension } from "./utils";

const contentPath = join(process.cwd(), "app", "data", "contents");

export const fetchContent = async (id: string) => {
  const filePath = join(contentPath, `${id}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  if (!fileContents) return;
  const { data, content } = matter(fileContents);

  return {
    metadata: data || {},
    content,
  };
};

export const fetchAllContents = async () => {
  const fileContents = fs.readdirSync(contentPath, "utf8");
  let files = [];
  for (const file of fileContents) {
    const { metadata }:any = await fetchContent(removeFileExtension(file));
    files.push(metadata);
  }
  return files;
};

import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'

export const fetchContent = async (id:string) => {
  const filePath = join(process.cwd(), 'data', 'contents', `${id}.mdx`);
  // const { default: Component } = await import(contentPath);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // console.log("fileContents", fileContents)
  // console.log("data", data)
  // console.log("content", content)
  // const matterResult = matter(fileContents);
  // console.log("matterResult", matterResult)
  
  const mdxSource = await serialize(content, { parseFrontmatter: true })
  // console.log("mdxSource", mdxSource)

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};
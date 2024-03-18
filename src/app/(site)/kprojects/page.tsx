import { reader } from "@@/src/utils/reader";
import Link from "next/link";

// 1. Create a reader
// const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page() {
  // 2. Read the "Posts" collection
  const projects = await reader().collections.projects.all();
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.slug}>
          <Link href={`/kprojects/${project.slug}`}>{project.entry.title}</Link>
        </li>
      ))}
    </ul>
  );
}

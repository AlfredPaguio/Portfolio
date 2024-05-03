import CompactProjectCard from "@/components/project/CompactProjectCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { reader } from "@@/src/utils/reader";
import Link from "next/link";

// 1. Create a reader
// const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page() {
  // 2. Read the "Posts" collection
  const projects = await reader().collections.projects.list();

  return (
    <ScrollArea
      aria-orientation="horizontal"
      className="group mb-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects &&
        projects.map((slug) => (
          <Link href={`/projects/${slug}`} key={slug}>
            <CompactProjectCard key={slug} slug={slug} />
          </Link>
        ))}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

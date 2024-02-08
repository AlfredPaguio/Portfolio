import { Skeleton } from "@@/src/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row">
      <Skeleton className="rounded-3xl border border-card/25 shadow-black/25 shadow-lg backdrop-blur-lg" />
      <div className="ml-6 flex flex-col items-center gap-y-4">
        <Skeleton className="px-4 hidden md:block h-[35rem]" />
      </div>
    </div>
  );
}

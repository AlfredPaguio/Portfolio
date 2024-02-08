import { Skeleton } from "@@/src/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex h-full items-center justify-between px-4 pb-4 md:px-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
        <Skeleton className="items-center justify-between px-4 pb-4 md:px-16 w-[540px] h-[435px]" />
      </div>
    </div>
  );
}

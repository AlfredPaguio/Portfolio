import { Skeleton } from "@@/src/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex h-full flex-col items-start justify-between gap-y-2">
      <div className="flex items-center gap-x-2">
        <Skeleton className="size-9" />
        <h1 className="text-md flex items-center gap-1">
          <Skeleton className="size-9" />
          <Skeleton className="h-4 w-[250px]" />
        </h1>
      </div>
      <Skeleton className="h-4 w-[250px]" />
      <div className="flex flex-1 flex-col gap-4 pt-4">
        <Skeleton className="pl-4 h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
      <div className="flex flex-col items-center justify-center self-center">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-[1080px] w-[1980px]" />
      </div>
    </div>
  );
}

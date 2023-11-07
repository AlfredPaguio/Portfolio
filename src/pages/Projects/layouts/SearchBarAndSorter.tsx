import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function SearchBarAndSorter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSort = (value: string) => {
    setSearchParams(
      (prev: URLSearchParams) => {
        prev.set("sort", value);
        return prev;
      },
      { replace: true },
    );
  };

  const handleSearch = (value: string) => {
    setSearchParams(
      (prev: URLSearchParams) => {
        prev.set("title", value);
        return prev;
      },
      { replace: true },
    );
  };

  const titleQuery = searchParams.get("title");
  const sortQuery = searchParams.get("sort");

  return (
    <div className="flex w-full items-center justify-between">
      <div className="grow-1 relative block w-full">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchIcon className="text-accent-light dark:text-accent-dark  h-5 w-5"></SearchIcon>
        </span>
        <Input
          className="focus:border-accent-light focus:dark:border-accent-dark focus:ring-accent-light dark:focus:ring-accent-dark block w-full rounded-md border border-solid border-slate-300 bg-transparent py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-1 sm:text-sm"
          placeholder="Search for project..."
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          value={titleQuery || ""}
          name="search"
        />
      </div>
      <Select
        id={`sorter`}
        onValueChange={(value) => handleSort(value)}
        defaultValue={sortQuery || "date-desc"}
      >
        <SelectTrigger className="ml-2 w-fit">
          <SelectValue placeholder="Sort By..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="date-desc">Sort by Date (Descending)</SelectItem>
          <SelectItem value="date-asc">Sort by Date (Ascending)</SelectItem>
          <SelectItem value="name-desc">Sort by Name (Descending)</SelectItem>
          <SelectItem value="name-asc">Sort by Name (Ascending)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

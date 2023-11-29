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

  const handleParamUpdate = (paramName: string, value: string | null) => {
    setSearchParams(
      (prev: URLSearchParams) => {
        if (value) {
          prev.set(paramName, value);
        } else {
          prev.delete(paramName);
        }
        return prev;
      },
      { replace: true },
    );
  };

  const handleSort = (value: string) => {
    handleParamUpdate("sort", value);
  };

  const handleSearch = (value: string) => {
    handleParamUpdate("title", value);
  };

  const titleQuery = searchParams?.get("title");
  const sortQuery = searchParams?.get("sort");

  return (
    <div className="flex w-full items-center justify-between">
      <div className="grow-1 relative block w-full">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchIcon className="h-5 w-5 text-accent-foreground"></SearchIcon>
        </span>
        <Input
          className="block w-full rounded-md py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-ring sm:text-sm"
          placeholder="Search for project..."
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          value={titleQuery || ""}
          name="search"
        />
      </div>
      <Select
        onValueChange={(value) => handleSort(value)}
        value={sortQuery || "date-desc"}
      >
        <SelectTrigger className="ml-2 w-fit">
          <SelectValue placeholder="Sort By..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="date-desc">Date (Newest First)</SelectItem>
          <SelectItem value="date-asc">Date (Oldest First)</SelectItem>
          <SelectItem value="name-asc">Name (A-Z)</SelectItem>
          <SelectItem value="name-desc">Name (Z-A)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

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
      <label className="relative block flex-1">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchIcon className="h-5 w-5  text-slate-300"></SearchIcon>
        </span>
        <input
          className="block w-full rounded-md border border-solid border-slate-300 bg-transparent py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          value={titleQuery || ""}
          name="search"
        />
      </label>

      <select
        value={sortQuery || ""}
        id={`sorter`}
        className="ml-5 h-10 rounded-lg border border-solid border-slate-300 bg-transparent pl-5 pr-7 text-sm focus:outline-none"
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="date-asc">Sort by Date (Ascending)</option>
        <option value="date-desc">Sort by Date (Descending)</option>
        <option value="name-asc">Sort by Name (Ascending)</option>
        <option value="name-desc">Sort by Name (Descending)</option>
      </select>
    </div>
  );
}

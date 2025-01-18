"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import { parseAsString, useQueryState } from "nuqs";

export default function SearchBarAndSorter() {
  const [titleQuery, setTitleQuery] = useQueryState(
    "title",
    parseAsString
      .withOptions({
        history: "replace",
        throttleMs: 300,
        // shallow: false,
      })
      .withDefault(""),
  );

  const [sortQuery, setSortQuery] = useQueryState(
    "sort",
    parseAsString
      .withOptions({
        history: "replace",
        //  shallow: false
      })
      .withDefault("date-desc"),
  );

  const handleSort = (value: string) => {
    if (!value) setSortQuery(null);
    setSortQuery(value);
  };

  const handleSearch = (value: string) => {
    if (!value) setTitleQuery(null);
    setTitleQuery(value);
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <SearchInput onChange={handleSearch} value={titleQuery} />
      <SortSelect onChange={handleSort} value={sortQuery} />
    </div>
  );
}

type GenericInputProps<T> = {
  onChange: (value: T) => void;
  value: T | null;
};

type InputProps = GenericInputProps<string>;

const SearchInput = ({ onChange, value }: InputProps) => (
  <div className="relative w-full sm:max-w-md md:max-w-full">
    <label htmlFor="search" className="sr-only">
      Search projects
    </label>
    <Input
      id="search"
      type="search"
      placeholder="Search projects..."
      value={value ?? undefined}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 pl-10 pr-4"
    />
    <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  </div>
);

const SortSelect = ({ onChange, value }: InputProps) => (
  <Select
    onValueChange={(value) => onChange(value)}
    value={value || "date-desc"}
  >
    <SelectTrigger className="w-full sm:w-[200px]">
      <SelectValue placeholder="Sort By..." />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="date-desc">Date (Newest First)</SelectItem>
      <SelectItem value="date-asc">Date (Oldest First)</SelectItem>
      <SelectItem value="name-asc">Name (A-Z)</SelectItem>
      <SelectItem value="name-desc">Name (Z-A)</SelectItem>
    </SelectContent>
  </Select>
);

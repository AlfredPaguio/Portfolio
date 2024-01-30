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
  const [titleQuery, setTitleQuery] = useQueryState("title", {
    history: "replace",
    shallow: false,
  });
  const [sortQuery, setSortQuery] = useQueryState(
    "sort",
    parseAsString
      .withDefault("date-desc")
      .withOptions({ history: "replace", shallow: false })
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
    <div className="flex w-full flex-col items-center justify-start gap-y-2 md:flex-row md:gap-y-0">
      <SearchInput onChange={handleSearch} value={titleQuery || ""} />
      <SortSelect onChange={handleSort} value={sortQuery} />
    </div>
  );
}

type GenericInputProps<T> = {
  onChange: (value: T) => void;
  value: T | null;
};

type SortSelectProps = GenericInputProps<string>;
type SearchInputProps = GenericInputProps<string>;

const SearchInput = ({ onChange, value }: SearchInputProps) => (
  <div className="relative block w-full md:w-2/3 shrink-0">
    <span className="sr-only">Search</span>
    <Input
      className="block pr-9 pl-4 h-12"
      placeholder="Search for project..."
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value || ""}
      name="search"
    />
    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
      <SearchIcon className="h-5 w-5 text-foreground" />
    </span>
  </div>
);

const SortSelect = ({ onChange, value }: SortSelectProps) => (
  <Select
    onValueChange={(value) => onChange(value)}
    value={value || "date-desc"}
  >
    <SelectTrigger className="h-12 w-full md:w-fit lg:ml-2">
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

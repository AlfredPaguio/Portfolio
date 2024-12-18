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
      .withOptions({ history: "replace", shallow: false }),
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
      <SearchInput onChange={handleSearch} value={titleQuery} />
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
  <div className="relative block w-full shrink-0 md:w-2/3 md:me-4">
    <div className="relative">
      <span className="sr-only">Search</span>
      <Input
        className="group peer block h-12 pl-2 pr-9 placeholder:invisible placeholder:text-[0]"
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={value ?? undefined}
        name="search"
        placeholder="Search for project..."
        id="search"
      />
      <label
        htmlFor="search"
        className={`absolute left-2 top-2 mt-2 cursor-text text-sm transition-all peer-focus:-top-10 peer-focus:text-accent peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs`}
      >
        {!value ? "Search for project..." : "Searching for:"}
      </label>
      <span className="absolute inset-y-0 right-0 flex items-center pr-4 peer-focus:fill-accent">
        <SearchIcon className="h-5 w-5 text-foreground " />
      </span>
    </div>
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

import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

type SearchInputProps = {
  onChange: (value: string) => void;
  value: string | null;
};

const SearchInput = ({ onChange, value }: SearchInputProps) => (
  <div className="grow-1 relative block w-full">
    <span className="sr-only">Search</span>
    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
      <SearchIcon className="h-5 w-5 text-foreground"></SearchIcon>
    </span>
    <Input
      className="block pl-9 pr-3"
      placeholder="Search for project..."
      type="text"
      onChange={(e) => onChange(e.target.value)}
      value={value || ""}
      name="search"
    />
  </div>
);

export default SearchInput;

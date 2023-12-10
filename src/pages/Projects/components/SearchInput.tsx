import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

type SearchInputProps = {
  onChange: (value: string) => void;
  value: string | null;
};

const SearchInput = ({ onChange, value }: SearchInputProps) => (
  <div className="relative block w-2/3 shrink-0">
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

export default SearchInput;

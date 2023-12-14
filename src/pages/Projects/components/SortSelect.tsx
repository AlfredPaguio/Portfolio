import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SortSelectProps = {
  onValueChange: (value: string) => void;
  value: string | null;
};

const SortSelect = ({ onValueChange, value }: SortSelectProps) => (
  <Select
    onValueChange={(value) => onValueChange(value)}
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

export default SortSelect;

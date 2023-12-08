import { useSearchParams } from "react-router-dom";
import SortSelect from "../components/SortSelect";
import SearchInput from "../components/SearchInput";

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
      <SearchInput onChange={handleSearch} value={titleQuery} />
      <SortSelect onValueChange={handleSort} value={sortQuery} />
    </div>
  );
}

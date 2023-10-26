import { FilterIcon, XCircle } from "lucide-react";

export default function FilterMenu() {
  return (
    <div className="flex w-full items-center space-x-2 p-4">
      <FilterIcon />
      <span className="font-bold text-white">Filters |</span>
      <button className="items-center flex justify-center rounded-full bg-blue-500 px-2 py-1 text-sm text-white hover:bg-blue-600 focus:outline-none">
        <span className="text-lg">All</span>
        <XCircle className="pl-1"/>
      </button>
      <button className="items-center flex justify-center rounded-full bg-blue-500 px-2 py-1 text-sm text-white hover:bg-blue-600 focus:outline-none">
        <span className="text-lg">Javascript</span>
        <XCircle className="pl-1"/>
      </button>
      <button className="items-center flex justify-center rounded-full bg-blue-500 px-2 py-1 text-sm text-white hover:bg-blue-600 focus:outline-none">
        <span className="text-lg">something language</span>
        <XCircle className="pl-1"/>
      </button>
      <button className="items-center flex justify-center rounded-full bg-blue-500 px-2 py-1 text-sm text-white hover:bg-blue-600 focus:outline-none">
        <span className="text-lg">TEST</span>
        <XCircle className="pl-1"/>
      </button>
    </div>
  );
}

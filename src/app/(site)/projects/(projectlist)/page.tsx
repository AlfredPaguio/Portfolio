import FilterListBar from "@/components/project/FilterListBar";
import SearchBarAndSorter from "@/components/project/SearchBarAndSorter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Home() {
  return (
    <>
      <SearchBarAndSorter />
      {/* <FilterListBar /> */}
    </>
  );
}

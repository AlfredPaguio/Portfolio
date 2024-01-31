import SearchBarAndSorter from "../components/SearchBarAndSorter";
import FilterListBar from "../components/FilterListBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Home() {
  return (
    <>
      <SearchBarAndSorter />
      <FilterListBar />
    </>
  );
}

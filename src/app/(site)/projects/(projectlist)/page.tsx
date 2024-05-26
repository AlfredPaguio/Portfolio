import FilterListBar from "@/components/project/FilterListBar";
import SearchBarAndSorter from "@/components/project/SearchBarAndSorter";
import { fetchTechStack } from "@/data/fetchContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects',
}

export default async function Home() {
  const techs = await fetchTechStack();
  return (
    <>
      <SearchBarAndSorter />
      <FilterListBar techs={techs} />
    </>
  );
}

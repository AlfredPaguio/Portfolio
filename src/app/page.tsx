import Image from "next/image";
import ManThink from "@@/public/images/undraw_code_thinking_re_gka2.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GithubReleaseDate from "../components/GithubReleaseDate";
import DownloadCVButtons from "../components/DownloadCVButtons";

export default function Home() {
  return (
    <div className="flex items-center justify-between md:py-12 lg:py-20 xl:py-36">
      <div className="flex flex-col">
        <h2 className="mb-4 text-start text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl">
          I&apos;m
        </h2>
        <h1 className="mb-4 text-balance text-start text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="[viewTransitionName:brand-name]">Alfred</span> U.
          Paguio
        </h1>
        <h2 className="mb-4 text-start text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl">
          A Software Engineer
        </h2>
        <p className="text-small text-pretty text-start md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Experienced in various programming languages and frameworks,
          specializing in crafting and optimizing web projects.
          <br />
          Ready to assist in building and optimizing your projects.
        </p>
        <div className="flex gap-x-2 p-4 pl-0">
          <DownloadCVButtons />
          <Button variant={"outline"} asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
        <GithubReleaseDate />
      </div>
      <div className="hidden flex-col md:flex">
        <figure className="max-h-min drop-shadow-lg">
          <Image
            priority={false}
            className="h-96 fill-accent object-scale-down"
            src={ManThink}
            alt="An illustration of a man thinking sitting beside their laptop"
          />
          <figcaption className="px-5 text-center">
            Illustration from https://undraw.co/
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

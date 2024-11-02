import Image from "next/image";
import ManThink from "@@/public/images/undraw_code_thinking_re_gka2.svg";
import Link from "next/link";
import { reader } from "@/utils/reader";
import { Icons } from "@/components/Icons";
import DownloadCVButtons from "@/components/DownloadCVButtons";
import GithubReleaseDate from "@/components/GithubReleaseDate";
import SectionContainer from "@/components/SectionContainer";
import { GithubCommitCalendar } from "@/components/GithubCommitCalendar";
import { Separator } from "@/components/ui/separator";
import ProgressCircle from "@/components/ProgressCircle";
import { Suspense } from "react";
import Technologies from "./partials/Technologies";
import FeaturedProjects from "./partials/FeaturedProjects";
import { CodeIcon, DatabaseIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function Home() {
  const socialLinks = await reader().singletons.links.read();
  const techStack = await reader().singletons.techStack.readOrThrow();

  return (
    <>
      <SectionContainer
        className="flex items-center justify-between py-8 md:py-12 lg:py-20 xl:py-36"
        size={"2xl"}
      >
        <div className="flex flex-col items-center">
          <h2 className="mb-2 text-start text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl">
            <span className="highlight-secondary">
              Hi, nice to meet you! 👋🏻
            </span>
            {/* I&apos;m */}
          </h2>
          <div className="flex items-end justify-start gap-2">
            <h2 className="mb-2 text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl">
              I&apos;m
            </h2>
            <h1 className="highlight mb-2 text-balance text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="[viewTransitionName:brand-name]">Alfred</span>
            </h1>
          </div>
          <p className="text-small text-balance text-center md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            A passionate{" "}
            <span className="underline decoration-accent/80 decoration-2 underline-offset-2">
              software developer
            </span>
            , I love problem-solving and creating applications that make a real
            difference.
          </p>
          <div className="flex items-center justify-center gap-x-2 p-4">
            <DownloadCVButtons />
            {/* <Button variant={"outline"} asChild>
            <Link href="/contact">Contact Me</Link>
          </Button> */}

            <div className="flex gap-x-2">
              {socialLinks &&
                socialLinks.social.map(({ name, url }) => (
                  <Link
                    key={name}
                    href={url ?? "#"}
                    className="group flex items-center rounded text-sm font-medium text-primary hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-safe:transition  lg:text-lg xl:text-xl"
                    target="_blank"
                    rel="me"
                  >
                    {/* pls help lol */}
                    {name.toLowerCase() === "github" && (
                      <Icons.github className="size-8 flex-none fill-primary transition group-hover:fill-accent group-focus-visible:fill-accent motion-safe:transition" />
                    )}
                    {name.toLowerCase() === "facebook" && (
                      <Icons.facebook className="size-8 flex-none fill-primary transition group-hover:fill-accent group-focus-visible:fill-accent motion-safe:transition" />
                    )}
                    {name.toLowerCase() === "linkedin" && (
                      <Icons.linkedin className="size-8 flex-none fill-primary transition group-hover:fill-accent group-focus-visible:fill-accent motion-safe:transition" />
                    )}
                  </Link>
                ))}
            </div>
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
      </SectionContainer>

      <SectionContainer>
        <h2 className="mb-6 text-center text-2xl font-bold">What I Do</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CodeIcon className="mr-2 size-6" />
                Web Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="pl-2">
                Creating responsive and performant web applications using modern
                frameworks and best practices.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DatabaseIcon className="mr-2 size-6" />
                Backend Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="pl-2">
                Designing and implementing robust server-side solutions and APIs
                to power applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>

      <SectionContainer>
        <Technologies techStack={techStack} />
      </SectionContainer>

      <SectionContainer>
        <FeaturedProjects />
      </SectionContainer>

      <SectionContainer size={"2xl"}>
        <Suspense
          fallback={
            <ProgressCircle className="mx-auto my-10 h-4 w-4 animate-spin" />
          }
        >
          <GithubCommitCalendar />
        </Suspense>
      </SectionContainer>
    </>
  );
}

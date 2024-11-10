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
import Services from "./partials/Services";
import HeroSection from "./partials/HeroSection";

export default async function Home() {
  const socialLinks = await reader().singletons.links.read();
  const techStack = await reader().singletons.techStack.readOrThrow();

  return (
    <>
      <SectionContainer
        className="flex items-center justify-between py-8 md:py-12 lg:py-20 xl:py-36"
        size={"2xl"}
      >
        <HeroSection socialLinks={socialLinks} />
      </SectionContainer>

      <SectionContainer>
        <Services />
      </SectionContainer>

      <SectionContainer>
        <Technologies techStack={techStack} />
      </SectionContainer>

      <SectionContainer>
        <FeaturedProjects />
      </SectionContainer>

      <SectionContainer>
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

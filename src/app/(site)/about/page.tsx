import Image from "next/image";
// import myPicture from "@@/public/images/my_picture.png";
import { Icons } from "@/components/Icons";
import { camelCaseToTitleCase } from "@/utils/camelCaseToTitleCase";
import { cn } from "@/utils/cn";
import { processMdx } from "@/utils/mdx";
import { reader } from "@/utils/reader";
import { Metadata } from "next";
import Link from "next/link";
import TechStacks from "./partials/TechStacks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MapBox from "../contact/components/MapBox";

export const metadata: Metadata = {
  title: "About",
};

export default async function Home() {
  const { about, socialLinks, techStack } = await getCMSData();

  return (
    <>
      <Card className="m-4 grid grid-cols-1 gap-y-8 py-4 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        {about && about.cover && (
          <div className="mt-8 px-10 lg:pl-20">
            <div className="relative flex max-w-xs items-center justify-center px-2 lg:max-w-none">
              <Image
                width={320}
                height={320}
                src={about.cover}
                alt="Picture of myself (Alfred)"
                className="aspect-square -rotate-3 rounded-2xl bg-primary/5 shadow-lg shadow-gray-900/10 ring-1 ring-ring/5 motion-safe:transition dark:opacity-90 dark:hover:opacity-100 2xl:size-2/4"
              />
            </div>
          </div>
        )}

        <div
          className={cn(
            // noto_serif.className,
            "prose h-fit flex-col items-center justify-center text-pretty p-4 antialiased dark:prose-invert lg:prose-lg xl:prose-xl md:ml-8 md:p-8 lg:order-first lg:row-span-2 lg:ml-12 lg:p-12",
          )}
        >
          <about.content />
          {/* {about && <CustomDocumentRenderer document={await about.content()} />} */}
        </div>

        <div className="space-y-4 lg:pl-20">
          <ul role="list" className="hidden space-y-2 lg:block">
            {socialLinks &&
              socialLinks.social.map(({ name, url }) => (
                <li className="flex" key={name}>
                  <Link
                    href={url ?? "#"}
                    className="group flex items-center rounded text-sm font-medium text-foreground hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-safe:transition lg:text-lg xl:text-xl"
                    target="_blank"
                    rel="me"
                  >
                    {/* pls help lol */}
                    {name.toLowerCase() === "github" && (
                      <Icons.github className="size-5 flex-none fill-foreground transition group-hover:fill-accent group-focus-visible:fill-accent motion-safe:transition" />
                    )}
                    {name.toLowerCase() === "facebook" && (
                      <Icons.facebook className="size-5 flex-none fill-foreground transition group-hover:fill-accent group-focus-visible:fill-accent motion-safe:transition" />
                    )}
                    {name.toLowerCase() === "linkedin" && (
                      <Icons.linkedin className="size-5 flex-none fill-foreground transition group-hover:fill-accent group-focus-visible:fill-accent motion-safe:transition" />
                    )}
                    {/* <SocialMedia.icon aria-hidden="true" class="h-5 w-5 flex-none fill-gray-500 transition group-hover:fill-primary group-focus-visible:fill-primary motion-safe:transition" /> */}
                    <span className="ml-4">{`My ${name}`}</span>
                  </Link>
                </li>
              ))}
          </ul>
          <TechStacks techStack={techStack} />
        </div>
      </Card>
      <Card className="m-4">
        <CardHeader className="pb-0">
          <CardTitle className="text-xl">My Address</CardTitle>
          <CardDescription className="text-lg text-foreground">
            #618 Tuazon St., Población, Muntinlupa City
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center pt-6">
          <MapBox />
        </CardContent>
      </Card>
    </>
  );
}

async function getCMSData() {
  const about = await reader().singletons.about.readOrThrow();
  const socialLinks = await reader().singletons.links.readOrThrow();
  const techStack = await reader().singletons.techStack.readOrThrow();

  const { default: AboutContent } = await processMdx(await about.content());

  return {
    about: {
      ...about,
      content: AboutContent,
    },
    socialLinks,
    techStack,
  };
}

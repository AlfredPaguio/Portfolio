import Image from "next/image";
// import myPicture from "@@/public/images/my_picture.png";
import { Icons } from "@/components/Icons";
import { reader } from "@/utils/reader";
import { Metadata } from "next";
import Link from "next/link";
import { noto_serif } from "@/app/layout";
import { cn } from "@/utils/cn";
import { processMdx } from "@/utils/mdx";
import { Card } from "@/components/ui/card";
import { BadgeDollarSign, Terminal } from "lucide-react";
import { camelCaseToTitleCase } from "@/utils/camelCaseToTitleCase";
import TechnologyIcons from "@/components/TechnologyIcons";
import { getIconForTechnology } from "@/data/TechIcons";

export const metadata: Metadata = {
  title: "About",
};

export default async function Home() {
  const about = await reader().singletons.about.readOrThrow();
  const socialLinks = await reader().singletons.links.readOrThrow();
  const techStack = await reader().singletons.techStack.readOrThrow();

  const techStackArray = Object.entries(techStack).map(([category, items]) => ({
    category: camelCaseToTitleCase(category),
    items,
    //!TODO Add Tech Icons
    // Icon: <TechnologyIcons Stacks={items} key={category}/>,
  }));

  const { default: AboutContent } = await processMdx(await about.content());

  return (
    <div className="grid grid-cols-1 gap-y-16 py-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      {about && about.cover && (
        <div className="lg:pl-20">
          <div className="relative flex max-w-xs items-center justify-center px-2 lg:max-w-none">
            <Image
              width={320}
              height={320}
              src={about.cover}
              alt="Picture of myself (Alfred)"
              className="aspect-square -rotate-3 rounded-2xl bg-card shadow-lg shadow-gray-900/10 ring-1 ring-gray-900/5 motion-safe:transition dark:opacity-90 dark:hover:opacity-100 2xl:size-2/4"
            />
          </div>
        </div>
      )}

      <div
        className={cn(
          noto_serif.className,
          "prose lg:ml-12 h-fit flex-col items-center justify-center text-pretty lg:p-12 md:p-8 md:ml-8 antialiased dark:prose-invert lg:prose-lg xl:prose-xl lg:order-first lg:row-span-2",
        )}
      >
        <AboutContent />
        {/* {about && <CustomDocumentRenderer document={await about.content()} />} */}
      </div>

      <div className="space-y-4 lg:pl-20">
        <ul role="list" className="space-y-4">
          {socialLinks &&
            socialLinks.social.map(({ name, url }) => (
              <li className="flex" key={name}>
                <Link
                  href={url ?? "#"}
                  className="group flex items-center rounded text-sm font-medium text-primary-foreground hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-safe:transition  lg:text-lg xl:text-xl"
                  target="_blank"
                  rel="me"
                >
                  {/* pls help lol */}
                  {name.toLowerCase() === "github" && (
                    <Icons.github className="size-5 flex-none fill-primary-foreground transition group-hover:fill-accent group-focus-visible:fill-accent motion-safe:transition" />
                  )}
                  {name.toLowerCase() === "facebook" && (
                    <Icons.facebook className="size-5 flex-none fill-primary-foreground transition group-hover:fill-accent group-focus-visible:fill-accent motion-safe:transition" />
                  )}
                  {name.toLowerCase() === "linkedin" && (
                    <Icons.linkedin className="size-5 flex-none fill-primary-foreground transition group-hover:fill-accent group-focus-visible:fill-accent motion-safe:transition" />
                  )}
                  {/* <SocialMedia.icon aria-hidden="true" class="h-5 w-5 flex-none fill-gray-500 transition group-hover:fill-primary group-focus-visible:fill-primary motion-safe:transition" /> */}
                  <span className="ml-4">{`Follow me on ${name}`}</span>
                </Link>
              </li>
            ))}
        </ul>
        <div className="rounded-3xl motion-safe:transition pt-4 lg:pt-0">
          <h2 className="font-display-safe mb-4 flex items-center text-lg font-semibold motion-safe:transition">
            <Terminal
              aria-hidden="true"
              className="size-6 motion-safe:transition"
            />
            <span className="ml-3">Technology Stacks</span>
          </h2>
          {techStackArray.map(({ category, items }) => (
            <ul key={category} className="w-full">
              <li className="mb-4 mt-6 flex items-center gap-4 text-sm font-medium">
                <span className="shrink-0 motion-safe:transition">
                  {category}
                </span>
                <span
                  aria-hidden="true"
                  className="block h-px grow bg-accent motion-safe:transition"
                ></span>
              </li>
              <li>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex w-full items-center gap-4">
                      <div
                        aria-hidden="true"
                        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 motion-safe:transition dark:border dark:border-gray-700/50 dark:border-gray-800 dark:bg-gray-800 dark:ring-0"
                      >
                        <IconComponent techName={item} />
                        {/* <BadgeDollarSign className="size-4" /> */}
                      </div>

                      <span
                        lang="en-US"
                        className="grow text-sm font-medium motion-safe:transition"
                      >
                        {item}
                      </span>
                      <span className="shrink-0 text-xs motion-safe:transition dark:contrast-more:font-medium">
                        {/* {skill level} */}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

function IconComponent({ techName }: { techName: string }) {
  const TechIcon = getIconForTechnology(techName);
  return <TechIcon.Icon className="size-4" />;
}

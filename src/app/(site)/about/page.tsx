import Image from "next/image";
// import myPicture from "@@/public/images/my_picture.png";
import { Icons } from "@/components/Icons";
import { reader } from "@/utils/reader";
import { Metadata } from "next";
import Link from "next/link";
import { noto_serif } from "@/app/layout";
import { cn } from "@/utils/cn";
import { processMdx } from "@/utils/mdx";

export const metadata: Metadata = {
  title: "About",
};

export default async function Home() {
  const about = await reader().singletons.about.readOrThrow();
  const socialLinks = await reader().singletons.links.read();

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
          "prose flex-col items-center justify-center text-pretty pl-4 dark:prose-invert lg:prose-lg xl:prose-xl lg:order-first lg:row-span-2",
        )}
      >
        {/* {process.env.NODE_ENV === "development" && (
          <pre className="whitespace-pre-wrap bg-slate-950">
            <code className="text-foreground">
              {JSON.stringify(about, undefined, 2)}
            </code>
          </pre>
        )} */}
        <AboutContent />
        {/* {about && <CustomDocumentRenderer document={await about.content()} />} */}
        {/* <AboutMeSection /> */}
      </div>

      <div className="lg:pl-20">
        {/* {process.env.NODE_ENV === "development" && (
          <pre className="whitespace-pre-wrap bg-slate-950">
            <code className="text-foreground">
              {JSON.stringify(socialLinks, undefined, 2)}
            </code>
          </pre>
        )} */}
        <ul role="list" className="space-y-4">
          {socialLinks &&
            socialLinks.social.map(({ name, url }) => (
              <li className="flex" key={name}>
                <Link
                  href={url ?? "#"}
                  className="group flex items-center rounded text-sm font-medium text-gray-800 hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-safe:transition dark:text-gray-200 dark:focus-visible:ring-offset-gray-900 dark:contrast-more:focus-visible:ring-offset-black lg:text-lg xl:text-xl"
                  target="_blank"
                  rel="me"
                >
                  {/* pls help lol */}
                  {name.toLowerCase() === "github" && (
                    <Icons.github className="size-5 flex-none fill-gray-500 transition group-hover:fill-primary group-focus-visible:fill-primary motion-safe:transition" />
                  )}
                  {name.toLowerCase() === "facebook" && (
                    <Icons.facebook className="size-5 flex-none fill-gray-500 transition group-hover:fill-primary group-focus-visible:fill-primary motion-safe:transition" />
                  )}
                  {name.toLowerCase() === "linkedin" && (
                    <Icons.linkedin className="size-5 flex-none fill-gray-500 transition group-hover:fill-primary group-focus-visible:fill-primary motion-safe:transition" />
                  )}
                  {/* <SocialMedia.icon aria-hidden="true" class="h-5 w-5 flex-none fill-gray-500 transition group-hover:fill-primary group-focus-visible:fill-primary motion-safe:transition" /> */}
                  <span className="ml-4">{`Follow me on ${name}`}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

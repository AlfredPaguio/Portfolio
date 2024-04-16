import Image from "next/image";
// import myPicture from "@@/public/images/my_picture.png";
import { Technologies } from "@/data/Technologies";
import TechnologyIcons from "@/components/TechnologyIcons";
import { Metadata } from "next";
import Link from "next/link";
import { reader } from "@/utils/reader";
import CustomDocumentRenderer from "@/components/keystatic/renderers/CustomDocumentRenderer";

export const metadata: Metadata = {
  title: "About",
};

export default async function Home() {
  const about = await reader().singletons.about.read();
  if (!about) return "null";

  return (
    <div className="container grid grid-cols-1 gap-y-16 py-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      {about.cover && (
        <div className="lg:pl-20">
          <div className="relative max-w-xs px-2 lg:max-w-none">
            <Image
              width={700}
              height={700}
              src={about.cover}
              alt="Picture of myself (Alfred)"
              className="aspect-square -rotate-3 rounded-2xl bg-card shadow-lg shadow-gray-900/10 ring-1 ring-gray-900/5 motion-safe:transition dark:opacity-90 dark:hover:opacity-100"
            />
          </div>
        </div>
      )}

      <div className="lg:order-first lg:row-span-2">
        {process.env.NODE_ENV === "development" && (
          <pre className="whitespace-pre-wrap bg-slate-950">
            <code className="text-foreground">
              {JSON.stringify(about, undefined, 2)}
            </code>
          </pre>
        )}

        <CustomDocumentRenderer document={await about.content()} />

        {/* <AboutMeSection /> */}
      </div>

      <div className="lg:pl-20">
        <ul role="list" className="space-y-4">
          <li className="flex">
            <Link
              href={"#"}
              className="group flex items-center rounded font-medium text-gray-800 hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-safe:transition dark:text-gray-200 dark:focus-visible:ring-offset-gray-900 dark:contrast-more:focus-visible:ring-offset-black lg:text-sm"
              target="_blank"
              rel="me"
            >
              {/* <SocialMedia.icon aria-hidden="true" class="h-5 w-5 flex-none fill-gray-500 transition group-hover:fill-primary group-focus-visible:fill-primary motion-safe:transition" /> */}
              <span className="ml-4">{`Follow me on ${"variable name from keystatic"}`}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function TechStack() {
  return (
    <div className="flex flex-col">
      <TechnologySection
        title="Programming Languages:"
        stacks={Technologies.programmingLanguages}
      />
      <TechnologySection title="Libraries:" stacks={Technologies.libraries} />
      <TechnologySection title="Frameworks:" stacks={Technologies.frameworks} />
      <TechnologySection
        title="Database Management Systems:"
        stacks={Technologies.databaseManagementSystems}
      />
      <TechnologySection
        title="Developer Tools:"
        stacks={Technologies.developerTools}
      />
    </div>
  );
}

type TechnologySectionProps = {
  title: string;
  stacks: string[];
};

const TechnologySection = ({ title, stacks }: TechnologySectionProps) => (
  <div className="flex items-center py-2 text-xl font-medium">
    <h3>{title}</h3>
    <div className="ml-4 flex flex-wrap gap-2">
      <TechnologyIcons Stacks={stacks} />
    </div>
  </div>
);

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import myPicture from "@@/public/images/my_picture.png";
import { Button } from "@/components/ui/button";
import { Technologies } from "@/data/Technologies";
import TechnologyIcons from "@/components/TechnologyIcons";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row">
      <AboutMeSection />
      <div className="ml-6 flex flex-col items-center gap-y-4">
        <Card className="px-4 hidden md:flex flex-col justify-center items-center">
          <Image
            src={myPicture}
            alt="Picture of myself (Alfred)"
            className="h-[35rem] object-cover "
          />

          <div className="flex items-center gap-1 p-4">
            <CardTitle>Socials:</CardTitle>
            <Button variant={"ghost"} className="group" asChild>
              <Link href="https://www.facebook.com/FleetingComet/">
                <Facebook className="h-8 text-accent group-hover:text-secondary" />
              </Link>
            </Button>

            <Button variant={"ghost"} className="group" asChild>
              <Link href="https://github.com/AlfredPaguio">
                <Github className="h-8 text-accent group-hover:text-secondary" />
              </Link>
            </Button>

            <Button variant={"ghost"} className="group" asChild>
              <Link href="https://www.linkedin.com/in/alfredpaguio">
                <Linkedin className="h-8 text-accent group-hover:text-secondary" />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function AboutMeSection() {
  return (
    <Card className="relative flex h-full w-full flex-col items-left">
      <div className="flex h-full w-full flex-col gap-y-2 p-4">
        <p className="lg:text-lg xl:text-xl">( ^_^)／</p>
        <p className="font-light text-card-foreground lg:text-lg xl:text-xl">
          Hello there! I’m Alfred, a passionate software developer, I love
          problem-solving and creating applications that make a real difference.
          I’ve been on a continuous learning path, eagerly expanding my
          knowledge and honing my skills.
        </p>
        <p className="font-light text-card-foreground lg:text-lg xl:text-xl">
          Currently, my focus is on mastering React and TypeScript, two powerful
          tools in modern web development. I believe that these technologies,
          combined with my enthusiasm and dedication, will enable me to build
          efficient, scalable, and user-friendly applications.
        </p>
        <p className="font-light text-card-foreground lg:text-lg xl:text-xl">
          As a fresh graduate, I’m excited about the endless possibilities that
          lie ahead in the software development field. I’m eager to take on new
          challenges, learn from them, and contribute my unique perspective to
          the tech community. I look forward to collaborating with other
          passionate developers and creating innovative solutions that can
          transform the digital landscape.
        </p>
        <p className="font-light text-card-foreground lg:text-lg xl:text-xl">
          In my spare time, you’ll find me exploring the latest tech trends or
          delving into a new programming language or framework. I firmly believe
          that there’s always something new to learn in this ever-evolving
          field, and I’m committed to being a lifelong learner.
        </p>
        <TechStack />
      </div>
    </Card>
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
    <div className="flex flex-wrap gap-2 ml-4">
      <TechnologyIcons Stacks={stacks} />
    </div>
  </div>
);

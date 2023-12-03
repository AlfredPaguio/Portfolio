import { MoonIcon } from "lucide-react";
import TechStack from "./TechStack";
import Lead from "@/components/Lead";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

export default function AboutMeSection() {
  return (
    <section id="about-me">
      <div className="relative mb-8 flex h-fit w-full snap-none flex-col items-center gap-8 px-2">
        <Lead title="Introduction" subtitle="Hello~" />
        <Card className="relative flex h-fit w-full flex-col gap-4 rounded-xl border-none p-4 shadow-2xl md:flex-row">
          <MoonIcon
            size={64}
            className="absolute -right-5 -top-5 hidden fill-foreground md:block"
          />
          <CardContent className="flex h-full w-full flex-col justify-between lg:w-3/5">
            <CardDescription className="font-light text-card-foreground lg:text-lg xl:text-xl">
              Hello there! I’m Alfred, a passionate software developer, I love
              problem-solving and creating applications that make a real
              difference. I’ve been on a continuous learning path, eagerly
              expanding my knowledge and honing my skills.
            </CardDescription>
            <CardDescription className="pt-4 font-light text-card-foreground lg:text-lg xl:text-xl">
              Currently, my focus is on mastering React and TypeScript, two
              powerful tools in modern web development. I believe that these
              technologies, combined with my enthusiasm and dedication, will
              enable me to build efficient, scalable, and user-friendly
              applications.
            </CardDescription>
            <CardDescription className="pt-4 font-light text-card-foreground lg:text-lg xl:text-xl">
              As a fresh graduate, I’m excited about the endless possibilities
              that lie ahead in the software development field. I’m eager to
              take on new challenges, learn from them, and contribute my unique
              perspective to the tech community. I look forward to collaborating
              with other passionate developers and creating innovative solutions
              that can transform the digital landscape.
            </CardDescription>
            <CardDescription className="pt-4 font-light text-card-foreground lg:text-lg xl:text-xl">
              In my spare time, you’ll find me exploring the latest tech trends
              or delving into a new programming language or framework. I firmly
              believe that there’s always something new to learn in this
              ever-evolving field, and I’m committed to being a lifelong
              learner.
            </CardDescription>
          </CardContent>
          <TechStack />
        </Card>
      </div>
    </section>
  );
}

import { MoonIcon } from "lucide-react";
import TechStack from "../TechStack";
import Lead from "@/components/Lead";

export default function AboutMeSection() {
  return (
    <section id="about-me">
      <div className="relative mb-40 flex h-fit w-full snap-center flex-col items-center gap-8 px-2">
        <Lead title="About Me" subtitle="Hello~" />
        <div className="flex h-fit w-full flex-col gap-4 rounded-xl bg-background/80 p-4 backdrop-blur-md md:flex-row">
          <MoonIcon
            size={64}
            className="absolute -right-5 -top-5 hidden fill-white text-accent md:block"
          />
          <div className="flex h-full w-full flex-col justify-between bg-transparent lg:w-3/5">
            <h1 className="py-3 text-start text-4xl font-bold text-white">
              Introduction
            </h1>
            <p className="text-xl font-light text-gray-200">
              Hello there! I’m Alfred, a passionate software developer, I love
              problem-solving and creating applications that make a real
              difference. I’ve been on a continuous learning path, eagerly
              expanding my knowledge and honing my skills.
            </p>
            <p className=" pt-4 text-xl font-light text-gray-200">
              Currently, my focus is on mastering React and TypeScript, two
              powerful tools in modern web development. I believe that these
              technologies, combined with my enthusiasm and dedication, will
              enable me to build efficient, scalable, and user-friendly
              applications.
            </p>
            <p className=" pt-4 text-xl font-light text-gray-200">
              As a fresh graduate, I’m excited about the endless possibilities
              that lie ahead in the software development field. I’m eager to
              take on new challenges, learn from them, and contribute my unique
              perspective to the tech community. I look forward to collaborating
              with other passionate developers and creating innovative solutions
              that can transform the digital landscape.
            </p>
            <p className=" pt-4 text-xl font-light text-gray-200">
              In my spare time, you’ll find me exploring the latest tech trends
              or delving into a new programming language or framework. I firmly
              believe that there’s always something new to learn in this
              ever-evolving field, and I’m committed to being a lifelong
              learner..
            </p>
          </div>
          <TechStack />
        </div>
      </div>
    </section>
  );
}

import { MoonIcon } from "lucide-react";
import TechStack from "../TechStack";

export default function AboutMeSection() {
  return (
    <section id="about-me">
      <div className="relative flex h-fit w-full items-center gap-16 px-2 pt-72">
        <div className="flex h-fit w-full flex-col gap-4 rounded-xl bg-background/80 p-4 backdrop-blur-md md:flex-row">
          <MoonIcon
            size={64}
            className="absolute -right-5 -top-5 hidden fill-text text-accent md:block"
          />
          <div className="flex h-full w-full flex-col justify-between bg-transparent lg:w-3/5">
            <h1 className="py-3 text-center text-4xl font-bold text-text">
              About Me
            </h1>
            <h2 className="xxl:text-4xl mb-2 text-lg font-medium lg:text-3xl">
              Hello! I'm Alfred, a passionate software developer. I love solving
              problems and building applications that make a difference yada
              yada I forgot what to say.
            </h2>
          </div>
          <div className="flex h-full w-full flex-col items-start gap-2 font-normal lg:w-2/5 lg:items-end">
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
}

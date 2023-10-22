import { MoonIcon } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section id="about-me">
      <div className="relative flex h-fit w-full items-center gap-16 px-2 pt-10">
        <div className="bg-text/10 backdrop-blur-md flex h-fit w-full flex-col gap-4 rounded-xl p-4">
          <MoonIcon size={64} className="text-accent fill-text absolute -right-5 -top-5 hidden md:block" />
          <h1 className="py-3 text-center text-5xl font-bold text-text">
            About Me
          </h1>
          <h2 className="xxl:text-4xl mb-2 text-lg font-medium lg:text-3xl">
            Hello! I'm Alfred, a passionate software developer. I love solving
            problems and building applications that make a difference yada yada
            I forgot what to say.
          </h2>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="mb-8 mt-16 flex h-full w-full snap-align-none flex-col items-center pb-8 pt-16">
        <h1 className="mb-4 text-center text-5xl font-bold lg:text-7xl xl:text-8xl">
          I'm Alfred U. Paguio
        </h1>
        <h2 className="mb-2 text-center text-lg font-medium lg:text-3xl 2xl:text-4xl">
          Web Developer with a Diverse Skill Set
        </h2>
        <p className="text-center text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          I specialize in web development with experience in various programming
          languages and frameworks.
        </p>
        <p className="m-2 text-center text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Let me help you build and optimize your web projects.
        </p>
        <div className="mx-auto flex gap-x-2 p-2">
          <Button asChild>
            <Link to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV.pdf">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>

          <Button variant={"outline"} asChild>
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

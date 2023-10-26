import { DownloadIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="mb-8 mt-16 flex h-full w-full snap-align-none flex-col items-center bg-transparent pb-8 pt-16">
        <h1 className="mb-4 text-center text-5xl font-bold lg:text-7xl xl:text-8xl">
          I'm Alfred U. Paguio
        </h1>
        <h2 className="text-center text-lg font-medium lg:text-3xl 2xl:text-4xl mb-2">
          Web Developer with a Diverse Skill Set
        </h2>
        <p className="text-center text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          I specialize in web development with experience in various programming
          languages and frameworks.
        </p>
        <p className="m-2 text-center text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Let me help you build and optimize your web projects.
        </p>
        <div className="mx-auto flex p-2">
          <Link
            to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV.pdf"
            className="me-2 mt-2 flex items-center justify-center rounded bg-primary px-4 py-2 text-white hover:bg-accent"
          >
            <DownloadIcon size={16} className="mr-1" />
            Download CV
          </Link>
          <Link
            to="/contact"
            className="border-text mt-2 rounded border-2 border-solid bg-transparent px-4 py-2 font-medium text-white hover:border-transparent hover:bg-accent"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

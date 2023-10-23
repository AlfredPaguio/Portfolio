import { DownloadIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="mb-40 flex h-full w-full snap-center flex-col items-center bg-transparent pb-32 pt-32">
        <h1 className="xxl:text-8xl mb-4 text-center text-5xl font-bold lg:text-7xl">
          Alfred U. Paguio
        </h1>
        <h2 className="xxl:text-4xl mb-2 text-lg font-medium lg:text-3xl">
          Junior Software Engineer / Web Developer |{" "}
          <span className="text-accent">Back-End</span>
        </h2>
        <p className="xxl:text-2xl text-lg font-normal lg:text-xl">
          I'm a web developer with a passion for all things.
        </p>
        <p className="m-4 text-lg">
          Explore my projects and get to know more about my journey as a
          developer.
        </p>
        <div className="mx-auto flex p-4">
          <Link
            to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV.pdf"
            className="me-4 mt-4 flex items-center justify-center rounded bg-primary px-6 py-2 text-white transition-colors duration-200 hover:bg-accent"
          >
            <DownloadIcon size={24} className="mr-2" />
            Download CV
          </Link>
          <Link
            to="/contact"
            className="mt-4 rounded border-2 border-solid border-text bg-transparent px-6 py-2 font-medium text-white transition-colors duration-200 hover:border-transparent hover:bg-accent"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

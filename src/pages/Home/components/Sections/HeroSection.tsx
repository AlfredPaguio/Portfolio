import { DownloadIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="pt-32 pb-32 flex h-full w-full flex-col items-center bg-transparent">

      <h1 className="mb-4 text-5xl lg:text-7xl xxl:text-8xl font-bold text-center">Alfred U. Paguio</h1>
      <h2 className="mb-2 text-lg lg:text-3xl xxl:text-4xl font-medium">
        Junior Software Engineer / Web Developer |{" "}
        <span className="text-accent">Back-End</span>
      </h2>
      <p className="text-lg lg:text-xl xxl:text-2xl font-normal">
        I'm a web developer with a passion for all things.
      </p>
      <p className="m-4 text-lg">
        Explore my projects and get to know more about my journey as a
        developer.
      </p>
      <div className="mx-auto flex p-4">
        <Link
          to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV.pdf"
          className="flex justify-center items-center me-4 mt-4 rounded bg-primary px-6 py-2 text-white transition-colors duration-200 hover:bg-accent"
        >
          <DownloadIcon size={24} className="mr-2"/>
          Download CV
        </Link>
        <Link
          to="/contact"
          className="mt-4 rounded bg-transparent border-solid border-text border-2 font-medium px-6 py-2 text-white transition-colors duration-200 hover:bg-accent hover:border-transparent"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

import withPageTransition from "@/routes/components/withPageTransition";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="home">
      <div className="flex min-h-screen items-center justify-center bg-black/40 text-white backdrop-blur-md">
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-bold">Welcome to My Portfolio</h1>
          <h2 className="mb-2 text-3xl">
            Junior Software Engineer / Web Developer |{" "}
            <span className="text-accent">Back-End</span>
          </h2>
          <p className="text-xl">
            I'm a web developer with a passion for all things.
          </p>
          <p className="m-4 text-lg">
            Explore my projects and get to know more about my journey as a
            developer.
          </p>
          <Link
            to="/projects"
            className="mt-4 rounded bg-primary px-6 py-2 text-white transition-colors duration-200 hover:bg-accent"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default withPageTransition(Home);

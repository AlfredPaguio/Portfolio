import withPageTransition from "@/routes/components/withPageTransition";
import HeroSection from "./components/Sections/HeroSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import AboutMeSection from "./components/Sections/AboutMeSection";

function Home() {
  return (
    <section id="home">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
    </section>
  );
}

export default withPageTransition(Home);

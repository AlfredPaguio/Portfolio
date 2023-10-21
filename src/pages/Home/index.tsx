import withPageTransition from "@/routes/components/withPageTransition";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutMeSection from "./components/AboutMeSection";

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

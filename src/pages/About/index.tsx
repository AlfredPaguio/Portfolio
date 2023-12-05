import AboutMeSection from "./components/AboutMeSection";
// eslint-disable-next-line import/no-unresolved
import myPicture from "/images/my_picture.png";

function About() {
  return (
    <div className="flex flex-col items-center justify-between px-16 lg:flex-row">
      <AboutMeSection />
        <img
          src={myPicture}
          alt=""
          className="hidden h-[42rem] object-scale-down lg:block"
        />
    </div>
  );
}
export default About;

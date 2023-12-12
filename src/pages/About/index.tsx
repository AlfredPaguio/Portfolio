import { Card, CardContent, CardTitle } from "@/components/ui/card";
import AboutMeSection from "./components/AboutMeSection";
// eslint-disable-next-line import/no-unresolved
import myPicture from "/images/my_picture.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Github, Linkedin } from "lucide-react";

function About() {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row">
      <AboutMeSection />
      <div className="ml-6 flex flex-col items-center gap-y-4">
        <Card className="px-4">
          <img
            src={myPicture}
            alt=""
            className="hidden h-[35rem] object-cover lg:block"
          />
        </Card>
        <Card className="w-fit">
          <CardContent className="flex items-center gap-1 p-4">
            <CardTitle>Socials:</CardTitle>
            <Button variant={"ghost"} className="group" asChild>
              <Link to="https://www.facebook.com/FleetingComet/">
                <Facebook className="h-8 text-accent group-hover:text-secondary" />
              </Link>
            </Button>

            <Button variant={"ghost"} className="group" asChild>
              <Link to="https://github.com/AlfredPaguio">
                <Github className="h-8 text-accent group-hover:text-secondary" />
              </Link>
            </Button>

            <Button variant={"ghost"} className="group" asChild>
              <Link to="https://www.linkedin.com/in/alfredpaguio">
                <Linkedin className="h-8 text-accent group-hover:text-secondary" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default About;

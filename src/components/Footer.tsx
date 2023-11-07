import { Facebook, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-w-screen bg-background-100 dark:bg-background-950 border-t">
      {/*  Flex Container */}
      <div className="flex flex-col-reverse justify-between space-y-8 px-6 py-1 md:flex-row md:space-y-0 md:py-10">
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-6 md:flex-col md:items-start md:space-y-0">
          <div className="text-text-light dark:text-text-dark mx-auto my-6 text-center  md:hidden">
            Copyright &copy; Alfred U. Paguio | {currentYear}
          </div>
          <div className="flex justify-center">
            <Button variant={"ghost"} className="group" asChild>
              <Link to="https://www.facebook.com/FleetingComet/">
                <Facebook className="text-accent-light dark:text-accent-dark group-hover:text-primary-light group-hover:dark:text-primary-dark h-8" />
              </Link>
            </Button>

            <Button variant={"ghost"} className="group" asChild>
              <Link to="https://github.com/AlfredPaguio">
                <Github className="text-accent-light dark:text-accent-dark group-hover:text-primary-light group-hover:dark:text-primary-dark h-8" />
              </Link>
            </Button>

            <Button variant={"ghost"} className="group" asChild>
              <Link to="https://www.linkedin.com/in/alfredpaguio">
                <Linkedin className="text-accent-light dark:text-accent-dark group-hover:text-primary-light group-hover:dark:text-primary-dark h-8" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="text-text-light dark:text-text-dark hidden flex-col justify-center md:flex">
          &copy; {currentYear} Alfred U. Paguio. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

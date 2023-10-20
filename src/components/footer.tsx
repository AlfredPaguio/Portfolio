import { Facebook, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-w-screen border-t bg-black">
      {/*  Flex Container */}
      <div className="flex flex-col-reverse justify-between space-y-8 px-6 py-1 md:flex-row md:space-y-0 md:py-10">
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-6 md:flex-col md:items-start md:space-y-0">
          <div className="mx-auto my-6 text-center text-text  md:hidden">
            Copyright &copy; {currentYear} Alfred U. Paguio. All Rights Reserved
          </div>
          <div className="flex justify-center space-x-3">
            <Link to="https://www.facebook.com/FleetingComet/">
              <Facebook className="h-8 text-accent hover:text-primary" />
            </Link>
            <Link to="https://github.com/AlfredPaguio">
              <Github className="h-8 text-accent hover:text-primary" />
            </Link>
            <Link to="https://www.linkedin.com/in/alfredpaguio">
              <Linkedin className="h-8 text-accent hover:text-primary" />
            </Link>
          </div>
        </div>

        <div className="hidden flex-col justify-center text-text md:flex">
          &copy; {currentYear} Alfred U. Paguio. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

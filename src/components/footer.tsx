import { Facebook, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto  border-t bg-black">

      {/*  Flex Container */}
      <div className="container mx-auto  flex flex-col-reverse justify-between space-y-8 px-6 py-1 md:flex-row md:space-y-0 md:py-10">
        
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-6 md:flex-col md:items-start md:space-y-0">
          <div className="mx-auto my-6 text-center text-text dark:text-text-dark md:hidden">
            Copyright &copy; {currentYear}, All Rights Reserved
          </div>
          {/* Social links Container */}
          <div className="flex justify-center space-x-3">
            {/* fb */}
            <Link to="https://www.facebook.com/FleetingComet/">
              <Facebook className="h-8 text-accent hover:text-primary dark:text-accent-dark dark:hover:text-primary-dark" />
            </Link>
            {/* gh */}
            <Link to="https://github.com/AlfredPaguio">
              <Github className="h-8 text-accent hover:text-primary dark:text-accent-dark dark:hover:text-primary-dark" />
            </Link>
            {/* linkedin */}
            <Link to="https://www.linkedin.com/in/alfredpaguio">
              <Linkedin className="h-8 text-accent hover:text-primary dark:text-accent-dark dark:hover:text-primary-dark" />
            </Link>
          </div>
        </div>

        {/* copyrights */}
        <div className="hidden flex-col justify-center text-text dark:text-text-dark md:flex">
          &copy; {currentYear} Alfred U. Paguio. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

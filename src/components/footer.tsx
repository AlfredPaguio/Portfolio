import pagesData from "@/pages/pagesData";
import { routerType } from "@/types/router.types";
import { Facebook, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto bg-secondary shadow-inner shadow-accent/40 dark:bg-secondary-dark dark:shadow-accent-dark/40">
      {/* <!-- Flex Container --> */}
      <div className="container mx-auto flex flex-col-reverse justify-between space-y-8 px-6 py-10 md:flex-row md:space-y-0">
        {/* <!-- Logo and social links container --> */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0">
          <div className="mx-auto my-6 text-center text-text dark:text-text-dark md:hidden">
            Copyright &copy; {currentYear}, All Rights Reserved
          </div>
          {/* <!-- Logo --> */}
          <div>
            <Link to="/">
              <h1 className="h-8 bg-gradient-to-tl from-primary to-accent bg-clip-text text-3xl font-bold text-transparent dark:from-primary-dark dark:to-accent-dark">
              ⛧⛤⛥⛦
              </h1>
            </Link>
          </div>
          {/* <!-- Social Links Container --> */}
          <div className="flex justify-center space-x-4">
            {/* <!-- Link 1 --> */}
            <Link to="https://www.facebook.com/FleetingComet/">
              <Facebook className="h-8 text-primary dark:text-primary-dark" />
            </Link>
            {/* <!-- Link 2 --> */}
            <Link to="https://github.com/AlfredPaguio">
              <Github className="h-8 text-primary dark:text-primary-dark" />
            </Link>
            {/* <!-- Link 3 --> */}
            <Link to="https://www.linkedin.com/in/alfredpaguio">
              <Linkedin className="h-8 text-primary dark:text-primary-dark" />
            </Link>
          </div>
        </div>
        {/* <!-- List Container --> */}
        <div className="flex justify-around">
          <div className="flex justify-evenly space-x-6">
            {pagesData
              .filter((route: routerType) => route.path != "*")
              .map((route: routerType, key) => {
                return (
                  <>
                    <Link
                      key={key}
                      to={`/${route.path}`}
                      className="transition-all duration-200 text-text dark:text-text-dark hover:text-accent dark:hover:text-accent-dark"
                    >
                      {route.title}
                    </Link>
                  </>
                );
              })}
          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div className="flex flex-col justify-between">
          <div className="hidden text-text dark:text-text-dark md:block">
            Copyright &copy; {currentYear}, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

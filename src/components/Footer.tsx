"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-w-screen shadow-inner flex-none">
      <div className="flex flex-col-reverse justify-between space-y-8 px-16 py-1 md:flex-row md:space-y-0 md:py-10">
        <div className="flex flex-col-reverse items-center justify-between space-y-6 md:flex-col md:items-start md:space-y-0">
          <div className="mx-auto my-6 text-center text-foreground md:hidden">
            Copyright &copy; Alfred U. Paguio | {currentYear}
          </div>
           {/* <div className="flex justify-center">
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
          </div> */}
        </div>

        <div className="hidden flex-col justify-center text-foreground md:flex">
          &copy; {currentYear} Alfred U. Paguio. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

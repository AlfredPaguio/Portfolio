import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { DownloadIcon, ChevronDownIcon } from "lucide-react";
import { Link } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import Morgan_le_Fay from "/images/Morgan_le_Fay_Typescript_mini.png";

function Home() {
  return (
    <div className="flex h-full w-full items-center justify-between px-16">
      <div className="flex flex-col">
        <h2 className="mb-4 text-start text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl">
          I'm
        </h2>
        <h1 className="mb-4 text-start text-5xl font-bold [text-wrap:balance] [viewTransitionName:brand-name] md:text-6xl lg:text-7xl xl:text-8xl">
          Alfred U. Paguio
        </h1>
        <h2 className="mb-4 text-start text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl">
          A web developer with a diverse skill set
        </h2>
        <p className="text-small text-start [text-wrap:balance] md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Specializing in web development, experienced in various programming
          languages and frameworks.
          <br />
          Ready to assist in building and optimizing your web projects.
        </p>
        <div className="flex gap-x-2 p-4 pl-0">
          <div className="flex items-start rounded-md bg-primary text-primary-foreground">
            <Button variant={"ghost"} className="rounded-r-none" asChild>
              <Link to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV.pdf">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
            <Separator orientation="vertical" className="h-full" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="rounded-l-none px-2 shadow-none"
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                alignOffset={-5}
                className="w-[200px]"
                forceMount
              >
                <DropdownMenuLabel>Download Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV.docx">
                    <DownloadIcon className="mr-2 h-4 w-4" /> Docx format
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuLabel>With Picture</DropdownMenuLabel>
                <DropdownMenuItem>
                  <DownloadIcon className="mr-2 h-4 w-4" /> PDF Format
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DownloadIcon className="mr-2 h-4 w-4" /> DOCX Format
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuLabel>
                  Normal CV (Not Programming Focused)
                </DropdownMenuLabel>
                <DropdownMenuItem>
                  <DownloadIcon className="mr-2 h-4 w-4" /> PDF Format
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  DOCX Format
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="font-medium">
                  Contact me for more.
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button variant={"outline"} asChild>
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className="hidden flex-col md:flex">
        {/* <img
          className="h-[42rem] object-scale-down"
          src="https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books/blob/master/Typescript/Morgan_le_Fay_Typescript_pros.png?raw=true"
          alt="Morgan le Fay holding Typescript Pro book"
        /> */}
        <img
          className="h-[42rem] object-scale-down"
          src={Morgan_le_Fay}
          alt="Morgan le Fay holding Typescript Pro book"
        />
      </div>
    </div>
  );
}

export default Home;

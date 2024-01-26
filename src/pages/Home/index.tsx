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
// import Morgan_le_Fay from "/images/Morgan_le_Fay_Typescript_mini.png";
// eslint-disable-next-line import/no-unresolved
import CodeThinking from "/images/undraw_code_thinking_re_gka2.svg";
import { ScrollArea } from "@/components/ui/scroll-area";

function Home() {
  return (
    <div className="flex h-full items-center justify-between">
      <div className="flex flex-col">
        <h2 className="mb-4 text-start text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl">
          I'm
        </h2>
        <h1 className="mb-4 text-balance text-start text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="[viewTransitionName:brand-name]">Alfred</span> U. Paguio
        </h1>
        <h2 className="mb-4 text-start text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl">
          A Software Engineer
        </h2>
        <p className="text-small text-pretty text-start md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Experienced in various programming languages and frameworks,
          specializing in crafting and optimizing web projects.
          <br />
          Ready to assist in building and optimizing your projects.
        </p>
        <div className="flex gap-x-2 p-4 pl-0">
          <div className="flex items-start rounded-md bg-primary text-primary-foreground hover:bg-primary/80">
            <Button variant={"ghost"} className="rounded-r-none" asChild>
              <Link to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV.pdf">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
            <Separator orientation="vertical" className="h-full" />
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"ghost"}
                  className="rounded-l-none px-2 shadow-none"
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" alignOffset={-5} forceMount>
                <ScrollArea>
                  <DropdownMenuLabel>Download Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV.docx">
                      <DownloadIcon className="mr-2 h-4 w-4" /> DOCX Format
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>With Picture</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV_with_Picture.pdf">
                      <DownloadIcon className="mr-2 h-4 w-4" /> PDF Format
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV_with_Picture.docx">
                      <DownloadIcon className="mr-2 h-4 w-4" /> DOCX Format
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                  <DropdownMenuLabel>With Reference</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV_with_Number_and_Reference.pdf">
                      <DownloadIcon className="mr-2 h-4 w-4" /> PDF Format
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV_with_Number_and_Reference.docx">
                      <DownloadIcon className="mr-2 h-4 w-4" /> DOCX Format
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="font-medium">
                    Contact me for more.
                  </DropdownMenuLabel>
                </ScrollArea>
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
        {/* <img
          className="h-[42rem] object-scale-down"
          src={Morgan_le_Fay}
          alt="Morgan le Fay holding Typescript Pro book"
        /> */}
        <figure className="max-h-min drop-shadow-lg">
          <img
            className="h-96 fill-accent object-scale-down"
            src={CodeThinking}
            alt="An illustration of a man thinking sitting beside their laptop"
          />
          <figcaption className="px-5 text-center">
            Illustration from https://undraw.co/
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Home;

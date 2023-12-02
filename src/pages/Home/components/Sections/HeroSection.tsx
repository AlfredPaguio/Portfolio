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
import { ChevronDownIcon, DownloadIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="mb-8 mt-16 flex h-full w-full snap-align-none flex-col items-center pb-8 pt-16">
        <h1 className="mb-4 text-center text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl xl:text-6xl">
          I'm Alfred U. Paguio
        </h1>
        <h2 className="mb-2 text-center text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl">
          Web Developer with a Diverse Skill Set
        </h2>
        <p className="text-small text-center [text-wrap:balance] md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          I specialize in web development with experience in various programming
          languages and frameworks.
          <br />
          Let me help you build and optimize your web projects.
        </p>
        <div className="mx-auto flex gap-x-2 p-2">
          <div className="flex items-center space-x-1 rounded-md bg-primary text-secondary-foreground">
            <Button asChild>
              <Link to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV.pdf">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
            <Separator orientation="vertical" className="h-[20px]" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="px-2 shadow-none">
                  <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                alignOffset={-5}
                className="w-[200px]"
                forceMount
              >
                <DropdownMenuLabel>
                  Download Options
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV.docx">
                    <DownloadIcon className="mr-2 h-4 w-4" /> Docx format
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuLabel>
                  With Picture
                </DropdownMenuLabel>
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
    </section>
  );
}

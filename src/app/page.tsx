import Image from "next/image";
import ManThink from "@@/public/images/undraw_code_thinking_re_gka2.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDownIcon, DownloadIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <main className="flex h-full items-center justify-between px-4 pb-4 md:px-16">
      <div className="flex flex-col">
        <h2 className="mb-4 text-start text-lg font-medium md:text-xl lg:text-2xl xl:text-3xl">
          I&apos;m
        </h2>
        <h1 className="mb-4 text-balance text-start text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="[viewTransitionName:brand-name]">Alfred</span> U.
          Paguio
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
              <Link
                href={
                  "https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV.pdf"
                }
              >
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
                    <Link href="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV.docx">
                      <DownloadIcon className="mr-2 h-4 w-4" /> DOCX Format
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>With Picture</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV_with_Picture.pdf">
                      <DownloadIcon className="mr-2 h-4 w-4" /> PDF Format
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV_with_Picture.docx">
                      <DownloadIcon className="mr-2 h-4 w-4" /> DOCX Format
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                  <DropdownMenuLabel>With Reference</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV_with_Number_and_Reference.pdf">
                      <DownloadIcon className="mr-2 h-4 w-4" /> PDF Format
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="https://github.com/AlfredPaguio/AlfredPaguio.github.io/raw/main/res/AlfredPaguio_CV_with_Number_and_Reference.docx">
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
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className="hidden flex-col md:flex">
        <figure className="max-h-min drop-shadow-lg">
          <Image
            priority={false}
            className="h-96 fill-accent object-scale-down"
            src={ManThink}
            alt="An illustration of a man thinking sitting beside their laptop"
          />
          <figcaption className="px-5 text-center">
            Illustration from https://undraw.co/
          </figcaption>
        </figure>
      </div>
    </main>
  );
}

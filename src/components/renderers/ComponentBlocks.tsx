/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils/cn";
import { DocumentRendererProps } from "@keystatic/core/renderer";
// import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { Button } from "../ui/button";

const ComponentBlocks: DocumentRendererProps["componentBlocks"] = {
  image: ({
    width,
    height,
    alt,
    className,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
      <img
        width={width || 640}
        height={height || 480}
        alt={alt}
        className={cn(className, "max-h-[800px] w-auto rounded-lg shadow-lg")}
        {...props}
      />
    );
  },
  div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className="text-foreground" {...props}>
      {children}
    </div>
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-sm lg:text-lg xl:text-xl" {...props}>
      {children}
    </li>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-inside list-disc marker:text-accent" {...props}>
      {children}
    </ul>
  ),
  Link: ({ ...props }: LinkProps) => (
    <Button variant={"link"} asChild>
      <Link {...props} />
    </Button>
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  iframe: (props) => <div dangerouslySetInnerHTML={{ __html: props.code }} />,
};

export default ComponentBlocks;

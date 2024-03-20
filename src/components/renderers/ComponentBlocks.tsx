import { cn } from "@/utils/cn";
import { DocumentRendererProps } from "@keystatic/core/renderer";
import Image from "next/image";
import Link, { LinkProps } from "next/link";

const ComponentBlocks: DocumentRendererProps["componentBlocks"] = {
  image: ({ image, width, height, altText, classes, ...props }) => {
    return (
      <figure>
        <Image
          {...props}
          src={image}
          width={width || 640}
          height={height || 480}
          alt={altText}
          className={cn(classes, "max-h-[800px] w-auto rounded-lg shadow-lg")}
        />

        {props.caption && (
          <figcaption
            className="!mt-3"
            dangerouslySetInnerHTML={{ __html: props.caption }}
          />
        )}
      </figure>
    );
  },
  div: ({ children, ...props }) => (
    <div className="text-foreground" {...props}>
      {children}
    </div>
  ),
  li: ({ children, ...props }) => (
    <li className="text-sm lg:text-lg xl:text-xl" {...props}>
      {children}
    </li>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-inside list-disc marker:text-accent" {...props}>
      {children}
    </ul>
  ),
  a: ({ children, ...props }) => (
    <Link
      {...(props as LinkProps)}
      className="relative w-fit text-accent transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-0  after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:ease-in after:content-[''] hover:text-accent/80  after:hover:translate-x-0 after:hover:scale-x-100 after:hover:duration-300"
    >
      {children}
    </Link>
  ),
  iframe: (props) => <div dangerouslySetInnerHTML={{ __html: props.code }} />,
};

export default ComponentBlocks;

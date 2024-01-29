import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    p: ({ children }) => (
      <p className="indent-8 text-sm lg:text-lg xl:text-xl">{children}</p>
    ),
    li: ({ children }) => (
      <li className="text-sm lg:text-lg xl:text-xl">{children}</li>
    ),
    ul: ({ children }) => (
      <ul className="list-inside list-disc marker:text-accent">{children}</ul>
    ),
    a: ({ children, ...props }) => (
      <Link
        {...(props as LinkProps)}
        className="relative w-fit text-accent transition-all duration-300 ease-in-out after:absolute after:bottom-0 after:left-0  after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:ease-in after:content-[''] hover:text-accent/80  after:hover:translate-x-0 after:hover:scale-x-100 after:hover:duration-300"
      >
        {children}
      </Link>
    ),

    img: (props) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}

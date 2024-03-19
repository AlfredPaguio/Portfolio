import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystatic/core/renderer";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { codeToHtml } from "shiki";
import { ComponentProps } from "react";

type CodeProps = Omit<ComponentProps<"div">, "children"> & {
  code: string;
  language: string;
};

async function CodeRender({ code, language, ...props }: CodeProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "github-dark",
  });
  return <div dangerouslySetInnerHTML={{ __html: html }} {...props} />;
}

export default function Renderer({ document }: DocumentRendererProps) {
  return (
    <DocumentRenderer
      document={document}
      renderers={{
        block: {
          code: ({ children, language = "plain" }) => {
            return <CodeRender code={children} language={language} />;
          },
        },
      }}
      componentBlocks={{
        image: (props) => {
          return (
            <figure>
              <Image
                src={props.image}
                width={props.width || 640}
                height={props.height || 480}
                alt={props.altText}
                className={
                  props.classes || "max-h-[800px] w-auto rounded-lg shadow-lg"
                }
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
        li: ({ children }) => (
          <li className="text-sm lg:text-lg xl:text-xl">{children}</li>
        ),
        ul: ({ children }) => (
          <ul className="list-inside list-disc marker:text-accent">
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
        iframe: (props) => (
          <div dangerouslySetInnerHTML={{ __html: props.code }} />
        ),
      }}
    />
  );
}

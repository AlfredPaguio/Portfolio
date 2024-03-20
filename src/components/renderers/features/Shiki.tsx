import { codeToHtml } from "shiki";
import { ComponentProps } from "react";

type ShikiProps = Omit<ComponentProps<"div">, "children"> & {
  code: string;
  language: string;
};

export default async function Shiki({ code, language, ...props }: ShikiProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "github-dark",
  });
  return <div dangerouslySetInnerHTML={{ __html: html }} {...props} />;
}

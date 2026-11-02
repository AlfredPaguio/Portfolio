import { experimental_getFontFileURL, fontData } from "astro:assets";
import type {
  ContainerNode,
  FontLoader,
  ImageNode,
  Node,
  TextNode,
} from "takumi-js";
import { container, text as createText, image } from "takumi-js/helpers";
import { normalizeId } from "./utils/normalizeId";

type Style = NonNullable<ContainerNode["style"]>;

export const ink = "#171717";
export const muted = "#66645f";
export const line = "#d8d6d0";
export const paper = "#f3f2ef";

export function box(style: Style, children: Node[] = []): ContainerNode {
  return container({ style: { display: "flex", ...style }, children });
}

export function text(value: string, style: Style = {}): TextNode {
  return createText(value, { fontSize: 22, lineHeight: 1.4, ...style });
}

export function picture(src: ImageNode["src"], style: Style): ImageNode {
  return image({ src, style });
}

const brand = new TextEncoder().encode(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140"><g fill="none" stroke="#171717" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5"><path stroke-width="2.5" d="m110 25-80 90"/><path d="m20 25 22 47 22-47M30 46h24M78 115V72h18a10.5 10.5 0 0 1 0 21H78"/></g></svg>',
);

export function card(
  domain: string,
  children: Node[],
  note?: string,
): ContainerNode {
  return box(
    {
      width: 1200,
      height: 630,
      position: "relative",
      overflow: "hidden",
      backgroundColor: paper,
      color: ink,
      fontFamily: "Geist",
    },
    [
      box(
        {
          position: "absolute",
          left: 56,
          top: 44,
          height: 42,
          alignItems: "center",
          gap: 14,
        },
        [
          picture(brand, { width: 42, height: 42 }),
          text("Alfred Paguio", {
            fontSize: 21,
            fontWeight: 600,
            letterSpacing: -0.5,
          }),
        ],
      ),
      ...children,
      box(
        {
          position: "absolute",
          left: 56,
          right: 56,
          bottom: 48,
          paddingTop: 18,
          borderTop: `1px solid ${line}`,
          alignItems: "center",
          justifyContent: "space-between",
        },
        [
          text(domain, { fontSize: 18, fontWeight: 500 }),
          ...(note ? [text(note, { fontSize: 17, color: muted })] : []),
        ],
      ),
    ],
  );
}

const techSources = import.meta.glob<string>("../content/techs/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function techBadge(name: string): ContainerNode {
  const id = normalizeId(name);
  const source = Object.entries(techSources).find(
    ([file]) =>
      normalizeId(
        file
          .split("/")
          .pop()!
          .replace(/\.mdx$/, ""),
      ) === id,
  )?.[1];
  const svg = source
    ?.match(/<svg\b[\s\S]*?<\/svg>/)?.[0]
    .replace(/\$\{props\.iconId\}/g, `og-${id}`)
    .replace(/=\{`([^`]+)`\}/g, '="$1"')
    .replace(/currentColor/g, ink);
  return box(
    {
      height: 36,
      alignItems: "center",
      gap: 8,
      padding: "0 12px",
      borderRadius: 6,
      border: `1px solid ${line}`,
    },
    [
      ...(svg && !svg.includes("{")
        ? [
            picture(new TextEncoder().encode(svg), {
              width: 20,
              height: 20,
              objectFit: "contain",
            }),
          ]
        : []),
      text(name, { fontSize: 16 }),
    ],
  );
}

let fonts: Promise<FontLoader[]> | undefined;

export function getOgFonts(requestUrl: URL): Promise<FontLoader[]> {
  return (fonts ??= (async () => {
    const faces = fontData["--font-geist-sans"];
    const face =
      faces.find(
        (item) => item.style === "normal" && item.subset === "latin",
      ) ?? faces.find((item) => item.style === "normal");
    const source = face?.src[0]?.url;
    if (!source)
      throw new Error(
        "The OG cards need the Geist font declared in astro.config.mjs.",
      );
    const response = await fetch(
      experimental_getFontFileURL(source, requestUrl),
    );
    if (!response.ok)
      throw new Error(
        `Could not load the configured OG font: ${response.status}`,
      );
    return [
      { name: "Geist", data: await response.arrayBuffer(), style: "normal" },
    ];
  })().catch((error) => {
    fonts = undefined;
    throw error;
  }));
}

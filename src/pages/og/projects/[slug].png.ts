import myImage from "@/assets/images/profile.png?url&inline";
import stylesheet from "@/assets/styles/global.css?inline";
import dataUrlToArrayBuffer from "@/lib/utils/dataUrlToArrayBuffer";
import { normalizeTech } from "@/lib/utils/normalizeTech";
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import fs from "node:fs";
import path from "path";
import type { ImageSource } from "takumi-js";
import { ImageResponse } from "takumi-js/response";

function fileToArrayBuffer(filePath: string): ArrayBuffer | null {
  if (!fs.existsSync(filePath)) return null;

  const buffer = fs.readFileSync(filePath);

  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  ) as ArrayBuffer;
}

function bufferToDataUrl(buffer: ArrayBuffer, filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();

  const mimeMap: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
  };

  const mimeType = mimeMap[ext] || "image/png";

  return `data:${mimeType};base64,${Buffer.from(buffer).toString("base64")}`;
}

export const GET: APIRoute = async (context) => {
  // @ts-ignore
  const { project: projectData }: { project: CollectionEntry<"projects"> } =
    context.props;

  // Load Font
  // const data = fontData["--font-noto-sans-jp"];
  // const fontLoader = await fetch(
  //   new URL(data[0].src[0].url, context.url.origin),
  // ).then((res) => res.arrayBuffer());

  // const fonts: Font[] = [
  //   {
  //     name: "noto-sans-jp",
  //     data: fontLoader,
  //     weight: 400,
  //     style: "normal",
  //   },
  // ];

  const projectImagePath = path.join(
    process.cwd(),
    "public",
    projectData.data.images?.[0]?.src || "",
  );

  const projectImageBuffer = fileToArrayBuffer(projectImagePath);

  const projectImageDataUrl = projectImageBuffer
    ? bufferToDataUrl(projectImageBuffer, projectImagePath)
    : null;

  const persistentImages: ImageSource[] = [
    {
      src: "avatar-image",
      data: dataUrlToArrayBuffer(myImage),
    },
  ];

  return new ImageResponse(
    openGraphComponent(projectData, context.url.origin, projectImageDataUrl),
    {
      width: 1200,
      height: 630,
      emoji: "from-font",
      // fonts: fonts,
      persistentImages,
      stylesheets: [stylesheet],
    },
  );
};

const openGraphComponent = (
  projectData: CollectionEntry<"projects">,
  siteUrl: string,
  projectImageDataUrl: string | null,
) => {
  // Meta Data
  const { title, stack, images, summary, featured } = projectData.data;

  const hasProjectImage = Boolean(images?.[0]?.src);

  const titleSize =
    title.length > 34
      ? "text-[50px]"
      : title.length > 24
        ? "text-[58px]"
        : "text-[68px]";

  return {
    type: "div",
    props: {
      tw: "flex w-full h-full bg-[#050505] text-white px-16 py-6 relative overflow-hidden justify-between",
      style: { fontFamily: "Geist" },
      children: [
        // ambient background glow
        {
          type: "div",
          props: {
            tw: "absolute -top-24 -left-24 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-[100px]",
          },
        },
        {
          type: "div",
          props: {
            tw: "absolute bottom-0 right-0 w-[320px] h-[320px] bg-cyan-400/5 rounded-full blur-[80px]",
          },
        },

        // LEFT CONTENT
        {
          type: "div",
          props: {
            tw: "flex flex-col w-[43%] h-full justify-between py-8 z-10",
            children: [
              // top meta
              {
                type: "div",
                props: {
                  tw: "flex items-center gap-4",
                  children: [
                    featured && {
                      type: "div",
                      props: {
                        tw: "flex flex-row items-center gap-2 text-amber-500 text-sm font-bold uppercase tracking-widest",
                        children: [
                          {
                            type: "svg",
                            props: {
                              width: 16,
                              height: 16,
                              viewBox: "0 0 24 24",
                              fill: "#f59e0b",
                              children: [
                                {
                                  type: "path",
                                  props: {
                                    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
                                  },
                                },
                              ],
                            },
                          },
                          { type: "span", props: { children: "Featured" } },
                        ],
                      },
                    },
                  ].filter(Boolean),
                },
              },

              // middle title/content block
              {
                type: "div",
                props: {
                  tw: "flex flex-col",
                  children: [
                    {
                      type: "h1",
                      props: {
                        tw: `${titleSize} font-black leading-[1.0] tracking-tighter max-w-[500px]`,
                        style: {
                          textOverflow: "ellipsis",
                          lineClamp: 2,
                          textWrap: "balance",
                        },
                        children: title,
                      },
                    },

                    summary
                      ? {
                          type: "p",
                          props: {
                            tw: "text-[22px] text-zinc-400 mt-4 leading-snug max-w-[480px]",
                            style: {
                              textOverflow: "ellipsis",
                              lineClamp: 2,
                              textWrap: "pretty",
                            },
                            children: summary,
                          },
                        }
                      : null,

                    {
                      type: "div",
                      props: {
                        tw: "flex flex-wrap gap-2 mt-6 max-w-[500px]",
                        children: stack.slice(0, 4).flatMap((tech, index) => {
                          const parsed = normalizeTech(tech);

                          const arr = [
                            {
                              type: "span",
                              props: {
                                tw: "text-[17px] text-zinc-300",
                                children: parsed.version
                                  ? `${parsed.name} ${parsed.version}`
                                  : parsed.name,
                              },
                            },
                          ];

                          if (index < Math.min(stack.length, 4) - 1) {
                            arr.push({
                              type: "span",
                              props: {
                                tw: "text-zinc-600 text-[17px]",
                                children: "•",
                              },
                            });
                          }

                          return arr;
                        }),
                      },
                    },
                  ].filter(Boolean),
                },
              },

              // bottom author
              {
                type: "div",
                props: {
                  tw: "flex items-center gap-3",
                  children: [
                    {
                      type: "img",
                      props: {
                        src: "avatar-image",
                        tw: "w-11 h-11 rounded-full border border-white/20",
                      },
                    },
                    {
                      type: "div",
                      props: {
                        tw: "flex flex-col",
                        children: [
                          {
                            type: "span",
                            props: {
                              tw: "text-base font-semibold",
                              children: "Alfred Paguio",
                            },
                          },
                          {
                            type: "span",
                            props: {
                              tw: "text-xs text-zinc-500",
                              children: siteUrl,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },

        // RIGHT IMAGE PANEL
        {
          type: "div",
          props: {
            tw: "flex items-center justify-center w-[51%] h-full z-10 relative",
            children: projectImageDataUrl
              ? [
                  // soft glow behind image
                  {
                    type: "div",
                    props: {
                      tw: "absolute w-[520px] h-[420px] bg-blue-500/10 blur-[100px] rounded-full",
                    },
                  },

                  // image itself (no container box)
                  {
                    type: "img",
                    props: {
                      src: projectImageDataUrl,
                      tw: "w-full max-h-[460px] object-contain drop-shadow-2xl",
                      style: {
                        maskImage:
                          "linear-gradient(to bottom, black 80%, transparent 100%)",
                      },
                    },
                  },
                ]
              : {
                  type: "div",
                  props: {
                    tw: "w-full h-[460px] flex items-center justify-center text-zinc-700 text-6xl font-mono",
                    children: "</>",
                  },
                },
          },
        },
      ],
    },
  };
};

export const getStaticPaths = (async () => {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { slug: project.id },
    props: { project },
  }));
}) satisfies GetStaticPaths;

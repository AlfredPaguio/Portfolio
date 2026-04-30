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

  const titleSize =
    title.length > 34
      ? "text-[50px]"
      : title.length > 24
        ? "text-[58px]"
        : "text-[68px]";

  return {
    type: "div",
    props: {
      tw: "flex w-full h-full bg-[#080808] text-white relative overflow-hidden",
      style: { fontFamily: "Geist" },
      children: [
        // Top gradient accent line
        {
          type: "div",
          props: {
            tw: "absolute top-0 left-0 right-0 h-[2px] z-30",
            style: {
              background:
                "linear-gradient(to right, #3b82f6, #22d3ee, #6366f1)",
            },
          },
        },

        // Ambient background glows
        {
          type: "div",
          props: {
            tw: "absolute top-0 left-0 w-[500px] h-[500px] rounded-full",
            style: {
              background:
                "radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)",
            },
          },
        },
        {
          type: "div",
          props: {
            tw: "absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full",
            style: {
              background:
                "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)",
            },
          },
        },

        featured && {
          type: "div",
          props: {
            tw: "absolute top-7 right-8 flex flex-row items-center gap-2 z-30 px-4 py-[7px]",
            children: [
              {
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
            ],
          },
        },

        // LEFT CONTENT
        {
          type: "div",
          props: {
            tw: "flex flex-col w-[50%] h-full justify-between px-14 py-11 z-10",
            children: [
              // Site URL - top left branding
              {
                type: "div",
                props: {
                  tw: "flex items-center gap-2",
                  children: [
                    {
                      type: "div",
                      props: {
                        tw: "w-[6px] h-[6px] rounded-full bg-cyan-400",
                      },
                    },
                    {
                      type: "span",
                      props: {
                        tw: "text-zinc-500 text-[13px] tracking-wide",
                        children: siteUrl,
                      },
                    },
                  ],
                },
              },

              // Title + summary + stack
              {
                type: "div",
                props: {
                  tw: "flex flex-col",
                  children: [
                    {
                      type: "h1",
                      props: {
                        tw: `${titleSize} font-black leading-[1.05] tracking-tight`,
                        style: {
                          textWrap: "balance",
                          lineClamp: 2,
                        },
                        children: title,
                      },
                    },

                    summary
                      ? {
                          type: "p",
                          props: {
                            tw: "text-[20px] text-zinc-400 mt-4 leading-snug",
                            style: {
                              lineClamp: 2,
                              textWrap: "pretty",
                            },
                            children: summary,
                          },
                        }
                      : null,

                    // Tech stack pills
                    {
                      type: "div",
                      props: {
                        tw: "flex flex-wrap gap-2 mt-7",
                        children: stack.slice(0, 5).map((tech) => {
                          const parsed = normalizeTech(tech);
                          const label = parsed.version
                            ? `${parsed.name} ${parsed.version}`
                            : parsed.name;
                          return {
                            type: "span",
                            props: {
                              tw: "text-[13px] text-zinc-300 px-3 py-1 rounded-full",
                              style: {
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.08)",
                              },
                              children: label,
                            },
                          };
                        }),
                      },
                    },
                  ].filter(Boolean),
                },
              },

              // Author row
              {
                type: "div",
                props: {
                  tw: "flex items-center gap-3",
                  children: [
                    {
                      type: "img",
                      props: {
                        src: "avatar-image",
                        tw: "w-10 h-10 rounded-full",
                        style: {
                          border: "1.5px solid rgba(255,255,255,0.15)",
                        },
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
                              tw: "text-[15px] font-semibold text-white",
                              children: "Alfred Paguio",
                            },
                          },
                          {
                            type: "span",
                            props: {
                              tw: "text-[12px] text-zinc-500 mt-[2px]",
                              children: "Software Engineer",
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
            tw: "flex items-center justify-center w-[50%] h-full z-10 relative",
            children: [
              // Glow behind image
              {
                type: "div",
                props: {
                  tw: "absolute w-[460px] h-[380px] rounded-full",
                  style: {
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
                    filter: "blur(40px)",
                  },
                },
              },

              projectImageDataUrl
                ? {
                    type: "div",
                    props: {
                      tw: "relative flex items-center justify-center w-[520px] h-[360px] rounded-2xl overflow-hidden",
                      style: {
                        border: "1px solid rgba(255,255,255,0.07)",
                        background: "rgba(255,255,255,0.02)",
                        boxShadow:
                          "0 0 0 1px rgba(255,255,255,0.04), 0 32px 64px rgba(0,0,0,0.5)",
                      },
                      children: [
                        {
                          type: "img",
                          props: {
                            src: projectImageDataUrl,
                            tw: "w-full h-full object-cover",
                            style: {
                              maskImage:
                                "linear-gradient(to bottom, black 70%, transparent 100%)",
                            },
                          },
                        },
                      ],
                    },
                  }
                : {
                    type: "div",
                    props: {
                      tw: "w-[520px] h-[360px] flex items-center justify-center rounded-2xl text-zinc-700 text-6xl font-mono",
                      style: {
                        border: "1px solid rgba(255,255,255,0.06)",
                        background: "rgba(255,255,255,0.02)",
                      },
                      children: "</>",
                    },
                  },
            ],
          },
        },
      ].filter(Boolean),
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

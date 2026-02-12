import myImage from "@/assets/images/profile.png?url&inline";
import dataUrlToArrayBuffer from "@/lib/utils/dataUrlToArrayBuffer";
import type { ImageSource } from "@takumi-rs/core";
import ImageResponse from "@takumi-rs/image-response";
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

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

  const persistentImages: ImageSource[] = [
    {
      src: "avatar-image",
      data: dataUrlToArrayBuffer(myImage),
    },
  ];

  return new ImageResponse(
    openGraphComponent(projectData, context.url.origin),
    {
      width: 1200,
      height: 630,
      // fonts: fonts,
      persistentImages,
    },
  );
};

const openGraphComponent = (
  projectData: CollectionEntry<"projects">,
  siteUrl: string,
) => {
  // Meta Data
  const { title, status, stack, images, summary, featured } = projectData.data;
  const projectImage = images[0]?.src
    ? new URL(images[0].src, siteUrl).href
    : null;

  // Status color mapping
  const statusColors = {
    active: "bg-emerald-500",
    maintenance: "bg-amber-500",
    archived: "bg-zinc-500",
    unknown: "bg-zinc-700",
  };

  return {
    type: "div",
    props: {
      tw: "flex flex-row w-full h-full bg-[#050505] text-white p-16 items-stretch justify-between relative overflow-hidden",
      style: { fontFamily: "Geist" },
      children: [
        // Background Decor
        {
          type: "div",
          props: {
            tw: "absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]",
          },
        },

        // LEFT COLUMN: Content (60% width)
        {
          type: "div",
          props: {
            tw: "flex flex-col justify-between w-[58%] h-full z-10",
            children: [
              // Top: Status & Branding
              {
                type: "div",
                props: {
                  tw: "flex items-center gap-4",
                  children: [
                    {
                      type: "div",
                      props: {
                        tw: "flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10",
                        children: [
                          {
                            type: "div",
                            props: {
                              tw: `w-2 h-2 rounded-full ${statusColors[status] || statusColors.unknown}`,
                            },
                          },
                          {
                            type: "span",
                            props: {
                              tw: "text-sm font-bold uppercase tracking-widest text-zinc-400",
                              children: status,
                            },
                          },
                        ],
                      },
                    },
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

              // Middle: Title & Summary
              {
                type: "div",
                props: {
                  tw: "flex flex-col gap-4 flex-1 justify-center",
                  children: [
                    {
                      type: "h1",
                      props: {
                        tw: "text-[75px] font-black leading-[1.1] m-0 tracking-tighter",
                        children: title,
                      },
                    },
                    summary && {
                      type: "p",
                      props: {
                        tw: "text-2xl text-zinc-400 leading-snug line-clamp-2",
                        children: summary,
                      },
                    },
                  ],
                },
              },

              // Bottom: Profile
              {
                type: "div",
                props: {
                  tw: "flex items-center gap-4 flex-shrink-0 mt-auto",
                  children: [
                    {
                      type: "img",
                      props: {
                        src: "avatar-image",
                        tw: "w-14 h-14 rounded-full border border-white/20",
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
                              tw: "text-xl font-bold leading-none",
                              children: "Alfred",
                            },
                          },
                          {
                            type: "span",
                            props: {
                              tw: "text-sm text-zinc-500 mt-1 leading-none",
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

        // RIGHT COLUMN: Preview & Stack (35% width)
        {
          type: "div",
          props: {
            tw: "flex flex-col justify-between w-[38%] h-full z-10",
            children: [
              // Project Image Preview Box
              {
                type: "div",
                props: {
                  tw: "flex bg-white/5 border border-white/10 rounded-3xl p-2 rotate-2 shadow-2xl flex-shrink-0",
                  children: [
                    projectImage
                      ? {
                          type: "img",
                          props: {
                            src: projectImage,
                            tw: "w-full h-64 object-cover rounded-2xl",
                          },
                        }
                      : {
                          type: "div",
                          props: {
                            tw: "w-full h-64 bg-zinc-900 rounded-2xl flex items-center justify-center",
                            children: [
                              {
                                type: "span",
                                props: {
                                  tw: "text-zinc-700 text-4xl font-mono",
                                  children: "</>",
                                },
                              },
                            ],
                          },
                        },
                  ],
                },
              },

              // Stack Pills
              {
                type: "div",
                props: {
                  tw: "flex flex-wrap gap-2 justify-end items-end mt-auto",
                  children: stack.slice(0, 5).map((tech: string) => ({
                    type: "span",
                    props: {
                      tw: "bg-white/5 text-zinc-300 border border-white/10 px-3 py-1 rounded-md text-xs font-mono",
                      children: tech,
                    },
                  })),
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

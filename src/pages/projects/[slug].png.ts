import myImage from "@/assets/images/profile.png";
import { siteConfig } from "@/data/site";
import type { Font } from "@takumi-rs/core";
import ImageResponse from "@takumi-rs/image-response";
import type { APIRoute, GetStaticPaths } from "astro";
import { fontData } from "astro:assets";
import { getCollection, type CollectionEntry } from "astro:content";

export const GET: APIRoute = async (context) => {
  // @ts-ignore
  const { project }: { project: CollectionEntry<"projects"> } = context.props;

  // Load Font
  const data = fontData["--font-noto-sans-symbols"];
  const fontLoader = await fetch(
    new URL(data[0].src[0].url, context.url.origin),
  ).then((res) => res.arrayBuffer());

  const fonts: Font[] = [
    {
      name: "Noto Sans Symbols 2",
      data: fontLoader,
    },
  ];

  // Meta Data
  const { title, status, stack, images, summary, featured } = project.data;
  const projectImage = images[0]?.src
    ? new URL(images[0].src, context.url.origin).href
    : null;

  const avatarBuffer = await fetch(
    new URL(myImage.src, context.url.origin)
  ).then((res) => res.arrayBuffer());

  const avatarUrl = `data:image/png;base64,${avatarUrl.toString("base64")}`;
  // const avatarUrl = new URL(myImage.src, context.url.origin).href;
  //   const siteUrl = context.url.origin;
  const siteUrl = siteConfig.url;

  // Status color mapping
  const statusColors = {
    active: "bg-emerald-500",
    maintenance: "bg-amber-500",
    archived: "bg-zinc-500",
    unknown: "bg-zinc-700",
  };

  return new ImageResponse(
    {
      type: "div",
      props: {
        tw: "flex flex-row w-full h-full bg-[#050505] text-white p-16 items-stretch justify-between relative overflow-hidden",
        style: { fontFamily: "Geist" },
        children: [
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
              tw: "flex flex-col justify-between w-[60%] z-10",
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
                        type: "span",
                        props: {
                          tw: "text-amber-500 text-sm font-bold uppercase tracking-widest",
                          style: { fontFamily: "Noto Sans Symbols 2" },
                        //   children: "★ Featured",
                          children: "[Featured]",
                        },
                      },
                    ],
                  },
                },

                // Middle: Title & Summary
                {
                  type: "div",
                  props: {
                    tw: "flex flex-col gap-4",
                    children: [
                      {
                        type: "h1",
                        props: {
                          tw: "text-[80px] font-black leading-[1.1] m-0 tracking-tighter",
                          children: title,
                        },
                      },
                      summary && {
                        type: "p",
                        props: {
                          tw: "text-2xl text-zinc-400 leading-snug line-clamp-3",
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
                    tw: "flex items-center gap-4",
                    children: [
                      {
                        type: "img",
                        props: {
                          src: avatarUrl,
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
                                tw: "text-xl font-bold",
                                children: "Alfred",
                              },
                            },
                            {
                              type: "span",
                              props: {
                                tw: "text-sm text-zinc-500",
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
              tw: "flex flex-col justify-between w-[35%] z-10",
              children: [
                // Project Image Preview Box
                {
                  type: "div",
                  props: {
                    tw: "flex bg-white/5 border border-white/10 rounded-3xl p-2 rotate-2 shadow-2xl",
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
                                    tw: "text-zinc-700 font-mono",
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
                    tw: "flex flex-wrap gap-2 justify-end",
                    children: stack.slice(0, 5).map((tech) => ({
                      type: "span",
                      props: {
                        tw: "bg-zinc-900 text-zinc-300 border border-white/5 px-3 py-1 rounded-md text-sm font-mono",
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
    },
    {
      width: 1200,
      height: 630,
      fonts: fonts,
    },
  );

  //   end
};

export const getStaticPaths = (async () => {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { slug: project.id },
    props: { project },
  }));
}) satisfies GetStaticPaths;

import myImage from "@/assets/images/profile.png";
import { siteConfig } from "@/data/site";
import ImageResponse from "@takumi-rs/image-response";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  // Meta Data
  const avatarUrl = new URL(myImage.src, context.url.origin).href;
  //   const siteUrl = context.url.origin;
  const siteUrl = siteConfig.url;

  return new ImageResponse(
    {
      type: "div",
      props: {
        tw: "flex flex-row w-full h-full bg-[#050505] text-white p-20 items-stretch justify-between relative overflow-hidden",
        style: { fontFamily: "Geist" },
        children: [
          // Background Decor: Subtle radial glow
          {
            type: "div",
            props: {
              tw: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]",
            },
          },

          // LEFT: Identity
          {
            type: "div",
            props: {
              tw: "flex flex-col justify-between w-[55%] z-10",
              children: [
                {
                  type: "div",
                  props: {
                    tw: "flex items-center gap-3",
                    children: [
                      {
                        type: "div",
                        props: { tw: "w-3 h-3 bg-blue-500 rounded-full" },
                      },
                      {
                        type: "span",
                        props: {
                          tw: "text-xl font-mono text-zinc-500",
                          children: "Available for work",
                        },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    tw: "flex flex-col gap-2",
                    children: [
                      {
                        type: "h1",
                        props: {
                          tw: "text-[90px] font-black leading-tight m-0 tracking-tighter",
                          children: "Alfred",
                        },
                      },
                      {
                        type: "p",
                        props: {
                          tw: "text-3xl text-zinc-400 font-medium",
                          children:
                            "Software Engineer & Designer creating digital tools.",
                        },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    tw: "flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl w-fit",
                    children: [
                      {
                        type: "img",
                        props: {
                          src: avatarUrl,
                          tw: "w-12 h-12 rounded-full border border-white/20",
                        },
                      },
                      {
                        type: "span",
                        props: {
                          tw: "text-2xl font-bold font-mono tracking-tight",
                          children: siteUrl,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },

          // RIGHT: "The Code/Tech" Visual
          {
            type: "div",
            props: {
              tw: "flex flex-col justify-center w-[40%] z-10",
              children: [
                {
                  type: "div",
                  props: {
                    tw: "flex flex-col bg-zinc-900/50 border border-white/10 rounded-2xl p-6 rotate-[-2deg] shadow-2xl",
                    children: [
                      // Simulated Code Window
                      {
                        type: "div",
                        props: {
                          tw: "flex gap-1.5 mb-4",
                          children: [
                            {
                              type: "div",
                              props: {
                                tw: "w-3 h-3 rounded-full bg-red-500/50",
                              },
                            },
                            {
                              type: "div",
                              props: {
                                tw: "w-3 h-3 rounded-full bg-amber-500/50",
                              },
                            },
                            {
                              type: "div",
                              props: {
                                tw: "w-3 h-3 rounded-full bg-emerald-500/50",
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: "div",
                        props: {
                          tw: "flex flex-col gap-3 font-mono text-sm",
                          children: [
                            {
                              type: "span",
                              props: {
                                tw: "text-blue-400",
                                children: "const engineer = {",
                              },
                            },
                            {
                              type: "span",
                              props: {
                                tw: "text-zinc-400 ml-4",
                                children: "name: 'Alfred',",
                              },
                            },
                            {
                              type: "span",
                              props: {
                                tw: "text-zinc-400 ml-4",
                                children: "role: 'Fullstack',",
                              },
                            },
                            {
                              type: "span",
                              props: {
                                tw: "text-zinc-400 ml-4",
                                children: "location: 'Global',",
                              },
                            },
                            {
                              type: "span",
                              props: {
                                tw: "text-emerald-400 ml-4",
                                children: "status: 'Building...',",
                              },
                            },
                            {
                              type: "span",
                              props: { tw: "text-blue-400", children: "};" },
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
        ],
      },
    },
    {
      width: 1200,
      height: 630,
    },
  );

  //   end
};
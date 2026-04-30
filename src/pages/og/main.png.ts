import myImage from "@/assets/images/profile.png?url&inline";
import stylesheet from "@/assets/styles/global.css?inline";
import dataUrlToArrayBuffer from "@/lib/utils/dataUrlToArrayBuffer";
import type { APIRoute } from "astro";
import type { ImageSource } from "takumi-js";
import { ImageResponse } from "takumi-js/response";

const AVAILABLE_FOR_WORK = true;

export const GET: APIRoute = async (context) => {
  // Meta Data
  const siteUrl = context.url.origin;

  const persistentImages: ImageSource[] = [
    {
      src: "my-image",
      data: dataUrlToArrayBuffer(myImage),
    },
  ];

  return new ImageResponse(openGraphComponent(siteUrl), {
    width: 1200,
    height: 630,
    emoji: "twemoji",
    persistentImages,
    stylesheets: [stylesheet],
  });
};

const openGraphComponent = (siteUrl: string) => {
  return {
    type: "div",
    props: {
      tw: "flex flex-row w-full h-full bg-[#080808] text-white relative overflow-hidden",
      style: { fontFamily: "Geist" },
      children: [
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

        {
          type: "div",
          props: {
            tw: "absolute top-0 left-0 w-[600px] h-[600px] rounded-full",
            style: {
              background:
                "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
            },
          },
        },
        {
          type: "div",
          props: {
            tw: "absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full",
            style: {
              background:
                "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
            },
          },
        },

        // LEFT
        {
          type: "div",
          props: {
            tw: "flex flex-col justify-between w-[58%] h-full px-16 py-12 z-10",
            children: [
              {
                type: "div",
                props: {
                  tw: "flex items-center gap-3",
                  children: [
                    AVAILABLE_FOR_WORK
                      ? {
                          type: "div",
                          props: {
                            tw: "flex items-center gap-2 px-3 py-[6px] rounded-full",
                            style: {
                              background: "rgba(34,197,94,0.1)",
                              border: "1px solid rgba(34,197,94,0.25)",
                            },
                            children: [
                              {
                                type: "div",
                                props: {
                                  tw: "w-[7px] h-[7px] rounded-full bg-emerald-400",
                                },
                              },
                              {
                                type: "span",
                                props: {
                                  tw: "text-emerald-400 text-[13px] font-semibold tracking-wide",
                                  children: "Available for work",
                                },
                              },
                            ],
                          },
                        }
                      : null,

                    {
                      type: "div",
                      props: {
                        tw: "flex items-center gap-2 px-3 py-[6px] rounded-full",
                        style: {
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        },
                        children: [
                          {
                            type: "span",
                            props: {
                              tw: "text-[15px]",
                              children: "🇵🇭",
                            },
                          },
                          {
                            type: "span",
                            props: {
                              tw: "text-zinc-400 text-[13px] font-medium",
                              children: "Philippines",
                            },
                          },
                        ],
                      },
                    },
                  ].filter(Boolean),
                },
              },

              {
                type: "div",
                props: {
                  tw: "flex flex-col gap-4",
                  children: [
                    {
                      type: "h1",
                      props: {
                        tw: "text-[66px] font-black leading-none m-0 tracking-tighter",
                        style: { textWrap: "balance" },
                        children: "Alfred U. Paguio",
                      },
                    },
                    {
                      type: "p",
                      props: {
                        tw: "text-[24px] text-zinc-400 font-medium m-0",
                        children: "Software Engineer",
                      },
                    },
                    {
                      type: "p",
                      props: {
                        tw: "text-[16px] text-zinc-500 m-0 leading-relaxed",
                        style: { lineClamp: 3, textWrap: "pretty" },
                        children:
                          "I'm a full-stack developer who enjoys building, refactoring, and maintaining well-structured applications. I work mainly with Laravel and React, focusing on improving existing systems through thoughtful design and clean architecture.",
                      },
                    },
                  ],
                },
              },

              {
                type: "div",
                props: {
                  tw: "flex items-center gap-3",
                  children: [
                    {
                      type: "div",
                      props: { tw: "w-[6px] h-[6px] rounded-full bg-cyan-400" },
                    },
                    {
                      type: "span",
                      props: {
                        tw: "text-zinc-500 text-[14px] tracking-wide",
                        children: siteUrl,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },

        // RIGHT
        {
          type: "div",
          props: {
            tw: "flex items-center justify-center w-[42%] h-full z-10 relative",
            children: [
              {
                type: "div",
                props: {
                  tw: "absolute w-[320px] h-[320px] rounded-full",
                  style: { border: "1px solid rgba(99,102,241,0.18)" },
                },
              },
              {
                type: "div",
                props: {
                  tw: "absolute w-[270px] h-[270px] rounded-full",
                  style: { border: "1px solid rgba(59,130,246,0.14)" },
                },
              },
              {
                type: "div",
                props: {
                  tw: "absolute w-[260px] h-[260px] rounded-full",
                  style: {
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
                    filter: "blur(24px)",
                  },
                },
              },
              {
                type: "img",
                props: {
                  src: "my-image",
                  tw: "w-[220px] h-[220px] rounded-full",
                  style: {
                    border: "3px solid rgba(255,255,255,0.1)",
                    boxShadow:
                      "0 0 0 1px rgba(255,255,255,0.05), 0 24px 48px rgba(0,0,0,0.6)",
                    objectFit: "cover",
                  },
                },
              },
            ],
          },
        },
      ].filter(Boolean),
    },
  };
};

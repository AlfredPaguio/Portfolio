import { projectBriefs } from "@/data/project-briefs";
import {
  box,
  card,
  getOgFonts,
  line,
  muted,
  picture,
  techBadge,
  text,
} from "@/lib/og";
import { normalizeTech } from "@/lib/utils/normalizeTech";
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { readFileSync, statSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "takumi-js/response";

function loadScreenshot(project: CollectionEntry<"projects">) {
  const images = project.data.images;
  const source =
    images.find(({ src }) => /dashboard|admin-home|overview/i.test(src))?.src ??
    images[0]?.src;
  if (!source?.startsWith("/") || source.startsWith("//")) return null;
  const root = path.resolve("public");
  const file = path.resolve(root, `.${source}`);
  if (!file.startsWith(root + path.sep)) return null;
  try {
    if (!statSync(file).isFile()) return null;
    const data = readFileSync(file);
    return {
      data,
      fullPage:
        data.length >= 24 &&
        data.subarray(0, 8).toString("hex") === "89504e470d0a1a0a" &&
        data.readUInt32BE(16) < data.readUInt32BE(20),
    };
  } catch {
    return null;
  }
}

export const GET: APIRoute = async ({ props, site, url }) => {
  const project = props.project as CollectionEntry<"projects">;
  const { title, stack } = project.data;
  const brief = projectBriefs[project.id];
  const screenshot = loadScreenshot(project);
  const titleSize = title.length > 35 ? 48 : title.length > 25 ? 54 : 64;

  return new ImageResponse(
    card((site ?? url).host, [
      box(
        {
          position: "absolute",
          top: 143,
          left: 56,
          width: 518,
          flexDirection: "column",
        },
        [
          text(brief?.category ?? "Software project", {
            fontSize: 20,
            color: muted,
            marginBottom: 18,
          }),
          text(title, {
            fontSize: titleSize,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -2.5,
            maxHeight: 192,
            overflow: "hidden",
          }),
          text(
            brief?.purpose ??
              project.data.summary ??
              "A software project by Alfred Paguio.",
            {
              fontSize: 22,
              color: muted,
              lineHeight: 1.45,
              marginTop: 22,
              maxHeight: 96,
              overflow: "hidden",
            },
          ),
        ],
      ),
      box(
        { position: "absolute", left: 56, bottom: 113, gap: 9 },
        stack.slice(0, 3).map((tech) => techBadge(normalizeTech(tech).name)),
      ),
      box(
        {
          position: "absolute",
          right: 56,
          top: 143,
          width: 508,
          height: 363,
          flexDirection: "column",
          backgroundColor: "#ffffff",
          borderRadius: 14,
          overflow: "hidden",
          border: `1px solid ${line}`,
          boxShadow: "0 12px 30px rgba(0,0,0,0.06)",
        },
        [
          box(
            {
              height: 33,
              flexShrink: 0,
              gap: 6,
              alignItems: "center",
              paddingLeft: 14,
              backgroundColor: "#eae8e3",
              borderBottom: `1px solid ${line}`,
            },
            [0, 1, 2].map(() =>
              box({
                width: 7,
                height: 7,
                borderRadius: 8,
                backgroundColor: "#b5b2aa",
              }),
            ),
          ),
          screenshot
            ? picture(screenshot.data, {
                width: 506,
                height: 328,
                objectFit: screenshot.fullPage ? "cover" : "contain",
                objectPosition: "top center",
              })
            : box(
                {
                  height: 328,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#e7e5df",
                },
                [
                  text("</>", {
                    fontSize: 96,
                    fontWeight: 600,
                    letterSpacing: -6,
                  }),
                ],
              ),
        ],
      ),
    ]),
    {
      width: 1200,
      height: 630,
      format: "png",
      fonts: await getOgFonts(url),
      emoji: "from-font",
    },
  );
};

export const getStaticPaths = (async () =>
  (await getCollection("projects")).map((project) => ({
    params: { slug: project.id },
    props: { project },
  }))) satisfies GetStaticPaths;

import portrait from "@/assets/images/profile.png?url&inline";
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
import dataUrlToArrayBuffer from "@/lib/utils/dataUrlToArrayBuffer";
import type { APIRoute } from "astro";
import { ImageResponse } from "takumi-js/response";

export const GET: APIRoute = async ({ site, url }) =>
  new ImageResponse(
    card(
      (site ?? url).host,
      [
        box(
          {
            position: "absolute",
            left: 56,
            top: 139,
            width: 650,
            flexDirection: "column",
          },
          [
            text("Junior Software Developer", {
              fontSize: 23,
              color: muted,
              marginBottom: 18,
            }),
            text("Alfred U.", {
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: -5,
            }),
            text("Paguio.", {
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: -5,
            }),
            box({ gap: 10, marginTop: 20 }, [
              techBadge("Laravel"),
              techBadge("React"),
            ]),
            text("Application logic, refactoring,", {
              fontSize: 24,
              marginTop: 12,
              lineHeight: 1.4,
            }),
            text("and thoughtful interfaces.", {
              fontSize: 24,
              lineHeight: 1.4,
            }),
          ],
        ),
        box(
          {
            position: "absolute",
            right: 56,
            top: 120,
            width: 350,
            height: 386,
            borderRadius: 20,
            backgroundColor: "#e7e5df",
            overflow: "hidden",
            border: `1px solid ${line}`,
          },
          [
            picture(dataUrlToArrayBuffer(portrait), {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 32%",
            }),
          ],
        ),
      ],
      "Based in the Philippines",
    ),
    {
      width: 1200,
      height: 630,
      format: "png",
      fonts: await getOgFonts(url),
      emoji: "from-font",
    },
  );

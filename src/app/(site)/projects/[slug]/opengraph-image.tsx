import { reader } from "@/utils/reader";
import { ImageResponse } from "next/og";

export const contentType = "image/png";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

type Props = {
  params: { slug: string };
};

export default async function Image({ params }: Props) {
  const project = await reader().collections.projects.read(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "black",
          color:"white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {project?.title ?? "Portfolio"}
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    },
  );
}

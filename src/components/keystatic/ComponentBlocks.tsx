import { Card } from "../ui/card";
import { component, fields } from "@keystatic/core";
import Image from "next/image";
import ProgressCircle from "../ProgressCircle";
import useObjectURL from "@/hooks/use-object-url";
// import { inline } from "@keystatic/core/content-components";

function ImagePreview({ data }: { data: Uint8Array }) {
  const url = useObjectURL(data);

  if (!url) return null;
  return <Image className="h-full w-full" src={url} alt="" />;
}

const ComponentBlocks = {
  image: component({
    preview: (props) => {
      return (
        <Card>
          {props.fields.image.value ? (
            // eslint-disable-next-line jsx-a11y/alt-text
            <ImagePreview data={props.fields.image.value.data} />
          ) : (
            <div className="flex h-screen items-center justify-center">
              <ProgressCircle aria-label="Loading…" />
            </div>
          )}
        </Card>
      );
    },
    label: "Image",
    schema: {
      image: fields.image({
        label: "Image",
        validation: { isRequired: true },
        directory: "public/images/projects",
        publicPath: "/images/projects",
      }),
      width: fields.integer({ label: "Width", defaultValue: 640 }),
      height: fields.integer({ label: "Height", defaultValue: 480 }),
      altText: fields.text({ label: "Alt text" }),
      classes: fields.text({ label: "classnames" }),
      caption: fields.text({ label: "Caption" }),
    },
  }),
  iframe: component({
    preview: (props) => (
      <Card>
        <style>
          {`
            iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
          `}
        </style>
        <div
          className="aspect-video w-full"
          dangerouslySetInnerHTML={{ __html: props.fields.code.value }}
        />
      </Card>
    ),
    label: "iframe",
    schema: {
      code: fields.text({ label: "Code" }),
    },
  }),
  // p: inline({
  //   label: "Highlight",
  //   schema: {
  //     className: fields.select({
  //       label: "Highlight",
  //       options: [
  //         { label: "highlight", value: "highlight" },
  //         {
  //           label: "highlight2",
  //           value:
  //             "underline decoration-accent/80 decoration-2 underline-offset-2",
  //         },
  //       ],
  //       defaultValue: "highlight",
  //     }),
  //   },
  // }),
};

export default ComponentBlocks;

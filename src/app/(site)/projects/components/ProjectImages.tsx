"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import { Button } from "@/components/ui/button";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import {
  getImageHeight,
  getImageSrc,
  getImageWidth,
} from "@/utils/imageHelpers";
import NextJsImage from "./NextJsImage";

function ProjectImages({
  images,
}: {
  images: ProjectTypeWithoutContent["images"];
}) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const slides = images.map((image) => ({
    src: getImageSrc(image)!,
    width: getImageWidth(image),
    height: getImageHeight(image),
    alt: image.value.alt || "No Alt",
  }));

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <figure
            key={index}
            className="group relative flex flex-col items-center justify-center overflow-hidden rounded-lg"
          >
            <Button
              variant="ghost"
              className="h-auto w-full p-0"
              onClick={() => {
                setImageIndex(index);
                setOpen(true);
              }}
            >
              <div className="aspect-square w-full overflow-hidden">
                <Image
                  src={getImageSrc(image)!}
                  width={getImageWidth(image)}
                  height={getImageHeight(image)}
                  alt={image.value.alt || `Project image ${index + 1}`}
                  className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-sm font-medium text-white">
                    Click to view
                  </span>
                </div>
              </div>
            </Button>
            {image.value.alt && (
              <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                {image.value.alt}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={slides}
        plugins={[Zoom, Thumbnails, Fullscreen, Counter]}
        zoom={{
          maxZoomPixelRatio: 5,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          // wheelZoomRatio: 0.1,
          // wheelZoomDistanceFactor: 0.1,
          // pinchZoomDistanceThreshold: 50,
          // pinchZoomDistanceFactor: 50,
          scrollToZoom: true,
        }}
        carousel={{
          finite: true,
        }}
        render={{
          slide: NextJsImage,
          thumbnail: NextJsImage,
          buttonPrev: slides.length <= 1 ? () => null : undefined,
          buttonNext: slides.length <= 1 ? () => null : undefined,
        }}
      />
    </>
  );
}

export default ProjectImages;

import { useState } from "react";
import { Button } from "./ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type GalleryViewerProps = {
  title: string;
  images: Array<{ imageUrl: string; alt?: string }>;
};

export default function GalleryViewer({ images, title }: GalleryViewerProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      console.log(index);
      return index - 1;
    });
  }

  return (
    <DialogContent className="flex flex-col">
      <DialogHeader>
        <DialogTitle className="text-text-light dark:text-text-dark">
          {title}
        </DialogTitle>
      </DialogHeader>
      <div className="relative flex items-center space-x-2 overflow-hidden">
        {images.map((image, index) => (
          <div
            className={`flex h-full w-full flex-col ${
              imageIndex !== index ? "hidden" : "block"
            }`}
          >
            <img
              key={index}
              src={image.imageUrl}
              alt={image.alt || `Image 1`}
              className={`h-full w-full flex-1 object-cover`}
              title={image.alt || `No Description`}
            />
            <DialogDescription className="mt-4 self-center text-lg">
              {image.alt}
            </DialogDescription>
          </div>
        ))}
        <button
          onClick={showPrevImage}
          className="absolute left-0 rounded-md bg-background-950/10 p-1"
          aria-label="View Previous Image"
        >
          <ArrowBigLeft
            aria-hidden
            className="text-text-light dark:text-text-dark"
          />
        </button>
        <button
          onClick={showNextImage}
          className="absolute right-0 rounded-md bg-background-950/10 p-1"
          aria-label="View Next Image"
        >
          <ArrowBigRight
            aria-hidden
            className="text-text-light dark:text-text-dark"
          />
        </button>
      </div>

      <DialogFooter className="justify-start md:justify-end">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

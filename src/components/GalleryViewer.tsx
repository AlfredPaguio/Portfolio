import { useState } from "react";
import { Button } from "./ui/button";
import { DialogClose, DialogContent } from "./ui/dialog";
import { ChevronLeft, ChevronRight, XIcon } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
      return index - 1;
    });
  }

  return (
    <DialogContent
      hideClose
      className="flex h-screen min-w-full flex-col border-transparent bg-transparent dark:border-transparent dark:bg-transparent"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                <XIcon className="h-6 w-6 text-text-light dark:text-text-dark" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="relative flex items-center overflow-hidden">
        {images.map((image, index) => (
          <CardContent
            key={index}
            className={`flex flex-1 flex-col ${
              imageIndex !== index ? "hidden" : "block"
            }`}
          >
            <AspectRatio
              ratio={16 / 9}
              className="bg-muted max-h-full min-h-full min-w-full max-w-full"
            >
              <img
                key={index}
                src={image.imageUrl}
                alt={image.alt || `Image 1`}
                className={`mx-auto h-auto object-contain object-center`}
                title={image.alt || `No Description`}
              />
            </AspectRatio>
            <CardFooter className="mt-4 self-center text-lg font-medium text-text-light dark:text-text-dark">
              {image.alt}
            </CardFooter>
          </CardContent>
        ))}
        <Button
          variant={"ghost"}
          onClick={showPrevImage}
          className="absolute left-0 rounded-md bg-background-950/10 p-1 dark:bg-background-950/10"
          aria-label="View Previous Image"
        >
          <ChevronLeft
            aria-hidden
            className="h-8 w-8 text-text-light dark:text-text-dark"
          />
        </Button>
        <Button
          variant={"ghost"}
          onClick={showNextImage}
          className="absolute right-0 rounded-md bg-background-950/10 p-1 dark:bg-background-950/10"
          aria-label="View Next Image"
        >
          <ChevronRight
            aria-hidden
            className="h-8 w-8 text-text-light dark:text-text-dark"
          />
        </Button>
      </Card>
    </DialogContent>
  );
}
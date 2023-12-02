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
import { Projects } from "@/data/Projects";

type GalleryViewerProps = {
  projectId: string;
};

export default function GalleryViewer({ projectId }: GalleryViewerProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const project = Projects.find((project) => project.id === projectId);

  function showNextImage() {
    if (project?.images) {
      setImageIndex((index) => {
        if (index === project.images.length - 1) return 0;
        return index + 1;
      });
    }
  }

  function showPrevImage() {
    if (project?.images) {
      setImageIndex((index) => {
        if (index === 0) return project.images.length - 1;
        return index - 1;
      });
    }
  }

  if (!project) {
    return null;
  }

  return (
    <DialogContent
      hideClose
      className="flex  flex-col border-transparent bg-transparent dark:border-transparent dark:bg-transparent"
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {project.title}
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                <XIcon className="text-foreground h-6 w-6" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="relative flex items-center overflow-hidden">
        {project.images &&
          project.images.map((image, index) => (
            <CardContent
              key={index}
              className={`flex flex-1 flex-col ${
                imageIndex !== index ? "hidden" : "block"
              }`}
            >
              <AspectRatio
                ratio={16 / 9}
                className="max-h-full min-h-full min-w-full max-w-full bg-muted"
              >
                <img
                  key={index}
                  src={image.imageUrl}
                  alt={image.alt || `Image 1`}
                  className={`mx-auto h-auto object-contain object-center`}
                  title={image.alt || `No Description`}
                />
              </AspectRatio>
              <CardFooter className="text-foreground mt-4 self-center text-lg font-medium">
                {image.alt}
              </CardFooter>
            </CardContent>
          ))}
        <Button
          variant={"ghost"}
          onClick={showPrevImage}
          className="bg-background/10 dark:bg-background/10 absolute left-0 rounded-md p-1"
          aria-label="View Previous Image"
        >
          <ChevronLeft
            aria-hidden
            className="text-foreground h-8 w-8"
          />
        </Button>
        <Button
          variant={"ghost"}
          onClick={showNextImage}
          className="bg-background/10 dark:bg-background/10 absolute right-0 rounded-md p-1"
          aria-label="View Next Image"
        >
          <ChevronRight
            aria-hidden
            className="text-foreground h-8 w-8"
          />
        </Button>
      </Card>
    </DialogContent>
  );
}

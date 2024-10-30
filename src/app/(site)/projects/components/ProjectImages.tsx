"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { XIcon, ZoomInIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import {
  getImageHeight,
  getImageSrc,
  getImageWidth,
} from "@/utils/imageHelpers";

function ProjectImages({
  images,
}: {
  images: ProjectTypeWithoutContent["images"];
}) {
  const [showCarousel, setShowCarousel] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <figure
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="h-auto w-full p-0">
                  <div className="aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={getImageSrc(image)!}
                      width={getImageWidth(image)}
                      height={getImageHeight(image)}
                      alt={image.value.alt || `Project image ${index + 1}`}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] max-w-[90vw] overflow-hidden">
                <DialogTitle className="text-center">
                  {image.value.alt || `Project image ${index + 1}`}
                </DialogTitle>
                <DialogDescription className="relative h-full w-full">
                  <div className="aspect-auto max-h-[70vh] w-full overflow-hidden">
                    <Image
                      src={getImageSrc(image)!}
                      width={getImageWidth(image)}
                      height={getImageHeight(image)}
                      alt={image.value.alt || `Project image ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
            {image.value.alt && (
              <figcaption className="mt-2 text-center text-sm">
                {image.value.alt}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <Button variant="outline" onClick={() => setShowCarousel(true)}>
          <ZoomInIcon className="mr-2 h-4 w-4" />
          View as Carousel
        </Button>
      </div>

      <Dialog open={showCarousel} onOpenChange={setShowCarousel}>
        <DialogContent className="max-h-[90vh] max-w-[90vw] p-0">
          <div className="relative h-full w-full">
            <Carousel setApi={setApi} className="h-full w-full" tabIndex={1}>
              <CarouselContent className="h-full">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="flex h-full flex-col items-center justify-center">
                      <div className="relative aspect-video max-h-[70vh] w-full overflow-hidden">
                        <Image
                          src={getImageSrc(image)!}
                          alt={image.value.alt || `Project image ${index + 1}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      {image.value.alt && (
                        <p className="mt-2 text-center text-sm">
                          {image.value.alt}
                        </p>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
              <CarouselDots className="absolute bottom-2 left-1/2 -translate-x-1/2" />
            </Carousel>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-50"
              onClick={() => setShowCarousel(false)}
            >
              <XIcon className="h-4 w-4" />
              <span className="sr-only">Close carousel</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ProjectImages;

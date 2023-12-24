import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

type ImageCarouselViewProps = {
  imageList?: Array<{ imageUrl: string; alt?: string }>;
};

export default function ImageCarouselView({
  imageList,
}: ImageCarouselViewProps) {
  if (!imageList) return null;

  return (
    <Carousel
      className="mx-16 md:mx-8"
      opts={{
        align: "center",
      }}
    >
      <CarouselContent>
        {imageList && imageList.length > 0 &&
          imageList.map((image, index) => (
            <CarouselItem key={index} className="relative">
              {/* It becomes larger when adding elements, so I just hacked it using position absolute. */}
              <Link to={image.imageUrl} target="_top" rel="noopener noreferrer">
                <img
                  key={index}
                  src={image.imageUrl}
                  alt={image.alt || `Image ${index}`}
                  className="aspect-square w-full object-scale-down"
                  title={image.alt || `No Description`}
                />
                <Label className="absolute inset-0 flex justify-center text-card-foreground">
                  {image.alt || `Image ${index}`}
                </Label>
              </Link>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <Label className="flex justify-center text-card-foreground">
        Kindly click on the image to view a larger version.
      </Label>
    </Carousel>
  );
}

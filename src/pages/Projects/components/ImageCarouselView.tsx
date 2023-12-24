import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type ImageCarouselViewProps = {
  imageList?: Array<{ imageUrl: string; alt?: string }>;
};

export default function ImageCarouselView({
  imageList,
}: ImageCarouselViewProps) {
  if (!imageList) return null;

  return (
    <Carousel
      opts={{
        align: "center",
      }}
    >
      <CarouselContent>
        {imageList.length > 0 &&
          imageList.map((image, index) => (
            <CarouselItem key={index}>
              <img
                key={index}
                src={image.imageUrl}
                alt={image.alt || `Image ${index}`}
                className="aspect-auto w-full object-cover"
                title={image.alt || `No Description`}
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

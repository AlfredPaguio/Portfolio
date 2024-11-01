import Image from "next/image";
import {
  isImageFitCover,
  isImageSlide,
  SlideImage,
  useLightboxProps,
  useLightboxState,
} from "yet-another-react-lightbox";

//aaaaaa
function isNextJsImage(
  slide: SlideImage,
): slide is SlideImage & { width: number; height: number } {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
}

interface NextJsImageProps {
  slide: SlideImage;
  offset?: number;
  rect: { width: number; height: number };
}

export default function NextJsImage({
  slide,
  offset = 0,
  rect,
}: NextJsImageProps) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide)) return undefined;

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height) * slide.width),
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width) * slide.height),
      )
    : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt={slide.alt ? slide.alt : ""}
        src={slide.src}
        loading="eager"
        draggable={false}
        placeholder={slide.thumbnail ? "blur" : undefined}
        style={{
          objectFit: cover ? "cover" : "contain",
          cursor: click ? "pointer" : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  );
}

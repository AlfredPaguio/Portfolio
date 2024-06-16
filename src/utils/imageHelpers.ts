import keystaticConfig from "@@/keystatic.config";
import { Entry } from "@keystatic/core/reader";

type ProjectType = Entry<(typeof keystaticConfig)["collections"]["projects"]>;
type ProjectImagesType = Pick<ProjectType, "images">;
type ImageType = ProjectImagesType["images"][number];

export const getImageSrc = (image: ImageType): string | undefined => {
  switch (image.discriminant) {
    case "upload":
      return `/${image.value.image}`;
    case "url":
      return image.value.image;
    case "cloud":
      return image.value.src;
    default:
      return undefined;
  }
};

export const getImageWidth = (image: ImageType) => {
  return image.discriminant === "cloud" ? image.value.width ?? 640 : 640;
};

export const getImageHeight = (image: ImageType) => {
  return image.discriminant === "cloud" ? image.value.height ?? 480 : 480;
};

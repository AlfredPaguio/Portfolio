import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFileExtension(filename: string) {
  const fileIndex = filename.lastIndexOf(".") + 1;
  console.log(fileIndex);

  return filename.substring(fileIndex, filename.length) || filename;
}

export function removeFileExtension(filename: string) {
  const extensionIndex = filename.lastIndexOf(".");
  console.log(filename.substring(0, extensionIndex));

  return filename.substring(0, extensionIndex) || filename;
}

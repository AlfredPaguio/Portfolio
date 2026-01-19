export function normalizeId(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "") // remove all spaces former .replaceAll(" ", "") because there's different kinds of whitespace https://stackoverflow.com/a/18169122
    .replace(/[^a-z0-9#+]/g, ""); // remove everything except letters, numbers, #, + (for the "C" vs "C#" vs "C++")
}

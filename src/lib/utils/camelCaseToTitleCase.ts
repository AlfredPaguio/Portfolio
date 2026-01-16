export const camelCaseToTitleCase = (str: string) => {
  return str
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/^./, (char) => char.toUpperCase()) // Capitalize the first letter
    .trim();
};

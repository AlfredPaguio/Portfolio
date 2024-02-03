const toTitleCase = (title: string): string => {
  return (
    title
      //split using underscore like "Alfred_CV" to ["Alfred", "CV"]
      .split("_")
      //For each word in the array, capitalize the first letter and convert the rest of the letters to lowercase
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
      .trim()
  );
};

export default toTitleCase;

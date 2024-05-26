export const disableInProduction = () => {
  if (process.env.NODE_ENV === "production") return null;
};

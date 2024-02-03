const formatter = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZoneName: "short",
});

export function formatDate(date: number | Date | null | undefined) {
  if (date === null || date === undefined) {
    return "Invalid Date";
  }
  return formatter.format(date);
}

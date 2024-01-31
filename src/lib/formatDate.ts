const formatter = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZoneName: "short",
});

export function formatDate(date: number | Date | undefined) {
  return formatter.format(date);
}

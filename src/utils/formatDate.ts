import { deserify } from "@karmaniverous/serify-deserify";

const formatter = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZoneName: "short",
});

export function formatDate(date: number | Date | null | string | undefined) {
  if (date === null || date === undefined) {
    return "Invalid Date";
  }

  if (typeof date === "string") {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "full",
      timeStyle: "long",
    }).format(new Date(date));
  }

  const DeserifiedDate = deserify<Date>(date);
  // console.log(
  //   "%c Formatter Library: %s",
  //   "background: #222; color: #bada55",
  //   DeserifiedDate
  // );
  return formatter.format(DeserifiedDate);
}

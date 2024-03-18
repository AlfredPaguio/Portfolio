import { deserify } from "@karmaniverous/serify-deserify";

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

  const DeserifiedDate = deserify<Date>(date);
  // console.log(
  //   "%c Formatter Library: %s",
  //   "background: #222; color: #bada55",
  //   DeserifiedDate
  // );
  return formatter.format(DeserifiedDate);
}

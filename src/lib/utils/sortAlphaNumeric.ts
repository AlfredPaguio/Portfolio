const sorter = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "accent",
});

export function sortAlphaNumeric(a: string, b: string) {
  return sorter.compare(a,b);
}
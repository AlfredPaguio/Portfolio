/**
 * @see https://stackoverflow.com/a/196991
 *  Posted by Greg Dean, modified by community. See post 'Timeline' for change history
 *  Retrieved 2026-02-14, License - CC BY-SA 4.0 */
export default function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase(),
  );
}

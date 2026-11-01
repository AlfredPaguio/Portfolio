/** Reject executable schemes before assigning media or original links. */
export function safeMediaUrl(src: string): string | null {
  try {
    const url = new URL(src, "https://portfolio.local");
    return ["https:", "http:"].includes(url.protocol) ? src : null;
  } catch {
    return null;
  }
}

export function videoSource(
  src: string,
): { src: string; native: boolean } | null {
  if (!safeMediaUrl(src)) return null;
  const url = new URL(src, "https://portfolio.local");
  if (/\.(mp4|webm|ogg|mov)$/i.test(url.pathname)) return { src, native: true };
  const host = url.hostname.replace(/^www\./, "");
  if (
    [
      "youtube.com",
      "m.youtube.com",
      "youtu.be",
      "youtube-nocookie.com",
    ].includes(host)
  ) {
    const id =
      host === "youtu.be"
        ? url.pathname.slice(1)
        : url.searchParams.get("v") || url.pathname.split("/")[2];
    return id && /^[\w-]+$/.test(id)
      ? { src: `https://www.youtube-nocookie.com/embed/${id}`, native: false }
      : null;
  }
  if (host === "drive.google.com") {
    const id = url.pathname.match(/^\/file\/d\/([\w-]+)/)?.[1];
    return id
      ? { src: `https://drive.google.com/file/d/${id}/preview`, native: false }
      : null;
  }
  if (["vimeo.com", "player.vimeo.com"].includes(host)) {
    const id = url.pathname.match(/\/(\d+)/)?.[1];
    return id
      ? { src: `https://player.vimeo.com/video/${id}`, native: false }
      : null;
  }
  return null;
}

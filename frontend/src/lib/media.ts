/* export function getMediaUrl(url: string) {
  return `${process.env.NEXT_PUBLIC_API_URL?.replace(
    "/api",
    ""
  )}${url}`;
} */

export function getMediaUrl(url: string) {
  const mediaUrl = `${process.env.NEXT_PUBLIC_API_URL?.replace(
    "/api",
    ""
  )}${url}`;

  console.log(mediaUrl);

  return mediaUrl;
}
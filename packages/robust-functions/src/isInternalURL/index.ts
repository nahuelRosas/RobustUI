export function isInternalURL({ url }: { url: string }): boolean {
  return url.startsWith("/");
}

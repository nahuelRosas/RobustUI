export function handleMouseEnterLink({
  prefetch,
  hasPrefetched,
  href,
  setHasPrefetched,
}: {
  prefetch: boolean;
  hasPrefetched: boolean;
  href: string | URL | undefined;
  setHasPrefetched: (value: boolean) => void;
}): void {
  if (prefetch && !hasPrefetched) {
    if (href && typeof href === "string") {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = href;
      document.head.appendChild(link);
      setHasPrefetched(true);
    }
  }
}

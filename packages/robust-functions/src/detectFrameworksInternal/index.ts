export function detectFrameworksInternal(): string[] {
  const detectedFrameworks: string[] = [];

  if (typeof window !== "undefined") {
    if ((window as any).React && (window as any).ReactDOM) {
      detectedFrameworks.push("React");
    }

    if ((window as any).next) {
      detectedFrameworks.push("Next.js");
    }

    if ((window as any).Vue) {
      detectedFrameworks.push("Vue.js");
    }
  }

  return detectedFrameworks;
}

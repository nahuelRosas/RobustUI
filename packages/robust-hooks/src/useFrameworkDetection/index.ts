import { detectFrameworksInternal } from "@robust/functions";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

export function useFrameworkDetection(): string | null {
  const [detectedFramework, setDetectedFramework] = useState<string | null>(
    null
  );

  useIsomorphicLayoutEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const detectFrameworks = () => {
      const detectedFrameworks = detectFrameworksInternal();

      if (detectedFrameworks.length > 0) {
        // Framework detected, stop the loop
        setDetectedFramework(detectedFrameworks[0]);
      } else {
        // No framework detected, retry after 1 second
        timer = setTimeout(() => {
          detectFrameworks();
          if (timer) {
            clearTimeout(timer);
          }
        }, 1000);
      }
    };

    detectFrameworks();

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return detectedFramework;
}

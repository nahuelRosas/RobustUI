import { useState, useCallback, useMemo } from "react";
import { useResizeListener } from "../useResizeListener/useResizeListener";
import { useBreakPointValue } from "./types";
import { handleResize, debounce } from "@robust/functions";

const OBJECT_STR = "object";

export function useBreakpointValue<T>({
  values,
  options,
}: useBreakPointValue<T>): T | null {
  if (typeof values !== OBJECT_STR) {
    throw new Error(
      "The first argument of useBreakpointValue must be an object."
    );
  }

  const [currentBreakpoint, setCurrentBreakpoint] = useState<string | null>(
    null
  );

  const handleResizeCallback = useCallback(() => {
    handleResize({ options, setCurrentBreakpoint, currentBreakpoint });
  }, [options, setCurrentBreakpoint, currentBreakpoint]);

  const debouncedHandleResize = useMemo(
    () =>
      debounce({
        options: {
          fn: handleResizeCallback,
          delay: 100,
          immediate: false,
        },
      }),
    [handleResizeCallback]
  );

  useResizeListener(handleResizeCallback, debouncedHandleResize);

  if (options) {
    return currentBreakpoint != null
      ? values[currentBreakpoint]
      : options.fallback || null;
  } else {
    return currentBreakpoint != null ? values[currentBreakpoint] : null;
  }
}

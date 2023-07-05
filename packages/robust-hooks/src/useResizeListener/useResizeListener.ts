import { useEffect } from "react";
import { debounce } from "../../../robust-functions/src/debounce";

export function useResizeListener(
  handleResize: () => void,
  debouncedHandleResize: ReturnType<typeof debounce>
): void {
  useEffect(() => {
    handleResize();

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [debouncedHandleResize, handleResize]);
}

import { DEFAULT_BREAKPOINTS } from "@robust/theme";
import { breakPoints, HandleResizeOptions } from "./types";

// Define a constant string for "undefined"
const UNDEFINED_STR = "undefined";

/**
 * Handles window resize events and updates the current breakpoint.
 *
 * @param options - The options object from the BreakPointValue type.
 * @param setCurrentBreakpoint - A function to set the current breakpoint state.
 * @param currentBreakpoint - The current breakpoint state.
 */
export function handleResize<T>({
  options,
  setCurrentBreakpoint,
  currentBreakpoint,
}: HandleResizeOptions<T>): void {
  try {
    // Get the breakpoints from the options or use the default breakpoints
    const breakpoints: breakPoints =
      options?.breakpoints || DEFAULT_BREAKPOINTS;

    // Check if the 'window' object is defined
    const isWindowDefined = typeof window !== UNDEFINED_STR;

    // Determine the new breakpoint based on window.innerWidth
    const newBreakpoint = isWindowDefined
      ? Object.keys(breakpoints)
          .reverse()
          .find((breakpoint) => window.innerWidth >= breakpoints[breakpoint])
      : null;

    // Update the current breakpoint if a new breakpoint is found and it's different from the current one
    if (newBreakpoint != null && newBreakpoint !== currentBreakpoint) {
      setCurrentBreakpoint(newBreakpoint);
    }
  } catch (error) {
    // Throw an error if there is an error handling the window resize event
    throw new Error("Error handling window resize: " + error);
  }
}

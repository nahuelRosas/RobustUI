import { DEFAULT_BREAKPOINTS } from "@robust/theme";
import { getPropValueWithBreakpointT } from "./types";

/**
 * Retrieves the property value with the specified breakpoint.
 *
 * @param propValue - The property value to retrieve.
 * @param breakPoint - The breakpoint value.
 * @returns The property value as a string or undefined.
 */
export function getPropValueWithBreakPoint({
  propValue,
  breakPoint,
}: getPropValueWithBreakpointT): string | undefined {
  // Check if the property value is a string or number
  if (typeof propValue === "string" || typeof propValue === "number") {
    return propValue.toString();
  }

  // Check if the property value is an object and the breakpoint is defined
  else if (
    typeof propValue === "object" &&
    propValue !== null &&
    breakPoint !== undefined
  ) {
    // Check if the property value has a specific value for the specified breakpoint
    if (propValue[breakPoint as keyof typeof propValue]) {
      return propValue[breakPoint as keyof typeof propValue] as string;
    }

    // Iterate through the breakpoints in descending order and find the first value that matches the condition
    for (const e of Object.keys(DEFAULT_BREAKPOINTS)) {
      if (e <= breakPoint && propValue[e as keyof typeof propValue]) {
        return propValue[e as keyof typeof propValue] as string;
      }
      if (e > breakPoint) {
        return propValue[e as keyof typeof propValue] as string;
      }
    }

    // Throw an error if the property value is invalid for the specified breakpoint
    throw new Error(
      `Invalid propValue for breakpoint ${breakPoint} and propValue ${propValue}`
    );
  }

  // Check if the property value is undefined
  else if (typeof propValue === "undefined") {
    // Get the location where the error occurred
    const Location = new Error().stack?.split("\n")[1];

    // Throw an error with the invalid propValue and its location
    throw new Error(`Invalid propValue ${propValue} at ${Location}`);
  }
}

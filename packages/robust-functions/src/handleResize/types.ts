/**
 * Interface representing breakpoints.
 *
 * @interface breakPoints
 * @template T - The type of breakpoint values.
 * @property {number} [key] - The breakpoint value.
 */
export interface breakPoints {
  [key: string]: number;
}

/**
 * Interface representing a breakpoint value.
 *
 * @interface BreakPointValue
 * @template T - The type of breakpoint values.
 * @property {T} values - The breakpoint values.
 * @property {object} [options] - Optional configuration options.
 * @property {breakPoints} [options.breakpoints] - Custom breakpoints.
 */
export interface BreakPointValue<T> {
  values: T;
  options?: {
    breakpoints?: breakPoints;
  };
}

/**
 * Type representing the options for the handleResize function.
 *
 * @type HandleResizeOptions
 * @template T - The type of breakpoint values.
 * @property {BreakPointValue<T>["options"]} options - The options object from the BreakPointValue type.
 * @property {React.Dispatch<React.SetStateAction<string | null>>} setCurrentBreakpoint - A function to set the current breakpoint state.
 * @property {string | null} currentBreakpoint - The current breakpoint state.
 */
export type HandleResizeOptions<T> = {
  options: BreakPointValue<T>["options"];
  setCurrentBreakpoint: React.Dispatch<React.SetStateAction<string | null>>;
  currentBreakpoint: string | null;
};

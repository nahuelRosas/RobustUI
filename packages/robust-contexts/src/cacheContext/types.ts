/**
 * Represents the value for the global context.
 */
export interface globalContextValue {
  /**
   * Sets the value of a key in the global state.
   * @param key - The key of the value to be set.
   * @param value - The new value to be set.
   */
  setGlobalStateValue: (key: string, value: unknown) => void;

  /**
   * Retrieves the value of a key from the global state.
   * @param key - The key of the value to be retrieved.
   * @returns The value associated with the provided key.
   */
  recoverGlobalState: (key: string) => unknown;

  /**
   * Resets the global state to its initial values.
   */
  resetGlobalState: () => void;

  /**
   * Resets the IDs used within the global context.
   */
  resetIds: () => void;

  /**
   * The global state containing key-value pairs.
   */
  globalState: Record<string, unknown>;

  /**
   * The current breakpoint value for responsive design.
   */
  breakpointValue: string | null | undefined;

  /**
   * Indicates whether the global context is active or not.
   */
  activeProvider: boolean;

  /**
   * Indicates whether the dark mode is enabled or not.
   */
  darkMode: boolean;

  /**
   * The selected language for localization.
   */
  language: string;
}

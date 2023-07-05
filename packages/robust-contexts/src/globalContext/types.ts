import { Language } from "@robust/theme";
/**
 * Represents the value for the global context.
 * This interface provides methods and properties to interact with the global state and manage the global context.
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
  getGlobalState: (key: string) => unknown;

  /**
   * Resets the global state to its initial values.
   */
  resetGlobalState: () => void;

  /**
   * Resets the IDs used within the global context.
   */
  resetGeneratedIds: () => void;

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
  isProviderActive: boolean;

  /**
   * Indicates whether the dark mode is enabled or not.
   */
  isDarkMode: boolean;

  /**
   * Sets the dark mode status.
   * @param isDarkMode - A boolean indicating whether dark mode is enabled or not.
   */
  toggleDarkMode: (isDarkMode: boolean) => void;

  /**
   * The selected language for localization.
   */
  language: keyof typeof Language;

  /**
   * Sets the selected language for localization.
   * @param language - The language code to be set.
   */
  changeLanguage: (language: keyof typeof Language) => void;
}

import { useGlobalContext } from "../useGlobalContext";
import { GlobalContext } from "@robust/contexts";
import { Language } from "@robust/theme";

/**
 * Custom hook for handling language-related functionality.
 * Returns the current language and a function to change the language.
 * @returns {[string, (language: keyof typeof Language) => void]} Array containing the current language and a function to change the language.
 */
export function useLanguage(): [
  string,
  (language: keyof typeof Language) => void
] {
  // Use the `useGlobalContext` hook to access the language and changeLanguage function from the GlobalContext
  const { language, changeLanguage } = useGlobalContext({
    providerContext: GlobalContext,
  });

  // Convert the language to uppercase and return it along with the changeLanguage function
  return [language, changeLanguage] as [
    string,
    (language: keyof typeof Language) => void
  ];
}

// Usage:
// Call the `useLanguage` hook to retrieve the current language and the function to change the language.
// Destructure the returned array into `language` and `setLanguage` variables.

/**
 * Example usage:
 */
// const [language, setLanguage] = useLanguage();
// `language` will contain the current language as a string in uppercase.
// `setLanguage` is a function that accepts a language parameter of type keyof typeof Language.

// To change the language, call `setLanguage` function with the desired language key:
//setLanguage("en"); // Example: Change the language to English

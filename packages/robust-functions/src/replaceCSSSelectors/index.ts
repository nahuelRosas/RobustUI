import { ReplaceCSSSelectorsOptions } from "./types";

/**
 * Replaces CSS selectors in the provided CSS string with the corresponding replacement values.
 * @param {Object} options - The options for replacing CSS selectors.
 * @param {string} options.css - The CSS string to be processed.
 * @param {Map<string, string[]>} options.replacementMap - A map where the keys represent the selectors to be replaced, and the values are arrays of replacement strings.
 * @returns {string} - The modified CSS string.
 */
export function replaceCSSSelectors({
  css,
  replacementMap,
}: ReplaceCSSSelectorsOptions): string {
  // Create a copy of the original CSS string
  let updatedCSS = css;
  // Iterate over each key-value pair in the replacementMap
  replacementMap.forEach((replacementValues, selector) => {
    if (updatedCSS.includes(selector)) {
      // Generate a regular expression string to match the selector
      const selectorRegexString = `${selector}{[^}]*}`.toString();

      // Create a regular expression object using the generated regex string
      const selectorRegex = new RegExp(selectorRegexString, "ismg");

      // Join the replacement values into a single replacement string
      const replacementString = replacementValues.join("");

      // Replace the matched selectors with the modified selector and replacement string
      updatedCSS = updatedCSS.replace(
        selectorRegex,
        `${selector}${replacementString}`
      );
    }

    // If the selector is not found in the CSS string, add the selector and replacement string to the CSS string
    else {
      updatedCSS = `${updatedCSS}\n${selector}${replacementValues.join("")}`;
    }
  });

  // Return the modified CSS string
  return updatedCSS;
}

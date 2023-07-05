/**
 * The function creates a CSS rule with a given selector and styles.
 * @param {RuleData}  - The `createCSSRule` function takes in an object with two properties: `selector`
 * and `styles`. These properties are of type `string` and represent the CSS selector and styles for a
 * CSS rule, respectively. The function returns a string that represents the complete CSS rule with the
 * provided selector and
 * @returns The function `createCSSRule` returns a string that represents a CSS rule. The string
 * contains the selector and styles passed as arguments to the function. If either the selector or
 * styles are missing, the function will throw an error using the `handleError` function.
 */
import { RuleData } from "./types";
import { handleError } from "../handleError";

export function createCSSRule({ selector, styles }: RuleData): string {
  if (!selector) {
    handleError({ message: "Selector is required" });
  } else if (!styles) {
    handleError({ message: "Styles are required" });
  }

  return `.${selector} {\n${styles}\n}`;
}

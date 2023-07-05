/**
 * The function creates a stylesheet string from an array of CSS rules.
 * @param {StyleSheetData}  - The `createStyleSheet` function takes in an object with a property
 * `rules` of type `string[]` as its parameter. The `rules` array contains CSS rules that will be used
 * to create a stylesheet. The function returns a single string that contains all the CSS rules joined
 * together with a newline
 * @returns The `createStyleSheet` function is returning a string that is the concatenation of all the
 * rules in the `rules` array, separated by a newline character.
 */
import { StyleSheetData } from "./types";
import { handleError } from "../handleError";

export function createStyleSheet({ rules }: StyleSheetData): string {
  if (!rules) {
    handleError({ message: "Rules are required" });
  }
  return `{${rules.join("\n")}}`;
}

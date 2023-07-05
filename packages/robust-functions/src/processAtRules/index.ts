import { CssPropertyMappings, defaultTheme } from "@robust/theme";
import { CSSProperties, ProcessAtRule } from "./types";

/**
 * Processes the CSS property as an @rule and generates CSS styles based on it.
 *
 * @param prop - The name of the CSS property.
 * @param propValue - The value of the CSS property.
 * @param CSS - The CSS object to which the generated styles will be added.
 * @returns The updated CSS object.
 */
export function processAtRule({
  prop,
  propValue,
  CSS,
}: ProcessAtRule): CSSProperties {
  let result = "";

  // Iterate over each key-value pair in the propValue object.
  Object.entries(propValue).forEach(([key, value]) => {
    result += `${key} {`;
    // Iterate over each key-value pair in the subValue object.
    Object.entries(value).forEach(([subKey, subValue]) => {
      result += `\n\t${subKey} {`;

      // Iterate over each key-value pair in the subValue object.
      Object.entries(subValue).forEach(([prop, propValue]) => {
        // Map the prop to a CSS property using CssPropertyMappings.

        const cssProperty =
          CssPropertyMappings[prop as keyof typeof CssPropertyMappings];

        // Map the CSS property to a value in the Theme object.
        const mapProperty =
          defaultTheme[cssProperty as keyof typeof defaultTheme];

        const property =
          mapProperty && mapProperty[cssProperty as keyof typeof mapProperty];

        // If a mapping exists in Theme for the CSS property, use the mapped value.
        if (property !== undefined) {
          value = property[propValue as keyof typeof property];
        }

        // Generate the CTString by splitting, filtering, and joining the prop string.
        const CTString = prop
          .split(/(?=[A-Z])/)
          .filter((item) => {
            const itemLowerCase = item.toLowerCase();
            return itemLowerCase !== "str" && itemLowerCase !== "string";
          })
          .join("-")
          .toLowerCase();

        // Add the generated CSS style to the result string.
        result += `\n\t\t${CTString}: ${propValue};`;
      });

      result += "\n\t}";
    });

    result += "\n}\n";
  });

  // Add the result string to the CSS.atRules[prop] array if it doesn't exist.
  if (!CSS.atRules[prop]) {
    CSS.atRules[prop] = [];
  }

  // Push the result string to the CSS.atRules[prop] array if it's not already included.
  if (!CSS.atRules[prop].includes(result)) {
    CSS.atRules[prop].push(result);
  }

  return CSS;
}

import { createStyleSheet } from "../createStyleSheet";
import { GenerateCSSCodeOptions } from "./types";

/**
 * Generates CSS code based on the provided CSS object and selector.
 *
 * @param {Object} options - The options object.
 * @param {Object} options.CSS - The CSS object containing base styles, pseudo-classes, pseudo-elements, and at-rules.
 * @param {string} options.selector - The CSS selector to apply the generated styles.
 * @returns {Map<string, string[]>} - A map of generated styles with selectors as keys and style arrays as values.
 */
export function generateCSSCode({
  CSS,
  selector,
}: GenerateCSSCodeOptions): Map<string, string[]> {
  const { base, pseudoClasses, pseudoElements, atRules } = CSS;
  const generatedStyles = new Map();

  // Generate styles for base rules
  const baseStyles = createStyleSheet({ rules: base });
  generatedStyles.set(`.${selector}`, [`${baseStyles}`]);

  // Generate styles for pseudo-classes
  for (const pseudoClass in pseudoClasses) {
    const properties = pseudoClasses[pseudoClass];
    const styles = createStyleSheet({ rules: properties });
    generatedStyles.set(`.${selector}:${pseudoClass}`, [`${styles}`]);
  }

  // Generate styles for pseudo-elements
  for (const pseudoElement in pseudoElements) {
    const properties = pseudoElements[pseudoElement];
    const styles = createStyleSheet({ rules: properties });
    generatedStyles.set(`.${selector}::${pseudoElement}`, [`${styles}`]);
  }

  // Generate styles for at-rules
  for (const atRule in atRules) {
    const properties = atRules[atRule];
    generatedStyles.set(`@${atRule} `, [`${properties.join(";")}`]);
  }
  return generatedStyles;
}

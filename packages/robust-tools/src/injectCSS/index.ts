import {
  generateCSSCode,
  processPropValue,
  replaceCSSSelectors,
} from "@robust/functions";
import { InjectCSSTOptions } from "./types";
import { cssReset } from "@robust/theme";

const UNDEFINED_STR = "undefined";

/**
 * Injects CSS styles into the document based on component properties.
 *
 * @param classSelector - The class selector to apply the CSS styles.
 * @param componentProps - The component properties containing CSS property-value pairs.
 * @param breakPoint - The breakpoint value (optional).
 */
export function InjectCSS({
  classSelector,
  componentProps,
  breakPoint,
}: InjectCSSTOptions): void {
  // Check if the 'document' object is defined.
  if (typeof document === UNDEFINED_STR) {
    return;
  }

  // Initialize the CSS object with empty arrays for different style categories.
  let CSS: {
    base: string[];
    pseudoClasses: Record<string, string[]>;
    pseudoElements: Record<string, string[]>;
    atRules: Record<string, string[]>;
  } = {
    base: [],
    pseudoClasses: {},
    pseudoElements: {},
    atRules: {},
  };

  // Process each component property and generate CSS styles.
  Object.entries(componentProps).forEach(([prop, propValue]) => {
    // Skip if the property value is 'undefined'.
    if (typeof propValue === UNDEFINED_STR) {
      return;
    }

    CSS = processPropValue({
      prop,
      propValue,
      breakPoint,
      CSS,
    });
  });

  // Generate CSS code based on the processed component properties.
  const generatedStyles = generateCSSCode({ CSS, selector: classSelector });

  // Get the 'Robust-css' element from the document.
  const robustDocument = document.getElementById("Robust-css");

  if (!robustDocument) {
    // If 'Robust-css' element doesn't exist, create a new style element and append it to the head.
    const style = document.createElement("style");
    style.id = `Robust-css`;
    const element = Array.from(generatedStyles.entries())
      .flatMap(([key, value]) => [key, value])
      .join("");

    const documentStyle = cssReset + element;
    style.innerHTML = documentStyle;
    document.head.appendChild(style);
  } else {
    // If 'Robust-css' element exists, replace CSS selectors with the generated styles.
    const newCSS = replaceCSSSelectors({
      css: robustDocument.innerHTML,
      replacementMap: generatedStyles,
    });

    robustDocument.innerHTML = newCSS;
  }
}

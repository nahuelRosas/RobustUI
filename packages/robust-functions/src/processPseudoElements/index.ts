import { CssPropertyMappings, defaultTheme } from "@robust/theme";
import { getPropValueGetters } from "../getPropValueGetters";
import { getPropValueWithBreakPoint } from "../getPropValueWithBreakPoint";
import { CSSProperties, ProcessPseudoElements } from "./types";

const UNDEFINED_STR = "undefined";

/**
 * Processes pseudo-elements in CSS properties and updates the provided CSS object accordingly.
 *
 * @param {ProcessPseudoElements} options - The options for processing pseudo-elements.
 * @param {string} options.prop - The property to process pseudo-elements for.
 * @param {unknown} options.propValue - The value of the property, which may contain pseudo-elements.
 * @param {RulesCSS} options.CSS - The CSS object to update.
 * @param {string} options.breakPoint - The breakpoint value.
 * @returns {CSSProperties} - The updated CSS object.
 */
export function processPseudoElements({
  prop,
  propValue,
  CSS,
  breakPoint,
}: ProcessPseudoElements): CSSProperties {
  // If the propValue is undefined, return the original CSS object
  if (typeof propValue === UNDEFINED_STR) {
    return CSS;
  }

  // Initialize the pseudoElements array for the given prop if it doesn't exist
  CSS.pseudoElements[prop] = CSS.pseudoElements[prop] || [];

  // Iterate over each pseudo-element and its corresponding value in the propValue object
  Object.entries(propValue).forEach(([pseudoElement, value]) => {
    // If the value of the pseudo-element is undefined, skip processing
    if (typeof value === UNDEFINED_STR) {
      return;
    }

    // Get the pseudo-element property function based on the pseudoElement
    const pseudoElementPropFunction = getPropValueGetters({
      componentType: pseudoElement,
    });

    // Get the value of the property with the breakpoint applied
    const propValueWithBreakpoint = getPropValueWithBreakPoint({
      propValue: value,
      breakPoint,
    });

    // If the pseudo-element property function is undefined, skip processing
    if (pseudoElementPropFunction === undefined) {
      return;
    }

    // Get the corresponding CSS property name for the pseudo-element
    const cssProperty =
      CssPropertyMappings[pseudoElement as keyof typeof CssPropertyMappings];

    // Get the mapping for the CSS property from the Theme object
    const mapProperty = defaultTheme[cssProperty as keyof typeof defaultTheme];

    const property = mapProperty as Record<string, string>;
    // Initialize the newValue with the propValueWithBreakpoint
    let newValue = propValueWithBreakpoint;

    // If a mapping for the CSS property exists in the Theme object,
    // use the mapped value from the Theme object if available, or fallback to the propValueWithBreakpoint
    if (property !== undefined) {
      newValue = property[propValueWithBreakpoint as keyof typeof property];
    }

    // Transform the newValue using the pseudoElementPropFunction
    const transformedValue = pseudoElementPropFunction(newValue as string);

    // If the transformedValue is not already in the pseudoElements array for the prop, add it
    if (!CSS.pseudoElements[prop].includes(transformedValue)) {
      CSS.pseudoElements[prop].push(transformedValue);
    }
  });

  // Return the updated CSS object
  return CSS;
}

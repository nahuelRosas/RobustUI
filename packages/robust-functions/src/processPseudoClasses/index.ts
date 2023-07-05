import { CssPropertyMappings, defaultTheme } from "@robust/theme";
import { getPropValueGetters } from "../getPropValueGetters";
import { getPropValueWithBreakPoint } from "../getPropValueWithBreakPoint";
import { CSSProperties, ProcessPseudoClasses } from "./types";

const UNDEFINED_STR = "undefined";

/**
 * Processes pseudo-classes in CSS properties and updates the provided CSS object accordingly.
 *
 * @param {ProcessPseudoClasses} options - The options for processing pseudo-classes.
 * @param {string} options.prop - The property to process pseudo-classes for.
 * @param {unknown} options.propValue - The value of the property, which may contain pseudo-classes.
 * @param {RulesCSS} options.CSS - The CSS object to update.
 * @param {string} options.breakPoint - The breakpoint value.
 * @returns {CSSProperties} - The updated CSS object.
 */
export function processPseudoClasses({
  prop,
  propValue,
  CSS,
  breakPoint,
}: ProcessPseudoClasses): CSSProperties {
  if (typeof propValue === UNDEFINED_STR) {
    return CSS;
  }

  // Initialize the pseudoClasses array for the given prop if it doesn't exist
  if (!CSS.pseudoClasses[prop]) {
    CSS.pseudoClasses[prop] = [];
  }

  // Iterate over each pseudo-class and its corresponding value in the propValue object
  Object.entries(propValue).forEach(([pseudoClass, value]) => {
    // Get the pseudo-class property function based on the pseudoClass
    const pseudoClassPropFunction = getPropValueGetters({
      componentType: pseudoClass,
    });

    // Get the value of the property with the breakpoint applied
    const propValueWithBreakpoint = getPropValueWithBreakPoint({
      propValue: value,
      breakPoint,
    });

    // If the pseudo-class property function is undefined, skip processing
    if (pseudoClassPropFunction === undefined) {
      return;
    }

    // Get the corresponding CSS property name for the pseudo-class
    const cssProperty =
      CssPropertyMappings[pseudoClass as keyof typeof CssPropertyMappings];

    // Get the mapping for the CSS property from the Theme object
    const mapProperty = defaultTheme[cssProperty as keyof typeof defaultTheme];

    const property = mapProperty as Record<string, string>;

    // Initialize the transformedValue with the propValueWithBreakpoint
    let transformedValue = propValueWithBreakpoint;

    // If a mapping for the CSS property exists in the Theme object,
    // use the mapped value from the Theme object if available, or fallback to the propValueWithBreakpoint
    if (property !== undefined) {
      transformedValue =
        property[propValueWithBreakpoint as keyof typeof property];
    }

    // Transform the transformedValue using the pseudoClassPropFunction
    const newValue = pseudoClassPropFunction(transformedValue as string);

    // If the newValue is not already in the pseudoClasses array for the prop, add it
    if (!CSS.pseudoClasses[prop].includes(newValue)) {
      CSS.pseudoClasses[prop].push(newValue);
    }
  });

  // Return the updated CSS object
  return CSS;
}

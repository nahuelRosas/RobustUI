import { CssPropertyMappings, defaultTheme, RulesCSS } from "@robust/theme";
import { getPropValueGetters } from "../getPropValueGetters";
import { getPropValueWithBreakPoint } from "../getPropValueWithBreakPoint";
import { processAtRule } from "../processAtRules";
import { processPseudoClasses } from "../processPseudoClasses";
import { processPseudoElements } from "../processPseudoElements";
import { CSSProperties, ProcessPropValue } from "./types";

const UNDEFINED_STR = "undefined";

/**
 * Processes a single property value and generates CSS styles based on it.
 *
 * @param prop - The name of the CSS property.
 * @param propValue - The value of the CSS property.
 * @param breakPoint - The breakpoint value (optional).
 * @param CSS - The CSS object to which the generated styles will be added.
 * @returns The updated CSS object.
 */
export function processPropValue({
  prop,
  propValue,
  breakPoint,
  CSS,
}: ProcessPropValue): CSSProperties {
  // If the propValue is undefined, return the original CSS object.
  if (typeof propValue === UNDEFINED_STR) {
    return CSS;
  }

  // Check if the prop corresponds to an @rule in RulesCSS.AtRules.
  if (RulesCSS.AtRules[prop as keyof typeof RulesCSS.AtRules] !== undefined) {
    CSS = processAtRule({
      prop,
      propValue,
      CSS,
    });
  }
  // Check if the prop corresponds to a pseudo-class in RulesCSS.PseudoClasses.
  else if (
    RulesCSS.PseudoClasses[prop as keyof typeof RulesCSS.PseudoClasses] !==
    undefined
  ) {
    CSS = processPseudoClasses({
      prop,
      propValue,
      CSS,
      breakPoint,
    });
  }
  // Check if the prop corresponds to a pseudo-element in RulesCSS.PseudoElements.
  else if (
    RulesCSS.PseudoElements[prop as keyof typeof RulesCSS.PseudoElements] !==
    undefined
  ) {
    CSS = processPseudoElements({
      prop,
      propValue,
      CSS,
      breakPoint,
    });
  }
  // If the prop is not an @rule, pseudo-class, or pseudo-element, process the value.
  else {
    // Get the prop function based on the component type.
    const propFunction = getPropValueGetters({ componentType: prop });

    // Get the prop value with the breakpoint applied.
    const propValueWithBreakpoint = getPropValueWithBreakPoint({
      propValue: propValue,
      breakPoint,
    });

    // If the prop function is undefined, return the original CSS object.
    if (propFunction === undefined) {
      return CSS;
    }

    // Map the prop to a CSS property.
    const cssProperty =
      CssPropertyMappings[prop as keyof typeof CssPropertyMappings];

    // Map the CSS property to a value in the Theme.
    const mapProperty = defaultTheme[cssProperty as keyof typeof defaultTheme];
    const property = mapProperty as Record<string, string>;

    let value = propValueWithBreakpoint;

    // If a mapping exists in Theme for the CSS property, use the mapped value.
    if (property !== undefined) {
      value = property[propValueWithBreakpoint as keyof typeof property];
    }

    // Add the generated style to the 'base' array in the CSS object.
    CSS.base.push(propFunction(value as string));
  }

  // Return the updated CSS object.
  return CSS;
}

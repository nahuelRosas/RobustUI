# Function: processPropValue

This function processes a single property value and generates CSS styles based on it. It is used to build CSS objects by applying various transformations and mappings.

## Parameters

- `prop` (string): The name of the CSS property.
- `propValue` (any): The value of the CSS property.
- `breakPoint` (optional): The breakpoint value for responsive styles.
- `CSS` (CSSProperties): The CSS object to which the generated styles will be added.

## Return Value

The function returns the updated CSS object.

## Dependencies

The function relies on the following imports:

```javascript
import { CssPropertyMappings, Theme, RulesCSS } from "@robust/theme";
import { getPropValueGetters } from "../getPropValueGetters";
import { getPropValueWithBreakPoint } from "../getPropValueWithBreakPoint";
import { processAtRule } from "../processAtRules";
import { processPseudoClasses } from "../processPseudoClass";
import { processPseudoElements } from "../processPseudoElements";
import { CSSProperties, ProcessPropValue } from "./types";
```

- `CssPropertyMappings`: A mapping of CSS property names to their corresponding values in the theme.
- `Theme`: An object that contains mappings of CSS properties to their corresponding values.
- `RulesCSS`: An object that defines various CSS rules such as `AtRules`, `PseudoClasses`, and `PseudoElements`.
- `getPropValueGetters`: A function that returns the appropriate prop function based on the component type.
- `getPropValueWithBreakPoint`: A function that applies the breakpoint value to the prop value.
- `processAtRule`: A function that processes the CSS property as an `@rule`.
- `processPseudoClasses`: A function that processes the CSS property as a pseudo-class.
- `processPseudoElements`: A function that processes the CSS property as a pseudo-element.
- `CSSProperties`: A type definition for the CSS object.
- `ProcessPropValue`: A type definition for the parameters of the `processPropValue` function.

## Function Flow

1. If the `propValue` is undefined, the function returns the original `CSS` object.
2. If the `prop` corresponds to an `@rule` in `RulesCSS.AtRules`, the function calls the `processAtRule` function to process the CSS property.
3. If the `prop` corresponds to a pseudo-class in `RulesCSS.PseudoClasses`, the function calls the `processPseudoClasses` function to process the CSS property.
4. If the `prop` corresponds to a pseudo-element in `RulesCSS.PseudoElements`, the function calls the `processPseudoElements` function to process the CSS property.
5. If the `prop` is not an `@rule`, pseudo-class, or pseudo-element, the function proceeds to process the value.
6. The function retrieves the prop function based on the component type using the `getPropValueGetters` function.
7. The function applies the breakpoint value to the `propValue` using the `getPropValueWithBreakPoint` function.
8. If the prop function is undefined, the function returns the original `CSS` object.
9. The function maps the `prop` to a CSS property using the `CssPropertyMappings` object.
10. The function maps the CSS property to a value in the `Theme` object.
11. The value is initially set to the `propValueWithBreakpoint`.
12. If a mapping exists in `Theme` for the CSS property, the function uses the mapped value. Otherwise, it uses the `propValueWithBreakpoint`.
13. The generated style is added to the 'base' array in the `CSS` object.
14. Finally, the function returns the updated `CSS` object.

````markdown
# Inject CSS

This module provides a function `InjectCSS` for injecting CSS styles into the document based on component properties.

## Installation

This module has the following dependencies:

- `generateCSSCode` from "../generateCSScode/index"
- `processPropValue` from "../processPropValue"
- `InjectCSSTOptions` from "./types"
- `replaceCSSSelectors` from "../replaceCSS"

Make sure to install these dependencies before using this module.

## Usage

```typescript
import { InjectCSS } from "path/to/InjectCSS";

// Usage example
InjectCSS({
  classSelector: ".my-component",
  componentProps: { color: "red", fontSize: "16px" },
  breakPoint: "480px",
});
```
````

### Parameters

- `classSelector` (string): The class selector to which the CSS styles will be applied.
- `componentProps` (Record<string, string> | string): The component properties containing CSS property-value pairs.
- `breakPoint` (string): The breakpoint value (optional).

## Behavior

1. The function checks if the `document` object is defined. If not, it returns and does nothing.
2. It initializes the `CSS` object with empty arrays for different style categories (`base`, `pseudoClasses`, `pseudoElements`, `atRules`).
3. It processes each component property and generates CSS styles using the `processPropValue` function.
4. It generates CSS code based on the processed component properties using the `generateCSSCode` function.
5. If the element with id "Robust-css" does not exist in the document, it creates a new style element, appends the generated CSS code to it, and appends the style element to the `<head>` section of the document.
6. If the element with id "Robust-css" exists, it replaces CSS selectors in the existing CSS code with the generated styles using the `replaceCSSSelectors` function.

Note: Make sure to have the required dependencies and understand the structure of the component properties and the expected CSS output.

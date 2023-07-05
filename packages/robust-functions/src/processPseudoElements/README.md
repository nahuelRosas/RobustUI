# processPseudoElements

This function is part of a CSS processing module and is responsible for handling pseudo-elements in CSS properties. It processes the pseudo-elements and updates the provided CSS object accordingly.

## Usage

Import the necessary modules and types:

```javascript
import { CssPropertyMappings, RulesCSS, Theme } from "@robust/theme";
import { getPropValueGetters } from "../getPropValueGetters";
import { getPropValueWithBreakPoint } from "../getPropValueWithBreakPoint";
import { CSSProperties, ProcessPseudoElements } from "./types";
```

Define your CSS object and options for processing pseudo-elements:

```javascript
const CSS: RulesCSS = {
  base: [],
  pseudoClasses: {},
  pseudoElements: {},
  atRules: {},
};

const options: ProcessPseudoElements = {
  prop: "color",
  propValue: {
    before: "red",
    after: "blue",
  },
  breakPoint: "md",
  CSS,
};
```

Invoke the `processPseudoElements` function:

```javascript
const updatedCSS = processPseudoElements(options);
```

The `updatedCSS` variable now contains the modified CSS object with the processed pseudo-elements.

## Examples

Here are a few examples to illustrate how the `processPseudoElements` function works:

### Example 1: Processing `before` and `after` pseudo-elements for the `color` property

```javascript
const options: ProcessPseudoElements = {
  prop: "color",
  propValue: {
    before: "red",
    after: "blue",
  },
  breakPoint: "md",
  CSS,
};

const updatedCSS = processPseudoElements(options);
```

The `pseudoElements` property of `CSS` will be updated as follows:

```javascript
{
  base: [],
  pseudoClasses: {},
  pseudoElements: {
    color: [
      "::before { color: transformed-value; }",
      "::after { color: transformed-value; }"
    ]
  },
  atRules: {},
}
```

### Example 2: Skipping undefined values

```javascript
const options: ProcessPseudoElements = {
  prop: "font-size",
  propValue: {
    before: "16px",
    after: undefined,
  },
  breakPoint: "md",
  CSS,
};

const updatedCSS = processPseudoElements(options);
```

Since the value of the `after` pseudo-element is `undefined`, it will be skipped, and the `pseudoElements` property of `CSS` will remain unchanged.

### Example 3: No transformation function available

```javascript
const options: ProcessPseudoElements = {
  prop: "opacity",
  propValue: {
    before: "0.5",
    after: "0.8",
  },
  breakPoint: "md",
  CSS,
};

const updatedCSS = processPseudoElements(options);
```

Since there is no transformation function available for the `opacity` property, the `pseudoElements` property of `CSS` will remain unchanged.

## Dependencies

This function has the following dependencies:

- `CssPropertyMappings` from the `@robust/theme` package: A mapping of pseudo-elements to their corresponding CSS property names.
- `getPropValueGetters` from the `../getPropValueGetters` module: A function that retrieves the pseudo-element property function based on the pseudo-element.
- `getPropValueWithBreakPoint` from the `../getPropValueWithBreakPoint` module: A function that applies breakpoints to the property values.
- `CSSProperties` from the `./types` module: A type representing the structure of CSS properties.
- `ProcessPseudoElements` from the

`./types` module: A type representing the options for processing pseudo-elements.

Make sure to import these dependencies and configure them appropriately before using the `processPseudoElements` function.

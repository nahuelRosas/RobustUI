## processPseudoClasses

Processes pseudo-classes in CSS properties and updates the provided CSS object accordingly.

### Parameters

- `options` (`ProcessPseudoClasses`): The options for processing pseudo-classes.
  - `prop` (`string`): The property to process pseudo-classes for.
  - `propValue` (`unknown`): The value of the property, which may contain pseudo-classes.
  - `CSS` (`RulesCSS`): The CSS object to update.
  - `breakPoint` (`string`): The breakpoint value.

### Returns

- `CSSProperties`: The updated CSS object.

### Example

```typescript
import { processPseudoClasses } from "your-library";

const CSS = {
  base: [],
  pseudoClasses: {},
  pseudoElements: {},
  atRules: {},
};

const options = {
  prop: "color",
  propValue: {
    ":hover": "red",
    ":focus": "blue",
  },
  CSS,
  breakPoint: "md",
};

const updatedCSS = processPseudoClasses(options);
console.log(updatedCSS);
```

### Details

- The function processes each pseudo-class in the `propValue` object and updates the corresponding `pseudoClasses` array in the `CSS` object.
- If the `propValue` is `undefined`, the function returns the original `CSS` object without any modifications.
- The function uses `getPropValueGetters` to retrieve the pseudo-class property function based on the pseudo-class name.
- It then applies the provided `breakPoint` to the property value using `getPropValueWithBreakPoint`.
- If a mapping for the CSS property exists in the `Theme` object, the function uses the mapped value from the `Theme` object, or falls back to the original property value.
- The transformed value is obtained by applying the pseudo-class property function to the adjusted property value.
- If the transformed value is not already present in the `pseudoClasses` array for the given property, it is added to the array.
- The function finally returns the updated `CSS` object with the modified `pseudoClasses` array.

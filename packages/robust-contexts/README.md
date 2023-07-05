# Functions

## InjectCSS

```typescript
/**
 * Injects CSS styles based on the provided component props and theme.
 * @param classSelector - The CSS class selector to target the component.
 * @param componentProps - The component props containing style information.
 * @param breakPoint - The breakpoint value for responsive styles.
 * @param theme - The theme object containing style mappings.
 * @returns void
 */
export function InjectCSS({
  classSelector,
  componentProps,
  breakPoint,
  theme = defaultTheme,
}: InjectCSST): void;
```

The `InjectCSS` function is a powerful utility that allows you to dynamically inject CSS styles into the DOM based on the provided `componentProps` and `theme`. It enables flexible and customized styling of components using class selectors and a set of properties and values.

### Parameters

- `classSelector`: The CSS class selector used to target the component to which the styles will be applied. It should be a valid CSS selector string, such as `'.my-component'`.
- `componentProps`: An object containing the component's properties and their respective style values. Each property represents a CSS property, and its value represents the corresponding value for that property. The supported value types include strings and objects.
- `breakPoint` (optional): The breakpoint value used for responsive styles. It allows styles to be adapted based on the screen size or device. It should be a string representing the desired breakpoint value, such as `'md'`, `'lg'`, etc.
- `theme` (optional): An object containing theme-specific style mappings. It provides a way to set default values for certain properties and customize styles based on the theme. The theme object should follow a specific structure with property-value mappings.

### Usage

To use the `InjectCSS` function, follow these steps:

1. Import the `InjectCSS` function into your file:

```typescript
import { InjectCSS } from "InjectCSS";
```

2. Define your component and its props. For example:

```typescript
const MyComponent = ({ color, fontSize }) => {
  // Your component logic here
};
```

3. Within your component, call the `InjectCSS` function to apply the styles:

```typescript
const MyComponent = ({ color, fontSize }) => {
  const classSelector = ".my-component";
  const componentProps = {
    color,
    fontSize,
    // Additional component properties and their values
  };

  InjectCSS({
    classSelector,
    componentProps,
    breakPoint: "md", // Optional: Set the breakpoint for responsive styles
    theme: myCustomTheme, // Optional: Provide a custom theme object
  });

  // Rest of your component code
};
```

4. In the example above, the `InjectCSS` function is called within the component to apply the styles defined by the `color` and `fontSize` props. The styles will be applied to any element with the class `my-component`. You can add additional properties to `componentProps` as needed for your component.

5. Optionally, you can specify a breakpoint value using the `breakPoint` parameter to apply responsive styles. This allows the styles to adapt based on the screen size or device. The breakpoint value should be a string corresponding to the desired breakpoint, such as `'md'`, `'lg'`, etc.

6. If you have a theme object with style mappings specific to your application, you can provide it using the `theme` parameter. The theme object should have property-value mappings that align with the CSS properties used in your `componentProps`. This allows you to customize the styles based on the theme.

7. Finally, make sure to render your component with

the appropriate class name:

```typescript
const MyComponent = ({ color, fontSize }) => {
  // Your component logic here

  return <div className="my-component">Hello, world!</div>;
};
```

It's important to note that the `InjectCSS` function should be called whenever the component props change to ensure that the styles are updated accordingly.

That's it! The `InjectCSS` function provides a powerful mechanism for dynamically applying styles to components based on props and themes. It offers great flexibility in styling and enables you to create versatile and visually appealing components.

## generateHash

```typescript
import crypto from "crypto";
import { generateHashT } from "functions";

/**
 * Generates a hash using the specified algorithm from a given string.
 * @param {string} str - The string to generate the hash from.
 * @param {string} algorithm - The hash algorithm to use. Default is "sha512".
 * @returns {string} - The generated hash as a hexadecimal string.
 * @throws {Error} - If an invalid hash algorithm is provided.
 */
export function generateHash({
  str,
  algorithm = "sha512",
}: generateHashT): string {
  if (!crypto.getHashes().includes(algorithm)) {
    throw new Error(
      `Invalid algorithm: ${algorithm}. Valid algorithms are: ${crypto
        .getHashes()
        .join(", ")}.`
    );
  }
  return crypto.createHash(algorithm).update(str).digest("hex");
}
```

The `generateHash` function generates a hash using the specified algorithm from a given string. It uses the `crypto` module from Node.js for hash generation.

### Parameters

- `str` (string): The string to generate the hash from.
- `algorithm` (string): The hash algorithm to use. Default is "sha512".

### Returns

- A string representing the generated hash as a hexadecimal string.

### Throws

- An error if an invalid hash algorithm is provided.

---

## generateId

```typescript
import { generateIdT } from "functions";
import { generateHash, safeJSON } from "functions";

/**
 * Generates a unique ID based on the provided object or string using a specified algorithm.
 *
 * @param obj - The object or string to generate the ID from.
 * @param prefix - An optional prefix to include in the generated ID.
 * @param algorithm - The hash algorithm to use for generating the hash. Default is "sha1".
 * @returns The generated ID as a string.
 */
export function generateId({
  obj,
  prefix,
  algorithm = "sha1",
}: generateIdT): string {
  if (typeof obj === "string") {
    // If obj is a string, generate hash directly from it
    return generateHash({ str: obj, algorithm });
  }
  // If obj is an object, generate hash from its JSON representation
  return `${Boolean(prefix) && prefix}-${generateHash({
    str: safeJSON({ obj }),
    algorithm,
  })}`;
}
```

The `generateId` function generates a unique ID based on the provided object or string using a specified algorithm. It internally uses the `generateHash` and `safeJSON` functions.

### Parameters

- `obj` (object|string): The object or string to generate the ID from.
- `prefix` (string, optional): An optional prefix to include in the generated ID.
- `algorithm` (string, optional): The hash algorithm to use for generating the hash. Default is "sha1".

### Returns

- The generated ID as a string.

---

### How to Use

To use the `generateHash` and `generateId` functions, follow these steps:

1. Import the functions into your project:

```typescript
import { generateHash, generateId } from "./path/to/functions";
```

2. Use the functions in your code:

```typescript
const hash = generateHash({
  str: "Hello, world!",
  algorithm: "sha256",
});
console.log("Generated hash:", hash);

const id = generateId({
  obj: { key: "value" },
  prefix: "id",
  algorithm: "md5",
});
console.log("Generated ID:", id);
```

Make sure to provide the necessary

## createCSSRule

```typescript
import { createCSSRuleT } from "functions";

/**
 * Creates a CSS rule string with the specified selector and styles.
 *
 * @param selector - The CSS selector for the rule.
 * @param styles - The CSS styles to apply.
 * @returns The generated CSS rule as a string.
 */
export function createCSSRule({ selector, styles }: createCSSRuleT): string {
  return `.${selector} {${styles}}`;
}
```

The `createCSSRule` function generates a CSS rule string with the specified selector and styles.

### Parameters

- `selector` (string): The CSS selector for the rule.
- `styles` (string): The CSS styles to apply.

### Returns

- The generated CSS rule as a string.

---

## createStyleSheet

```typescript
import { createStyleSheetT } from "functions";

/**
 * Creates a CSS stylesheet string with the specified rules.
 *
 * @param rules - An array of CSS rules.
 * @returns The generated CSS stylesheet as a string.
 */
export function createStyleSheet({ rules }: createStyleSheetT): string {
  return rules.join("\n");
}
```

The `createStyleSheet` function generates a CSS stylesheet string with the specified rules.

### Parameters

- `rules` (string[]): An array of CSS rules.

### Returns

- The generated CSS stylesheet as a string.

---

### How to Use

To use the `createCSSRule` and `createStyleSheet` functions, follow these steps:

1. Import the functions into your project:

```typescript
import { createCSSRule, createStyleSheet } from "./path/to/functions";
```

2. Use the functions in your code:

```typescript
const cssRule = createCSSRule({
  selector: "my-class",
  styles: "color: red; font-size: 16px;",
});
console.log("Generated CSS rule:", cssRule);

const cssStylesheet = createStyleSheet({
  rules: [
    createCSSRule({ selector: "class-1", styles: "background-color: blue;" }),
    createCSSRule({ selector: "class-2", styles: "background-color: green;" }),
  ],
});
console.log("Generated CSS stylesheet:", cssStylesheet);
```

Make sure to provide the necessary parameters and handle the generated CSS rule or stylesheet as needed in your application.

## getInitials

```typescript
/**
 * Returns the initials of a given name.
 * If the name is composed of multiple words, it takes the first letter of each word.
 * If the name is empty, it returns an empty string.
 * @param name - The name to get the initials from.
 * @param maxLength - Optional parameter to specify the maximum number of characters to return. If not provided or if the resulting string is shorter than the specified length, it returns the full initials.
 * @returns The initials of the given name, or an empty string if the name is empty.
 */
export function getInitials({
  name,
  maxLength = 2,
}: {
  name: string;
  maxLength?: number;
}): string {
  if (!name) return "";
  const words = name.trim().split(/\s+/);
  let initials = "";

  for (const word of words) {
    initials += word[0].toUpperCase();
    if (maxLength && initials.length >= maxLength) break;
  }

  return initials;
}
```

The `getInitials` function returns the initials of a given name. If the name is composed of multiple words, it takes the first letter of each word. If the name is empty, it returns an empty string.

### Parameters

- `name` (string): The name to get the initials from.
- `maxLength` (number, optional): Optional parameter to specify the maximum number of characters to return. If not provided or if the resulting string is shorter than the specified length, it returns the full initials.

### Returns

- The initials of the given name, or an empty string if the name is empty.

---

### How to Use

To use the `getInitials` function, follow these steps:

1. Import the function into your project:

```typescript
import { getInitials } from "./path/to/functions";
```

2. Use the function in your code:

```typescript
const initials = getInitials({ name: "John Doe", maxLength: 2 });
console.log("Initials:", initials);
```

Make sure to provide the necessary parameters and handle the returned initials as needed in your application.

## getPropValueGetters

```typescript
/**
 * Retrieves the property value getter function based on the component type.
 * @param componentType - The component type.
 * @returns The property value getter function or undefined if not found.
 */
export function getPropValueGetters({
  componentType,
}: {
  componentType: string;
}) {
  let STRforced = false;
  const CTString = componentType
    .split(/(?=[A-Z])/)
    .filter((item) => {
      const itemLowerCase = item.toLowerCase();
      if (itemLowerCase === "str" || itemLowerCase === "string") {
        STRforced = true;
      }
      return itemLowerCase !== "str" && itemLowerCase !== "string";
    })
    .join("-")
    .toLowerCase();

  if (cssPropertyMappings[componentType] === undefined && !STRforced) {
    return undefined;
  } else if (alternative[CTString]) {
    return alternative[CTString];
  }

  return (propValue: string): string => {
    return `${CTString} : ${propValue};`;
  };
}

export enum cssPropertyMappings {}
// List of CSS property mappings

export const alternative = {
  // List of alternative property value getter functions
};
```

The `getPropValueGetters` function retrieves the property value getter function based on the component type.

### Parameters

- `componentType` (string): The component type.

### Returns

- The property value getter function or `undefined` if not found.

---

### How to Use

To use the `getPropValueGetters` function, follow these steps:

1. Import the function into your project:

```typescript
import { getPropValueGetters } from "./path/to/functions";
```

2. Use the function in your code:

```typescript
const propValueGetter = getPropValueGetters({ componentType: "borderColor" });
console.log("Property Value Getter:", propValueGetter);
```

The `propValueGetter` variable will contain the property value getter function for the specified component type. You can then use this function to generate the desired property value based on a provided value.

Note: The `cssPropertyMappings` enum and `alternative` object in the code represent placeholders for the actual mappings and alternative property value getter functions. Make sure to update them with the appropriate values according to your application's needs.

Make sure to provide the necessary parameters and handle the returned property value getter function as needed in your application.

## getPropValueWithBreakpoint

```typescript
/**
 * Retrieves the property value with the specified breakpoint.
 * @param propValue - The property value.
 * @param breakPoint - The breakpoint to consider.
 * @returns The property value with the specified breakpoint or undefined.
 * @throws {Error} - If an invalid propValue or breakpoint is provided.
 */
export function getPropValueWithBreakpoint({
  propValue,
  breakPoint,
}: getPropValueWithBreakpointT): string | undefined {
  if (typeof propValue === "string") {
    return propValue as string;
  } else if (
    typeof propValue === "object" &&
    propValue !== null &&
    breakPoint !== undefined
  ) {
    if (propValue[breakPoint]) return propValue[breakPoint] as string;

    for (const e of Object.keys(breakpoints)) {
      if (e <= breakPoint && propValue[e]) {
        return propValue[e] as string;
      }
      if (e > breakPoint) {
        return propValue[e] as string;
      }
    }
    throw new Error(
      `Invalid propValue for breakpoint ${breakPoint} and propValue ${propValue}`
    );
  } else if (typeof propValue === "undefined") {
    const Location = new Error().stack?.split("\n")[2];
    throw new Error(`Invalid propValue ${propValue} at ${Location}`);
  }
}
```

The `getPropValueWithBreakpoint` function retrieves the property value with the specified breakpoint.

### Parameters

- `propValue` (string | object): The property value.
- `breakPoint` (string): The breakpoint to consider.

### Returns

- The property value with the specified breakpoint or `undefined`.

### Throws

- `Error`: If an invalid `propValue` or `breakpoint` is provided.

---

### How to Use

To use the `getPropValueWithBreakpoint` function, follow these steps:

1. Import the function into your project:

```typescript
import { getPropValueWithBreakpoint } from "./path/to/functions";
```

2. Use the function in your code:

```typescript
const propValue = { base: "10px", md: "20px", lg: "30px" };
const breakPoint = "md";
const result = getPropValueWithBreakpoint({ propValue, breakPoint });
console.log("Result:", result);
```

The `result` variable will contain the property value with the specified breakpoint. If a value for the exact breakpoint exists in the `propValue` object, that value will be returned. Otherwise, the function will find the nearest breakpoint based on the provided `breakPoint` and return the corresponding value. If no value is found, `undefined` will be returned.

Note: The `breakpoints` object in the code represents the breakpoints mapping. Make sure to update it with the appropriate breakpoints and values according to your application's needs.

Make sure to provide the necessary parameters and handle the returned property value as needed in your application.

## handleDragStart

```typescript
/**
 * Handles the drag start event.
 * @param onDragStart - The callback function to execute on drag start.
 * @param event - The drag start event object.
 * @param dragRef - The drag reference object.
 * @returns void
 */
export function handleDragStart({
  onDragStart,
  event,
  dragRef,
}: handleDragStartT): void {
  event.stopPropagation();
  if (onDragStart) onDragStart(event);
  if (dragRef.current) {
    event.dataTransfer.setData("text/plain", dragRef.current.id);
    event.dataTransfer.effectAllowed = "move";
  }
}
```

The `handleDragStart` function is responsible for handling the drag start event.

### Parameters

- `onDragStart` (function): The callback function to execute on drag start.
- `event` (DragEvent): The drag start event object.
- `dragRef` (RefObject): The drag reference object.

### Returns

- `void`

---

### How to Use

To use the `handleDragStart` function, follow these steps:

1. Import the function into your project:

```typescript
import { handleDragStart } from "./path/to/functions";
```

2. Use the function in your code:

```typescript
function MyComponent() {
  const dragRef = useRef(null);

  const handleOnDragStart = (event) => {
    console.log("Drag started!");
  };

  const handleDragStartEvent = (event) => {
    handleDragStart({
      onDragStart: handleOnDragStart,
      event,
      dragRef,
    });
  };

  return (
    <div draggable="true" ref={dragRef} onDragStart={handleDragStartEvent}>
      Drag me!
    </div>
  );
}
```

In the example above, `handleDragStart` is used to handle the drag start event. The `handleOnDragStart` function is passed as the `onDragStart` callback, which will be executed when the drag starts. The `event` object and `dragRef` are also provided as parameters.

Ensure that you have a draggable element and assign the `handleDragStartEvent` function to the `onDragStart` event handler.

Customize the implementation of `handleOnDragStart` to perform the desired actions when the drag starts.

Make sure to provide the necessary parameters and handle the event accordingly in your application.

Sure! Here's the documentation for the `isDark` function:

## isDark

```typescript
/**
 * Determines if a given color is considered "dark" or "light".
 * @param color - The color string to check.
 * @returns True if the color is considered "dark", false otherwise.
 * @throws An error if the color string is not in the format "hsl(H, S%, L%)", where H is the hue value, S is the saturation value, and L is the lightness value.
 */
export function isDark({ color }: { color: string }): boolean;
```

The `isDark` function is a utility that helps determine if a given color is considered "dark" or "light" based on the HSL (Hue, Saturation, Lightness) color model. It takes a color string as input and returns `true` if the color is considered "dark," and `false` otherwise.

### Parameters

- `color`: The color string to be evaluated. It should be in the format "hsl(H, S%, L%)", where H represents the hue value, S represents the saturation value, and L represents the lightness value.

### Returns

- A boolean value indicating whether the color is considered "dark" (`true`) or "light" (`false`).

### Throws

- An error is thrown if the provided color string does not adhere to the required format of "hsl(H, S%, L%)".

### Usage

To use the `isDark` function, follow these steps:

1. Import the `isDark` function into your file:

```typescript
import { isDark } from "isDark";
```

2. Call the `isDark` function with the color string you want to evaluate:

```typescript
const color = "hsl(200, 50%, 20%)";
const isColorDark = isDark({ color });
console.log(isColorDark); // Output: true
```

In the example above, the `isDark` function is used to determine if the color `'hsl(200, 50%, 20%)'` is considered "dark" or "light." The function returns `true` since the color has a lightness value below 128, indicating a "dark" color.

Please ensure that the color string you provide follows the correct format of "hsl(H, S%, L%)" to avoid any errors.

The `isDark` function can be helpful in various scenarios where you need to assess the brightness of a color and make decisions based on its perceived darkness or lightness.

## randomColor

```typescript
/**
 * Generates a random HSL color based on a given seed string.
 * @param seed - The seed string used to generate the color.
 * @returns A random HSL color in the format "hsl(H, S%, L%)", where H is the hue value, S is the saturation value, and L is the lightness value.
 */
export function randomColor({ seed }: { seed?: string } = {}): string;
```

The `randomColor` function generates a random HSL (Hue, Saturation, Lightness) color based on a given seed string. It returns a string representation of the color in the format "hsl(H, S%, L%)", where H represents the hue value, S represents the saturation value, and L represents the lightness value.

### Parameters

- `seed` (optional): The seed string used to generate the random color. If not provided, a random seed string will be generated internally. The seed string helps ensure that the generated color remains consistent for a given seed.

### Returns

- A string representing a random HSL color in the format "hsl(H, S%, L%)".

### Usage

To use the `randomColor` function, follow these steps:

1. Import the `randomColor` function into your file:

```typescript
import { randomColor } from "randomColor";
```

2. Call the `randomColor` function to generate a random color:

```typescript
const color = randomColor();
console.log(color); // Output: e.g., "hsl(200, 100%, 70%)"
```

In the example above, the `randomColor` function is called without any arguments, generating a random HSL color. The function returns a string representing the color, such as "hsl(200, 100%, 70%)".

If you want to generate a consistent color based on a specific seed string, you can provide the `seed` parameter:

```typescript
const seed = "mySeed";
const color = randomColor({ seed });
console.log(color); // Output: e.g., "hsl(120, 100%, 70%)"
```

By using the same `seed` value, you can ensure that the generated color remains the same across multiple invocations.

The `randomColor` function can be useful in scenarios where you need to generate random colors dynamically, such as for visualizations, user interfaces, or data representation.

Please note that the generated colors are pseudorandom and deterministic based on the provided seed.

## RecoveryBreakPointValue

```typescript
/**
 * Retrieves the current breakpoint value from the global context.
 * @returns The current breakpoint value as a string.
 */
export function RecoveryBreakPointValue(): string;
```

The `RecoveryBreakPointValue` function is responsible for retrieving the current breakpoint value from the global context. It returns the current breakpoint value as a string.

### Usage

To use the `RecoveryBreakPointValue` function, follow these steps:

1. Import the `RecoveryBreakPointValue` function and the necessary dependencies into your file:

```typescript
import { useGlobalContext } from "hooks";
import { GlobalContext } from "provider";
```

2. Call the `RecoveryBreakPointValue` function to retrieve the current breakpoint value:

```typescript
const breakpointValue = RecoveryBreakPointValue();
console.log(breakpointValue); // Output: The current breakpoint value as a string
```

In the example above, the `RecoveryBreakPointValue` function is called to retrieve the current breakpoint value from the global context. The function returns the breakpoint value as a string.

Please note that you need to ensure that the `useGlobalContext` hook is set up correctly and that the `GlobalContext` provider is properly configured to provide the breakpoint value to the `RecoveryBreakPointValue` function.

If the `breakpointValue` exists in the global context, it will be returned. Otherwise, the function will return the string "base" as a fallback value.

The `RecoveryBreakPointValue` function can be useful in scenarios where you need to access and utilize the current breakpoint value within your application logic or UI components.

It's important to have a proper understanding of the `useGlobalContext` hook and the `GlobalContext` provider to ensure the correct usage of the `RecoveryBreakPointValue` function.

## safeJSON

```typescript
/**
 * Safely converts an object to a JSON string, handling circular references.
 * @param {unknown} obj - The object to convert to JSON.
 * @param {(key: string, value: unknown) => unknown} replacer - A function that alters the behavior of stringifying objects. Optional.
 * @param {string | number} indent - The number of spaces to use for indentation or a string to use for indentation. Optional.
 * @returns {string} - The JSON string representation of the object.
 */
export function safeJSON({ obj, replacer, indent }: safeJSONT): string;
```

The `safeJSON` function is responsible for safely converting an object to a JSON string, handling circular references. It takes in an object `obj` to convert, an optional `replacer` function that can alter the behavior of stringifying objects, and an optional `indent` parameter that specifies the indentation format for the resulting JSON string.

### Usage

To use the `safeJSON` function, follow these steps:

1. Import the `safeJSON` function and the necessary dependencies into your file:

```typescript
import { safeJSONT } from "functions";
```

2. Call the `safeJSON` function with the appropriate parameters:

```typescript
const jsonObject = {
  /* Your object here */
};
const jsonString = safeJSON({ obj: jsonObject, replacer: null, indent: 2 });
console.log(jsonString); // Output: The JSON string representation of the object
```

In the example above, the `safeJSON` function is called to convert an object `jsonObject` to a JSON string. The `replacer` parameter is set to `null` and the `indent` parameter is set to `2` spaces for indentation. The function returns the JSON string representation of the object.

The `replacer` parameter allows you to provide a custom function that alters the behavior of stringifying objects. This can be useful for selectively including or excluding certain properties or transforming values before stringification. If not provided, the default behavior of `JSON.stringify` is used.

The `indent` parameter determines the indentation format of the resulting JSON string. It can be either a number specifying the number of spaces to use for indentation or a string (e.g., "\t") to use for indentation. If not provided, the JSON string will not be indented.

The `safeJSON` function handles circular references in objects by replacing them with the string "[Circular]". This helps prevent errors that can occur when stringifying objects with circular references.

Please note that the `safeJSON` function relies on the `JSON.stringify` method to perform the stringification. Therefore, it supports the same data types and limitations as the native JSON.stringify method.

Ensure that the `safeJSON` function is used when you need to convert objects to JSON strings and handle circular references in a safe manner.

# replaceCSSSelectors

A utility function that replaces CSS selectors in the provided CSS string with the corresponding replacement values.

## Installation

This function requires the `ReplaceCSSSelectorsOptions` type from the `types` module. Make sure to import it before using the `replaceCSSSelectors` function.

```javascript
import { ReplaceCSSSelectorsOptions } from "./types";
```

## Usage

### replaceCSSSelectors(options: ReplaceCSSSelectorsOptions): string

Replaces the CSS selectors in the provided CSS string with the corresponding replacement values.

#### Parameters

- `options` (ReplaceCSSSelectorsOptions): The options for replacing CSS selectors.

  - `options.css` (string): The CSS string to be processed.

  - `options.replacementMap` (Map<string, string[]>): A Map where the keys represent the selectors to be replaced, and the values are arrays of replacement strings.

#### Returns

- `string`: The modified CSS string.

## How It Works

The `replaceCSSSelectors` function is designed to replace CSS selectors in a given CSS string based on the provided replacement map. It follows the following steps:

1. Create a copy of the original CSS string to store the modified CSS.

2. Iterate over each key-value pair in the `replacementMap` using the `forEach` method.

3. Generate a regular expression string, `selectorRegexString`, to match the selector in the CSS string. The selector is escaped using `RegExp.escape` to handle special characters. The resulting regular expression string captures the selector within parentheses.

4. Create a regular expression object, `selectorRegex`, using the generated `selectorRegexString`. The regular expression is configured with the "ism" flags to match case-insensitively, across multiple lines, and to treat the string as a single line.

5. Join the replacement values for the current selector into a single replacement string using the `join` method.

6. Replace all occurrences of the matched selectors in the `updatedCSS` string using the `replace` method. The matched selectors are replaced with the modified selector and the combined replacement string.

7. After iterating over all the selectors in the `replacementMap`, the function returns the modified CSS string.

## Example

```javascript
const options = {
  css: `
    .primary-button {
      background-color: blue;
    }
    .secondary-button {
      background-color: red;
    }
  `,
  replacementMap: new Map([
    [".primary-button", ["border: none;", "color: white;"]],
    [".secondary-button", ["border: 1px solid black;", "color: gray;"]],
  ]),
};

const modifiedCSS = replaceCSSSelectors(options);
console.log(modifiedCSS);
```

Output:

```plaintext
  .primary-button {
    background-color: blue;
    border: none;
    color: white;
  }
  .secondary-button {
    background-color: red;
    border: 1px solid black;
    color: gray;
  }
```

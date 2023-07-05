# Function: processAtRule

Processes the CSS property as an `@rule` and generates CSS styles based on it.

## Parameters

- `prop`: The name of the CSS property.
- `propValue`: The value of the CSS property.
- `CSS`: The CSS object to which the generated styles will be added.

## Returns

The updated CSS object.

## Description

This function takes a CSS property and its corresponding value and generates CSS styles based on it. It specifically handles CSS properties that are used as `@rules`, such as `@media` or `@supports`.

The function iterates over the `propValue` object, which represents the nested structure of the CSS rule. It generates CSS styles by iterating over each key-value pair in the `propValue` object hierarchy and concatenating them to the `result` string.

For each key-value pair, it maps the key (property) to a CSS property using `CssPropertyMappings` and checks if there is a mapping for it in the `Theme` object. If a mapping exists, the corresponding value from the `Theme` object is used instead of the original value.

The function also generates the `CTString` by splitting the property name at capital letters, filtering out specific substrings, and joining the parts with hyphens. This ensures the correct CSS syntax for the property name.

The generated CSS styles are added to the `result` string in a nested structure. Once the iteration is complete, the `result` string is added to the `CSS.atRules[prop]` array if it doesn't already exist.

Finally, the updated `CSS` object is returned, containing the generated styles for the `@rule` property.

Note: The `CssPropertyMappings` and `Theme` objects are imported from the `@robust/theme` package.

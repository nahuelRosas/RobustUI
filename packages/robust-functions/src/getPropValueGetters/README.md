# Function: getPropValueGetters

Retrieves the property value getters based on the component type.

## Parameters

- `options` (type: Object): The options object.
  - `options.componentType` (type: string): The component type.

## Returns

- (type: (propValue: string) => string | undefined): The property value getters or undefined.

## Description

This function takes in an options object with a `componentType` property and returns property value getters based on the component type. Here's a breakdown of the function:

- The `componentType` is converted to kebab-case, excluding "str" or "string" parts.
- If `CssPropertyMappings` does not have a mapping for the `componentType` and "str" or "string" is not forced, the function returns undefined.
- If `cssGenerators` has a mapping for the converted `CTString`, the corresponding value from `cssGenerators` is returned.
- If none of the above conditions are met, the function returns a function that formats the `propValue` as a CSS property-value pair using the converted `CTString`.

Please ensure that the `CssPropertyMappings` and `cssGenerators` variables are properly imported from the "@robust/theme" module for the function to work correctly.

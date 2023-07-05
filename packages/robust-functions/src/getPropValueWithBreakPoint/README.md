## Function: getPropValueWithBreakPoint

Retrieves the property value with the specified breakpoint.

### Parameters

- `propValue` (type: string | Record<string, string>): The property value to retrieve. It can be a string or an object with string values.
- `breakPoint` (type: string | undefined): The breakpoint value. Optional parameter.

### Returns

- (type: string | undefined): The property value as a string or undefined.

### Description

This function takes in a `propValue` and an optional `breakPoint` and retrieves the property value with the specified breakpoint. The function follows the following steps to determine the property value:

1. If the `propValue` is a string or number, it is converted to a string and returned.
2. If the `propValue` is an object and the `breakPoint` is defined:
   - If the `propValue` has a specific value for the specified breakpoint, that value is returned as a string.
   - Otherwise, the function iterates through the breakpoints in descending order and finds the first value that matches the condition:
     - If the breakpoint is less than or equal to the current breakpoint and the `propValue` has a value for that breakpoint, the value is returned as a string.
     - If the current breakpoint is greater than the specified breakpoint, the value for that breakpoint is returned as a string.
   - If no matching value is found, an error is thrown with the specified breakpoint and propValue.
3. If the `propValue` is undefined, an error is thrown with the invalid propValue and its location.

Please ensure that the `DEFAULT_BREAKPOINTS` and `getPropValueWithBreakpointT` types are properly imported for the function to work correctly.

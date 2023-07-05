# Function: generateId

Generates a unique ID based on the provided object or string using a specified algorithm.

## Parameters

- `options` (type: GenerateIdOptions): The options object.
  - `options.object` (type: Record<string, unknown> | string): The object or string to generate the ID from.
  - `options.prefix` (type: string | undefined): An optional prefix to include in the generated ID.
  - `options.algorithm` (type: string | undefined): The hash algorithm to use for generating the hash. Default is "sha1".

## Returns

- (type: string): The generated ID as a string.

## Description

This function generates a unique ID based on the provided `object` or string using a specified algorithm. Here's how the function works:

- If the `object` is of type string, it generates the hash directly from the string using the specified `algorithm` (or default "sha1") and returns the generated hash.
- If the `object` is an object, it generates the hash from the JSON representation of the object using the `safeJSON` function from the "../safeJSON" module. The `algorithm` is used for generating the hash. It concatenates the `prefix` (if provided) with the generated hash and returns the resulting ID as a string.

Please ensure that the `GenerateIdOptions` type is properly imported for the function to work correctly.

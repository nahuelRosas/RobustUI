# safeJSON

A utility function that safely converts an object to a JSON string, handling circular references.

## Installation

This function requires the `SafeJSONOptions` type from the `types` module. Make sure to import it before using the `safeJSON` function.

```javascript
import { SafeJSONOptions } from "./types";
```

## Usage

### safeJSON(options: SafeJSONOptions): string

Converts the provided object to a JSON string representation.

#### Parameters

- `options` (SafeJSONOptions): The options for converting the object to JSON.

  - `options.object` (unknown): The object to convert to JSON.

  - `options.replacer` (optional) - A function that alters the behavior of stringifying objects. (Default: `undefined`)

    - `(key: string, value: unknown) => unknown`: A callback function that takes a key and a value as parameters and returns the modified value.

  - `options.indent` (optional) - The number of spaces to use for indentation or a string to use for indentation. (Default: `undefined`)

#### Returns

- `string`: The JSON string representation of the object.

## How It Works

The `safeJSON` function safely converts an object to a JSON string while handling circular references. It uses a cache to keep track of visited objects and avoids infinite recursion.

1. Create a `cache` set to store visited objects.

2. Use `JSON.stringify` with a replacer function to convert the object to JSON. The replacer function checks for circular references and modifies the value accordingly.

   - Check if the value is an object and not null.

     - If the object is already in the `cache`, it means it's a circular reference. Return `"[Circular]"`.
     - If it's a new object, add it to the `cache` set.

   - If a `replacer` function is provided, use it to modify the value. Otherwise, return the original value.

3. Clear the `cache` to release memory for future conversions.

4. Return the resulting JSON string representation of the object.

## Example

```javascript
const options = {
  object: {
    name: "John Doe",
    age: 30,
    friend: null,
  },
  replacer: (key, value) => {
    if (key === "friend" && value === null) {
      return "No friends";
    }
    return value;
  },
  indent: 2,
};

const jsonString = safeJSON(options);
console.log(jsonString);
```

Output:

```plaintext
{
  "name": "John Doe",
  "age": 30,
  "friend": "No friends"
}
```

import { SafeJSONOptions } from "./types";

/**
 * Safely converts an object to a JSON string, handling circular references.
 * @param {SafeJSONOptions} options - The options for converting the object to JSON.
 * @param {unknown} options.object - The object to convert to JSON.
 * @param {(key: string, value: unknown) => unknown} [options.replacer] - A function that alters the behavior of stringifying objects. Optional.
 * @param {string | number} [options.indent] - The number of spaces to use for indentation or a string to use for indentation. Optional.
 * @returns {string} - The JSON string representation of the object.
 */
export function safeJSON({
  object,
  replacer,
  indent,
}: SafeJSONOptions): string {
  // Create a cache to keep track of visited objects
  const cache = new Set();

  // Convert the object to JSON with circular reference handling
  const jsonString = JSON.stringify(
    object,
    function (key, value) {
      // Check if the value is an object and not null
      if (typeof value === "object" && value !== null) {
        // Check if the object is already in the cache (circular reference)
        if (cache.has(value)) {
          return "[Circular]";
        }
        // Add the object to the cache
        cache.add(value);
      }
      // If a replacer function is provided, use it to modify the value
      return replacer ? replacer(key, value) : value;
    },
    indent
  );

  // Clear the cache for future conversions
  cache.clear();

  // Return the JSON string representation of the object
  return jsonString;
}

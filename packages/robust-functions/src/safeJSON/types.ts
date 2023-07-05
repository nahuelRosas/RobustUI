export type SafeJSONOptions = {
  object: unknown; // The JavaScript object to be serialized to JSON.
  replacer?: (key: string, value: unknown) => unknown; // Optional callback function to transform or exclude values during serialization.
  indent?: string | number; // Optional indentation string or number of spaces for pretty-printing the resulting JSON string.
};

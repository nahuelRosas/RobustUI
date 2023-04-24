import { safeJSONT } from 'functions';
/**
 * Safely converts an object to a JSON string, handling circular references.
 * @param {unknown} obj - The object to convert to JSON.
 * @param {(key: string, value: unknown) => unknown} replacer - A function that alters the behavior of stringifying objects. Optional.
 * @param {string | number} indent - The number of spaces to use for indentation or a string to use for indentation. Optional.
 * @returns {string} - The JSON string representation of the object.
 */
export function safeJSON({ obj, replacer, indent }: safeJSONT): string {
	const cache = new Set();
	const result = JSON.stringify(
		obj,
		function (key, value) {
			if (typeof value === 'object' && value !== null) {
				if (cache.has(value)) {
					return '[Circular]';
				}
				cache.add(value);
			}
			return replacer ? replacer(key, value) : value;
		},
		indent,
	);
	cache.clear();
	return result;
}

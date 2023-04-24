import { generateHash, safeJSON, generateIdT } from 'functions';

/**
 * Generates a unique ID based on the provided object or string using a specified algorithm.
 *
 * @param obj - The object or string to generate the ID from.
 * @param prefix - An optional prefix to include in the generated ID.
 * @param algorithm - The hash algorithm to use for generating the hash. Default is "sha512".
 * @returns The generated ID as a string.
 */
export function generateId({ obj, prefix, algorithm = 'sha1' }: generateIdT): string {
	if (typeof obj === 'string') {
		// If obj is a string, generate hash directly from it
		return generateHash({ str: obj, algorithm });
	}
	// If obj is an object, generate hash from its JSON representation
	return `${Boolean(prefix) && prefix}-${generateHash({
		str: safeJSON({ obj }),
		algorithm,
	})}`;
}

import { GenerateIdOptions } from "./types";
import { safeJSON } from "../safeJSON";
import { generateHash } from "../generateHash";

/**
 * Generates a unique ID based on the provided object or string using a specified algorithm.
 *
 * @param object - The object or string to generate the ID from.
 * @param prefix - An optional prefix to include in the generated ID.
 * @param algorithm - The hash algorithm to use for generating the hash. Default is "sha512".
 * @returns The generated ID as a string.
 */
export function generateId({
  object,
  prefix,
  algorithm = "sha1",
}: GenerateIdOptions): string {
  if (typeof object === "string") {
    // If obj is a string, generate hash directly from it
    return generateHash({ str: object, algorithm });
  }
  // If obj is an object, generate hash from its JSON representation
  return `${Boolean(prefix) && prefix}-${generateHash({
    str: safeJSON({ object }),
    algorithm,
  })}`;
}

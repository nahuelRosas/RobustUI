import crypto from "crypto";
import { GenerateHashOptions } from "./types";

/**
 * Generates a hash using the specified algorithm from a given string.
 * @param {string} str - The string to generate the hash from.
 * @param {string} algorithm - The hash algorithm to use. Default is "sha512".
 * @returns {string} - The generated hash as a hexadecimal string.
 * @throws {Error} - If an invalid hash algorithm is provided.
 */
export function generateHash({
  str,
  algorithm = "sha512",
}: GenerateHashOptions): string {
  if (!crypto.getHashes().includes(algorithm)) {
    throw new Error(
      `Invalid algorithm: ${algorithm}. Valid algorithms are: ${crypto
        .getHashes()
        .join(", ")}.`
    );
  }
  return crypto.createHash(algorithm).update(str).digest("hex");
}

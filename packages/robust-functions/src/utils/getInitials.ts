/**
 *
 * Returns the initials of a given name.
 * If the name is composed of multiple words, it takes the first letter of each word.
 * If the name is empty, it returns an empty string.
 * @param name - The name to get the initials from.
 * @param maxLength - Optional parameter to specify the maximum number of characters to return. If not provided or if the resulting string is shorter than the specified length, it returns the full initials.
 * @returns The initials of the given name, or an empty string if the name is empty.
 */
export function getInitials({
  name,
  maxLength = 2,
}: {
  name: string;
  maxLength?: number;
}): string {
  if (!name) return "";
  const words = name.trim().split(/\s+/);
  let initials = "";

  for (const word of words) {
    initials += word[0].toUpperCase();
    if (maxLength && initials.length >= maxLength) break;
  }

  return initials;
}

/**
 * Generates a random HSL color based on a given seed string.
 *
 * @param seed The seed string used to generate the color.
 * @returns A random HSL color in the format "hsl(H, S%, L%)", where H is the hue value, S is the saturation value, and L is the lightness value.
 */
export function randomColor({ seed }: { seed?: string } = {}): string {
  // Calculate a hash value from the seed string
  const SEED =
    seed ||
    Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

  const hash = SEED.split("").reduce((acc, char) => {
    const charCode = char.charCodeAt(0);
    return ((acc << 5) - acc + charCode) | 0;
  }, 0);

  // Use the hash value to determine the hue value of the color
  const hue = Math.abs(hash % 360);

  // Return the HSL color string
  return `hsl(${hue}, 100%, 70%)`;
}

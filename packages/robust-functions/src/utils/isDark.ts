/**
 * Determines if a given color is considered "dark" or "light".
 *
 * @param color The color string to check.
 * @returns True if the color is considered "dark", false otherwise.
 * @throws An error if the color string is not in the format "hsl(H, S%, L%)", where H is the hue value, S is the saturation value, and L is the lightness value.
 */
export function isDark({ color }: { color: string }): boolean {
  // Extract the hue, saturation, and lightness values from the color string
  const match = color.match(/\d+/g);
  if (!match) {
    throw new Error("Invalid color format");
  }
  const [hue, saturation, lightness] = match.map((n) => parseInt(n, 10));

  // Convert the HSL color to an RGB color
  const h = hue / 360;
  const s = saturation / 100;
  const l = lightness / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((((h * 360) / 60) % 2) - 1));
  const m = l - c / 2;
  let r, g, b;
  if (h < 1 / 6) {
    [r, g, b] = [c, x, 0];
  } else if (h < 2 / 6) {
    [r, g, b] = [x, c, 0];
  } else if (h < 3 / 6) {
    [r, g, b] = [0, c, x];
  } else if (h < 4 / 6) {
    [r, g, b] = [0, x, c];
  } else if (h < 5 / 6) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }

  // Convert the RGB color to a brightness value
  const rgb = [r, g, b].map((v) => Math.round((v + m) * 255));
  const brightness = (Math.max(...rgb) + Math.min(...rgb)) / 2;

  // Return true if the brightness is less than 128, indicating a "dark" color
  return brightness < 128;
}

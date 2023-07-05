import { CssPropertyMappings, cssGenerators } from "@robust/theme";
/**
 * Retrieves the property value getters based on the component type.
 *
 * @param {Object} options - The options object.
 * @param {string} options.componentType - The component type.
 * @returns {(propValue: string) => string | undefined} The property value getters or undefined.
 */
export function getPropValueGetters({
  componentType,
}: {
  componentType: string;
}): ((propValue: string) => string) | undefined {
  // Initialize variables
  let STRforced = false;

  // Convert componentType to kebab-case and exclude "str" or "string" parts
  const CTString = componentType
    .split(/(?=[A-Z])/)
    .filter((item) => {
      const itemLowerCase = item.toLowerCase();
      if (itemLowerCase === "str" || itemLowerCase === "string") {
        STRforced = true;
      }
      return itemLowerCase !== "str" && itemLowerCase !== "string";
    })
    .join("-")
    .toLowerCase();

  // Check if CssPropertyMappings doesn't have a mapping for the componentType and "str" or "string" is not forced
  if (
    cssGenerators[CTString as keyof typeof cssGenerators] === undefined &&
    cssGenerators[componentType as keyof typeof cssGenerators]
  ) {
    return cssGenerators[componentType as keyof typeof cssGenerators];
  }
  // Check if cssGenerators has a mapping for the CTString
  else if (cssGenerators[CTString as keyof typeof cssGenerators]) {
    return cssGenerators[CTString as keyof typeof cssGenerators];
  } else if (
    CssPropertyMappings[componentType as keyof typeof CssPropertyMappings] ===
      undefined &&
    !STRforced
  ) {
    return undefined;
  }

  // Return a function that formats the property value as a CSS property-value pair
  return (propValue) => {
    return `${CTString} : ${propValue};`;
  };
}

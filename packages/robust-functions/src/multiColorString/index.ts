import { randomColor } from "../randomColor";
import { MultiColorStringProps } from "./types";

export function multiColorString({
  children,
  multiColors,
}: MultiColorStringProps) {
  const isMultiColorsValid = multiColors?.state;

  const MapChildren = [];
  const StringChildren: string[] = [];

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === "string") {
        StringChildren.push(child);
      } else {
        MapChildren.push(child);
      }
    });
  }

  if (isMultiColorsValid) {
    const colorsArray = multiColors.colors || [];
    const sourceChildren =
      StringChildren.length > 0 ? StringChildren : [children];
    MapChildren.push(
      sourceChildren
        .map((child) => {
          if (child && typeof child === "string")
            return child
              .split(multiColors.selectorMultiColors)
              .filter((text) => text.trim().length > 0)
              .map((text, index) => {
                const colorIndex = index % colorsArray.length;
                const colorKey = colorsArray[colorIndex] || undefined;
                const colorStr = multiColors.colorsRandom
                  ? randomColor({ seed: text })
                  : undefined;
                return { text, colorKey,  colorStr };
              });
        })
        .flat()
    );
  } else if (StringChildren.length > 0 && !isMultiColorsValid) {
    MapChildren.push(StringChildren);
  } else {
    MapChildren.push(children);
  }

  return MapChildren;
}

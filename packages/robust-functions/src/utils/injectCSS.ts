import { defaultTheme } from "@robust/theme";
import { InjectCSST } from "@robust/functions";
import {
  createCSSRule,
  createStyleSheet,
  cssPropertyMappings,
  getPropValueGetters,
  getPropValueWithBreakpoint,
} from "@robust/functions";

const UNDEFINED_STR = "undefined";
const OBJECT_STR = "object";

export function InjectCSS({
  classSelector,
  componentProps,
  breakPoint,
  theme = defaultTheme,
}: InjectCSST): void {
  if (typeof document === UNDEFINED_STR) {
    return;
  }
  const generatedStyles: string[] = [];
  const keyFrames: string[] = [];
  const before: string[] = [];
  const after: string[] = [];
  const hover: string[] = [];

  Object.keys(componentProps).forEach((prop) => {
    const propValue = componentProps[prop];
    if (prop === "keyframes") {
      let result = "";
      Object.entries(propValue as object).forEach(([key, value]) => {
        result += `@keyframes ${key} {`;
        Object.entries(value).forEach(([subKey, subValue]) => {
          result += `\n\t${subKey} {`;
          Object.entries(subValue as object).forEach(([prop, propValue]) => {
            const cssProperty =
              cssPropertyMappings[prop as keyof typeof cssPropertyMappings];
            const mapProperty = theme[cssProperty as keyof typeof theme];
            if (mapProperty !== undefined) {
              propValue = mapProperty[propValue as keyof typeof mapProperty];
            }
            const CTString = prop
              .split(/(?=[A-Z])/)
              .filter((item) => {
                const itemLowerCase = item.toLowerCase();
                return itemLowerCase !== "str" && itemLowerCase !== "string";
              })
              .join("-")
              .toLowerCase();

            result += `\n\t\t${CTString}: ${propValue};`;
          });
          result += "\n\t}";
        });
        result += "\n}\n";
      });
      keyFrames.push(result);
      return;
    } else if (prop === "after") {
      Object.keys(propValue as object).forEach((afterProp) => {
        const afterPropValue = (propValue as object)[afterProp];
        const afterPropFunction = getPropValueGetters({
          componentType: afterProp,
        });

        if (afterPropFunction === undefined) {
          return;
        }

        const cssProperty =
          cssPropertyMappings[afterProp as keyof typeof cssPropertyMappings];
        const mapProperty = theme[cssProperty as keyof typeof theme];

        if (typeof afterPropValue === "string") {
          let value = afterPropValue;
          if (mapProperty !== undefined) {
            value = mapProperty[afterPropValue as keyof typeof mapProperty];
          }
          const propValueWithBreakpoint = getPropValueWithBreakpoint({
            propValue: value as string,
            breakPoint,
          });

          after.push(afterPropFunction(propValueWithBreakpoint as string));
        } else if (typeof afterPropValue === OBJECT_STR) {
          const propValueWithBreakpoint = getPropValueWithBreakpoint({
            propValue: afterPropValue as string,
            breakPoint,
          });
          let value = propValueWithBreakpoint;
          if (mapProperty !== undefined) {
            value =
              mapProperty[propValueWithBreakpoint as keyof typeof mapProperty];
          }
          after.push(afterPropFunction(value as string));
        }
      });
      return;
    } else if (prop === "before") {
      Object.keys(propValue as object).forEach((beforeProp) => {
        const beforePropValue = (propValue as object)[beforeProp];
        const beforePropFunction = getPropValueGetters({
          componentType: beforeProp,
        });

        if (beforePropFunction === undefined) {
          return;
        }

        const cssProperty =
          cssPropertyMappings[beforeProp as keyof typeof cssPropertyMappings];
        const mapProperty = theme[cssProperty as keyof typeof theme];

        if (typeof beforePropValue === "string") {
          let value = beforePropValue;
          if (mapProperty !== undefined) {
            value = mapProperty[beforePropValue as keyof typeof mapProperty];
          }
          const propValueWithBreakpoint = getPropValueWithBreakpoint({
            propValue: value as string,
            breakPoint,
          });

          before.push(beforePropFunction(propValueWithBreakpoint as string));
        } else if (typeof beforePropValue === OBJECT_STR) {
          const propValueWithBreakpoint = getPropValueWithBreakpoint({
            propValue: beforePropValue as string,
            breakPoint,
          });
          let value = propValueWithBreakpoint;
          if (mapProperty !== undefined) {
            value =
              mapProperty[propValueWithBreakpoint as keyof typeof mapProperty];
          }
          before.push(beforePropFunction(value as string));
        }
      });
      return;
    } else if (prop === "hover") {
      Object.keys(propValue as object).forEach((hoverProp) => {
        const hoverPropValue = (propValue as object)[hoverProp];
        const hoverPropFunction = getPropValueGetters({
          componentType: hoverProp,
        });

        if (hoverPropFunction === undefined) {
          return;
        }

        const cssProperty =
          cssPropertyMappings[hoverProp as keyof typeof cssPropertyMappings];
        const mapProperty = theme[cssProperty as keyof typeof theme];

        if (typeof hoverPropValue === "string") {
          let value = hoverPropValue;
          if (mapProperty !== undefined) {
            value = mapProperty[hoverPropValue as keyof typeof mapProperty];
          }
          const propValueWithBreakpoint = getPropValueWithBreakpoint({
            propValue: value as string,
            breakPoint,
          });

          hover.push(hoverPropFunction(propValueWithBreakpoint as string));
        } else if (typeof hoverPropValue === OBJECT_STR) {
          const propValueWithBreakpoint = getPropValueWithBreakpoint({
            propValue: hoverPropValue as string,
            breakPoint,
          });
          let value = propValueWithBreakpoint;
          if (mapProperty !== undefined) {
            value =
              mapProperty[propValueWithBreakpoint as keyof typeof mapProperty];
          }
          hover.push(hoverPropFunction(value as string));
        }
      });
      return;
    }

    if (typeof propValue === UNDEFINED_STR) {
      return;
    }

    const propFunction = getPropValueGetters({
      componentType: prop,
    });

    if (propFunction === undefined) {
      return;
    }

    const cssProperty =
      cssPropertyMappings[prop as keyof typeof cssPropertyMappings];
    const mapProperty = theme[cssProperty as keyof typeof theme];

    if (typeof propValue === "string") {
      let value = propValue;
      if (mapProperty !== undefined) {
        value = mapProperty[propValue as keyof typeof mapProperty];
      }
      const propValueWithBreakpoint = getPropValueWithBreakpoint({
        propValue: value as string,
        breakPoint,
      });

      generatedStyles.push(propFunction(propValueWithBreakpoint as string));
    } else if (typeof propValue === OBJECT_STR) {
      const propValueWithBreakpoint = getPropValueWithBreakpoint({
        propValue: propValue as string,
        breakPoint,
      });
      let value = propValueWithBreakpoint;
      if (mapProperty !== undefined) {
        value =
          mapProperty[propValueWithBreakpoint as keyof typeof mapProperty];
      }

      generatedStyles.push(propFunction(value as string));
    }
  });

  const generatedStylesheet = createStyleSheet({ rules: generatedStyles });
  const cssBase = createCSSRule({
    selector: classSelector,
    styles: generatedStylesheet,
  });

  const cssAfter =
    after.length > 0
      ? createCSSRule({
          selector: classSelector.concat(":after"),
          styles: createStyleSheet({ rules: after }),
        })
      : "";

  const cssBefore =
    before.length > 0
      ? createCSSRule({
          selector: classSelector.concat(":before"),
          styles: createStyleSheet({ rules: before }),
        })
      : "";

  const cssHover =
    hover.length > 0
      ? createCSSRule({
          selector: classSelector.concat(":hover"),
          styles: createStyleSheet({ rules: hover }),
        })
      : "";

  const completedStyle = [
    cssBase,
    cssHover,
    cssAfter,
    cssBefore,
    keyFrames.join(""),
  ].join("\n");

  const Robustocument = document.getElementById(`Robust-css`);

  if (!Robustocument) {
    const style = document.createElement("style");
    style.id = `Robust-css`;
    style.innerHTML = completedStyle;
    document.head.appendChild(style);
  }
  if (Robustocument && !Robustocument.innerHTML.includes(completedStyle)) {
    Robustocument.innerHTML += completedStyle;
  }
}

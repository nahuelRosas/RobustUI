import { CleanCSSSelectorsOptions } from "./types";

export function cleanCSSSelectors({ css }: CleanCSSSelectorsOptions): string {
  let updatedCSS: string = css;
  const elements = document.querySelectorAll("*");

  elements?.forEach((element) => {
    if (element.className && typeof element.className === "string") {
      const elementClassNames = element.className?.split(" ");
      elementClassNames.forEach((className) => {
        const selectorRegexString = `${className.trim()}{[^}]*};`.toString();
        const selectorRegex = new RegExp(selectorRegexString, "ism");
        updatedCSS = css.replace(selectorRegex, ``);
      });
    } else if (element.className && typeof element.className === "object") {
      const elementClassNames: {
        baseVal: string;
      } = element.className;
      elementClassNames.baseVal.split(" ").forEach((className) => {
        const selectorRegexString = `${className.trim()}{[^}]*};`.toString();
        const selectorRegex = new RegExp(selectorRegexString, "ism");
        updatedCSS = css.replace(selectorRegex, ``);
      });
    }
  });

  return updatedCSS;
}

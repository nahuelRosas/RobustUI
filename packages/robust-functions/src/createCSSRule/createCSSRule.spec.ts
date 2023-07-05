import { createCSSRule } from "./";
import { RuleData } from "./types";

describe("createCSSRule", () => {
  it("should create a CSS rule with selector and styles", () => {
    const ruleData = {
      selector: "my-selector",
      styles: "color: red;",
    };

    const cssRule = createCSSRule(ruleData);

    expect(cssRule).toEqual(".my-selector {\ncolor: red;\n}");
  });

  it("should throw an error if selector is missing", () => {
    const ruleData = {
      styles: "color: red;",
    };

    expect(() => createCSSRule(ruleData as RuleData)).toThrow(
      "Selector is required"
    );
  });

  it("should throw an error if styles are missing", () => {
    const ruleData = {
      selector: "my-selector",
    };

    expect(() => createCSSRule(ruleData as RuleData)).toThrow(
      "Styles are required"
    );
  });
});

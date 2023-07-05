import { createStyleSheet } from "./";
import { StyleSheetData } from "./types";

describe("createStyleSheet", () => {
  it("should create a stylesheet string from an array of CSS rules", () => {
    const styleSheetData = {
      rules: ["body {", "  color: red;", "}"],
    };

    const styleSheet = createStyleSheet(styleSheetData);

    expect(styleSheet).toBe("body {\n  color: red;\n}");
  });

  it("should throw an error if rules are missing", () => {
    const styleSheetData = {};

    expect(() => createStyleSheet(styleSheetData as StyleSheetData)).toThrow(
      "Rules are required"
    );
  });
});

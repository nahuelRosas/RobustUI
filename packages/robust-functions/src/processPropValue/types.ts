// Defines the possible values for a CSS property, which can be either a string or an object with string values
export type CSSPropValue = string | Record<string, string>;

// Defines the structure of the CSS properties object, including base styles, pseudo-classes, pseudo-elements, and at-rules
export type CSSProperties = {
  base: string[]; // Array of base styles
  pseudoClasses: Record<string, string[]>; // Object mapping pseudo-class names to arrays of styles
  pseudoElements: Record<string, string[]>; // Object mapping pseudo-element names to arrays of styles
  atRules: Record<string, string[]>; // Object mapping at-rule names to arrays of styles
};

// Defines the options for processing all props value in CSS properties
export type ProcessPropValue = {
  prop: string; // The property to process pseudo-classes for
  propValue: CSSPropValue; // The value of the property, which may contain pseudo-classes
  breakPoint: string; // The breakpoint value
  CSS: CSSProperties; // The CSS object to update
};

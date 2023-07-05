/**
 * The above type defines an object with a selector and styles property for CSS rules.
 * @property {string} selector - The selector is a string that specifies which HTML element(s) the rule
 * should apply to. It can be a tag name, class name, ID, or a combination of these. For example,
 * ".my-class" would select all elements with the class "my-class".
 * @property {string} styles - The `styles` property in the `RuleData` type represents the CSS styles
 * that should be applied to the elements selected by the `selector` property. It is a string that
 * contains one or more CSS declarations separated by semicolons. For example, `color: red; font-size:
 */
export type RuleData = {
  selector: string;
  styles: string;
};

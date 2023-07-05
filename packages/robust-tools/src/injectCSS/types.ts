/**
 * Represents the theme object.
 */
export interface Theme {
  [key: string]: unknown;
}

/**
 * Represents the property-value pairs object.
 */
export interface PropValue {
  [key: string]: string | Record<string, string>;
}

/**
 * Represents the pseudo selectors object.
 */
export interface PseudoSelectors {
  base: string[];
  before: string[];
  after: string[];
  hover: string[];
  keyframes: string[];
}

/**
 * Represents the options for injecting CSS.
 */
export type InjectCSSTOptions = {
  classSelector: string;
  componentProps: Record<string, string> | string;
  breakPoint: string;
};

export type CSSObject = {
  base: string[];
  pseudoClasses: Record<string, string[]>;
  pseudoElements: Record<string, string[]>;
  atRules: Record<string, string[]>;
};

export type GenerateCSSCodeOptions = {
  CSS: CSSObject;
  selector: string;
};

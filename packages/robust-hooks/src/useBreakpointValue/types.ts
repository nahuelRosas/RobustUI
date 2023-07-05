export type breakPoints = Record<string, number>;

export type useBreakPointValue<T> = {
  values: Record<string, T>;
  options?: {
    breakpoints?: breakPoints;
    fallback?: T;
  };
};

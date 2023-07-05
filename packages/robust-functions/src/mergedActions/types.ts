export type OnFunction = (() => void) | undefined;

export interface MergedActionParams {
  existingOnAction: OnFunction;
  newOnAction: OnFunction;
}

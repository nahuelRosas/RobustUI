import { MergedActionParams } from "./types";

export function mergedActions({
  existingOnAction,
  newOnAction,
}: MergedActionParams): void {
  if (existingOnAction) {
    existingOnAction();
  }
  if (newOnAction) {
    newOnAction();
  }
}

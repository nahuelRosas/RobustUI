import { Children, ReactElement, ReactNode } from "react";
import { cloneElementWithFunction } from "../cloneElementWithFunction";
import { MergedActionParams } from "./types";

export function mapNestedChildren({ children, onAction }: MergedActionParams) {
  return (
    Children.map(children, (nestedChild: React.ReactNode) =>
      cloneElementWithFunction({
        child: nestedChild as ReactElement,
        onAction,
      })
    ) || []
  );
}

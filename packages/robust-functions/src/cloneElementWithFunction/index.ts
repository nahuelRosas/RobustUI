import { cloneElement, ReactElement, HTMLAttributes } from "react";
import { mergedActions } from "../mergedActions";
import { CloneElementWithFunctionProps, OnFunction } from "./types";

export function cloneElementWithFunction({
  child,
  onAction,
}: CloneElementWithFunctionProps) {
  let clonedChild;

  Object.entries(onAction).forEach(([key, value]) => {
    if (child.props[key]) {
      const newOnAction = value;
      const existingOnAction: OnFunction = child.props[key];
      const newProps: HTMLAttributes<HTMLElement> = {
        [key]: () => mergedActions({ existingOnAction, newOnAction }),
      };
      clonedChild = cloneElement(child, newProps);
    } else {
      const newProps: HTMLAttributes<HTMLElement> = {
        [key]: () => value(),
      };
      clonedChild = cloneElement(child, newProps);
    }
  });

  return clonedChild as unknown as ReactElement;
}

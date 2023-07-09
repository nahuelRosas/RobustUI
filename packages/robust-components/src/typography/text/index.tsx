import { DynamicStyles } from "@robust/constructor";
import React from "react";
import { TextProps } from "./types";

const Component = DynamicStyles({
  Component: "p",
});

export function Text({
  children,
  ref,
  selectorMultiColors,
  colors,
  colorsRandom,
  ...props
}: TextProps) {
  return (
    <Component
      fontSize="1rem"
      componentName="Text"
      fontStyle="normal"
      lineHeight="normal"
      padding="1rem"
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
}

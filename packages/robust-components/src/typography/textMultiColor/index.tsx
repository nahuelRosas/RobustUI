import React, { isValidElement } from "react";
import { DynamicStyles } from "@robust/constructor";
import { multiColorString } from "@robust/functions";
import { Span } from "../span";
import { TextMultiColorProps } from "./types";

const Component = DynamicStyles({
  Component: "div",
});

export function TextMultiColor({
  children,
  ref,
  selectorMultiColors,
  colors,
  colorsRandom,
  ...props
}: TextMultiColorProps) {
  const processedChildren = multiColorString({
    children,
    multiColors: {
      selectorMultiColors,
      colors,
      colorsRandom,
      state: true,
    },
  }).map((child) => {
    if (Array.isArray(child)) {
      return child.map((child, index) => {
        if (isValidElement(child)) {
          return child;
        }
        if (child)
          return (
            <Span
              key={index}
              color={child.colorKey}
              colorStr={child.colorStr}
              componentName="SpanMultiColor"
              fontSize="inherit"
              fontStyle="inherit"
              fontWeight="inherit"
              lineHeight="inherit"
            >
              {child.text}
            </Span>
          );
      });
    }
    return child;
  });

  return (
    <Component
      fontSize="1rem"
      componentName="TextMultiColor"
      fontStyle="normal"
      lineHeight="normal"
      padding="1rem"
      ref={ref}
      {...props}
    >
      {processedChildren}
    </Component>
  );
}

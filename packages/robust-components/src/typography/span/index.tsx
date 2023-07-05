import React from "react";
import { DynamicStyles } from "@robust/constructor";
import { SpanProps } from "./types";

const Component = DynamicStyles({
  Component: "span",
});

export function Span({ children, ref, ...props }: SpanProps) {
  return (
    <Component
      componentName="Span"
      fontSize="1rem"
      fontStyle="normal"
      fontWeight={700}
      lineHeight="normal"
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
}

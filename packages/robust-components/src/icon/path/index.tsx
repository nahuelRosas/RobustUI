import { DynamicStyles } from "@robust/constructor";
import { PathProps } from "./types";
import React from "react";

const ComponentPath = DynamicStyles({
  Component: "path",
});

export function Path({
  children,
  stroke,
  fill,
  strokeLinecap,
  d,
  ...props
}: PathProps) {
  return (
    <ComponentPath
      componentName="Path-SVG"
      stroke={stroke}
      fill={fill}
      d={d}
      strokeLinecap={strokeLinecap}
      {...props}
    >
      {children}
    </ComponentPath>
  );
}

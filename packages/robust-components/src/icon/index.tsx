import React from "react";
import { DynamicStyles } from "@robust/constructor";
import { IconProps } from "./types";
import { icons } from "./icons";

const Component = DynamicStyles({
  Component: "svg",
});

export function Icon({
  children,
  ref,
  focusable,
  viewBox,
  unit,
  type,
  size = "1.5rem",
  ...props
}: IconProps): React.JSX.Element {
  const _children =
    children ??
    (type &&
      icons[type as keyof typeof icons] &&
      icons[type as keyof typeof icons].path) ??
    icons.fallbackIcon.path;

  return (
    <Component
      display={focusable ? "inlineBlock" : "inlineFlex"}
      componentName="Icon-SVG"
      padding="1rem"
      cursor="pointer"
      flexShrink={0}
      lineHeight="1rem"
      ref={ref}
      focusable={focusable}
      viewBox={
        (type && icons[type as keyof typeof icons].viewBox) ||
        viewBox ||
        "0 0 24 24"
      }
      width={size}
      height={size}
      {...props}
    >
      {_children}
    </Component>
  );
}

import { DynamicStyles } from "@robust/constructor";
import React from "react";
import { FlexProps } from "./types";

const Component = DynamicStyles({
  Component: "div",
});

export function Flex({ children, ...props }: FlexProps): JSX.Element {
  return (
    <Component
      componentName="Flex"
      display="flex"
      flexDirection="row"
      justifyContent="flexStart"
      alignItems="center"
      {...props}
    >
      {children}
    </Component>
  );
}

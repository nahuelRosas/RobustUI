import React from "react";
import { DynamicStyles } from "@robust/constructor";
import { HeaderProps } from "./types";

const Component = DynamicStyles({
  Component: "header",
});

export function Header({ children, ref, ...props }: HeaderProps) {
  return (
    <Component
      display="flex"
      alignItems="flexEnd"
      justifyContent="spaceBetween"
      padding="1rem"
      componentName="Header"
      height="fitContent"
      width="initial"
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
}

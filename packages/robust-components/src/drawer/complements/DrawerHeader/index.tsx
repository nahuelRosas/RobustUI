import { Span } from "@/typography";
import React from "react";
import { DrawerHeaderProps } from "./types";

export function DrawerHeader({ children, ...props }: DrawerHeaderProps) {
  return (
    <Span
      componentName="DrawerHeader"
      fontSize="2rem"
      alignSelf="center"
      display="flex"
      justifyContent="center"
      alignItems="center"
      optimizedWidth 
      
      {...props}>
      {children}
    </Span>
  );
}

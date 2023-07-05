import React from "react";

import { BasePropsT, DynamicStyles } from "constructor";

const Component = DynamicStyles({
  Component: "p",
});

export function Text({ children, ...props }: BasePropsT): JSX.Element {
  return (
    <Component
      componentName="Text"
      display="inlineBlock"
      position="static"
      // color="black"
      // fontSize="initial"
      // fontWeight="normal"
      // lineHeight="normal"
      // textAlign="left"
      // textDecoration="none"
      // textTransform="none"
      // textOverflow="ellipsis"
      // whiteSpace="normal"
      // userSelect="none"
      {...props}
    >
      {children}
    </Component>
  );
}

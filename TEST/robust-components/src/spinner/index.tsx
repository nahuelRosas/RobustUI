import React from "react";
import { SpinnerT } from "../types";
import { Block, Flex } from "../layout";
import { models } from "./models";

export function Spinner({
  size = "5rem",
  children,
  color = "blue400",
  altColor = "gray900",
  model = "C",
  ...props
}: SpinnerT) {
  const modelSelected = models({
    color,
    altColor,
    model,
  });
  return (
    <Flex
      componentName="Wrap"
      backgroundColor="transparent"
      justifyContent="center"
      alignItems="center"
      width={size}
      height={size}
    >
      <Block
        componentName="Spinner"
        width="-webkit-fill-available"
        height="-webkit-fill-available"
        color={color}
        {...modelSelected}
        {...props}
      >
        {children}
      </Block>
    </Flex>
  );
}

import { Flex } from "@/layout";
import React from "react";
import { DrawerBodyProps } from "./types";

export function DrawerBody({ children, ...props }: DrawerBodyProps) {
  return (
    <Flex
      componentName="DrawerBody"
      fontSize="2rem"
      alignSelf="flexStart"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flexStart"
      optimizedWidth
      optimizedHeight
      {...props}
    >
      {children}
    </Flex>
  );
}

import { Flex } from "@/layout";
import React from "react";
import { DrawerFooterProps } from "./types";

export function DrawerFooter({ children, ...props }: DrawerFooterProps) {
  return (
    <Flex
      componentName="DrawerFooter"
      fontSize="2rem"
      alignSelf="center"
      justifyContent="center"
      display="flex"
      flexDirection="row"
      optimizedWidth
      mt="auto"
      {...props}
    >
      {children}
    </Flex>
  );
}

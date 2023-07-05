import React from "react";
import { Icon } from "@/icon";
import { DrawerCloseButtonProps } from "./types";

export function DrawerCloseButton({
  children,
  onClose,
  ...props
}: DrawerCloseButtonProps) {
  return (
    <Icon
      componentName="DrawerCloseButton"
      type="close"
      onClick={onClose}
      alignSelf="flexEnd"
      position="fixed"
      top="1.25rem"
      right="1rem"
      {...props}
    >
      {children}
    </Icon>
  );
}

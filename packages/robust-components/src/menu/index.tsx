/**
 * The Menu component is a dynamic menu that can be toggled open and closed, and it renders a list of
 * children components.
 * @param {MenuProps}  - - `children`: The content to be displayed inside the menu.
 * @returns The `Menu` component is being returned.
 */
import React, { useState, useEffect } from "react";
import { DynamicStyles } from "@robust/constructor";
import { processChildren } from "@robust/functions";
import { MenuProps } from "./types";

import { Text } from "@/typography";
import { Flex, Icon } from "..";

const MenuComponent = DynamicStyles({
  Component: "menu",
});

export function Menu({
  children,
  ref,
  open,
  onClose,
  icon,
  iconType,
  title,
  buttonPersistence,
  ...props
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(open || false);

  useEffect(() => {
    setIsOpen(open || false);
  }, [open]);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const clonedChildren = processChildren({
    children,
    passAction: true,
    onAction: {
      onClick: () => {
        setIsOpen(false);
        onClose && onClose();
      },
    },
  });

  const shouldDisplay = buttonPersistence || !isOpen ? "flex" : "none";

  return (
    <>
      {(icon || title) && (
        <Flex
          display={shouldDisplay}
          onClick={handleToggleMenu}
          flexDirection="row"
          {...props}>
          {title && (
            <Text
              pr={0}
              fontWeight="inherit"
              fontSize="2rem"
              multiLanguage={typeof title === "object" ? title : undefined}>
              {typeof title === "string" && title}
            </Text>
          )}
          {iconType && <Icon pl={0} type={iconType || "expandMore"} />}
          {icon && (
            <Flex display="inlineFlex" pl={0} alignItems="center">
              {icon}
            </Flex>
          )}
        </Flex>
      )}
      {!title && !icon && (
        <Flex
          display={shouldDisplay}
          onClick={handleToggleMenu}
          flexDirection="row"
          {...props}>
          <Text fontSize="2rem" pr={0} fontWeight="inherit">
            Menu
          </Text>
          <Icon pl={0} type="expandMore" />
        </Flex>
      )}
      <MenuComponent
        componentName="Menu"
        optimizedWidth
        gap="1rem"
        flexDirection="column"
        display={isOpen ? "flex" : "none"}
        ref={ref}
        {...props}>
        {clonedChildren}
      </MenuComponent>
    </>
  );
}

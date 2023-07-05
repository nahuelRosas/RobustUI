import React, { useState, useCallback } from "react";
import { DynamicStyles } from "@robust/constructor";
import { LinkProps } from "./types";
import { isInternalURL, handleMouseEnterLink } from "@robust/functions";

const Component = DynamicStyles({
  Component: "a",
});

export function Link({
  children,
  ref,
  href,
  replace = true,
  prefetch = true,
  checkActive = "pathname",
  openNewTab = false,
  passHref,
  onClick,
  target,
  ...props
}: LinkProps): React.JSX.Element {
  const [hasPrefetched, setHasPrefetched] = useState(false);

  const handleClick = useCallback(
    function (event: React.MouseEvent<HTMLElement>): void {
      event.preventDefault();
      if (onClick) {
        onClick(event as React.MouseEvent<HTMLElement>);
      }

      if (target) {
        window.open(href as URL, target);
      }

      if (
        (isInternalURL({ url: href as string }) ||
          (process.env["NODE_ENV"] !== "development" && href)) &&
        !openNewTab
      ) {
        window.history[replace ? "replaceState" : "pushState"](null, "", href);
      } else {
        window.open(href as URL, "_blank");
      }
    },
    [href, onClick, openNewTab, replace, target]
  );

  function cloneElementWithHref({
    child,
  }: {
    child: React.ReactElement;
  }): React.ReactElement {
    return React.cloneElement(child, { href });
  }

  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && passHref) {
      return cloneElementWithHref({ child });
    }
    return child;
  });

  return (
    <Component
      componentName="Link"
      ref={ref}
      display="flex"
      flexDirection="row"
      alignItems="center"
      textDecoration="none"
      color="currentColor"
      href={!passHref && href}
      onClick={handleClick}
      onMouseEnter={() =>
        handleMouseEnterLink({
          prefetch,
          hasPrefetched,
          href: href as string,
          setHasPrefetched,
        })
      }
      optimizedWidth
      
      {...props}>
      {clonedChildren}
    </Component>
  );
}

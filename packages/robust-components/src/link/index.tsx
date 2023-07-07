import React from "react";
import { DynamicStyles } from "@robust/constructor";
import { RecoveryFramework } from "@robust/tools";
import { LinkProps } from "./types";
import NextLink from "next/link";

const Component = DynamicStyles({
  Component: "a",
});

export function Link({
  children,
  ref,
  ...props
}: LinkProps): React.JSX.Element {
  const framework = RecoveryFramework();

  return (
    <Component
      as={framework === "Next.js" ? NextLink : "a"}
      componentName={framework === "Next.js" ? "NextLink" : "Link"}
      ref={ref}
      display="flex"
      flexDirection="row"
      alignItems="center"
      textDecoration="none"
      color="currentColor"
      optimizedWidth
      {...props}>
      {children}
    </Component>
  );
}

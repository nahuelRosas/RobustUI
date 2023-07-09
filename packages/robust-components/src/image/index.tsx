import { Flex } from "@/layout";
import { DynamicStyles } from "@robust/constructor";
import React from "react";
import { ImageProps } from "./types";
import { useImage } from "@robust/hooks";
import { Icon, Spinner } from "..";

const Component = DynamicStyles({
  Component: "img",
});

export function Image({
  src,
  alt,
  isLoading,
  size = "10rem",
  ...props
}: ImageProps): React.JSX.Element {
  const status = useImage({ src: src as string });
  return (
    <Flex
      padding="1.25rem"
      mx={"auto"}
      width={"auto"}
      height={size}
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      {...props}>
      {(isLoading || status === "loading" || status === "pending") && (
        <Spinner model="A" />
      )}
      {status === "loaded" && (
        <Component
          src={status === "loaded" && src}
          componentName="Image"
          width="inherit"
          height="inherit"
          objectFit="cover"
          objectPosition="center"
          alt={alt || "Image"}
        />
      )}
      {status === "failed" && (
        <Icon height={size} width={size} type="error" color={"red"} />
      )}
    </Flex>
  );
}

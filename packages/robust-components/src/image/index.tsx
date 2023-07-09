import { Flex } from "@/layout";
import { DynamicStyles } from "@robust/constructor";
import React from "react";
import { ImageProps } from "./types";
import { useImage } from "@robust/hooks";
import { Icon, Spinner } from "..";
import { defaultTheme } from "@robust/theme";

const Component = DynamicStyles({
  Component: "img",
});

export function Image({
  src,
  alt,
  isLoading,
  size = "10rem",
  ratio = "auto",
  isRounded,
  ...props
}: ImageProps): React.JSX.Element {
  const status = useImage({ src: src as string });

  let adjustedSize: {
    adjustedHeight?: keyof typeof defaultTheme.sizes | string;
    adjustedWidth?: keyof typeof defaultTheme.sizes | string;
  } = {
    adjustedHeight: size,
    adjustedWidth: size,
  };
  let adjustedRatio = ratio;

  const [width, height] = adjustedRatio.split(":").map(Number);

  if (width && height) {
    if (width > height) {
      const adjustedHeight =
        (Number(String(size).replace("rem", "")) * height) / width;
      adjustedSize = {
        adjustedHeight: `${adjustedHeight}rem`,
        adjustedWidth: size,
      };
    } else if (width < height) {
      const adjustedWidth =
        (Number(String(size).replace("rem", "")) * width) / height;
      adjustedSize = {
        adjustedWidth: `${adjustedWidth}rem`,
        adjustedHeight: size,
      };
    }
  }

  return (
    <Flex
      padding="1.25rem"
      mx="auto"
      widthStr={ratio !== "auto" ? adjustedSize.adjustedWidth : undefined}
      heightStr={ratio !== "auto" ? adjustedSize.adjustedHeight : size}
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
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center"
          alt={alt || "Image"}
        />
      )}
      {status === "failed" && (
        <Icon height={size} width={size} type="error" color="red" />
      )}
    </Flex>
  );
}

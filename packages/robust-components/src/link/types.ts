import { BaseProps } from "@/types";
import { LinkProps as NextLinkProps } from "next/link";
import { Ref } from "react";
/**
 * Props for the Link component.
 */

export type LinkProps = BaseProps &
  Omit<BaseProps, keyof NextLinkProps> &
  NextLinkProps & {
    ref?: Ref<unknown> | undefined;
  };

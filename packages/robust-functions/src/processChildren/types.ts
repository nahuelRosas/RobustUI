import { HTMLAttributes, ReactElement } from "react";

export type OnFunction = () => void | undefined;

export interface ProcessChildrenProps {
  children: React.ReactNode;
  passAction: boolean;
  onAction: Record<string, OnFunction>;
  subChildren?: boolean;
  parent?: string;
}

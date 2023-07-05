import { ReactElement } from "react";

export type OnFunction = () => void;

export interface CloneElementWithFunctionProps {
  child: ReactElement;
  onAction: Record<string, OnFunction>;
}

import { BaseProps } from "@/types";

export interface DrawerProps extends BaseProps {
  open?: boolean;
  onClose?: () => void;
  placement?: "left" | "right" | "top" | "bottom";
  size?: "base" | "sm" | "md" | "lg" | "xl" | "full";
  passClose?: boolean;
}

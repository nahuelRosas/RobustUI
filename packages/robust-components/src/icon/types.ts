import { BaseProps } from "@/types";
import { icons } from "./icons";
import { defaultTheme } from "@robust/theme";

export type IconType = keyof typeof icons;

export interface IconProps extends BaseProps {
  focusable?: boolean;
  viewBox?: string;
  unit?: string;
  type?: IconType;
  size?: keyof typeof defaultTheme.sizes;
}

import { BaseProps } from "@/types";
import { defaultTheme } from "@robust/theme";

export interface ImageProps extends BaseProps {
  src: URL | string;
  alt: string;
  size?: keyof typeof defaultTheme.sizes;
  isLoading?: boolean;
  ratio?: string;
  isRounded?: boolean;
}

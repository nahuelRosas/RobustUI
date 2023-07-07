import { BaseProps } from "@/types";
import { defaultTheme } from "@robust/theme";

export interface TextMultiColorProps extends BaseProps {
  selectorMultiColors: string;
  colors?: Partial<keyof typeof defaultTheme.colors>[];
  colorsRandom?: boolean;
}

import { defaultTheme } from "@robust/theme";

export interface MultiColorStringProps {
  children: React.ReactNode;
  multiColors?: {
    state: boolean;
    selectorMultiColors: string;
    colors?: Partial<keyof typeof defaultTheme.colors>[];
    colorsRandom?: boolean;
  };
}

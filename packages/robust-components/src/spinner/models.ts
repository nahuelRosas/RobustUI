import { defaultTheme } from "@robust/theme";
import { SpinnerModelProps } from "./types";

export function models({ color, altColor, model }: SpinnerModelProps) {
  const basics: {
    [key: string]: {
      borderButtomColor?: keyof (typeof defaultTheme)["colors"];
      display?: keyof (typeof defaultTheme)["display"];
      boxSizing?: keyof (typeof defaultTheme)["boxSizing"];
      [key: string]: unknown;
    };
  } = {
    A: {
      border: "5px solid",
      borderBottomColor: altColor,
      borderRadiusStr: "50%",
      display: "inlineBlock",
      boxSizing: "borderBox",
      animation: "ModelAA 1s linear infinite",
      keyframes: {
        ModelAA: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
    B: {
      borderRadiusStr: "50%",
      position: "relative",
      animation: "ModelBA 1s linear infinite",
      before: {
        content: '""',
        boxSizing: "borderBox",
        position: "absolute",
        inset: "0px",
        borderRadiusStr: "50%",
        border: "5px solid",
        animation: "ModelBB 2s linear infinite",
      },
      after: {
        content: '""',
        boxSizing: "borderBox",
        position: "absolute",
        borderRadiusStr: "50%",
        border: "5px solid",
        animation: "ModelBB 2s linear infinite",
        inset: "8px",
        transform: "rotate3d(90, 90, 0, 180deg)",
        borderColor: altColor,
      },
      keyframes: {
        ModelBA: {
          "0%": { transform: "rotate(0deg)" },
          "100% ": { transform: "rotate(360deg)" },
        },
        ModelBB: {
          "0%": { clipPath: "polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)" },
          "50%": {
            clipPath: "polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)",
          },
          "75%": {
            clipPath:
              "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)",
          },
          "100%": {
            clipPath:
              "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)",
          },
        },
      },
    },
    C: {
      borderRadiusStr: "50%",
      display: "inlineBlock",
      position: "relative",
      border: "5px solid",
      borderColorStr: `${
        defaultTheme["colors"][color as keyof (typeof defaultTheme)["colors"]]
      } ${
        defaultTheme["colors"][color as keyof (typeof defaultTheme)["colors"]]
      } transparent transparent`,
      boxSizing: "borderBox",
      animation: "rotation 1s linear infinite",
      after: {
        content: '""',
        boxSizing: "borderBox",
        position: "absolute",
        inset: "3px",
        margin: "auto",
        border: "5px solid",
        borderColorStr: `transparent transparent ${
          defaultTheme["colors"][color as keyof (typeof defaultTheme)["colors"]]
        } ${
          defaultTheme["colors"][color as keyof (typeof defaultTheme)["colors"]]
        }`,
        borderRadiusStr: "50%",
        animation: "rotationBack 0.5s linear infinite",
        transformOrigin: "center center",
      },
      before: {
        content: '""',
        boxSizing: "borderBox",
        position: "absolute",
        margin: "auto",
        inset: "9px",
        border: "5px solid",
        borderRadiusStr: "50%",
        transformOrigin: "center center",
        borderColorStr: `${
          defaultTheme["colors"][color as keyof (typeof defaultTheme)["colors"]]
        } ${
          defaultTheme["colors"][color as keyof (typeof defaultTheme)["colors"]]
        } transparent transparent`,
        animation: "rotation 1.5s linear infinite",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotationBack: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  };

  return basics[model as keyof typeof basics];
}

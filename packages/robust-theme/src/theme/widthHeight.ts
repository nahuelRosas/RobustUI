import { sizes } from "./sizes";

export const widthHeight = {
  fitContent: "fit-content",
  inherit: "inherit",
  initial: "initial",
  maxContent: "max-content",
  minContent: "min-content",
  revert: "revert",
  unset: "unset",
  "-webkit-fill-available": "-webkit-fill-available",
  "-moz-available": "-moz-available",
  optimizedWidth: `-moz-available;
  width: -webkit-fill-available`,
  optimizedHeight: `-moz-available;
  height: -webkit-fill-available`,
  ...sizes,
};

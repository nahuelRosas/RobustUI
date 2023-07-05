import React from "react";
import { Circle } from "../../circle";
import { Path } from "../../path";
import { G } from "../../g";

export const fallbackIcon = {
  path: (
    <G stroke="currentColor" strokeLinecap="1.5">
      <Path
        xmlns="http://www.w3.org/2000/svg"
        d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
        strokeLinecap="round"
        fill="none"
      />
      <Path
        xmlns="http://www.w3.org/2000/svg"
        d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
        fill="currentColor"
        strokeLinecap="round"
      />
      <Circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </G>
  ),
  viewBox: "0 0 24 24",
};

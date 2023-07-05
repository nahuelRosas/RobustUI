/* The code is importing the `BaseProps` type from a file located in the "../types" directory. It then
defines an interface `GProps` that extends `BaseProps` and adds additional properties. The `GProps`
interface has the following properties: */
import { BaseProps } from "../../types";

export interface GProps extends BaseProps {
  children: React.ReactNode;
  stroke?: string;
  strokeLinecap?: string;
}

import { createContext } from "react";
import { globalContextValue } from "./types";

// Create the global context with an empty initial value
export const GlobalContext = createContext<globalContextValue>(
  {} as globalContextValue
);

import { useContext } from "react";
import { globalContextValue } from "./types";

export function useGlobalContext({
  providerContext,
}: {
  providerContext: React.Context<globalContextValue>;
}) {
  const context = useContext(providerContext);

  if (context === undefined || context === null) {
    throw new Error("useGlobalContext must be used without a Provider");
  }
  return context;
}

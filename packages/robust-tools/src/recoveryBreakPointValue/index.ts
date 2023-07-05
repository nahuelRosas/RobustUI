import { useGlobalContext } from "@robust/hooks";
import { GlobalContext } from "@robust/contexts";
import { DEFAULT_BREAKPOINTS } from "@robust/theme";

export function RecoveryBreakPointValue(): string {
  const { breakpointValue } = useGlobalContext({
    providerContext: GlobalContext,
  });
  if (breakpointValue) {
    return breakpointValue;
  }
  return "base";
}

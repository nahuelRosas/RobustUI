import { useGlobalContext } from "@robust/hooks";
import { GlobalContext } from "@robust/contexts";

export function RecoveryFramework(): string | null {
  const { framework } = useGlobalContext({
    providerContext: GlobalContext,
  });
  if (framework) {
    return framework;
  }
  return null;
}

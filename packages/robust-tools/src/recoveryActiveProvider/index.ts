import { useGlobalContext } from "@robust/hooks";
import { GlobalContext } from "@robust/contexts";

export function RecoveryActiveProvider(): boolean {
  const { isProviderActive } = useGlobalContext({
    providerContext: GlobalContext,
  });
  if (isProviderActive) {
    return isProviderActive;
  }
  return false;
}

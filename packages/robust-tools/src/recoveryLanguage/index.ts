import { useGlobalContext } from "@robust/hooks";
import { GlobalContext } from "@robust/contexts";
import { Language } from "@robust/theme";

export function RecoveryLanguage(): string {
  const { language } = useGlobalContext({
    providerContext: GlobalContext,
  });
  if (language) {
    return language;
  }
  return Language["en"];
}

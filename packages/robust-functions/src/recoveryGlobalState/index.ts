import { useRef } from "react";
import { RecoveryGlobalStateProps } from "./types";

export function RecoveryGlobalState<T>({
  key,
  globalState,
}: RecoveryGlobalStateProps): T | undefined {
  const valueRef = useRef<T>();

  const index = Object.keys(globalState).findIndex((e) => {
    return (
      e.toLocaleLowerCase().toString() === key.toLocaleLowerCase().toString()
    );
  });

  if (index !== -1) {
    valueRef.current = globalState[Object.keys(globalState)[index]] as T;
  }

  return valueRef.current;
}

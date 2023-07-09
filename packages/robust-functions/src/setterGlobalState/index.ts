import { useEffect, useRef } from "react";
import { RecoveryGlobalState } from "../recoveryGlobalState";
import { updateValueGlobalState } from "../updateValueGlobalState";
import { FunctionType, SetterGlobalStateProps } from "./types";

export function SetterGlobalState<T>({
  key,
  defaultValue,
  globalState,
  setGlobalStateValue,
}: SetterGlobalStateProps<T>) {
  // Recover the saved value from the global state if it exists
  const savedValue = RecoveryGlobalState<T>({ key, globalState }) as T;

  // Determine the initial value based on whether the saved value or default value is provided
  const initialValue = savedValue !== undefined ? savedValue : defaultValue;

  // Store the current value in a ref for efficient updates
  const valueRef = useRef<T>(initialValue as T);

  // Update the global state when the component mounts if the saved value doesn't exist and a default value is provided
  useEffect(() => {
    if (globalState[key] === undefined && defaultValue !== undefined) {
      setGlobalStateValue(key, defaultValue);
    }
  }, [defaultValue, globalState, key, setGlobalStateValue]);

  // Update the value in the ref when the initial value changes
  useEffect(() => {
    if (initialValue !== valueRef.current) {
      valueRef.current = initialValue as T;
    }
  }, [initialValue]);

  function updateValue(newValue: FunctionType<T>) {
    updateValueGlobalState<T>({
      newValue,
      valueRef,
      setGlobalStateValue,
      key,
    });
  }

  return [updateValue];
}

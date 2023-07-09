import { safeJSON } from "../safeJSON";
import { UpdateValueGlobalStateType } from "./types";

export function updateValueGlobalState<T>({
  newValue,
  valueRef,
  setGlobalStateValue,
  key,
}: UpdateValueGlobalStateType<T>) {
  if (typeof newValue === "function") {
    const currentValue = valueRef.current as T;
    const currentValueString = safeJSON({ object: currentValue });
    const nextValue = (newValue as (prevState: T) => T)(currentValue);
    const nextValueString = safeJSON({ object: nextValue });
    if (nextValueString !== currentValueString && nextValue !== currentValue) {
      valueRef.current = nextValue;
      setGlobalStateValue(key, nextValue);
    }
  } else if (typeof newValue === "object" && newValue !== null) {
    const currentValue = valueRef.current as T;
    const currentValueString = safeJSON({ object: currentValue });
    const nextValue = { ...currentValue, ...newValue };

    const nextValueString = safeJSON({ object: nextValue });

    if (nextValueString !== currentValueString && nextValue !== currentValue) {
      valueRef.current = nextValue;
      setGlobalStateValue(key, nextValue);
    }
  } else {
    const currentValue = valueRef.current as T;
    const currentValueString = safeJSON({ object: currentValue });
    const prevValue = currentValue;
    const newValueString = safeJSON({ object: newValue });

    if (newValueString !== currentValueString && newValue !== currentValue) {
      valueRef.current = newValue;
      setGlobalStateValue(key, newValue);
    }
    return prevValue;
  }
}

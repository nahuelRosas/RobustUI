export type FunctionType<T> = ((prevState: T) => T) | T;

export type UpdateValueGlobalStateType<T> = {
  newValue: FunctionType<T>;
  valueRef: React.MutableRefObject<T>;
  setGlobalStateValue: (key: string, value: unknown) => void;
  key: string;
};

export type FunctionType<T> = ((prevState: T) => T) | T;
export type SetterGlobalStateProps<T> = {
  key: string;
  defaultValue?: T;
  globalState: Record<string, unknown>;
  setGlobalStateValue: (key: string, value: unknown) => void;
};

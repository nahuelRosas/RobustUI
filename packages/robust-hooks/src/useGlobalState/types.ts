export type FunctionType<T> = ((prevState: T) => T) | T;

export type UseGlobalStateProps<T> = {
  key?: string;
  defaultValue?: T;
};

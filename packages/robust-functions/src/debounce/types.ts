export type Timer = ReturnType<typeof setTimeout> | null;

export interface DebounceOptions<T extends (...args: any[]) => void> {
  fn: T;
  delay: number;
  immediate: boolean;
}

export interface DebouncedFunction<T extends (...args: any[]) => void> {
  (...args: Parameters<T>): void;
  cancel(): void;
}

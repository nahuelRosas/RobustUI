import { DebouncedFunction, DebounceOptions, Timer } from "./types";

export function debounce<T extends (...args: any[]) => void>({
  options,
}: {
  options: DebounceOptions<T>;
}): DebouncedFunction<T> {
  let timer: Timer = null;

  function cancelTimer(): void {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function debouncedFunction(this: unknown, ...args: Parameters<T>): void {
    cancelTimer();

    if (options.immediate && !timer) {
      options.fn.apply(this, args);
    } else {
      timer = setTimeout(() => {
        options.fn.apply(this, args);
        timer = null;
      }, options.delay);
    }
  }

  debouncedFunction.cancel = cancelTimer;

  return debouncedFunction;
}

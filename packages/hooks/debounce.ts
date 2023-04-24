import { DebounceT, DebounceFunction } from './types';
export function debounce<T extends (...args: unknown[]) => void>({
	fn,
	delay,
}: DebounceT<T>): DebounceFunction<T> {
	let timer: ReturnType<typeof setTimeout>;

	return function (this: unknown, ...args: Parameters<T>): void {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
}

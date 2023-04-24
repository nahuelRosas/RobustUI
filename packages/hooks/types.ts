export type Breakpoints = Record<string, number>;

export * from './useBreakpointValue';
export * from './useGlobalContext';
export * from './useImage';
export * from './debounce';

export type UseBreakpointValueT<T> = {
	values: Record<string, T>;
	options?: {
		breakpoints?: Breakpoints;
		fallback?: T;
	};
};

export type DebounceFunction<T extends (...args: unknown[]) => void> = (
	...args: Parameters<T>
) => void;

export interface DebounceT<T extends (...args: unknown[]) => void> {
	fn: T;
	delay: number;
}

export type ImageEvent = React.SyntheticEvent<HTMLImageElement, Event>;

export interface UseImageT {
	src?: string;
	srcSet?: string;
	onLoad?: (event: ImageEvent) => void;
	onError?: (error: string) => void;
	crossOrigin?: 'anonymous' | 'use-credentials' | '';
	sizes?: string;
	ignoreFallback?: boolean;
	delay?: number;
}

import { useState, useEffect } from 'react';
import { debounce } from './debounce';
import { UseBreakpointValueT, Breakpoints } from './types';

const OBJECT_STR = 'object';
const UNDEFINED_STR = 'undefined';
const BREAKPOINTS = {
	base: 0,
	sm: 480,
	md: 768,
	lg: 1024,
	xl: 1200,
	xxl: 1440,
	xxxl: 1600,
};

export function useBreakpointValue<T>({ values, options }: UseBreakpointValueT<T>) {
	if (typeof values !== OBJECT_STR) {
		throw new Error('The first argument of useBreakpointValue must be an object.');
	}

	const [currentBreakpoint, setCurrentBreakpoint] = useState<string | null>(null);

	useEffect(() => {
		function handleResize(): void {
			try {
				const breakpoints: Breakpoints = options?.breakpoints ? options.breakpoints : BREAKPOINTS;

				const isWindowDefined = typeof window !== UNDEFINED_STR;

				const newBreakpoint = isWindowDefined
					? Object.keys(breakpoints)
							.reverse()
							.find((breakpoint) => window.innerWidth >= breakpoints[breakpoint])
					: null;

				if (newBreakpoint != null && newBreakpoint !== currentBreakpoint) {
					setCurrentBreakpoint(newBreakpoint);
				}
			} catch (error) {
				throw new Error('Error handling window resize: ' + error);
			}
		}

		handleResize();

		const debouncedHandleResize = debounce({ fn: handleResize, delay: 100 });
		window.addEventListener('resize', debouncedHandleResize);

		return () => {
			window.removeEventListener('resize', debouncedHandleResize);
		};
	}, [options, currentBreakpoint]);

	if (options) {
		return currentBreakpoint != null ? values[currentBreakpoint] : options.fallback;
	} else if (currentBreakpoint != null) {
		return values[currentBreakpoint];
	} else {
		return null;
	}
}

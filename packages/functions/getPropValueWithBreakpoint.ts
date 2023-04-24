import { getPropValueWithBreakpointT } from 'functions';

const breakpoints = {
	base: 0,
	xs: 320,
	sm: 480,
	md: 768,
	lg: 1024,
	xl: 1200,
	xxl: 1440,
	xxxl: 1600,
};

export function getPropValueWithBreakpoint({
	propValue,
	breakPoint,
}: getPropValueWithBreakpointT): string | undefined {
	if (typeof propValue === 'string') {
		return propValue as string;
	} else if (typeof propValue === 'object' && propValue !== null && breakPoint !== undefined) {
		if (propValue[breakPoint]) return propValue[breakPoint] as string;

		for (const e of Object.keys(breakpoints)) {
			if (e <= breakPoint && propValue[e]) {
				return propValue[e] as string;
			}
			if (e > breakPoint) {
				return propValue[e] as string;
			}
		}
		throw new Error(`Invalid propValue for breakpoint ${breakPoint} and propValue ${propValue}`);
	} else if (typeof propValue === 'undefined') {
		const Location = new Error().stack?.split('\n')[2];
		throw new Error(`Invalid propValue ${propValue} at ${Location}`);
	}
}

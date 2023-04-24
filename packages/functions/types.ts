import { ThemeT } from 'constructor';

export * from './getPropValueWithBreakpoint';
export * from './recoveryBrakPointValue';
export * from './getPropValueGetters';
export * from './generatorCSSRule';
export * from './handleDragStart';
export * from './generateHash';
export * from './randomColor';
export * from './getInitials';
export * from './generateId';
export * from './injectCSS';
export * from './safeJSON';
export * from './isDark';

export type generateHashT = {
	str: string;
	algorithm?: string;
};

export type generateIdT = {
	obj: Record<string, unknown> | string;
	prefix?: string;
	algorithm?: string;
};

export type createCSSRuleT = {
	selector: string;
	styles: string;
};

export type createStyleSheetT = {
	rules: string[];
};

export type getPropValueWithBreakpointT = {
	propValue: unknown;
	breakPoint?: string;
};

export type InjectCSST = {
	classSelector: string;
	componentProps: { [key: string]: unknown };
	breakPoint: string;
	theme?: ThemeT;
};

export type propValueGettersT = {
	[key: string]: ({
		propValue,
		componentName,
	}: {
		propValue: string;
		componentName?: string;
	}) => string;
};

export type safeJSONT = {
	obj: unknown;
	replacer?: (key: string, value: unknown) => unknown;
	indent?: string | number;
};

export type handleDragStartT = {
	onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void;
	event: React.DragEvent<HTMLDivElement>;
	dragRef: React.RefObject<HTMLDivElement>;
};

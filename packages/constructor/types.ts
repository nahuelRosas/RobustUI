import { cssPropertyMappings } from 'functions';
import { Ref } from 'react';
import { defaultTheme } from 'theme';

export * from './dynamicStyles';

export interface ConstructorPropsT<T> {
	[key: string]: T;
}

export type ThemeT = typeof defaultTheme;
type CssPropertyMappings = {
	[Key in keyof typeof cssPropertyMappings]?: (typeof cssPropertyMappings)[Key] extends keyof ThemeT
		?
				| keyof ThemeT[(typeof cssPropertyMappings)[Key]]
				| ConstructorPropsT<keyof ThemeT[(typeof cssPropertyMappings)[Key]]>
		: string | ConstructorPropsT<string>;
};

type CustomHTMLAttributes<T> = React.HTMLAttributes<T> & CssPropertyMappings;

export interface BasePropsT extends CustomHTMLAttributes<HTMLElement> {
	as?: React.ElementType | keyof JSX.IntrinsicElements;
	componentName?: string;
	ref?: Ref<unknown> | undefined;
	isDraggable?: boolean | undefined;
	[key: string]: unknown;
}
export interface DynamicStylesT<T> {
	Component: keyof JSX.IntrinsicElements | React.ComponentType<T>;
}

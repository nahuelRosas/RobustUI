import {
	generateId,
	injectCSS,
	safeJSON,
	RecoveryBreakPointValue,
	cssPropertyMappings,
} from 'functions';
import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { BasePropsT } from './types';
import { RecoveryActiveProvider } from '../hooks/useActiveProvider';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function DynamicStyles<T extends object>({
	Component,
}: {
	Component: React.ElementType<T>;
}): React.ForwardRefExoticComponent<
	React.PropsWithoutRef<BasePropsT & T> & React.RefAttributes<unknown>
> {
	const StyleComponent = forwardRef<unknown, BasePropsT & T>(function (
		{ as: Element = Component, componentName = Component as string, children, ...props },
		ref,
	): JSX.Element | null {
		const className = useRef(
			generateId({
				obj: {
					component: Element,
					props,
				},
				prefix: `Styled-CSS-${componentName}`,
			}),
		);
		const domProps = Object.entries(props).reduce((acc, [key, value]) => {
			let STRforced = false;
			const CTString = key
				.split(/(?=[A-Z])/)
				.filter((item) => {
					const itemLowerCase = item.toLowerCase();
					if (itemLowerCase === 'str' || itemLowerCase === 'string') {
						STRforced = true;
					}
					return itemLowerCase !== 'str' && itemLowerCase !== 'string';
				})
				.join('-')
				.toLowerCase();
			if (CTString in cssPropertyMappings || key in cssPropertyMappings || STRforced) {
				return acc;
			}
			return { ...acc, [key]: value };
		}, {});
		const [mounted, setMounted] = useState(false);
		const [previousClassName, setPreviousClassName] = useState(className.current);
		const [previousProps, setPreviousProps] = useState(props);
		const breakPoint: string = RecoveryBreakPointValue();
		const activeProvider: boolean = RecoveryActiveProvider();
		useIsomorphicLayoutEffect(() => {
			if (safeJSON({ obj: previousProps }) !== safeJSON({ obj: props })) {
				setPreviousProps(props);
				const newClassName = generateId({
					obj: {
						component: Element,
						props,
					},
					prefix: `Styled-CSS-${componentName}`,
				});
				className.current = newClassName;
				setPreviousClassName(newClassName);
			}
			injectCSS({
				classSelector: className.current,
				componentProps: props,
				breakPoint,
			});
		}, [componentName, previousClassName, previousProps, props, breakPoint]);
		useIsomorphicLayoutEffect(() => {
			if (activeProvider) {
				setMounted(true);
			} else {
				setMounted(false);
				throw new Error(
					`The component ${componentName} is not mounted, please wrap it with a Provider`,
				);
			}
		}, []);
		if (!mounted) return null;

		return (
			<Element className={className.current} ref={ref} {...domProps}>
				{children}
			</Element>
		);
	});
	return StyleComponent;
}

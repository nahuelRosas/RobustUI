import { BasePropsT, DynamicStyles } from 'constructor';

const Component = DynamicStyles({
	Component: 'span',
});

export function Span({ children, ...props }: BasePropsT): JSX.Element {
	return (
		<Component componentName="Span" display="inline-block" {...props}>
			{children}
		</Component>
	);
}

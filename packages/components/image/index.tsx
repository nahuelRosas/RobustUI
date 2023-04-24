import { DynamicStyles } from 'constructor';
import { ImageT } from '../types';

const Component = DynamicStyles({
	Component: 'img',
});

export function Image({ src, alt, size, ...props }: ImageT): JSX.Element {
	return (
		<Component
			componentName="Image"
			objectFit="cover"
			objectPosition="center"
			alt={alt}
			src={src}
			width={size}
			height={size}
			{...props}
		/>
	);
}

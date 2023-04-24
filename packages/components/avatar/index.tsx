import { getInitials, isDark, randomColor } from 'functions';
import { Span } from '../typography/span';
import { Spinner } from '../spinner';
import { AvatarT } from '../types';
import { Flex } from '../layout';
import { useImage } from 'hooks';
import { Image } from '../image';

export function Avatar({ src, alt, name = alt, size = '1.5rem', ...props }: AvatarT) {
	const status = useImage({ src: src });
	const initials = getInitials({ name: name as string });
	return (
		<Flex
			componentName="Avatar"
			margin="auto"
			padding="0.25rem"
			minWidth="24px"
			minHeight="24px"
			justifyContent="center"
			alignItems="center"
			borderRadius="50%"
			cursor="pointer"
			width={size}
			height={size}
			backgroundColorStr={status === 'failed' ? randomColor({ seed: name }) : 'transparent'}
			colorStr={
				status === 'failed'
					? isDark({ color: randomColor({ seed: name }) })
						? 'white'
						: 'black'
					: 'transparent'
			}
			{...props}
		>
			{status === 'loaded' && (
				<Image
					componentName="AvatarImage"
					width={size}
					height={size}
					borderRadius="50%"
					objectFit="cover"
					objectPosition="center"
					alt={alt}
					src={src}
				/>
			)}
			{status === 'failed' && (
				<Span
					componentName="AvatarName"
					fontSizeStr={`calc(${size} / 1.75)`}
					display="flex"
					flexWrap="wrap"
					alignItems="flexEnd"
					fontWeight="bold"
				>
					{initials}
				</Span>
			)}
			{status === 'loading' && <Spinner size={size} />}
		</Flex>
	);
}

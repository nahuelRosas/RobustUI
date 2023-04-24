import { BasePropsT } from 'constructor';
import { sizes } from 'theme';

export interface AvatarT extends BasePropsT {
	src: string;
	alt: string;
	name?: string;
	size?: keyof typeof sizes;
}

export interface SpinnerT extends BasePropsT {
	size?: keyof typeof sizes;
	model?: 'A' | 'B' | 'C';
}

export interface modelsT extends BasePropsT {
	model: 'A' | 'B' | 'C';
}

export interface ImageT extends BasePropsT {
	src: string;
	alt: string;
	size?: keyof typeof sizes;
}

export interface ButtonT extends BasePropsT {
	type?: 'button' | 'submit' | 'reset';
	size?: keyof typeof sizes;
	variant?: 'normal' | 'outline';
	disabled?: boolean;
	isLoading?: boolean;
	isDisabled?: boolean;
	colorSchema?:
		| 'red'
		| 'blue'
		| 'green'
		| 'yellow'
		| 'purple'
		| 'orange'
		| 'teal'
		| 'gray'
		| 'black'
		| 'white'
		| 'blueGray'
		| 'redGray';
}

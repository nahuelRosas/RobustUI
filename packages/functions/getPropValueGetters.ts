export function getPropValueGetters({ componentType }: { componentType: string }) {
	let STRforced = false;
	const CTString = componentType
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

	if (cssPropertyMappings[componentType] === undefined && !STRforced) {
		return undefined;
	} else if (alternative[CTString]) {
		return alternative[CTString];
	}

	return (propValue: string): string => {
		return `${CTString} : ${propValue};`;
	};
}

export enum cssPropertyMappings {
	borderBottomColor = 'colors',
	backgroundColor = 'colors',
	borderColor = 'colors',
	background = 'colors',
	altColor = 'colors',
	bgColor = 'colors',
	color = 'colors',
	bg = 'colors',
	justifyContent = 'justifyContent',
	flexDirection = 'flexDirection',
	alignItems = 'alignItems',
	alignSelf = 'alignSelf',
	gridTemplateColumns = 'gridTemplate',
	gridTemplateRows = 'gridTemplate',
	position = 'position',
	borderRadius = 'sizes',
	maxHeight = 'sizes',
	minHeight = 'sizes',
	minWidth = 'sizes',
	maxWidth = 'sizes',
	padding = 'sizes',
	margin = 'sizes',
	mx = 'sizes',
	my = 'sizes',
	px = 'sizes',
	py = 'sizes',
	pt = 'sizes',
	pr = 'sizes',
	pb = 'sizes',
	pl = 'sizes',
	mt = 'sizes',
	mr = 'sizes',
	mb = 'sizes',
	ml = 'sizes',
	p = 'sizes',
	m = 'sizes',
	left = 'sizes',
	right = 'sizes',
	top = 'sizes',
	bottom = 'sizes',
	gap = 'sizes',
	flexWrap = 'flexWrap',
	display = 'display',
	cursor = 'cursor',
	objectFit = 'objectFit',
	objectPosition = 'objectPosition',
	fontWeight = 'fontWeight',
	height = 'widthHeight',
	width = 'widthHeight',
	boxSizing = 'boxSizing',
	fontSize = 'fontSize',
	borderBottom = 'border',
	borderRight = 'border',
	borderLeft = 'border',
	borderTop = 'border',
	border = 'border',
	animation = 'animation',
	keyframes = 'keyframes',
	after = 'after',
	before = 'before',
	inset = 'inset',
	transform = 'transform',
	content = 'content',
	clipPath = 'clipPath',
	lineHeight = 'lineHeight',
	fontFamily = 'fontFamily',
	outline = 'outline',
	textAlign = 'textAlign',
	hover = 'hover',
}

export const alternative = {
	mx: (propValue: string): string => `margin-left : ${propValue}; margin-right : ${propValue};`,
	my: (propValue: string): string => `margin-top : ${propValue}; margin-bottom : ${propValue};`,
	px: (propValue: string): string => `padding-left : ${propValue}; padding-right : ${propValue};`,
	py: (propValue: string): string => `padding-top : ${propValue}; padding-bottom : ${propValue};`,
	pb: (propValue: string): string => `padding-bottom : ${propValue};`,
	pr: (propValue: string): string => `padding-right : ${propValue};`,
	mb: (propValue: string): string => `margin-bottom : ${propValue};`,
	pl: (propValue: string): string => `padding-left : ${propValue};`,
	mr: (propValue: string): string => `margin-right : ${propValue};`,
	ml: (propValue: string): string => `margin-left : ${propValue};`,
	pt: (propValue: string): string => `padding-top : ${propValue};`,
	mt: (propValue: string): string => `margin-top : ${propValue};`,
	bg: (propValue: string): string => `background : ${propValue};`,
	p: (propValue: string): string => `padding : ${propValue};`,
	m: (propValue: string): string => `margin : ${propValue};`,
	left: (propValue: string): string => `left : ${propValue};`,
	right: (propValue: string): string => `right : ${propValue};`,
	top: (propValue: string): string => `top : ${propValue};`,
	bottom: (propValue: string): string => `bottom : ${propValue};`,
};

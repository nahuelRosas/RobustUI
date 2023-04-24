import { BasePropsT, DynamicStyles } from 'constructor';
import { handleDragStart } from 'functions';
import { useRef } from 'react';

const Component = DynamicStyles({
	Component: 'div',
});

export function Factory({
	onDragStart,
	onDragEnd,
	isDraggable,
	onDragEnter,
	children,
	ref,
	...props
}: BasePropsT) {
	const dragRef = useRef<HTMLDivElement>(null);

	return (
		<Component
			ref={ref || dragRef}
			onDragEnter={(event: React.DragEvent<HTMLDivElement>) => onDragEnter && onDragEnter(event)}
			onDragStart={(event: React.DragEvent<HTMLDivElement>) =>
				handleDragStart({ onDragStart, event, dragRef })
			}
			onDragOver={(e: { preventDefault: () => void }) => e.preventDefault()}
			draggable={isDraggable}
			onDragEnd={(event: React.DragEvent<HTMLDivElement>) => onDragEnd && onDragEnd(event)}
			{...props}
		>
			{children}
		</Component>
	);
}

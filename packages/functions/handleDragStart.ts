import { handleDragStartT } from './types';
export function handleDragStart({ onDragStart, event, dragRef }: handleDragStartT): void {
	event.stopPropagation();
	if (onDragStart) onDragStart(event);
	if (dragRef.current) {
		event.dataTransfer.setData('text/plain', dragRef.current.id);
		event.dataTransfer.effectAllowed = 'move';
	}
}

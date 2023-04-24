export function globalStateReducer(
	state: Record<string, unknown>,
	action: unknown,
): Record<string, unknown> {
	switch (
		(
			action as {
				type: string;
			}
		).type
	) {
		case 'SET_GLOBAL_STATE_VALUE':
			return {
				...state,
				[(
					action as {
						key: string;
					}
				).key]: (
					action as {
						value: unknown;
					}
				).value,
			};
		case 'RESET_GLOBAL_STATE':
			return {};
		default:
			return state;
	}
}

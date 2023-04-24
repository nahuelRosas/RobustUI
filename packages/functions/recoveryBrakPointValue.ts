import { useGlobalContext } from 'hooks';
import { GlobalContext } from '../provider';

export function RecoveryBreakPointValue(): string {
	const { breakpointValue } = useGlobalContext({
		providerContext: GlobalContext,
	});
	if (breakpointValue) {
		return breakpointValue;
	}
	return 'base';
}

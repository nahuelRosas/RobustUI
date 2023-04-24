import { useGlobalContext } from 'hooks';
import { GlobalContext } from '../provider';

export function RecoveryActiveProvider(): boolean {
	const { activeProvider } = useGlobalContext({
		providerContext: GlobalContext,
	});

	if (activeProvider !== undefined) {
		return true;
	}
	return false;
}

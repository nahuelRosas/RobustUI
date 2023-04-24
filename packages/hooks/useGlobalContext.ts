import { useContext } from 'react';
import { GlobalContextT } from 'provider';

export function useGlobalContext({
	providerContext,
}: {
	providerContext: React.Context<GlobalContextT>;
}) {
	const context = useContext(providerContext);
	if (context === undefined || context === null) {
		throw new Error('useGlobalContext must be used without a Provider');
	}
	return context;
}

export type GlobalContextT = {
	setGlobalStateValue: (key: string, value: unknown) => void;
	recoverGlobalState: (key: string) => unknown;
	globalState: Record<string, unknown>;
	breakpointValue: string | null | undefined;
	resetGlobalState: () => void;
	resetIds: () => void;
	activeProvider: boolean;
};

export type GlobalProviderT = {
	children: React.ReactNode;
};

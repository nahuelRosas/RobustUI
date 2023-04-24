import { DynamicStyles } from 'constructor';
import { useBreakpointValue } from 'hooks';
import React, {
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useReducer,
	useRef,
	useState,
} from 'react';
import { globalStateReducer } from './globalStateReducer';
import { GlobalProviderT, GlobalContext } from 'provider';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function GlobalProvider({ children, ...props }: GlobalProviderT): JSX.Element | null {
	const [mounted, setMounted] = useState(false);

	const Provider = DynamicStyles({
		Component: 'div',
	});

	if (typeof window === 'undefined') return <></>;

	const [globalState, dispatch] = useReducer(globalStateReducer, {});

	const generatedGlobalRef = useRef<Record<string, boolean>>({});
	const resetIds = useCallback(() => {
		generatedGlobalRef.current = {};
	}, []);

	const resetGlobalState = useCallback(() => {
		dispatch({ type: 'RESET_GLOBAL_STATE' });
	}, []);

	const recoverGlobalState = useCallback(() => {
		return globalState;
	}, [globalState]);

	const setGlobalStateValue = useCallback((key: string, value: unknown) => {
		dispatch({ type: 'SET_GLOBAL_STATE_VALUE', key, value });
	}, []);

	const breakpointValue = useBreakpointValue({
		values: {
			base: 'base',
			sm: 'sm',
			md: 'md',
			lg: 'lg',
			xl: 'xl',
			xxl: 'xxl',
			xxxl: 'xxxl',
		},
	});

	const activeProviderState = useRef(false);

	useEffect(() => {
		if (!activeProviderState.current) {
			activeProviderState.current = true;
			return;
		}
	}, [breakpointValue]);

	const activeProvider = (() => activeProviderState.current)();

	const memoizedGlobalContext = useMemo(() => {
		return {
			resetIds,
			resetGlobalState,
			globalState,
			setGlobalStateValue,
			recoverGlobalState,
			breakpointValue,
			activeProvider,
		};
	}, [
		resetIds,
		resetGlobalState,
		globalState,
		setGlobalStateValue,
		recoverGlobalState,
		breakpointValue,
		activeProvider,
	]);

	useIsomorphicLayoutEffect(() => {
		if (!mounted) {
			setMounted(true);
		}
	}, []);

	if (!mounted) return null;

	return (
		<GlobalContext.Provider value={memoizedGlobalContext}>
			<>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</>
			<Provider
				componentName="GlobalProvider"
				fontFamily="Manrope"
				display="grid"
				height="100vh"
				width="100vw"
				{...props}
			>
				{children}
			</Provider>
		</GlobalContext.Provider>
	);
}

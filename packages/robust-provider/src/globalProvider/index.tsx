import {
  useIsomorphicLayoutEffect,
  useBreakpointValue,
  useFrameworkDetection,
} from "@robust/hooks";
import { useMemo, useReducer, useState, useRef, useCallback } from "react";
import { GlobalStateReducer, GlobalContext } from "@robust/contexts";
import { DynamicStyles } from "@robust/constructor";
import { GlobalProviderProps } from "./types";
import { Language } from "@robust/theme";
import React from "react";

/**
 * GlobalProvider component provides a global context to its children
 * with various state variables and functions.
 *
 * @component
 * @param {GlobalProviderProps} props - The component props.
 * @returns {JSX.Element | null} The rendered component.
 */
export function GlobalProvider({
  children,
  ...props
}: GlobalProviderProps): JSX.Element | null {
  // State variables
  const [globalState, dispatch] = useReducer(GlobalStateReducer, {});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<keyof typeof Language>("en");
  const framework = useFrameworkDetection();
  // Refs
  const activeProviderState = useRef(false);
  const generatedGlobalRef = useRef({});
  const isMounted = useRef(false);

  // DynamicStyles Provider
  const Provider = useMemo(() => {
    return DynamicStyles({
      Component: "div",
    });
  }, []);
  // Callback functions
  /**
   * Reset the generated global IDs.
   */
  const resetGeneratedIds = useCallback(() => {
    generatedGlobalRef.current = {};
  }, []);

  /**
   * Reset the global state to an empty object.
   */
  const resetGlobalState = useCallback(() => {
    dispatch({ type: "RESET_GLOBAL_STATE" });
  }, []);
  /**
   * Set a value in the global state with the specified key.
   *
   * @param {string} key - The key to set in the global state.
   * @param {unknown} value - The value to set for the specified key.
   */
  const setGlobalStateValue = useCallback((key: string, value: unknown) => {
    dispatch({ type: "SET_GLOBAL_STATE_VALUE", key, value });
  }, []);
  /**
   * Change the language to the specified value.
   *
   * @param {string} newLanguage - The new language value.
   */
  const changeLanguage = useCallback(
    (newLanguage: React.SetStateAction<keyof typeof Language>) => {
      if (typeof newLanguage === "function") {
        setLanguage((prevState) => {
          return newLanguage(prevState);
        });
        return;
      }
      if (newLanguage === language) {
        return;
      }
      setLanguage(newLanguage);
    },
    [language]
  );
  /**
   * Toggle the dark mode based on the specified value.
   *
   * @param {boolean} darkMode - The new value for dark mode.
   */
  const toggleDarkMode = useCallback(
    (darkMode: boolean | ((prevState: boolean) => boolean)) => {
      setIsDarkMode(darkMode);
    },
    []
  );
  /**
   * Get the current global state object.
   *
   * @returns {object} The global state object.
   */
  const getGlobalState = useCallback(() => {
    return globalState;
  }, [globalState]);
  // Get the current breakpoint value using useBreakpointValue hook
  const breakpointValue = useBreakpointValue({
    values: {
      base: "base",
      sm: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
      xxl: "xxl",
      xxxl: "xxxl",
    },
  });

  // Check if the provider is active based on the breakpoint value
  useIsomorphicLayoutEffect(() => {
    if (!activeProviderState.current) {
      activeProviderState.current = true;
      return;
    }
  }, [breakpointValue]);
  // Get the current state of the provider
  const isProviderActive = activeProviderState.current;
  // Create the memoized global context object
  const memoizedGlobalContext = useMemo(() => {
    return {
      resetGeneratedIds,
      resetGlobalState,
      globalState,
      setGlobalStateValue,
      getGlobalState,
      breakpointValue,
      isProviderActive,
      isDarkMode,
      language,
      changeLanguage,
      toggleDarkMode,
      framework,
    };
  }, [
    resetGeneratedIds,
    resetGlobalState,
    globalState,
    setGlobalStateValue,
    getGlobalState,
    breakpointValue,
    isProviderActive,
    isDarkMode,
    language,
    changeLanguage,
    toggleDarkMode,
    framework,
  ]);
  // Set the isMounted ref when the component is mounted
  useIsomorphicLayoutEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    }
  }, []);
  // Return null if the component is not mounted or running on the server
  if (!isMounted.current || typeof window === "undefined") {
    return null;
  }
  // Render the component with the global context provider
  return (
    <GlobalContext.Provider value={memoizedGlobalContext}>
      <Provider
        componentName="GlobalProvider"
        fontFamily="Manrope"
        display="grid"
        optimizedWidth
        optimizedHeight
        {...props}>
        {children}
      </Provider>
    </GlobalContext.Provider>
  );
}

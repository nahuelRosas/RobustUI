# GlobalProvider Component

The `GlobalProvider` component serves as a global provider, encapsulating shared state logic and providing a global context. It allows data and functionality to be shared between different components in the application.

## Props

- `children`: The components to be wrapped by the `GlobalProvider`.

## Usage

To use the `GlobalProvider` component in a Next.js application, follow these steps:

1. Create a new file called `_app.tsx` in the `pages` directory of your Next.js project if it doesn't exist.

2. Import the `GlobalProvider` component from `"@robust/provider"`, and import the necessary styles.

`````jsx
import "@/styles/globals.css";
import { GlobalProvider } from "@robust/provider";
import type { AppProps } from "next/app";


3. Define your custom `App` component and wrap it with the `GlobalProvider`:

```jsx
export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
```jsx
4. Export the `App` component as the default export from the `_app.tsx` file.
export default App;
```

The `GlobalProvider` component will now provide a global context to all the components in your Next.js application.

## State Hooks

- `isDarkMode`: A boolean state indicating whether dark mode is enabled.
- `isMounted`: A boolean state indicating whether the component is mounted.
- `language`: A string state representing the current language.
- `globalState`: The global state managed by the `GlobalStateReducer`.
- `generatedGlobalRef`: A reference to store generated global IDs.

## Methods

- `resetGeneratedIds()`: Resets the generated IDs stored in the `generatedGlobalRef`.
- `resetGlobalState()`: Resets the global state by dispatching a `RESET_GLOBAL_STATE` action.
- `setGlobalStateValue(key: string, value: unknown)`: Sets the value of a key in the global state by dispatching a `SET_GLOBAL_STATE_VALUE` action.
- `changeLanguage(newLanguage: string)`: Changes the current language by updating the `language` state.
- `toggleDarkMode(darkMode: boolean)`: Toggles the dark mode by updating the `isDarkMode` state.

## Custom Hooks

- `breakpointValue`: A custom hook from `@robust/hooks` that provides the current breakpoint value.

## Global Context

The `GlobalProvider` component creates a `memoizedGlobalContext` object that contains the following values:

- `resetGeneratedIds`: A function to reset the generated IDs.
- `resetGlobalState`: A function to reset the global state.
- `globalState`: The current global state.
- `setGlobalStateValue`: A function to set a value in the global state.
- `getGlobalState`: A function to retrieve the global state.
- `breakpointValue`: The current breakpoint value.
- `isProviderActive`: A boolean indicating whether the provider is active (mounted).
- `isDarkMode`: A boolean indicating whether dark mode is enabled.
- `language`: The current language.
- `changeLanguage`: A function to change the language.
- `toggleDarkMode`: A function to toggle dark mode.

## Side Effect Hooks

- `useIsomorphicLayoutEffect`: A side effect hook from `@robust/hooks` that handles layout effects. It updates the `isMounted` state to `true` when the component is first rendered.

## Render

The

`GlobalProvider` component renders the `GlobalContext.Provider` with the `memoizedGlobalContext` value, which provides the global context to its child components.

If the component is not mounted or if the `window` object is not available, it returns `null`.

```jsx
return (
  <GlobalContext.Provider value={memoizedGlobalContext}>
    {children}
  </GlobalContext.Provider>
);
****````
`````

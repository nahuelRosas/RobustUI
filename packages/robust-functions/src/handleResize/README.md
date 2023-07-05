# handleResize

Handles window resize events and updates the current breakpoint.

## Signature

```typescript
handleResize<T>({
  options,
  setCurrentBreakpoint,
  currentBreakpoint,
}: HandleResizeOptions<T>): void
```

## Parameters

- `options` (required): The options object from the `HandleResizeOptions` type.

- `setCurrentBreakpoint` (required): A function to set the current breakpoint state.

- `currentBreakpoint` (required): The current breakpoint state.

## Description

This function is responsible for handling window resize events and updating the current breakpoint based on the window's inner width. It takes the current options, the function to update the breakpoint state, and the current breakpoint state as parameters.

The function first checks if the `window` object is defined. If it is, it retrieves the breakpoints from the options object or uses the default breakpoints from the `DEFAULT_BREAKPOINTS` constant. Then, it determines the new breakpoint by comparing the window's inner width with the breakpoint values. The new breakpoint is selected as the largest breakpoint that the window's inner width exceeds.

If a new breakpoint is found and it is different from the current breakpoint, the function updates the current breakpoint state using the `setCurrentBreakpoint` function.

If an error occurs during the window resize event handling, an error is thrown with an error message.

## Usage

```typescript
import { handleResize } from "handleResizeModule";

// Example usage with React

// Set up the initial breakpoint state
const [currentBreakpoint, setCurrentBreakpoint] = useState<string | null>(null);

// Define the options for the handleResize function
const options = {
  breakpoints: {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1200,
  },
};

// Attach the handleResize function to the window resize event
useEffect(() => {
  window.addEventListener("resize", () =>
    handleResize({
      options,
      setCurrentBreakpoint,
      currentBreakpoint,
    })
  );

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener("resize", () =>
      handleResize({
        options,
        setCurrentBreakpoint,
        currentBreakpoint,
      })
    );
  };
}, []);

// The current breakpoint state will be updated automatically as the window is resized
```

Please make sure to replace `handleResizeModule` with the appropriate module name or path based on your project's configuration.

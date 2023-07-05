````markdown
# debounce

Creates a debounced function that delays invoking the provided function until after a specified delay.

## Usage

```javascript
import { debounce } from "debounce-function";

// Define the function to debounce
function myFunction() {
  // Code to be debounced
}

// Create a debounced version of the function
const debouncedFunction = debounce({
  fn: myFunction,
  delay: 500,
  immediate: true,
});

// Use the debounced function
debouncedFunction();
```

## API

### debounce(options: DebounceOptions): DebouncedFunction

Creates a debounced function.

#### Options

- `fn`: The function to debounce.
- `delay`: The delay in milliseconds.
- `immediate` (optional): Determines whether the function should be invoked immediately. Default is `false`.

#### Returns

The debounced function.

### debouncedFn.cancel()

Cancels the ongoing delay and prevents the debounced function from being invoked.

## Examples

Debouncing an event handler:

```javascript
import { debounce } from "debounce-function";

function handleInputChange() {
  // Perform input handling logic
}

// Create a debounced version of the event handler
const debouncedHandleInputChange = debounce({
  fn: handleInputChange,
  delay: 300,
});

// Attach the debounced event handler to the input element
input.addEventListener("input", debouncedHandleInputChange);
```
````

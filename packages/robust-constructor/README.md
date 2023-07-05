# types.ts

## Description

This file contains type definitions and interfaces related to the internal logic of the application.

### Types

#### ThemeType

Represents the type of the `Theme` object.

```typescript
export type ThemeType = typeof Theme;
```

The `ThemeType` is a type alias that is defined as the type of the `Theme` object.

#### CssPropertyMapping

Maps CSS property names to their corresponding values in the theme.

```typescript
type CssPropertyMapping = {
  [Key in keyof typeof CssPropertyMappings]?: (typeof CssPropertyMappings)[Key] extends keyof ThemeType
    ?
        | keyof ThemeType[(typeof CssPropertyMappings)[Key]]
        | ConstructorProps<keyof ThemeType[(typeof CssPropertyMappings)[Key]]>
    : string | ConstructorProps<string>;
};
```

The `CssPropertyMapping` is a type that represents a mapping of CSS property names to their corresponding values in the theme. It is defined as an object with optional keys of type `keyof typeof CssPropertyMappings`. The values of the object can be either:

- If the value of `(typeof CssPropertyMappings)[Key]` (which represents the value type in `CssPropertyMappings`) is a key of `ThemeType`, then the value in `CssPropertyMapping` can be one of the keys of `ThemeType[(typeof CssPropertyMappings)[Key]]` or `ConstructorProps<keyof ThemeType[(typeof CssPropertyMappings)[Key]]>`.
- If the value of `(typeof CssPropertyMappings)[Key]` is not a key of `ThemeType`, then the value in `CssPropertyMapping` can be a string or `ConstructorProps<string>`.

#### ConstructorProps

Represents constructor properties of a generic type `T`.

```typescript
type ConstructorProps<T> = {
  [key: string]: T;
};
```

The `ConstructorProps` is a type that represents constructor properties of a generic type `T`. It is defined as an object with keys of type `string` and values of type `T`.

#### CustomHTMLAttributes

Extends the standard HTML attributes with CSS property mappings.

```typescript
type CustomHTMLAttributes<T> = React.HTMLAttributes<T> & CssPropertyMapping;
```

The `CustomHTMLAttributes` is a type that extends the standard HTML attributes with CSS property mappings. It is defined as the intersection of `React.HTMLAttributes<T>` and `CssPropertyMapping`.

### Interfaces

#### BaseProps

Extends the custom HTML attributes and includes additional props for the base component.

```typescript
export interface BaseProps extends CustomHTMLAttributes<HTMLElement> {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  componentName?: string;
  ref?: Ref<unknown> | undefined;
  isDraggable?: boolean | undefined;
  [key: string]: unknown;
}
```

The `BaseProps` interface extends the `CustomHTMLAttributes<HTMLElement>` type and includes additional props for the base component. It has the following properties:

- `as` (optional): Represents the element type or intrinsic element to be rendered.
- `componentName` (optional): Represents the name of the component.
- `ref` (optional): Represents the ref object.
- `isDraggable` (optional): Indicates whether the component is draggable.
- Other unknown props.

#### DynamicStyles

Represents the props for the DynamicStyles component, including the wrapped component type.

```typescript
export interface DynamicStyles<T> {
  Component: keyof JSX.IntrinsicElements | React.ComponentType<T>;
}
```

The `DynamicStyles` interface represents the props for the `DynamicStyles` component. It includes a `Component` property that specifies the type of the wrapped component. The `Component` can be

either a keyof `JSX.IntrinsicElements` or a `React.ComponentType<T>`.

---

# index.tsx

## Description

This file contains the implementation of a higher-order component (`DynamicStyles`) that dynamically generates CSS styles based on props and injects them into the DOM.

### Imports

The file imports various dependencies and modules:

```typescript
import { RecoveryBreakPointValue, RecoveryActiveProvider } from "@robust/tools";
import {
  generateId,
  InjectCSS,
  safeJSON,
  handleError,
} from "@robust/functions";
import { useIsomorphicLayoutEffect } from "@robust/hooks";
import React, { forwardRef, useRef, useEffect } from "react";
import { CssPropertyMappings } from "@robust/theme";
import { BaseProps } from "./types";
```

- `RecoveryBreakPointValue` and `RecoveryActiveProvider` are imported from the `@robust/tools` module.
- `generateId`, `InjectCSS`, `safeJSON`, and `handleError` are imported from the `@robust/functions` module.
- `useIsomorphicLayoutEffect` is imported from the `@robust/hooks` module.
- `React`, `forwardRef`, `useRef`, and `useEffect` are imported from the `react` module.
- `CssPropertyMappings` is imported from the `@robust/theme` module.
- `BaseProps` is imported from a local file called `types`.

### DynamicStyles

A higher-order component that dynamically generates CSS styles based on props and injects them into the DOM.

```typescript
export function DynamicStyles<T extends object>({
  Component,
}: {
  Component: React.ElementType<T>;
}): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<BaseProps & T> & React.RefAttributes<unknown>
> {
  // Function body...
}
```

The `DynamicStyles` function is a higher-order component that takes a generic type `T` as a type parameter and an object as an argument. The object has a `Component` property that specifies the type of the wrapped component. The function returns a `React.ForwardRefExoticComponent` component.

#### Function Body

The function body starts with the declaration of the `StyleComponent`, which is a component that wraps the original component using the `forwardRef` function:

```typescript
const StyleComponent = forwardRef<unknown, BaseProps & T>(function (
  {
    as: Element = Component,
    componentName = Component as string,
    children,
    ...props
  },
  ref
): JSX.Element | null {
  // Function body...
});
```

The `StyleComponent` is a component that takes props including `as`, `componentName`, `children`, and `...props`, and a ref. It renders the wrapped component with the generated className and other props.

#### Variables and References

The function body also declares several variables and references:

```typescript
const classNameRef = useRef<string | null>(null);
const previousPropsRef =
  useRef<Omit<BaseProps & T, "as" | "componentName" | "children">>(props);
const breakPoint = RecoveryBreakPointValue();
const activeProvider = RecoveryActiveProvider();
const generateClassName = (): string | null => {
  // Function body...
};
const className = classNameRef.current || generateClassName();
const previousClassName = useRef<string | null>(className);
const previousProps = previousPropsRef.current;
const domProps = Object.entries(props).reduce((acc, [key, value]) => {
  // Function body...
}, {});
```

- `classNameRef` is a reference to hold the generated className.
- `previousPropsRef` is a reference to hold the previous props of the component.
- `breakPoint` holds the value of the recovery breakpoint.

- `activeProvider` holds the value of the active provider.
- `generateClassName` is a function that generates a className based on the props and active provider.
- `className` holds the current className.
- `previousClassName` is a reference to hold the previous className.
- `previousProps` holds the previous props.
- `domProps` is an object that stores props for the DOM element.

#### useEffect and useIsomorphicLayoutEffect

The `useEffect` or `useIsomorphicLayoutEffect` hooks are used to handle the logic for generating and updating the className and injecting CSS styles into the DOM:

```typescript
useIsomorphicLayoutEffect(() => {
  if (className !== previousClassName.current) {
    // Function body...
  }
  if (Object.keys(props).length !== Object.keys(previousProps).length) {
    // Function body...
  }
  if (!previousPropsRef.current || !propsAreEqual) {
    // Function body...
  }
  previousPropsRef.current = props;
  previousClassName.current = className;
}, [props, className, propsAreEqual]);
```

The effect is triggered when there are changes in `props`, `className`, or `propsAreEqual`. Inside the effect, several conditions are checked to determine if the className and CSS styles need to be updated and injected into the DOM.

#### generateClassName

The `generateClassName` function generates a className based on the props and active provider:

```typescript
const generateClassName = (): string | null => {
  // Function body...
};
```

The function body determines the className based on the props and active provider and returns it.

#### Rendering

Finally, the `StyleComponent` is rendered with the updated className and other props:

```typescript
return (
  <Element
    {...domProps}
    className={className}
    ref={ref}
    data-component={componentName}
  >
    {children}
  </Element>
);
```

The `Element` represents the component type or intrinsic element specified by the `as` prop. The `domProps` object spreads the props for the DOM element, and the `className`, `ref`, and `data-component` props are passed as well. The `children` are rendered inside the component.

### Export

The `DynamicStyles` component is exported as the default export of the module:

```typescript
export default DynamicStyles;
```

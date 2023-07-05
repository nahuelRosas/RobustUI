import {
  RecoveryBreakPointValue,
  RecoveryActiveProvider,
  InjectCSS,
  RecoveryLanguage,
} from "@robust/tools";
// Importing dependencies from "@robust/tools"

import { generateId, safeJSON, handleError } from "@robust/functions";
// Importing dependencies from "@robust/functions"

import { useIsomorphicLayoutEffect } from "@robust/hooks";
// Importing the "useIsomorphicLayoutEffect" hook from "@robust/hooks"

import React, { forwardRef, useRef, useEffect } from "react";
// Importing React, "forwardRef", "useRef", and "useEffect" from "react"

import { cssGenerators, CssPropertyMappings } from "@robust/theme";
// Importing "CssPropertyMappings" from "@robust/theme"

import { BaseProps, DynamicStyles } from "./types";
// Importing "BaseProps" from a local file called "types"

/**
 * A higher-order component that dynamically generates CSS styles based on props and injects them into the DOM.
 * @param Component - The component to wrap with dynamic styles.
 * @returns A wrapped component with dynamically generated styles.
 */

export function DynamicStyles<T extends object>({
  Component,
  OmitProvider,
}: DynamicStyles<T>): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<BaseProps & T> & React.RefAttributes<unknown>
> {
  // Create a forwardRef component that wraps the original component
  const StyleComponent = forwardRef<unknown, BaseProps & T>(function (
    {
      as: Element = Component,
      componentName = Component as string,
      children,
      multiLanguage,
      ...props
    },
    ref
  ): JSX.Element | null {
    const classNameRef = useRef<string | null>(null);
    // Reference to hold the generated className

    const previousPropsRef =
      useRef<
        Omit<
          BaseProps & T,
          "as" | "componentName" | "children" | "multiLanguage"
        >
      >(props);
    // Reference to hold the previous props of the component

    const breakPoint = RecoveryBreakPointValue();
    // Retrieve the current breakpoint value using a recovery mechanism

    const activeProvider = RecoveryActiveProvider();
    // Retrieve the current active provider using a recovery mechanism

    const language = RecoveryLanguage();
    // Generate a unique className based on the component and props
    const generateClassName = () => {
      try {
        const ID = generateId({
          object: {
            component: Element,
            props: props,
          },
          prefix: `Robust-CSS-${componentName}`,
        });
        return ID;
        // Generate a unique ID based on the component and its props
      } catch (error) {
        handleError({ message: error as string });
        // Handle any error that occurs during ID generation
        return null;
      }
    };

    const className = classNameRef.current || generateClassName();
    // Get the current className or generate a new one if it doesn't exist
    classNameRef.current = className;

    const previousClassName = useRef<string | null>(className);
    // Reference to hold the previous className

    const previousProps = previousPropsRef.current;
    previousPropsRef.current = props;
    // Update the previousProps reference with the current props

    // Filter out props that are not valid CSS properties or have "str" or "string" suffix
    const domProps = Object.entries(props).reduce((acc, [key, value]) => {
      let STRforced = false;
      // Flag to indicate if "str" or "string" is forced as a suffix

      const CTString = key
        .split(/(?=[A-Z])/)
        .filter((item) => {
          const itemLowerCase = item.toLowerCase();
          if (itemLowerCase === "str" || itemLowerCase === "string") {
            STRforced = true;
          }
          return itemLowerCase !== "str" && itemLowerCase !== "string";
        })
        .join("-")
        .toLowerCase();
      // Convert the key into kebab-case format

      if (
        CTString in CssPropertyMappings ||
        key in CssPropertyMappings ||
        key in cssGenerators ||
        CTString in cssGenerators ||
        STRforced
      ) {
        return acc;
        // Skip the prop if it's a valid CSS property or has "str" or "string" suffix
      }
      return { ...acc, [key]: value };
      // Include the prop in the filtered domProps object
    }, {});

    // useEffect that handles the injection of CSS styles
    useIsomorphicLayoutEffect(() => {
      try {
        // Check if the props have changed
        if (
          safeJSON({ object: previousProps }) !== safeJSON({ object: props })
        ) {
          // If props have changed, generate a new className
          const newClassName = generateClassName();
          classNameRef.current = newClassName;
          previousClassName.current = newClassName;
        }

        // Inject CSS styles based on the className and component props
        InjectCSS({
          classSelector: classNameRef.current as string,
          componentProps: props as Record<string, string> | string,
          breakPoint,
        });
        // Inject the CSS styles into the DOM based on the generated className and props
      } catch (error) {
        handleError({ message: error as string });
        // Handle any error that occurs during CSS injection
      }
    }, [
      componentName,
      previousClassName.current,
      previousProps,
      props,
      breakPoint,
    ]);

    // useEffect that checks if the component is mounted and sets the mounted state
    useIsomorphicLayoutEffect(() => {
      try {
        if (activeProvider || OmitProvider) {
          // The component is mounted
        } else {
          handleError({
            message: `The component ${componentName} is not mounted, please wrap it with a Provider`,
          });
          // Handle the case when the component is not mounted
        }
      } catch (error) {
        handleError({ message: error as string });
        // Handle any error that occurs during the check
      }
    }, [componentName, activeProvider]);

    // If the component is not mounted, return null
    if (!activeProvider && !OmitProvider) return null;

    // Render the wrapped component with the generated className and other props
    return (
      <Element className={className} ref={ref} {...domProps}>
        {multiLanguage &&
          language &&
          multiLanguage[language as keyof typeof multiLanguage]}
        {children}
      </Element>
    );
  });

  // Set the displayName of the StyleComponent for easier debugging
  StyleComponent.displayName = `DynamicStyles(${Component as string})`;
  // Set the displayName of the StyleComponent

  return StyleComponent;
  // Return the StyleComponent as the result of the DynamicStyles function
}

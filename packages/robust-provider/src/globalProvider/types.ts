import { ComponentClass, FunctionComponent, ReactNode, Ref } from "react";
// Importing the "Ref" type from "react"

import { CssPropertyMappings, defaultTheme } from "@robust/theme";
import { NextComponentType, NextPageContext } from "next";
// Importing "CssPropertyMappings" and "Theme" from "@robust/theme"

export type ThemeType = typeof defaultTheme;
// Creating a type alias "ThemeType" that represents the type of "Theme"

type ConstructorProps<T> = {
  [key: string]: T;
};
// Defining a type "ConstructorProps" that represents constructor properties of a generic type "T"

type CssPropertyMapping = {
  [Key in keyof typeof CssPropertyMappings]?: (typeof CssPropertyMappings)[Key] extends keyof ThemeType
    ?
        | keyof ThemeType[(typeof CssPropertyMappings)[Key]]
        | ConstructorProps<keyof ThemeType[(typeof CssPropertyMappings)[Key]]>
    : string | ConstructorProps<string>;
};
// Defining a type "CssPropertyMapping" that maps CSS property names to their corresponding values in the theme

type CustomHTMLAttributes<T> = React.HTMLAttributes<T> & CssPropertyMapping;
// Defining a type "CustomHTMLAttributes" that extends the standard HTML attributes with CSS property mappings

export interface BaseProps extends CustomHTMLAttributes<HTMLElement> {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  componentName?: string;
  ref?: Ref<unknown> | undefined;
  isDraggable?: boolean | undefined;
  [key: string]: unknown;
}
// Defining an interface "BaseProps" that extends the custom HTML attributes and includes additional props for the base component

/**
 * Props for the GlobalProvider component.
 */
export interface GlobalProviderPropsWithoutBase
  extends Omit<BaseProps, "children"> {
  children:
    | ReactNode
    | ComponentClass<NextComponentType<NextPageContext, any, any>, any>
    | FunctionComponent<NextComponentType<NextPageContext, any, any>>;
}

export type GlobalProviderProps = GlobalProviderPropsWithoutBase & BaseProps;

import { DynamicStyles } from "constructor";
import { ButtonT } from "../types";
import { Spinner } from "../spinner";
import { Text } from "../typography/text";
import { colorSchemaTheme, colors } from "theme";
const Component = DynamicStyles({
  Component: "button",
});

export function Button({
  children,
  onClick,
  isDisabled,
  colorSchema = "red",
  isLoading,
  variant = "normal",
  ...props
}: ButtonT): JSX.Element {
  const templateButton =
    colorSchemaTheme[colorSchema as keyof typeof colorSchemaTheme].button[
      variant as keyof (typeof colorSchemaTheme)["red"]["button"]
    ];

  const templateSpinner =
    colorSchemaTheme[colorSchema as keyof typeof colorSchemaTheme].spinner[
      variant as keyof (typeof colorSchemaTheme)["red"]["spinner"]
    ];

  return (
    <Component
      backgroundStr={templateButton.background}
      colorStr={templateButton.color}
      border={templateButton.border}
      disabled={isDisabled}
      onClick={onClick}
      minWidth="100px"
      minHeight="48px"
      justifyContent="center"
      componentName="Button"
      lineHeight="13.37px"
      alignItems="center"
      position="relative"
      borderRadius="16px"
      cursor="pointer"
      hover={{
        backgroundStr: templateButton.color,
        colorStr: templateButton.background,
      }}
      fontWeight="600"
      margin="0.2rem"
      fontSize="16px"
      display="flex"
      outline="none"
      py={isLoading ? "0.5rem" : "0%"}
      {...props}
    >
      {isLoading && (
        <Spinner
          size="1.5rem"
          margin="auto"
          position="relative"
          display={isLoading ? "flex" : "none"}
          model="A"
          colorStr={templateSpinner.color}
          altColor={templateSpinner.altColor as keyof typeof colors}
        />
      )}
      {!isLoading && (
        <Text display={!isLoading ? "flex" : "none"} position="relative">
          {children}
        </Text>
      )}
    </Component>
  );
}

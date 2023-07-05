export const cssGenerators = {
  position: (propValue: string): string => `position: ${propValue};`,
  marginLeft: (propValue: string): string => `margin-left: ${propValue};`,
  marginRight: (propValue: string): string => `margin-right: ${propValue};`,
  marginTop: (propValue: string): string => `margin-top: ${propValue};`,
  marginBottom: (propValue: string): string => `margin-bottom: ${propValue};`,
  paddingLeft: (propValue: string): string => `padding-left: ${propValue};`,
  paddingRight: (propValue: string): string => `padding-right: ${propValue};`,
  flexDirection: (propValue: string): string => `flex-direction: ${propValue};`,
  paddingTop: (propValue: string): string => `padding-top: ${propValue};`,
  paddingBottom: (propValue: string): string => `padding-bottom: ${propValue};`,
  background: (propValue: string): string => `background: ${propValue};`,
  backgroundColor: (propValue: string): string =>
    `background-color: ${propValue};`,
  opacity: (propValue: string): string => `opacity: ${propValue};`,
  padding: (propValue: string): string => `padding: ${propValue};`,
  margin: (propValue: string): string => `margin: ${propValue};`,
  left: (propValue: string): string => `left: ${propValue};`,
  right: (propValue: string): string => `right: ${propValue};`,
  top: (propValue: string): string => `top: ${propValue};`,
  bottom: (propValue: string): string => `bottom: ${propValue};`,
  border: (propValue: string): string => `border: ${propValue};`,
  color: (propValue: string): string => `color: ${propValue};`,
  width: (propValue: string): string => `width: ${propValue};`,
  height: (propValue: string): string => `height: ${propValue};`,
  transition: (propValue: string): string => `transition: ${propValue};`,
  display: (propValue: string): string => `display: ${propValue};`,
  fontSize: (propValue: string): string => `font-size: ${propValue};`,
  fontWeight: (propValue: string): string => `font-weight: ${propValue};`,
  textAlign: (propValue: string): string => `text-align: ${propValue};`,
  textDecoration: (propValue: string): string =>
    `text-decoration: ${propValue};`,
  mx: (propValue: string): string =>
    `margin-left: ${propValue}; margin-right: ${propValue};`,
  my: (propValue: string): string =>
    `margin-top: ${propValue}; margin-bottom: ${propValue};`,
  px: (propValue: string): string =>
    `padding-left: ${propValue}; padding-right: ${propValue};`,
  py: (propValue: string): string =>
    `padding-top: ${propValue}; padding-bottom: ${propValue};`,
  pb: (propValue: string): string => `padding-bottom: ${propValue};`,
  pr: (propValue: string): string => `padding-right: ${propValue};`,
  mb: (propValue: string): string => `margin-bottom: ${propValue};`,
  pl: (propValue: string): string => `padding-left: ${propValue};`,
  mr: (propValue: string): string => `margin-right: ${propValue};`,
  ml: (propValue: string): string => `margin-left: ${propValue};`,
  pt: (propValue: string): string => `padding-top: ${propValue};`,
  mt: (propValue: string): string => `margin-top: ${propValue};`,
  bg: (propValue: string): string => `background: ${propValue};`,
  p: (propValue: string): string => `padding: ${propValue};`,
  m: (propValue: string): string => `margin: ${propValue};`,
  flexShrink: (propValue: string): string => `flex-shrink: ${propValue};`,
  zIndex: (propValue: string): string => `z-index: ${propValue};`,
  fontStyle: (propValue: string): string => `font-style: ${propValue};`,
  optimizedWidth: (): string => `width: -moz-available;
  width: -webkit-fill-available;
  `,
  optimizedHeight: (): string => `height: -moz-available;
  height: -webkit-fill-available;
  `,
  alignContent: (propValue: string): string => `align-content: ${propValue};`,
  alignItems: (propValue: string): string => `align-items: ${propValue};`,
};

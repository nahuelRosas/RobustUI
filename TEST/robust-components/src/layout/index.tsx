import { BasePropsT } from "constructor";
import { Factory } from "./factory";

export function Grid({ children, ...props }: BasePropsT): JSX.Element {
  return (
    <Factory
      componentName="Grid"
      display="grid"
      position="static"
      gridGap="0px"
      gridAutoFlow="row"
      {...props}
    >
      {children}
    </Factory>
  );
}

export function Flex({ children, ...props }: BasePropsT): JSX.Element {
  return (
    <Factory
      componentName="Flex"
      display="flex"
      flexDirection="row"
      justifyContent="flexStart"
      alignItems="flexStart"
      {...props}
    >
      {children}
    </Factory>
  );
}

export function Block({ children, ...props }): JSX.Element {
  return (
    <Factory componentName="Block" display="block" position="static" {...props}>
      {children}
    </Factory>
  );
}

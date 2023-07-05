import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DynamicStyles } from "./";
import { defaultTheme } from "@robust/theme";

describe("DynamicStyles", () => {
  const ButtonComponent = DynamicStyles({
    Component: "button",
    OmitProvider: true,
  });
  const ButtonComponentWithProvider = DynamicStyles({
    Component: "button",
    OmitProvider: false,
  });

  it("Renders the wrapped component with the specified props", () => {
    render(
      <ButtonComponent componentName="TEST" color="white" backgroundColor="red">
        <span>Button Content</span>
      </ButtonComponent>
    );

    const wrappedComponent = screen.getByText("Button Content").parentElement;
    expect(wrappedComponent).toBeInTheDocument();
    expect(wrappedComponent).toHaveStyle({
      color: "white",
      backgroundColor: "red",
    });
  });

  it("Renders the wrapped component with the specified props", () => {
    render(
      <ButtonComponent
        componentName="TEST2"
        color="blue"
        backgroundColor="green"
      >
        <span>Button Content</span>
      </ButtonComponent>
    );

    const wrappedComponent = screen.getByText("Button Content").parentElement;
    expect(wrappedComponent).toBeInTheDocument();
    expect(wrappedComponent).toHaveStyle({
      color: "blue",
      backgroundColor: "green",
    });
  });

  it("Throws an error when OmitProvider is set to true", () => {
    expect(() => {
      render(
        <ButtonComponentWithProvider
          componentName="TEST"
          color="black"
          backgroundColor="yellow"
        >
          <span>Button Content</span>
        </ButtonComponentWithProvider>
      );
    }).toThrowError(
      "Error: The component TEST is not mounted, please wrap it with a Provider"
    );
  });
});

import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { TabsContainer } from "../../containers";
import theme from "../../theme/theme";

function renderComponent(component) {
  return {
    ...render(<ThemeProvider theme={theme}>{component}</ThemeProvider>),
  };
}

describe("Tabs container", () => {
  const setActiveTab = jest.fn();
  const initialTabs = [
    { title: "First title", value: "first_value" },
    { title: "Second title", value: "second_value" },
    { title: "Third title", value: "third_value" },
  ];

  it("rendering correctly", () => {
    const { getByText } = renderComponent(
      <TabsContainer
        tabs={initialTabs}
        setActiveTab={setActiveTab}
        active={"first_value"}
      />,
    );

    expect(getByText("First title")).toBeTruthy();
    expect(getByText("Second title")).toBeTruthy();
    expect(getByText("Third title")).toBeTruthy();
  });
});

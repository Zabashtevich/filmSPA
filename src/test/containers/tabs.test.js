import { act, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { TabsContainer } from "../../containers";
import theme from "../../theme/theme";

function renderComponent(component) {
  return {
    ...render(<ThemeProvider theme={theme}>{component}</ThemeProvider>),
  };
}

describe("Tabs container", () => {
  const setActiveTab = jest.fn();
  const initialTabs = {
    type: "actor",
    array: [
      { title: "First title", value: "first_value" },
      { title: "Second title", value: "second_value" },
      { title: "Third title", value: "third_value" },
    ],
  };

  it("rendering correctly", () => {
    const { getByText } = renderComponent(
      <TabsContainer
        tabs={initialTabs}
        setActiveTab={setActiveTab}
        active={"first_value"}
      />,
    );

    expect(getByText("actor")).toBeTruthy();
    expect(getByText("First title")).toBeTruthy();
    expect(getByText("Second title")).toBeTruthy();
    expect(getByText("Third title")).toBeTruthy();
  });

  it("has correst styles on anchors", () => {
    const { getByText } = renderComponent(
      <TabsContainer
        tabs={initialTabs}
        setActiveTab={setActiveTab}
        active={"first_value"}
      />,
    );

    expect(getByText("First title")).toHaveStyle("background-color: white");
    expect(getByText("First title")).toHaveStyle(
      "border-top-left-radius: 0.4rem",
    );
    expect(getByText("First title")).toHaveStyle(
      "border-bottom-left-radius: 0.4rem",
    );

    expect(getByText("Second title")).toHaveStyle("background-color: #1f1f1f");

    expect(getByText("Third title")).toHaveStyle("background-color: #1f1f1f");
    expect(getByText("Third title")).toHaveStyle(
      "border-top-right-radius: 0.4rem",
    );
    expect(getByText("Third title")).toHaveStyle(
      "border-bottom-right-radius: 0.4rem",
    );
  });

  it("contains correct working login", () => {
    const { getByText } = renderComponent(
      <TabsContainer
        tabs={initialTabs}
        setActiveTab={setActiveTab}
        active={"first_value"}
      />,
    );

    act(() => userEvent.click(getByText("Second title")));
    expect(setActiveTab).toHaveBeenCalled();
    expect(setActiveTab).toHaveBeenCalledTimes(1);
    expect(setActiveTab).toHaveBeenCalledWith("second_value");

    act(() => userEvent.click(getByText("Third title")));
    expect(setActiveTab).toHaveBeenCalled();
    expect(setActiveTab).toHaveBeenCalledTimes(2);
    expect(setActiveTab).toHaveBeenCalledWith("third_value");
  });
});

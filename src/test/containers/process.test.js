import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { ProcessContext } from "./../../context/process-context/context";
import theme from "./../../theme/theme";
import { ProcessContainer } from "./../../containers";
import "@testing-library/jest-dom";

function renderComponent(initialContext) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <ProcessContext.Provider value={initialContext}>
          <ProcessContainer />
        </ProcessContext.Provider>
      </ThemeProvider>,
    ),
  };
}

describe("Process container", () => {
  it("not mounted without reason", () => {
    const initialState = { visible: false, message: null };

    const { queryByTestId } = renderComponent([initialState, null]);

    expect(queryByTestId("process-container")).toBeNull();
  });

  it("mounted on call", () => {
    const initialState = { processing: true, message: "Mocked message" };

    const { getByTestId, getByText } = renderComponent([initialState, null]);

    expect(getByTestId("process-container")).toBeTruthy();
    expect(getByText("Mocked message")).toBeTruthy();
    expect(getByTestId("process-spinner")).toBeTruthy();

    expect(getByTestId("process-container")).toHaveStyle(
      "background-color: #1f1f1f",
    );
  });
});

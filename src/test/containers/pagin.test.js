import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";
import { range } from "../../utils";
import { PaginContainer } from "./../../containers";
import { PaginContext } from "./../../context/pagin-context/context";

function renderPaginContainer(state, fn = null) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <PaginContext.Provider value={[state, fn]}>
          <PaginContainer />
        </PaginContext.Provider>
      </ThemeProvider>,
    ),
  };
}

describe("Pagin container", () => {
  it("render correctly while loading", () => {
    const loadingContextState = { loading: true, amount: null, active: 1 };

    const { getAllByTestId } = renderPaginContainer(loadingContextState);
    expect(getAllByTestId("pagin-skeleton")).toBeTruthy();
    expect(getAllByTestId("pagin-skeleton")).toHaveLength(10);
  });

  it("render correct amount of elements", () => {
    const afterLoadingState = { loading: false, amount: 10, active: 1 };

    const { getByText, queryAllByTestId } = renderPaginContainer(
      afterLoadingState,
    );
    expect(queryAllByTestId("pagin-skeleton")).toHaveLength(0);
    range(1, 10).map((item) => {
      expect(getByText(`${item}`)).toBeTruthy();
    });
  });

  it("switch active item correctly", () => {
    const afterLoadingState = { loading: false, amount: 10, active: 1 };
    const setPaginState = jest.fn();

    const { getByText } = renderPaginContainer(
      afterLoadingState,
      setPaginState,
    );
    userEvent.click(getByText("2"));
    expect(setPaginState).toHaveBeenCalledTimes(1);
    userEvent.click(getByText("3"));
    expect(setPaginState).toHaveBeenCalledTimes(2);
    userEvent.click(getByText("4"));
    expect(setPaginState).toHaveBeenCalledTimes(3);
  });

  it("show dummy shortcuts correctly rendering when amount of items > 10", () => {
    const afterLoadingState = { loading: false, amount: 100, active: 50 };

    const { getByText, getByTestId } = renderPaginContainer(afterLoadingState);

    range(46, 10).map((item) => {
      expect(getByText(`${item}`)).toBeTruthy();
    });
    expect(getByTestId("dummy-right")).toBeTruthy();
    expect(getByTestId("dummy-right").textContent).toBe("100");
    expect(getByTestId("dummy-left")).toBeTruthy();
    expect(getByTestId("dummy-left").textContent).toBe("1");
  });
});

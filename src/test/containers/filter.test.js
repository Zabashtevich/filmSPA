import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import theme from "./../../theme/theme";
import { FilterContainer } from "../../containers";

function renderComponent(props) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <FilterContainer {...props} />
      </ThemeProvider>,
    ),
  };
}

describe("Filter container", () => {
  const setFilterSettings = jest.fn();
  it("renders full content", () => {
    const { getByText, getByTestId, getAllByText } = renderComponent({
      filterSettings: {
        sortBy: "date",
        type: "all",
        period: { start: "all", end: "all" },
      },
      setFilterSettings,
    });

    expect(getByTestId(/filter-container/i)).toBeTruthy();
    expect(getByText(/sort by:/i)).toBeTruthy();
    expect(getByText(/date/i)).toBeTruthy();
    expect(getByText(/popularity/i)).toBeTruthy();
    expect(getByText(/your vote value/i)).toBeTruthy();
    expect(getByText(/amount of votes/i)).toBeTruthy();
    expect(getByText(/vote average/i)).toBeTruthy();

    expect(getByText(/movie/i)).toBeTruthy();
    expect(getByText(/tv/i)).toBeTruthy();

    expect(getByText(/period/i)).toBeTruthy();
    expect(getByText(/from/i)).toBeTruthy();
    expect(getAllByText(/all/i)).toHaveLength(3);
    expect(getAllByText(/1950/i)).toHaveLength(2);
    expect(getAllByText(/1951/i)).toHaveLength(2);
    expect(getAllByText(/1952/i)).toHaveLength(2);
    expect(getAllByText(/1953/i)).toHaveLength(2);
    expect(getAllByText(/1954/i)).toHaveLength(2);
  });

  it("contains correctly working filter switcher logic", () => {
    const { getByText, getByTestId, getAllByText } = renderComponent({
      filterSettings: {
        sortBy: "date",
        type: "all",
        period: { start: "all", end: "all" },
      },
      setFilterSettings,
    });

    expect(setFilterSettings).not.toHaveBeenCalled();
  });
});

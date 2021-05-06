import { act, fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import theme from "../../../theme/theme";
import { FilterContainer } from "../../../containers";

function renderComponent(props) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <FilterContainer {...props} />
      </ThemeProvider>,
    ),
  };
}

describe("Filter container has styles on selected filter items", () => {
  const setPrimaryYear = jest.fn();
  const setSecondaryYear = jest.fn();
  const setSortBy = jest.fn();
  const setType = jest.fn();

  it("", () => {
    const { getByText, getAllByText } = renderComponent({
      filterSettings: {
        sortBy: "date",
        type: "all",
        primaryYear: "all",
        secondaryYear: "all",
      },
      setPrimaryYear,
      setSecondaryYear,
      setSortBy,
      setType,
    });

    expect(getByText(/date/i)).toHaveStyle("background-color: #1f1f1f");
    expect(getAllByText(/all/i)[0]).toHaveStyle("background-color: #1f1f1f");
  });

  it("", () => {
    const { getByText } = renderComponent({
      filterSettings: {
        sortBy: "popularity",
        type: "movie",
        primaryYear: "all",
        secondaryYear: "all",
      },
      setPrimaryYear,
      setSecondaryYear,
      setSortBy,
      setType,
    });

    expect(getByText(/popularity/i)).toHaveStyle("background-color: #1f1f1f");
    expect(getByText(/movie/i)).toHaveStyle("background-color: #1f1f1f");
  });

  it("", () => {
    const { getByText, un } = renderComponent({
      filterSettings: {
        sortBy: "voteCount",
        type: "tv",
        primaryYear: "all",
        secondaryYear: "all",
      },
      setPrimaryYear,
      setSecondaryYear,
      setSortBy,
      setType,
    });

    expect(getByText(/amount of votes/i)).toHaveStyle(
      "background-color: #1f1f1f",
    );
    expect(getByText(/tv/i)).toHaveStyle("background-color: #1f1f1f");
  });
});

import { act, fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import theme from "../../../theme/theme";
import { FilterContainer } from "../../../containers";
import userEvent from "@testing-library/user-event";

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
  const setPrimaryYear = jest.fn();
  const setSecondaryYear = jest.fn();
  const setSortBy = jest.fn();
  const setType = jest.fn();

  it("renders full content", () => {
    const { getByText, getByTestId, getAllByText } = renderComponent({
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

  it("contains correctly working sort by switcher", async () => {
    const { getByText } = renderComponent({
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

    expect(setSortBy).not.toHaveBeenCalled();

    await act(async () => {
      userEvent.click(getByText(/popularity/i));
    });

    expect(setSortBy).toHaveBeenCalled();
    expect(setSortBy).toHaveBeenCalledTimes(1);
    expect(setSortBy).toHaveBeenCalledWith("popularity");

    await act(async () => {
      userEvent.click(getByText(/your vote value/i));
    });

    expect(setSortBy).toHaveBeenCalled();
    expect(setSortBy).toHaveBeenCalledTimes(2);
    expect(setSortBy).toHaveBeenCalledWith("yourVoteValue");

    await act(async () => {
      userEvent.click(getByText(/vote average/i));
    });

    expect(setSortBy).toHaveBeenCalled();
    expect(setSortBy).toHaveBeenCalledTimes(3);
    expect(setSortBy).toHaveBeenCalledWith("voteAverage");
  });

  it("contains correctly working type switcher", async () => {
    const { getByText } = renderComponent({
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

    expect(setType).not.toHaveBeenCalled();

    await act(async () => {
      userEvent.click(getByText(/movie/i));
    });

    expect(setType).toHaveBeenCalled();
    expect(setType).toHaveBeenCalledTimes(1);
    expect(setType).toHaveBeenCalledWith("movie");

    await act(async () => {
      userEvent.click(getByText(/tv/i));
    });

    expect(setType).toHaveBeenCalled();
    expect(setType).toHaveBeenCalledTimes(2);
    expect(setType).toHaveBeenCalledWith("tv");
  });

  it("contains correctly working primary year switcher", async () => {
    const { getByText, getByTestId } = renderComponent({
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

    expect(setPrimaryYear).not.toHaveBeenCalled();

    await act(async () => {
      fireEvent.change(getByTestId(/primary-year-select/i), {
        target: { value: "1950" },
      });
    });

    expect(setPrimaryYear).toHaveBeenCalled();
    expect(setPrimaryYear).toHaveBeenCalledTimes(1);
    expect(setPrimaryYear).toHaveBeenCalledWith("1950");

    await act(async () => {
      fireEvent.change(getByTestId(/primary-year-select/i), {
        target: { value: "1951" },
      });
    });

    expect(setPrimaryYear).toHaveBeenCalled();
    expect(setPrimaryYear).toHaveBeenCalledTimes(2);
    expect(setPrimaryYear).toHaveBeenCalledWith("1951");

    await act(async () => {
      fireEvent.change(getByTestId(/primary-year-select/i), {
        target: { value: "1953" },
      });
    });

    expect(setPrimaryYear).toHaveBeenCalled();
    expect(setPrimaryYear).toHaveBeenCalledTimes(3);
    expect(setPrimaryYear).toHaveBeenCalledWith("1953");

    await act(async () => {
      fireEvent.change(getByTestId(/primary-year-select/i), {
        target: { value: "1954" },
      });
    });

    expect(setPrimaryYear).toHaveBeenCalled();
    expect(setPrimaryYear).toHaveBeenCalledTimes(4);
    expect(setPrimaryYear).toHaveBeenCalledWith("1954");
  });

  it("contains correctly working primary year switcher", async () => {
    const { getByText, getByTestId } = renderComponent({
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

    expect(setSecondaryYear).not.toHaveBeenCalled();

    await act(async () => {
      fireEvent.change(getByTestId(/secondary-year-select/i), {
        target: { value: "1950" },
      });
    });

    expect(setSecondaryYear).toHaveBeenCalled();
    expect(setSecondaryYear).toHaveBeenCalledTimes(1);
    expect(setSecondaryYear).toHaveBeenCalledWith("1950");

    await act(async () => {
      fireEvent.change(getByTestId(/secondary-year-select/i), {
        target: { value: "1951" },
      });
    });

    expect(setSecondaryYear).toHaveBeenCalled();
    expect(setSecondaryYear).toHaveBeenCalledTimes(2);
    expect(setSecondaryYear).toHaveBeenCalledWith("1951");

    await act(async () => {
      fireEvent.change(getByTestId(/secondary-year-select/i), {
        target: { value: "1953" },
      });
    });

    expect(setSecondaryYear).toHaveBeenCalled();
    expect(setSecondaryYear).toHaveBeenCalledTimes(3);
    expect(setSecondaryYear).toHaveBeenCalledWith("1953");

    await act(async () => {
      fireEvent.change(getByTestId(/secondary-year-select/i), {
        target: { value: "1954" },
      });
    });

    expect(setSecondaryYear).toHaveBeenCalled();
    expect(setSecondaryYear).toHaveBeenCalledTimes(4);
    expect(setSecondaryYear).toHaveBeenCalledWith("1954");
  });
});

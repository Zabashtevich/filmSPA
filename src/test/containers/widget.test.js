import { act, render, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { useList } from "../../hooks";

import { WidgetContainer } from "./../../containers";
import theme from "./../../theme/theme";

jest.mock("./../../hooks", () => ({ useList: jest.fn() }));

function renderComponent(props) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <WidgetContainer {...props} />
      </ThemeProvider>,
    ),
  };
}

describe("Widget container", () => {
  jest.spyOn(global.Date, "now").mockImplementation(() => new Date(0));

  const setList = jest.fn();
  const mockedData = {
    id: 3,
    title: "dummy title",
    vote_average: 5.5,
    vote_count: 5000,
    release_date: "2200-10-10",
    popularity: 0.1,
  };
  const mockedLists = {
    favorites: [{ id: 2, title: "dummy title 2" }],
    userlists: [{ id: 1, name: "dummy list name 1", content: [] }],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders outer part without popup", () => {
    const { getByText, queryByTestId } = renderComponent({
      lists: mockedLists,
      data: mockedData,
    });

    expect(getByText(/add to list/i)).toBeTruthy();
    expect(queryByTestId(/widget-popup/i)).toBeNull();
  });

  it("show/hide popup after user click", async () => {
    useList.mockReturnValue([setList]);

    const { getByText, getByTestId, queryByTestId, debug } = renderComponent({
      lists: mockedLists,
      data: mockedData,
    });

    await act(async () => {
      userEvent.click(getByText(/add to list/i));
    });

    expect(getByTestId(/widget-popup/i)).toBeTruthy();
    expect(getByText(/favorites/i)).toBeTruthy();
    expect(getByText(/your lists:/i)).toBeTruthy();
    expect(getByText(/dummy list name 1/i)).toBeTruthy();

    expect(useList).toHaveBeenCalledWith("favorites");
    expect(useList).toHaveBeenCalledWith("userlists");

    await act(async () => {
      userEvent.click(getByText(/add to list/i));
    });

    await waitForElementToBeRemoved(queryByTestId(/widget-popup/i)).then(() => {
      expect(queryByTestId(/widget-popup/i)).toBeNull();
    });
  });

  it("contains correctly working favorite logic", async () => {
    useList.mockReturnValue([setList]);

    const { getByText } = renderComponent({
      lists: mockedLists,
      data: mockedData,
    });

    expect(setList).not.toHaveBeenCalled();

    await act(async () => {
      userEvent.click(getByText(/add to list/i));
    });

    await act(async () => {
      userEvent.click(getByText(/favorite/i));
    });

    expect(setList).toHaveBeenCalled();
    expect(setList).toHaveBeenCalledWith([
      { id: 2, title: "dummy title 2" },
      {
        value: null,
        type: "movie",
        id: 3,
        title: "dummy title",
        vote_average: 5.5,
        vote_count: 5000,
        release_date: "2200-10-10",
        popularity: 0.1,
        date: new Date(0),
      },
    ]);
  });

  it("contains correctly working unfavorite logic", async () => {
    useList.mockReturnValue([setList]);

    const { getByText } = renderComponent({
      lists: {
        favorites: [{ id: 3, title: "dummy title 3" }],
        userlists: [{ id: 1, name: "dummy list name 1", content: [] }],
      },
      data: mockedData,
    });

    expect(setList).not.toHaveBeenCalled();

    await act(async () => {
      userEvent.click(getByText(/add to list/i));
    });

    await act(async () => {
      userEvent.click(getByText(/favorite/i));
    });

    expect(setList).toHaveBeenCalled();
    expect(setList).toHaveBeenCalledWith([]);
  });

  it("contains correctly working add to list logic", async () => {
    useList.mockReturnValue([setList]);

    const { getByText } = renderComponent({
      lists: mockedLists,
      data: mockedData,
    });

    expect(setList).not.toHaveBeenCalled();

    await act(async () => {
      userEvent.click(getByText(/add to list/i));
    });

    await act(async () => {
      userEvent.click(getByText(/dummy list name 1/i));
    });

    expect(setList).toHaveBeenCalled();
    expect(setList).toHaveBeenCalledWith([
      {
        id: 1,
        name: "dummy list name 1",
        content: [
          {
            value: null,
            type: "movie",
            id: 3,
            title: "dummy title",
            vote_average: 5.5,
            vote_count: 5000,
            release_date: "2200-10-10",
            popularity: 0.1,
            date: new Date(0),
          },
        ],
      },
    ]);
  });

  it("contains correctly working delete movie from list logic", async () => {
    useList.mockReturnValue([setList]);

    const { getByText } = renderComponent({
      lists: {
        favorites: [],
        userlists: [
          {
            id: 1,
            name: "dummy list name 1",
            content: [
              {
                value: null,
                type: "movie",
                id: 3,
                title: "dummy title",
                vote_average: 5.5,
                vote_count: 5000,
                release_date: "2200-10-10",
                popularity: 0.1,
                date: new Date(0),
              },
            ],
          },
        ],
      },
      data: mockedData,
    });

    expect(setList).not.toHaveBeenCalled();

    await act(async () => {
      userEvent.click(getByText(/add to list/i));
    });

    await act(async () => {
      userEvent.click(getByText(/dummy list name 1/i));
    });

    expect(setList).toHaveBeenCalled();
    expect(setList).toHaveBeenCalledWith([
      {
        id: 1,
        name: "dummy list name 1",
        content: [],
      },
    ]);
  });
});

import { act, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { FilterContainer } from "../../containers";
import { CreditsContext } from "../../context/credits-context/context";
import theme from "../../theme/theme";
import userData from "../../reducers/user-data/index";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { getFiltredArray } from "../../utils";

function renderWithRedux({
  creditsValue,
  initialState,
  store = createStore(combineReducers({ userData }), initialState),
} = {}) {
  return {
    ...render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CreditsContext.Provider value={creditsValue}>
            <FilterContainer />
          </CreditsContext.Provider>
        </Provider>
      </ThemeProvider>,
    ),
    store,
  };
}

jest.mock("./../../utils", () => ({
  range: jest.fn().mockImplementation(() => [1950, 1951, 1952]),
  getFiltredArray: jest.fn().mockImplementation(() => ["dummy data"]),
}));

describe("Filter container", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("correctly mounting and shows skeleton items while loading", () => {
    const loadingState = { userDataLoading: true, votes: null };
    const setCreditsProps = jest.fn();

    const { getByTestId, getByText } = renderWithRedux({
      creditsValue: [null, setCreditsProps],
      initialState: {
        userData: {
          ...loadingState,
        },
      },
    });

    expect(getByTestId("filter-container")).toBeTruthy();
    expect(getByText(/customize your activity list/i)).toBeTruthy();
    expect(getByTestId("filter-skeleton")).toBeTruthy();
    expect(setCreditsProps).not.toHaveBeenCalled();
  });

  it("displays content after loading success", () => {
    const initialState = { userDataLoading: false, votes: ["mocked data"] };
    const setCreditsProps = jest.fn();

    const { getByText, getAllByText, debug } = renderWithRedux({
      creditsValue: [null, setCreditsProps],
      initialState: {
        userData: {
          ...initialState,
        },
      },
    });

    expect(getByText(/sort by/i)).toBeTruthy();
    expect(getByText(/date/i)).toBeTruthy();
    expect(getByText(/vote average/i)).toBeTruthy();
    expect(getByText(/amount of votes/i)).toBeTruthy();

    expect(getByText(/item type/i)).toBeTruthy();
    expect(getAllByText(/all/i)).toHaveLength(3);
    expect(getByText(/tv/i)).toBeTruthy();

    expect(getByText(/period/i)).toBeTruthy();
    expect(getByText(/from/i)).toBeTruthy();
    expect(getByText(/^to$/i)).toBeTruthy();

    expect(getAllByText(/1950/i)).toHaveLength(2);
    expect(getAllByText(/1951/i)).toHaveLength(2);
    expect(getAllByText(/1952/i)).toHaveLength(2);

    expect(setCreditsProps).toHaveBeenCalled();
    expect(setCreditsProps).toHaveBeenLastCalledWith({
      loading: false,
      array: ["dummy data"],
    });
  });

  it("selected elements have styles", () => {
    const initialState = { userDataLoading: false, votes: ["mocked data"] };
    const setCreditsProps = jest.fn();

    const { getByText, getAllByText, debug } = renderWithRedux({
      creditsValue: [null, setCreditsProps],
      initialState: {
        userData: {
          ...initialState,
        },
      },
    });

    expect(getByText(/date/i)).toHaveStyle("background-color: #1f1f1f");
    expect(getAllByText(/all/i)[0]).toHaveStyle("background-color: #1f1f1f");
  });

  it("changes active elements flags", async () => {
    const initialState = { userDataLoading: false, votes: ["mocked data"] };
    const setCreditsProps = jest.fn();

    const { getByText, getAllByText, debug } = renderWithRedux({
      creditsValue: [null, setCreditsProps],
      initialState: {
        userData: {
          ...initialState,
        },
      },
    });

    expect(getFiltredArray).toHaveBeenLastCalledWith(["mocked data"], {
      sortBy: "date",
      itemType: "all",
      start: "all",
      end: "all",
    });

    await act(async () => {
      userEvent.click(getByText(/popularity/i));
    });

    expect(getByText(/date/i)).toHaveStyle("background-color: none");
    expect(getByText(/popularity/i)).toHaveStyle("background-color: #1f1f1f");

    expect(getFiltredArray).toHaveBeenLastCalledWith(["mocked data"], {
      sortBy: "popularity",
      itemType: "all",
      start: "all",
      end: "all",
    });

    await act(async () => {
      userEvent.click(getByText(/your vote value/i));
    });

    expect(getByText(/popularity/i)).toHaveStyle("background-color: none");
    expect(getByText(/your vote value/i)).toHaveStyle(
      "background-color: #1f1f1f",
    );

    expect(getFiltredArray).toHaveBeenLastCalledWith(["mocked data"], {
      sortBy: "yourVoteValue",
      itemType: "all",
      start: "all",
      end: "all",
    });

    await act(async () => {
      userEvent.click(getByText(/movie/i));
    });

    expect(getAllByText(/all/i)[0]).toHaveStyle("background-color: none");
    expect(getByText(/movie/i)).toHaveStyle("background-color: #1f1f1f");

    expect(getFiltredArray).toHaveBeenLastCalledWith(["mocked data"], {
      sortBy: "yourVoteValue",
      itemType: "movie",
      start: "all",
      end: "all",
    });

    act(() => {
      userEvent.click(getByText(/tv/i));
    });

    expect(getByText(/movie/i)).toHaveStyle("background-color: none");
    expect(getByText(/tv/i)).toHaveStyle("background-color: #1f1f1f");

    expect(getFiltredArray).toHaveBeenLastCalledWith(["mocked data"], {
      sortBy: "yourVoteValue",
      itemType: "tv",
      start: "all",
      end: "all",
    });
  });

  it("selects login working correct", async () => {
    const initialState = { userDataLoading: false, votes: ["mocked data"] };
    const setCreditsProps = jest.fn();

    const { getByTestId } = renderWithRedux({
      creditsValue: [null, setCreditsProps],
      initialState: {
        userData: {
          ...initialState,
        },
      },
    });

    expect(getByTestId("select-from").value).toContain("all");
    expect(getByTestId("select-to").value).toContain("all");

    expect(getFiltredArray).toHaveBeenLastCalledWith(["mocked data"], {
      sortBy: "date",
      itemType: "all",
      start: "all",
      end: "all",
    });

    act(() => {
      userEvent.selectOptions(getByTestId("select-from"), ["1950"]);
      userEvent.selectOptions(getByTestId("select-to"), ["1951"]);
    });

    expect(getByTestId("select-from").value).toContain("1950");
    expect(getByTestId("select-to").value).toContain("1951");

    expect(getFiltredArray).toHaveBeenLastCalledWith(["mocked data"], {
      sortBy: "date",
      itemType: "all",
      start: "1950",
      end: "1951",
    });

    act(() => {
      userEvent.selectOptions(getByTestId("select-from"), ["all"]);
      userEvent.selectOptions(getByTestId("select-to"), ["all"]);
    });

    expect(getFiltredArray).toHaveBeenLastCalledWith(["mocked data"], {
      sortBy: "date",
      itemType: "all",
      start: "all",
      end: "all",
    });
  });
});

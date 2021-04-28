import { act, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route } from "react-router";
import { combineReducers, createStore } from "redux";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import userData from "./../../reducers/user-data";
import { useList } from "../../hooks";
import { DetailsPanelContainer } from "./../../containers";
import theme from "./../../theme/theme";
import { useModalContext } from "../../context";

jest.mock("./../../containers/media", () => () => <div />);

jest.mock("./../../hooks", () => ({
  useList: jest.fn(),
}));

jest.mock("./../../context", () => ({
  useModalContext: jest.fn(),
}));

function renderWithRedux({
  initialprops,
  initialState,
  store = createStore(combineReducers({ userData }), initialState),
}) {
  return {
    ...render(
      <MemoryRouter initialEntries={[{ pathname: "/details/movie/123" }]}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Route
              path="/details/:direction/:slug"
              component={() => <DetailsPanelContainer {...initialprops} />}
            />
          </Provider>
        </ThemeProvider>
      </MemoryRouter>,
    ),
  };
}

describe("Details panel container", () => {
  const initialState = {
    backdrop_path: "/backdropsrc",
    title: "dummy title",
    release_date: "2100-10-10",
    vote_average: 8.8,
    vote_count: 1000,
    popularity: 1,
    id: 123,
    belongs_to_collection: {
      backdrop_path: "/collectionsrc",
      id: 1,
      name: "dummy collection",
    },
    images: { posters: [{ file_path: "/postersrc" }] },
  };

  const doEstimate = jest.fn();
  const showErrorModal = jest.fn();

  it("displays skeletons on loading", () => {
    const loadingState = {
      userData: {
        userDataLoading: true,
        userDataExist: false,
        loggedIn: false,
        profile: null,
        lists: { userlists: null, favorites: null, votes: null },
      },
    };
    const { getByTestId, queryByTestId } = renderWithRedux({
      initialprops: { data: null, dataLoading: true },
      initialState: loadingState,
    });

    expect(getByTestId(/details-media-skeleton/i)).toBeTruthy();
    expect(getByTestId(/details-collection-skeleton/i)).toBeTruthy();

    expect(queryByTestId(/details-rating-container/i)).toBeNull();
    expect(queryByTestId(/details-collection-container/i)).toBeNull();

    expect(useList).not.toHaveBeenCalled();
  });

  it("renders full content after loading", () => {
    useModalContext.mockReturnValue([, { showErrorModal }]);
    useList.mockReturnValue([doEstimate]);
    const initialStore = {
      userData: {
        userDataLoading: false,
        userDataExist: true,
        loggedIn: true,
        profile: { displayName: "Zabashtevich" },
        lists: {
          userlists: null,
          favorites: null,
          votes: [{ id: 123, value: 10, date: new Date(0) }],
        },
      },
    };
    const {
      getByTestId,
      queryByTestId,
      getByText,
      getAllByTestId,
    } = renderWithRedux({
      initialprops: {
        data: initialState,
        dataLoading: false,
      },
      initialState: initialStore,
    });

    expect(queryByTestId(/details-media-skeleton/i)).toBeNull();
    expect(queryByTestId(/details-collection-skeleton/i)).toBeNull();

    expect(getByTestId(/details-rating-container/i)).toBeTruthy();
    expect(getByTestId(/details-collection-container/i)).toBeTruthy();

    expect(getByText(/watch collection/i)).toBeTruthy();
    expect(getByText(/belongs to dummy collection/i)).toBeTruthy();
    expect(getByTestId(/details-collection-container/i)).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/original/collectionsrc",
    );
    expect(getByTestId(/collection-button/i)).toHaveAttribute(
      "href",
      "/collection/1",
    );

    expect(getAllByTestId(/star-rating/i)).toHaveLength(10);
    expect(getByText(/8.8/i)).toBeTruthy();
    expect(getByText(/1000/i)).toBeTruthy();
    expect(getByText(/^10$/i)).toBeTruthy();
    expect(getByText(/delete/i)).toBeTruthy();
    expect(getByText(/1970/)).toBeTruthy();

    expect(getByTestId(/rating-average/i)).toHaveStyle("color: green");
  });

  it("contains correctly working estimate logic", async () => {
    jest.spyOn(global.Date, "now").mockImplementation(() => new Date(0));

    useModalContext.mockReturnValue([, { showErrorModal }]);
    useList.mockReturnValue([doEstimate]);

    const initialStore = {
      userData: {
        userDataLoading: false,
        userDataExist: true,
        loggedIn: true,
        profile: { displayName: "Zabashtevich" },
        lists: {
          userlists: null,
          favorites: null,
          votes: [{ id: 123, value: 5, date: new Date(0) }],
        },
      },
    };
    const { getAllByTestId, getByText } = renderWithRedux({
      initialprops: {
        data: initialState,
        dataLoading: false,
      },
      initialState: initialStore,
    });

    expect(getByText(/^5$/)).toBeTruthy();
    expect(getByText(/1970/)).toBeTruthy();

    const stars = getAllByTestId(/star-rating/i);

    await act(async () => {
      userEvent.click(stars[4]);
    });

    expect(doEstimate).toHaveBeenCalled();
    expect(doEstimate).toHaveBeenCalledTimes(1);
    expect(doEstimate).toHaveBeenLastCalledWith({
      votes: [
        {
          date: new Date(0),
          id: 123,
          popularity: 1,
          release_date: "2100-10-10",
          title: "dummy title",
          type: "movie",
          value: 5,
          vote_average: 8.8,
          vote_count: 1000,
        },
      ],
    });

    await act(async () => {
      userEvent.click(stars[7]);
    });

    expect(doEstimate).toHaveBeenCalledTimes(2);
    expect(doEstimate).toHaveBeenLastCalledWith({
      votes: [
        {
          date: new Date(0),
          id: 123,
          popularity: 1,
          release_date: "2100-10-10",
          title: "dummy title",
          type: "movie",
          value: 8,
          vote_average: 8.8,
          vote_count: 1000,
        },
      ],
    });

    await act(async () => {
      userEvent.click(getByText(/delete/i));
    });

    expect(doEstimate).toHaveBeenCalled();
    expect(doEstimate).toHaveBeenCalledTimes(3);
    expect(doEstimate).toHaveBeenCalledWith([]);
  });
});

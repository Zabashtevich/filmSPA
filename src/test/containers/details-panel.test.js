import { act, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route } from "react-router";
import { combineReducers, createStore } from "redux";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import userData from "./../../reducers/user-data";
import userProfile from "./../../reducers/user-profile";
import { useEstimate } from "../../hooks";
import { DetailsPanelContainer } from "./../../containers";
import theme from "./../../theme/theme";
import userEvent from "@testing-library/user-event";

jest.mock("./../../containers/media", () => () => <div />);

jest.mock("./../../hooks", () => ({
  useEstimate: jest.fn(),
}));

function renderComponentWithRedux({
  initialprops,
  initialState,
  store = createStore(combineReducers({ userData, userProfile }), initialState),
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

  const setEstimate = jest.fn();

  it("displays skeletons on loading", () => {
    const loadingStore = {
      userData: { dataLoading: true, votes: null },
      userProfile: { profileLoading: true, profile: null },
    };
    const { getByTestId, queryByTestId } = renderComponentWithRedux({
      initialprops: { data: null, dataLoading: true },
      initialState: loadingStore,
    });

    expect(getByTestId(/details-media-skeleton/i)).toBeTruthy();
    expect(getByTestId(/details-collection-skeleton/i)).toBeTruthy();

    expect(queryByTestId(/details-rating-container/i)).toBeNull();
    expect(queryByTestId(/details-collection-container/i)).toBeNull();

    expect(useEstimate).not.toHaveBeenCalled();
  });

  it("renders full content after loading", () => {
    useEstimate.mockReturnValue([setEstimate]);
    const initialStore = {
      userData: {
        dataLoading: false,
        votes: [{ id: 123, value: 10, date: new Date(0) }],
      },
      userProfile: {
        profileLoading: false,
        profile: { displayName: "Zabashtevich" },
      },
    };
    const {
      getByTestId,
      queryByTestId,
      getByText,
      getAllByTestId,
    } = renderComponentWithRedux({
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

    useEstimate.mockReturnValue([setEstimate]);
    const initialStore = {
      userData: {
        dataLoading: false,
        votes: [{ id: 123, value: 5, date: new Date(0) }],
      },
      userProfile: {
        profileLoading: false,
        profile: { displayName: "Zabashtevich" },
      },
    };
    const { getAllByTestId, getByText, getByTestId } = renderComponentWithRedux(
      {
        initialprops: {
          data: initialState,
          dataLoading: false,
        },
        initialState: initialStore,
      },
    );

    expect(getByText(/^5$/)).toBeTruthy();
    expect(getByText(/1970/)).toBeTruthy();

    const stars = getAllByTestId(/star-rating/i);

    await act(async () => {
      userEvent.click(stars[4]);
    });

    expect(setEstimate).toHaveBeenCalled();
    expect(setEstimate).toHaveBeenCalledTimes(1);
    expect(setEstimate).toHaveBeenLastCalledWith([
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
    ]);

    await act(async () => {
      userEvent.click(stars[7]);
    });

    expect(setEstimate).toHaveBeenCalledTimes(2);
    expect(setEstimate).toHaveBeenLastCalledWith([
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
    ]);

    await act(async () => {
      userEvent.click(getByText(/delete/i));
    });

    expect(setEstimate).toHaveBeenCalled();
    expect(setEstimate).toHaveBeenCalledTimes(3);
    expect(setEstimate).toHaveBeenCalledWith([]);
  });
});

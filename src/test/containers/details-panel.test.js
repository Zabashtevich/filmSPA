import { render } from "@testing-library/react";
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
import { ProcessContext } from "../../context/process-context/context";

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
            <ProcessContext.Provider value={[{ processing: false }]}>
              <Route
                path="/details/:direction/:slug"
                component={() => <DetailsPanelContainer {...initialprops} />}
              />
            </ProcessContext.Provider>
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
});

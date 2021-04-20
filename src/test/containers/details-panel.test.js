import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route } from "react-router";
import { combineReducers, createStore } from "redux";
import { ThemeProvider } from "styled-components";

import userData from "./../../reducers/user-data";
import userProfile from "./../../reducers/user-profile";
import { useEstimate } from "../../hooks";
import { DetailsPanelContainer } from "./../../containers";
import theme from "./../../theme/theme";

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
    const { getByTestId, queryByTestId } = renderComponentWithRedux({
      initialprops: {
        data: {
          backdrop_path: "/backdropsrc",
          belongs_to_collection: {
            backdrop_path: "/collectionsrc",
            id: 1,
            name: "dummy collection",
          },
        },
        dataLoading: true,
      },
      initialState: initialStore,
    });
  });
});

import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { act, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { ThemeProvider } from "styled-components";

import { CreditsContainer } from "../../containers";
import userProfile from "../../reducers/user-profile";
import userData from "../../reducers/user-data";
import {
  useCreditsContext,
  usePaginContext,
  useModalContext,
  useProcessContext,
} from "../../context";
import theme from "../../theme/theme";
import { range } from "../../utils";
import { useEstimate } from "./../../hooks";

function renderComponent({
  initialState,
  store = createStore(combineReducers({ userProfile, userData }), initialState),
} = {}) {
  return {
    ...render(
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CreditsContainer />
          </ThemeProvider>
        </Provider>
      </Router>,
    ),
  };
}

jest.mock("../../containers/pagin", () => () => <div />);
jest.mock("./../../hooks", () => ({
  __esModule: true,
  useEstimate: jest.fn(),
}));
jest.mock("./../../context", () => ({
  __esModule: true,
  useProcessContext: jest.fn(),
  useModalContext: jest.fn(),
  usePaginContext: jest.fn(),
  useCreditsContext: jest.fn(),
}));

describe("Credits container", () => {
  const setPagination = jest.fn();
  const showErrorModal = jest.fn();
  const setEstimate = jest.fn();

  it("renders skeletons on loading", () => {
    useCreditsContext.mockReturnValue([{ creditsLoading: true, array: null }]);
    usePaginContext.mockReturnValue([{ active: null }, setPagination]);

    const initialStore = {
      userData: { profileLoading: true, profile: null },
      userProfile: { userDataLoading: true, votes: null },
    };
    const { getAllByTestId, getByTestId } = renderComponent({
      initialState: initialStore,
    });

    expect(getByTestId("credits-container")).toBeTruthy();
    expect(getAllByTestId("credits-skeleton")).toHaveLength(25);
  });

  //   it("displays credits item after userProfile and userData loadings", async () => {
  //     useEstimate.mockReturnValue([setEstimate]);
  //     const initialStore = {
  //       userData: { userDataLoading: false, votes: [] },
  //       userProfile: { profileLoading: false, profile: {} },
  //     };

  //     const { findAllByText } = renderComponent({
  //       processValue: [{ processing: false }],
  //       modalValue: [null, { showErrorModal }],
  //       paginValue: [{ active: 1 }, setPagination],
  //       creditsValue: [
  //         {
  //           creditsLoading: false,
  //           array: range(1, 25).map((item) => ({
  //             id: item,
  //             type: "tv",
  //             title: `dummy title ${item}`,
  //             release_date: "2020-10-3",
  //             vote_average: 5.2,
  //             vote_count: 1000,
  //           })),
  //         },
  //       ],
  //       initialState: initialStore,
  //     });
  //     expect(await findAllByText("2020")).toHaveLength(25);
  //   });
});

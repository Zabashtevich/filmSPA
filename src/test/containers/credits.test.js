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
import { PaginContext } from "../../context/pagin-context/context";
import { CreditsContext } from "../../context/credits-context/context";
import theme from "../../theme/theme";
import { range } from "../../utils";
import { ModalContext } from "../../context/modal-context/context";
import { useEstimate } from "./../../hooks";
import { ProcessContext } from "../../context/process-context/context";

function renderComponent({
  processValue,
  modalValue,
  paginValue,
  creditsValue,
  initialState,
  store = createStore(combineReducers({ userProfile, userData }), initialState),
} = {}) {
  return {
    ...render(
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <ProcessContext.Provider value={processValue}>
              <ModalContext.Provider value={modalValue}>
                <PaginContext.Provider value={paginValue}>
                  <CreditsContext.Provider value={creditsValue}>
                    <CreditsContainer />
                  </CreditsContext.Provider>
                </PaginContext.Provider>
              </ModalContext.Provider>
            </ProcessContext.Provider>
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

describe("Credits container", () => {
  const setPagination = jest.fn();
  const showErrorModal = jest.fn();
  const setEstimate = jest.fn();

  it("renders skeletons on loading", () => {
    const initialStore = {
      userData: { profileLoading: true, profile: null },
      userProfile: { userDataLoading: true, votes: null },
    };
    const { getAllByTestId, getByTestId } = renderComponent({
      processValue: [{ processing: false }],
      modalValue: [null, { showErrorModal }],
      paginValue: [{ active: null }, setPagination],
      creditsValue: [{ creditsLoading: true, array: null }],
      initialState: initialStore,
    });

    expect(getByTestId("credits-container")).toBeTruthy();
    expect(getAllByTestId("credits-skeleton")).toHaveLength(25);
  });

  it("displays credits item after userProfile and userData loadings", async () => {
    useEstimate.mockReturnValue([setEstimate]);
    const initialStore = {
      userData: { userDataLoading: false, votes: [] },
      userProfile: { profileLoading: false, profile: {} },
    };

    const { findAllByText } = renderComponent({
      processValue: [{ processing: false }],
      modalValue: [null, { showErrorModal }],
      paginValue: [{ active: 1 }, setPagination],
      creditsValue: [
        {
          creditsLoading: false,
          array: range(1, 25).map((item) => ({
            id: item,
            type: "tv",
            title: `dummy title ${item}`,
            release_date: "2020-10-3",
            vote_average: 5.2,
            vote_count: 1000,
          })),
        },
      ],
      initialState: initialStore,
    });
    expect(await findAllByText("2020")).toHaveLength(25);
  });
});

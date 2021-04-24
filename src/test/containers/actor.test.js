import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router";

import { ActorContainer } from "../../containers";
import theme from "./../../theme/theme";
import { useFetch } from "../../hooks";
import { useCreditsContext } from "../../context";
import { render } from "@testing-library/react";

jest.mock("./../../hooks", () => ({ useFetch: jest.fn() }));
jest.mock("./../../context", () => ({ useCreditsContext: jest.fn() }));
jest.mock("./../../containers/credits", () => () => <div />);

function renderComponent() {
  return {
    ...render(
      <MemoryRouter initialEntries={[{ pathname: "/actor/123" }]}>
        <ThemeProvider theme={theme}>
          <Route component={ActorContainer} path="/actor/:slug" />
        </ThemeProvider>
      </MemoryRouter>,
    ),
  };
}

describe("Actor container", () => {
  const setCredits = jest.fn();
  const mockedData = {
    name: "dummy name",
    biography: "dummy biography",
    profile_path: "/dummyposter",
    combined_credits: { cast: [{}, {}, {}] },
    gender: 0,
    birthday: "2100-100-100",
    place_of_birth: "dummy place",
    known_for_department: "dummy department",
  };

  it("displays skeleton on loading", () => {
    useFetch.mockReturnValue([null, true]);
    useCreditsContext.mockReturnValue([, setCredits]);

    const { getByTestId } = renderComponent();

    expect(getByTestId(/actor-column-skeleton/i)).toBeTruthy();
    expect(getByTestId(/actor-content-skeleton/i)).toBeTruthy();
  });

  it("calls useFetch witch expected params", () => {
    useFetch.mockReturnValue([null, true]);
    useCreditsContext.mockReturnValue([, setCredits]);

    const {} = renderComponent();

    expect(useFetch).toHaveBeenCalled();
    expect(useFetch).toHaveBeenCalledWith({
      type: "person",
      target: "123",
      querries: true,
    });
  });

  it("renders full content after useFetch loading", () => {
    useFetch.mockReturnValue([mockedData, false]);
    useCreditsContext.mockReturnValue([, setCredits]);

    const { getByText, getByTestId } = renderComponent();

    expect(getByText(/dummy name/i)).toBeTruthy();
    expect(getByText(/overview/i)).toBeTruthy();
    expect(getByText(/dummy biography/i)).toBeTruthy();

    expect(getByText(/^3$/i)).toBeTruthy();
    expect(getByText(/male/i)).toBeTruthy();
    expect(getByText(/^2100$/i)).toBeTruthy();
    expect(getByText(/dummy place/i)).toBeTruthy();
    expect(getByText(/dummy department/i)).toBeTruthy();
    expect(getByTestId(/actor-poster/i)).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/dummyposter",
    );
  });

  it("calls setCredits after getting data", () => {
    useFetch.mockReturnValue([null, true]);
    useCreditsContext.mockReturnValue([, setCredits]);

    const {} = renderComponent();

    expect(setCredits).toHaveBeenCalled();
    expect(setCredits).toHaveBeenCalledTimes(1);
    expect(setCredits).toHaveBeenCalledWith({
      creditsLoading: false,
      array: [],
    });
  });
});

import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "./../../theme/theme";
import { PopularContainer } from "./../../containers";
import { useFetch } from "../../hooks";

function renderComponent(component) {
  return {
    ...render(<ThemeProvider theme={theme}>{component}</ThemeProvider>),
  };
}

jest.mock("./../../hooks", () => ({
  __esModule: true,
  useFetch: jest.fn(),
}));

jest.mock("./../../containers/tabs", () => () => <div>hui</div>);

describe("Popular container", () => {
  it("show skeletons while data is loading", () => {
    useFetch.mockReturnValue(["123", true]);
    const { getByRole } = renderComponent(
      <PopularContainer tabs={{ type: "actor" }} />,
    );
    expect(useFetch).toHaveBeenCalled();
    screen.debug();
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import { SliderContainer } from "../../containers";
import theme from "../../theme/theme";
import { range } from "../../utils";

function renderComponent() {
  return {
    ...render(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SliderContainer />
        </ThemeProvider>
      </BrowserRouter>,
    ),
  };
}

describe("Slider container", () => {
  it("corretly renders content", () => {
    const {
      getByText,
      getAllByRole,
      getByTestId,
      getAllByTestId,
    } = renderComponent();

    expect(getByText("Unce Upon Time in...")).toBeTruthy();
    expect(getByText("Commedy, Drama")).toBeTruthy();

    expect(getByText("Full Metal Jacket")).toBeTruthy();
    expect(getByText("Military, War")).toBeTruthy();

    expect(getByText("HOBBS AND SHOW")).toBeTruthy();
    expect(
      getByText(
        "It's up to Dwayne Johnson and Jason Statham to stop a cyber-enhanced super-soldier in this ninth film in the `Fast & Furious` series.",
      ),
    ).toBeTruthy();

    expect(getByText("Spider-Man 2")).toBeTruthy();
    expect(
      getByText(
        "Following the events of 'Avengers: Endgame,' Spider-Man must step up to take on new threats in a world that has changed forever.",
      ),
    ).toBeTruthy();

    expect(getByText("THE GENTLEMEN")).toBeTruthy();
    expect(getByText("Jumanji: The Next level")).toBeTruthy();

    const images = getAllByRole("img");
    expect(images).toHaveLength(15);

    range(1, 15).map((item) => {
      expect(images[item - 1]).toHaveAttribute(
        "src",
        `./assets/images/slider/${item}.jpg`,
      );
    });

    expect(getByTestId("slider-left-arrow")).toBeTruthy();
    expect(getByTestId("slider-right-arrow")).toBeTruthy();
    expect(getAllByTestId("slider-dot")).toHaveLength(3);
  });
});

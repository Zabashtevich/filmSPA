import { AccountContainer } from "../../../containers";
import renderWithRedux from "../../test-utils/renderWithRedux";

describe("Account container", () => {
  it("render correctly while loading", () => {
    const { getByTestId, queryByTestId, queryByAltText } = renderWithRedux(
      <AccountContainer />,
      {
        initialState: { profile: null, profileLoading: true },
      },
    );
    expect(getByTestId("account-container")).toBeTruthy();
    expect(queryByTestId("account-column")).toBeNull();
    expect(queryByAltText("profile image")).toBeNull();
  });
});

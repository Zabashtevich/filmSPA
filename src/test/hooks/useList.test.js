import { act, renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import { firebase } from "../../libs/firebase";
import userData from "./../../reducers/user-data";
import { useModalContext, useProcessContext } from "../../context";
import { useList } from "../../hooks";

jest.mock("./../../libs/firebase", () => ({
  firebase: { firestore: jest.fn() },
}));

jest.mock("./../../context", () => ({
  useProcessContext: jest.fn(),
  useModalContext: jest.fn(),
}));

function renderWrapper({
  initialState,
  store = createStore(combineReducers({ userData }), initialState),
}) {
  return ({ children }) => <Provider store={store}>{children}</Provider>;
}

describe("useList", () => {
  it("calls showErrorModal when user is not loggedIn", async () => {
    const showErrorModal = jest.fn();
    const setProcessProps = jest.fn();

    useProcessContext.mockReturnValue([{ processing: false }, setProcessProps]);
    useModalContext.mockReturnValue([, { showErrorModal }]);

    const Wrapper = renderWrapper({
      initialState: {
        userData: {
          loggedIn: false,
          profile: null,
        },
      },
    });

    const { result, waitForNextUpdate } = renderHook(
      () => useList("dummy nickname"),
      { wrapper: Wrapper },
    );

    const setList = result.current[0];

    await act(async () => {
      setList([{}]);
      await waitForNextUpdate();
    });

    expect(showErrorModal).toHaveBeenCalled();
    expect(showErrorModal).toHaveBeenCalledWith("Please, login");
  });

  it("calls firestore after user is loggedIn", async () => {
    firebase.firestore.mockReturnValue({
      collection: jest.fn().mockReturnValue({
        doc: () => ({ update: new Promise.resolve() }),
      }),
    });

    const showErrorModal = jest.fn();
    const setProcessProps = jest.fn();

    useProcessContext.mockReturnValue([{ processing: false }, setProcessProps]);
    useModalContext.mockReturnValue([, { showErrorModal }]);

    const Wrapper = renderWrapper({
      initialState: {
        userData: {
          loggedIn: true,
          profile: { displayName: "dummy nickname", photoURL: null },
        },
      },
    });

    const { result, waitForNextUpdate } = renderHook(
      () => useList("dummy nickname"),
      { wrapper: Wrapper },
    );

    const setList = result.current[0];

    await act(async () => {
      setList([{}]);
      await waitForNextUpdate();
    });

    expect(firebase.firestore().collection).toHaveBeenCalled();
    expect(firebase.firestore().collection).toHaveBeenCalledWith(
      "dummy nickname",
    );
    expect(setProcessProps).toHaveBeenCalled();
    expect(setProcessProps).toHaveBeenCalledWith({
      processing: true,
      message: "Processing...",
    });
  });
});

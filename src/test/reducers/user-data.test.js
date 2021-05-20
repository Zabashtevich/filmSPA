import userData from "../../reducers/user-data";
import {
  logout,
  profileNotExist,
  setUserData,
  setUserProfile,
} from "../../reducers/user-data/actions";

describe("userData reducer", () => {
  const initialState = {
    userDataLoading: true,
    userDataExist: false,
    loggedIn: false,
    profile: null,
    lists: { userlists: null, favorites: null, votes: null },
  };
  it("set user profile", () => {
    expect(
      userData(initialState, setUserProfile({ nickname: "dummy nickname" })),
    ).toEqual({
      ...initialState,
      profile: { nickname: "dummy nickname" },
      loggedIn: true,
    });
  });

  it("successfully change state after logout", () => {
    expect(
      userData(
        {
          userDataLoading: false,
          userDataExist: true,
          loggedIn: true,
          profile: {},
          lists: { userlists: [], favorites: [], votes: [] },
        },
        logout(),
      ),
    ).toEqual({
      ...initialState,
      userDataLoading: false,
    });
  });

  it("set userData", () => {
    expect(
      userData(
        initialState,
        setUserData({ userlists: [], favorites: [], votes: [] }),
      ),
    ).toEqual({
      ...initialState,
      userDataLoading: false,
      userDataExist: true,
      lists: { userlists: [], favorites: [], votes: [] },
    });
  });

  it("change userProfile fields when user profile empty", () => {
    expect(userData(initialState, profileNotExist())).toEqual({
      ...initialState,
      userDataLoading: false,
    });
  });
});

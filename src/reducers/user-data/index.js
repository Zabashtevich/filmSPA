import {
  SET_USER_PROFILE,
  LOGOUT,
  SET_USER_DATA,
  PROFILE_NOT_EXIST,
} from "./types";

const initialState = {
  userDataLoading: true,
  userDataExist: false,
  loggedIn: false,
  profile: null,
  lists: { userlists: null, favorites: null, votes: null },
};

export default function userData(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: payload,
        loggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        profile: null,
        userDataExist: false,
        lists: { userlists: null, favorites: null, votes: null },
      };
    case SET_USER_DATA:
      return {
        ...state,
        userDataLoading: false,
        userDataExist: true,
        lists: {
          userlists: payload.userlists,
          favorites: payload.favorites,
          votes: payload.votes,
        },
      };
    case PROFILE_NOT_EXIST:
      return {
        ...state,
        userDataExist: false,
        userDataLoading: false,
        loggedIn: false,
      };
    default:
      return state;
  }
}

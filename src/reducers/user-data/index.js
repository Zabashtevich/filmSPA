import {
  SET_USER_PROFILE,
  LOGOUT,
  SET_USER_DATA,
  PROFILE_NOT_EXIST,
} from "./types";

const initialState = {
  userDataLoading: true,
  userDataExist: false,
  profileExist: false,
  isReady: false,
  profile: null,
  lists: { userlists: null, favorites: null, votes: null },
};

export default function userData(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profileExist: true,
        profile: payload,
      };
    case LOGOUT:
      return {
        ...state,
        profileExist: false,
        userDataExist: false,
        profile: null,
        lists: { userlists: null, favorites: null, votes: null },
      };
    case SET_USER_DATA:
      return {
        ...state,
        userDataLoading: false,
        userDataExist: true,
        isReady: true,
        lists: {
          userlists: payload.userlists,
          favorites: payload.favorites,
          votes: payload.votes,
        },
      };
    case PROFILE_NOT_EXIST:
      return { ...state, profileExist: false, loading: false, isReady: false };
    default:
      return state;
  }
}

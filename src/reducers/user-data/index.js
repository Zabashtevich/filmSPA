import {
  SET_USER_PROFILE,
  LOGOUT,
  SET_USER_DATA,
  PROFILE_NOT_EXIST,
} from "./types";

const initialState = {
  loading: true,
  userDataExist: false,
  profileExist: false,
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
        loading: false,
        userDataExist: true,
        lists: {
          userlists: payload.userlists,
          favorites: payload.favorites,
          votes: payload.votes,
        },
      };
    case PROFILE_NOT_EXIST:
      return { ...state, profileExist: false };
    default:
      return state;
  }
}

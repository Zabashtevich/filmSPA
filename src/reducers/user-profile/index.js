import { SET_USER_PROFILE, USER_LOGOUT } from "./constants";

const initialState = { profileLoading: true, profile: null, exist: false };

export default function userProfile(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USER_PROFILE:
      return { profileLoading: false, exist: true, profile: payload };
    case USER_LOGOUT:
      return { ...state, profile: null, exist: false };
    default:
      return state;
  }
}

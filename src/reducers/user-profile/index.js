import { SET_USER_PROFILE, USER_LOGOUT } from "./constants";

const initialState = { profileLoading: true, profile: null };

export default function userProfileReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case SET_USER_PROFILE:
      return { profileLoading: false, profile: payload };
    case USER_LOGOUT:
      return { ...state, profile: null };
    default:
      return state;
  }
}

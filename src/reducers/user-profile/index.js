import { SET_USER_PROFILE, USER_LOGOUT } from "./constants";

const initialState = { loading: true, profileLoading: null };

const userProfileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_PROFILE:
      return { ...state, loading: false, profile: payload };
    case USER_LOGOUT:
      return { ...state, profile: null };
    default:
      return state;
  }
};

export default userProfileReducer;

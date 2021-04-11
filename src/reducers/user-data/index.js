import { SET_DATA, START_LOADING } from "./constants";

const initialState = {
  userDataLoading: true,
  favorites: null,
  votes: null,
};

export default function userData(state = initialState, { type, payload }) {
  switch (type) {
    case START_LOADING:
      return { ...state, userDataLoading: true };
    case SET_DATA:
      return { ...state, userDataLoading: false, ...payload };
    default:
      return state;
  }
}

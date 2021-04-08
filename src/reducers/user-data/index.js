import { SET_USERDATA } from "./constants";

const initialState = {
  userDataLoading: true,
  userlists: null,
  favorites: null,
  votes: null,
};

export default function userData(state = initialState, { type, payload }) {
  switch (type) {
    case SET_USERDATA:
      return { ...state, ...payload, userDataLoading: false };
    default:
      return state;
  }
}

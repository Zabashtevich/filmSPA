import {
  FETCH_USERDATA_START,
  FETCH_USERDATA_SUCCESS,
  SET_USERDATA,
} from "./constants";

const initialState = {
  userDataLoading: true,
  userlists: null,
  favoritedMovies: null,
  ratedMovies: null,
};

export default function userData(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_USERDATA_START:
      return { ...state, userDataLoading: true };
    case FETCH_USERDATA_SUCCESS:
      return { ...state, userDataLoading: false };
    case SET_USERDATA:
      return { ...state, ...payload, userDataLoading: false };
    default:
      return state;
  }
}

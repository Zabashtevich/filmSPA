import {
  FETCH_LOADING_START,
  FETCH_FINISHED_SUCCESS,
  SET_USER_DATA,
} from "./constants";

const initialState = {
  loading: true,
  userlists: null,
  favoritedMovies: null,
  ratedMovies: null,
};

const userData = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LOADING_START:
      return { ...state, loading: true };
    case FETCH_FINISHED_SUCCESS:
      return { ...state, loading: false };
    case SET_USER_DATA:
      return { ...state, ...payload, loading: false };
    default:
      return state;
  }
};

export default userData;

import {
  FETCH_USERDATA_START,
  FETCH_USERDATA_SUCCESS,
  SET_USERDATA,
} from "./constants";

const initialState = {
  loading: true,
  userlists: null,
  favoritedMovies: null,
  ratedMovies: null,
};

const userDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERDATA_START:
      return { ...state, loading: true };
    case FETCH_USERDATA_SUCCESS:
      return { ...state, loading: false };
    case SET_USERDATA:
      return { ...state, ...payload, loading: false };
    default:
      return state;
  }
};

export default userDataReducer;

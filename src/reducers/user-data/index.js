import {
  FETCH_LOADING_START,
  FETCH_FINISHED_SUCCESS,
  SET_USER_LISTS,
  SET_FAVORITED_MOVIES,
  SET_RATED_MOVIES,
} from "./constants";

const initialState = {
  loading: true,
  userLists: null,
  favoritedMovies: null,
  ratedMovies: null,
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING_START:
      return { ...state, loading: true };
    case FETCH_FINISHED_SUCCESS:
      return { ...state, loading: false };
    case SET_USER_LISTS:
      return { ...state, userLists: action.payload, loading: false };
    case SET_FAVORITED_MOVIES:
      return { ...state, favoritedMovies: action.payload, loading: false };
    case SET_RATED_MOVIES:
      return { ...state, ratedMovies: action.payload, loading: false };
    default:
      return state;
  }
};

export default userData;

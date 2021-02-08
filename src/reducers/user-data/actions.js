import {
  FETCH_FINISHED_SUCCESS,
  FETCH_LOADING_START,
  SET_FAVORITED_MOVIES,
  SET_RATED_MOVIES,
  SET_USER_LISTS,
} from "./constants";

export const fetchLoadingStart = () => ({ type: FETCH_LOADING_START });

export const fetchLoadingFinished = () => ({ type: FETCH_FINISHED_SUCCESS });

export const setUserLists = (lists) => ({
  type: SET_USER_LISTS,
  payload: lists,
});

export const setFavoritedMovies = (movies) => ({
  type: SET_FAVORITED_MOVIES,
  payload: movies,
});

export const setRatedMovies = (movies) => ({
  type: SET_RATED_MOVIES,
  payload: movies,
});

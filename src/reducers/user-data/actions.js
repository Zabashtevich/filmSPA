import {
  SET_USERLISTS,
  SET_FAVORITES,
  SET_VOTES,
  FINISH_LOADING,
} from "./constants";

export function setUserlists(userlists) {
  return { type: SET_USERLISTS, payload: userlists };
}

export function setFavorites(favorites) {
  return { type: SET_FAVORITES, payload: favorites };
}

export function setVotes(votes) {
  return { type: SET_VOTES, payload: votes };
}

export function finishLoading() {
  return { type: FINISH_LOADING };
}

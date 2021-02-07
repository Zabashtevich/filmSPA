import { DATA_FETCHED_SUCCESS } from "./constants";

export const dataIsFetched = (ratedMovies, userLists, favoriteMovies) => {
  return {
    type: DATA_FETCHED_SUCCESS,
  };
};

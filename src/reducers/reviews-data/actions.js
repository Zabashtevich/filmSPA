import { SET_REVIEWS } from "./constants";

export const setReviews = (reviews) => ({
  type: SET_REVIEWS,
  payload: reviews,
});

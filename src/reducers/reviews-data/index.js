import {
  FETCH_REVIEWS_START,
  FETCH_REVIEWS_SUCCESS,
  SET_REVIEWS,
} from "./constants";

const initialState = { reviewsLoading: true, reviews: null };

export default function reviewsData(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_REVIEWS_START:
      return { ...state, reviewsLoading: true };
    case FETCH_REVIEWS_SUCCESS:
      return { ...state, reviewsLoading: false };
    case SET_REVIEWS:
      return { ...state, reviews: payload, reviewsLoading: false };
    default:
      return state;
  }
}

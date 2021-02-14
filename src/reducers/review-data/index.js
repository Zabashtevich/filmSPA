import {
  FETCH_REVIEWS_START,
  FETCH_REVIEWS_SUCCESS,
  SET_REVIEWS,
} from "./constants";

const initialState = { loading: true, reviews: null };

const userReviewsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REVIEWS_START:
      return { ...state, loading: true };
    case FETCH_REVIEWS_SUCCESS:
      return { ...state, loading: false };
    case SET_REVIEWS:
      return { ...state, reviews: payload, loading: false };
    default:
      return state;
  }
};

export default userReviewsReducer;

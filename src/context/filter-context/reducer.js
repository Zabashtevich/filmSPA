import { SET_FILTER_PARAMS, RESET_FILTER_PARAMS } from "./constants";

export const initialState = {
  sortBy: null,
  listType: null,
  listID: null,
  byRating: null,
  rangeStart: null,
  rangeEnd: null,
  amount: null,
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER_PARAMS:
      return { ...state, ...action.payload };
    case RESET_FILTER_PARAMS:
      return { ...state, ...initialState };
    default:
      return state;
  }
}

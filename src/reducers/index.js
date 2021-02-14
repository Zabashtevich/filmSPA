import { combineReducers } from "redux";
import userDataReducer from "./user-data";
import userReviewsReducer from "./review-data";

export const rootReducer = combineReducers({
  userData: userDataReducer,
  reviewData: userReviewsReducer,
});

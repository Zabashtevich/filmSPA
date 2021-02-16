import { combineReducers } from "redux";
import userDataReducer from "./user-data";
import userReviewsReducer from "./review-data";
import userProfileReducer from "./user-profile";

export const rootReducer = combineReducers({
  userData: userDataReducer,
  reviewData: userReviewsReducer,
  userProfile: userProfileReducer,
});

import { combineReducers } from "redux";
import userDataReducer from "./user-data";
import userReviewsReducer from "./reviews-data";
import userProfileReducer from "./user-profile";

export const rootReducer = combineReducers({
  userData: userDataReducer,
  reviewsData: userReviewsReducer,
  userProfile: userProfileReducer,
});

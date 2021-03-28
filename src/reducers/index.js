import { combineReducers } from "redux";
import userData from "./user-data";
import reviewsData from "./reviews-data";
import userProfile from "./user-profile";

export const rootReducer = combineReducers({
  userData,
  reviewsData,
  userProfile,
});

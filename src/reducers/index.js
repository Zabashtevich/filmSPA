import { combineReducers } from "redux";
import userData from "./user-data";
import userProfile from "./user-profile";

export const rootReducer = combineReducers({
  userData,
  userProfile,
});

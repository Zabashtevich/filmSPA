import { combineReducers } from "redux";
import { filter, userData } from "./account-page";

export const rootReducer = combineReducers({ filter, userData });

import { createContext } from "react";

export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const REMOVE_MOVIE_FROM_LIST = "REMOVE_MOVIE_FROM_LIST";
export const RATE_MOVIE = "RATE_MOVIE";
export const UNRATE_MOVIE = "UNRATE_MOVIE";
export const REMOVE_USERLIST = "REMOVE_USERLIST";
export const CREATE_USERLIST = "CREATE_USERLIST";
export const SHOW_ERROR_MODAL = "SHOW_ERROR_MODAL";
export const HIDE_ERROR_MODAL = "HIDE_ERROR_MODAL";
export const SHOW_WARNING_MODAL = "SHOW_WARNING_MODAL";
export const HIDE_WARNING_MODAL = "HIDE_WARNING_MODAL";
export const SHOW_REMOVE_MODAL = "SHOW_REMOVE_MODAL";
export const HIDE_REMOVE_MODAL = "HIDE_REMOVE_MODAL";
export const ACCEPT_MODAL = "ACCEPT_MODAL";

export const AccountMetalogicContext = createContext(null);

export const initialState = {
  id: null,
  type: null,
  value: null,
  title: null,
  subtype: null,
  message: null,
  visible: false,
  accepted: false,
  processing: false,
};

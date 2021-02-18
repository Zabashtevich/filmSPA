import { createContext } from "react";

export const SHOW_ERROR_MODAL = "SHOW_ERROR_MODAL";
export const SHOW_CONFIRM_MODAL = "SHOW_CONFIRM_MODAL";
export const SHOW_UTILITY_MODAL = "SHOW_UTILITY_MODAL";
export const SHOW_PROCESSING_WINDOW = "SHOW_PROCESSING_WINDOW";
export const CLOSE_PROCESSING_WINDOW = "CLOSE_PROCESSING_WINDOW";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const ACCEPT_CONFIRM_MODAL = "ACCEPT_MODAL";
export const ACCEPT_UTILITY_MODAL = "ACCEPT_UTILITY_MODAL";

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

import { useReducer } from "react";

import {
  initialState,
  AccountMetalogicContext,
  SHOW_ERROR_MODAL,
  HIDE_ERROR_MODAL,
  SHOW_WARNING_MODAL,
  HIDE_WARNING_MODAL,
  SHOW_REMOVE_MODAL,
  HIDE_REMOVE_MODAL,
  ACCEPT_MODAL,
} from "./constants";
import accountReducer from "./reducer";

export default function AccountMetalogicContextProvider({ children }) {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  const showErrorModal = (message) => {
    dispatch({ type: SHOW_ERROR_MODAL, payload: message });
  };

  const hideErrorModal = () => {
    dispatch({ type: HIDE_ERROR_MODAL });
  };

  const showWarningModal = (message) => {
    dispatch({
      type: SHOW_WARNING_MODAL,
      payload: message,
    });
  };

  const hideWarningModal = () => {
    dispatch({ type: HIDE_WARNING_MODAL });
  };

  const showRemoveModal = (payload) => {
    dispatch({
      type: SHOW_REMOVE_MODAL,
      payload,
    });
  };

  const hideRemoveModal = () => {
    dispatch({ type: HIDE_REMOVE_MODAL });
  };

  const acceptModal = (subtype) => {
    dispatch({
      type: ACCEPT_MODAL,
      payload: subtype,
    });
  };

  return (
    <AccountMetalogicContext.Provider
      value={[
        state,
        {
          showErrorModal,
          hideErrorModal,
          showWarningModal,
          hideWarningModal,
          showRemoveModal,
          hideRemoveModal,
          acceptModal,
        },
      ]}
    >
      {children}
    </AccountMetalogicContext.Provider>
  );
}

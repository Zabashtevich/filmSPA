import { createContext, useReducer } from "react";
import {
  ADD_FAVORITE,
  ADD_USERLIST,
  CLOSE_MODAL,
  CONFIRM_MODAL,
  SHOW_CONFIRM_MODAL,
  SHOW_ERROR_MODAL,
  SHOW_UTILITY_MODAL,
} from "./types";
import modalReducer, { initialState } from "./reducer";

export const ModalContext = createContext(null);

export default function ModalContextProvider({ children }) {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  function showErrorModal(payload) {
    dispatch({ type: SHOW_ERROR_MODAL, payload });
  }

  function showConfirmModal(payload) {
    dispatch({ type: SHOW_CONFIRM_MODAL, payload });
  }

  function showUtilityModal(payload) {
    dispatch({ type: SHOW_UTILITY_MODAL, payload });
  }

  function closeModal() {
    dispatch({ type: CLOSE_MODAL });
  }

  function addFavorite(payload) {
    dispatch({ type: ADD_FAVORITE, payload });
  }

  function addUserlist(payload) {
    dispatch({ type: ADD_USERLIST, payload });
  }

  function confirmModal(payload = null) {
    dispatch({ type: CONFIRM_MODAL, payload });
  }

  return (
    <ModalContext.Provider
      value={[
        { ...state },
        {
          showErrorModal,
          showConfirmModal,
          showUtilityModal,
          addFavorite,
          addUserlist,
          closeModal,
          confirmModal,
        },
      ]}
    >
      {children}
    </ModalContext.Provider>
  );
}

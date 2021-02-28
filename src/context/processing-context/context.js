import { createContext, useReducer } from "react";
import {
  ADD_FAVORITE_ITEM,
  DELETE_FAVORITE_ITEM,
  ADD_USERLIST,
  DELETE_USERLIST,
} from "./types";
import processReducer, { initialState } from "./reducer";

export const ProcessContext = createContext(null);

export default function ProcessContextProvider({ children }) {
  const [state, dispatch] = useReducer(processReducer, initialState);

  function addFavoriteItem(payload) {
    dispatch({ type: ADD_FAVORITE_ITEM, payload });
  }

  function deleteFavoriteItem(payload) {
    dispatch({ type: DELETE_FAVORITE_ITEM, payload });
  }

  function addUserlist(payload) {
    dispatch({ type: ADD_USERLIST, payload });
  }

  function deleteUserlist(payload) {
    dispatch({ type: DELETE_USERLIST, payload });
  }

  return (
    <ProcessContext.Provider
      value={[
        { ...state },
        { addFavoriteItem, deleteFavoriteItem, addUserlist, deleteUserlist },
      ]}
    >
      {children}
    </ProcessContext.Provider>
  );
}

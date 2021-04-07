import React, { createContext } from "react";
import { firebase } from "./../../libs/firebase";

export const FirebaseContext = createContext(null);

export default function FirebaseContextProvider({ children }) {
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
}

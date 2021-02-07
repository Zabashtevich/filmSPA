import { useContext } from "react";
import { AuthContext } from "./context";

import { firebase } from "../../libs/firebase";

export function AuthContextProvider({ children }) {
  return (
    <AuthContext.Provider value={{ firebase }}>{children}</AuthContext.Provider>
  );
}

export default function useAuthContext() {
  const { firebase } = useContext(AuthContext);
  return firebase;
}

import { createContext } from "react";
import { firebase } from "../../libs/firebase";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  return (
    <AuthContext.Provider value={{ firebase }}>{children}</AuthContext.Provider>
  );
}

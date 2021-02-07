import { useContext } from "react";
import { AuthContext } from "./context";

export default function useAuthContext() {
  const { firebase } = useContext(AuthContext);
  return firebase;
}

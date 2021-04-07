import { useContext } from "react";
import { FirebaseContext } from "./context";

export default function useFirebaseContext() {
  return useContext(FirebaseContext);
}

import { useContext } from "react";
import { UserlistContext } from "./context";

export default function useUserlistContext() {
  const [state, setState] = useContext(UserlistContext);
  return [state, setState];
}

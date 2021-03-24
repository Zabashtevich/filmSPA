import { useContext } from "react";
import { PaginContext } from "./context";

export default function usePaginContext() {
  const [state, setState] = useContext(PaginContext);
  return [state, setState];
}

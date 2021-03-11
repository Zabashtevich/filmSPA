import { useContext } from "react";
import { PaginationContext } from "./context";

export default function usePaginationContext() {
  const [state, setState] = useContext(PaginationContext);
  return [state, setState];
}

import { useContext } from "react";
import { FilterContext } from "./context";

export default function useFilterContext() {
  const [filterState, filterDispatch] = useContext(FilterContext);
  return [filterState, filterDispatch];
}

import { createContext, useReducer } from "react";
import filterReducer, { initialState } from "./reducer";

export const FilterContext = createContext(null);

export default function FilterContextProvider({ children }) {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState,
  );

  return (
    <FilterContext.Provider value={[filterState, filterDispatch]}>
      {children}
    </FilterContext.Provider>
  );
}

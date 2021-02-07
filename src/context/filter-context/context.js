import { createContext, useReducer } from "react";

export const FilterContext = createContext(null);

function filterReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default function FilterContextProvider({ children }) {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sortBy: null,
    listType: null,
    listID: null,
    show: null,
    firstDate: null,
    secondaDate: null,
    amount: null,
  });

  return (
    <FilterContext.Provider value={[filterState, filterDispatch]}>
      {children}
    </FilterContext.Provider>
  );
}

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
    processed: false,
    sortBy: null,
    listType: null,
    listID: null,
    byRating: null,
    rangeStart: null,
    rangeEnd: null,
    amount: null,
  });

  return (
    <FilterContext.Provider value={[filterState, filterDispatch]}>
      {children}
    </FilterContext.Provider>
  );
}

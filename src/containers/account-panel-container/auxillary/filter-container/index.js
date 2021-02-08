import React from "react";

import { Filter } from "../../../../components";
import FilterRowsContainer from "./items/filter-rows-container";
import { useFilterContext } from "../../../../context";
import {
  setFilterParams,
  resetFilterParams,
} from "../../../../context/filter-context/actions";

export default function FilterContainer() {
  const lists = [];

  const [state, dispatch] = useFilterContext();

  const updateFilterState = (params) => {
    if (!!params) {
      dispatch(setFilterParams(params));
    } else {
      dispatch(resetFilterParams());
    }
  };

  return (
    <Filter>
      <FilterRowsContainer
        state={state}
        lists={lists}
        updateFilterState={updateFilterState}
      />
    </Filter>
  );
}
